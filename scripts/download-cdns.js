const fs = require("fs");
const path = require("path");
const https = require("https");

const assets = [
  {
    url: "https://cdn.jsdelivr.net/npm/@eox/itemfilter@1.17.3/dist/eox-itemfilter.js",
    dest: "static/eox/eox-itemfilter.js",
  },
  {
    url: "https://cdn.jsdelivr.net/npm/@eox/map@2.6.1/dist/eox-map.js",
    dest: "static/eox/eox-map.js",
  },
  {
    url: "https://cdn.jsdelivr.net/npm/@eox/map@2.6.1/dist/eox-map-advanced-layers-and-sources.js",
    dest: "static/eox/eox-map-advanced-layers-and-sources.js",
  },
  {
    url: "https://cdn.jsdelivr.net/npm/@eox/timecontrol@2.5.0/dist/eox-timecontrol.js",
    dest: "static/eox/eox-timecontrol.js",
  },
  {
    url: "https://cdn.jsdelivr.net/npm/@eox/chart@1.2.0/dist/eox-chart.js",
    dest: "static/eox/eox-chart.js",
  },
];

function download(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);

    function get(requestUrl) {
      https
        .get(requestUrl, (response) => {
          if (
            response.statusCode >= 300 &&
            response.statusCode < 400 &&
            response.headers.location
          ) {
            get(response.headers.location);
            return;
          }
          if (response.statusCode !== 200) {
            reject(
              new Error(
                `Failed to download ${url}: HTTP ${response.statusCode}`
              )
            );
            return;
          }
          response.pipe(file);
          file.on("finish", () => {
            file.close();
            resolve();
          });
        })
        .on("error", (err) => {
          fs.unlink(destPath, () => {});
          reject(err);
        });
    }

    get(url);
  });
}

async function run() {
  const dir = path.join(__dirname, "../static/eox");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const force = process.argv.includes("--force");

  console.log("Checking external CDN assets for local cache...");
  for (const asset of assets) {
    const fullDest = path.join(__dirname, "..", asset.dest);
    if (fs.existsSync(fullDest) && !force) {
      console.log(`Asset ${asset.dest} already cached. Skipping download.`);
      continue;
    }

    console.log(`Downloading ${asset.url} to ${asset.dest}...`);
    try {
      await download(asset.url, fullDest);
      console.log(`Successfully downloaded ${asset.dest}`);
    } catch (err) {
      console.error(`Error downloading ${asset.url}:`, err);
      process.exit(1);
    }
  }
  console.log("All external CDN assets ready!");
}

run();
