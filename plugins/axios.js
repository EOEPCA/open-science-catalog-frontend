export default function (
  {
    app,
    $axios,
    $config: {
      staticEndpoint,
      staticBaseToReplace,
      dynamicEndpoint,
      backendEndpoint,
    },
  },
  inject
) {
  const staticCatalog = $axios.create();
  staticCatalog.setBaseURL(staticEndpoint);
  staticCatalog.baseToReplace = staticBaseToReplace;
  // Add ".json" to all requests going to the static catalog
  staticCatalog.onRequest((config) => {
    const newUrl = `${config.url}.json`;
    return {
      ...config,
      url: newUrl,
    };
  });
  inject("staticCatalog", staticCatalog);

  const dynamicCatalog = $axios.create();
  dynamicCatalog.setBaseURL(dynamicEndpoint);
  // Add "f=json" query param to all requests going to the dynamic catalog
  dynamicCatalog.onRequest((config) => {
    const newUrl = `${config.url}&f=json`;
    return {
      ...config,
      url: newUrl,
    };
  });
  inject("dynamicCatalog", dynamicCatalog);

  const metadataBackend = $axios.create();
  metadataBackend.setBaseURL(backendEndpoint);
  // TEMP until this comes from the backend protection layer
  metadataBackend.onRequest(() => {
    if (app.$auth?.loggedIn) {
      metadataBackend.setHeader("X-User", app.$auth.user.email);
      metadataBackend.setHeader(
        "X-OSCDataOwner",
        `${!!app.$auth.user.OSCDataOwner}`
      );
    }
  });
  inject("metadataBackend", metadataBackend);

  const processingBackend = $axios.create();
  processingBackend.setBaseURL(
    `${backendEndpoint}/processing/eoepca-staging-spaceapplications`
  );
  // TEMP until this comes from the auth layer
  // TODO remove hardcoded auth info!
  processingBackend.onRequest(async (config) => {
    if (!app.$auth?.loggedIn) {
      return;
    }
    try {
      const params = new URLSearchParams();
      params.append("scope", "openid user_name");
      params.append("grant_type", "password");
      params.append("username", "<user>");
      params.append("password", "<pass>");
      params.append("client_id", "asb-staging-client");
      const auth = await $axios.post(
        "https://auth.eoepca-staging.spaceapplications.com/realms/master/protocol/openid-connect/token",
        params,
        {
          headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      processingBackend.setHeader("Accept", "application/json");
      processingBackend.setHeader("Content-Type", "application/json");
      processingBackend.setHeader("X-User-Id", auth.data.id_token);
      processingBackend.setHeader(
        "Authorization",
        `Bearer ${auth.data.id_token}`
      );
      processingBackend.setHeader("Prefer", `respond-async`);
    } catch (error) {
      console.error(error);
    }
    return config;
  });
  inject("processingBackend", processingBackend);
}
