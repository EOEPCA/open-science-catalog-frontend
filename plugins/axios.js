const MockAdapter = require("axios-mock-adapter");

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

  // TEMP: mock API until we have a real processing backend
  const mockAxios = new MockAdapter(processingBackend);
  mockAxios.onGet("/processes").reply(200, [
    {
      id: "python-sleeper",
      doc: "Run a Python sleeper for between min and max seconds randomly",
      name: "Python Sleeper",
      version: "0_0_2",
      parameters: [
        {
          id: "min_sleep_seconds",
          type: "string",
          doc: "Min sleeping seconds",
          label: "Min sleeping seconds",
        },
        {
          id: "max_sleep_seconds",
          type: "string",
          doc: "Max sleeping seconds",
          label: "Max sleeping seconds",
        },
        {
          id: "ignored_product",
          type: "Directory",
          doc: "Ignored product",
          label: "Product",
        },
      ],
    },
    {
      id: "test",
      name: "Test Process",
      doc: "A test process to showcase selection in the GUI",
      version: "0_0_1",
      parameters: [
        {
          id: "test_param",
          type: "number",
          doc: "A number parameter",
          label: "A number parameter",
        },
        {
          id: "test_param2",
          type: "string",
          doc: "A string parameter",
          label: "A string parameter",
        },
        {
          id: "test_param3",
          type: "string",
          doc: "Another string parameter",
          label: "Another string parameter",
        },
      ],
    },
  ]);
  mockAxios.onGet("/jobs").reply(200, [
    {
      jobID: "1343-6398-4365",
      status: "running",
      start_datetime: "2023-01-17T09:32:01Z",
      end_datetime: null,
      process_id: "python-sleeper",
      product_id: "chaos-field-model-spline-4d-earth-swarm",
      result: "#",
      logs: "#",
      message: "Test message",
    },
    {
      jobID: "2744-7214-7973",
      status: "successful",
      start_datetime: "2023-01-16T13:55:20Z",
      end_datetime: "2023-01-16T13:58:22Z",
      process_id: "python-sleeper",
      product_id: "aerosol-dust-od-averaged-livas",
      result: "#",
      logs: "#",
      message: "Test message",
    },
    {
      jobID: "1843-9735-1298",
      status: "failed",
      start_datetime: "2023-01-16T16:02:44Z",
      end_datetime: "2023-01-16T16:02:58Z",
      process_id: "test",
      product_id: "sea-ice-snow-depth-lpf-cassis",
      result: "#",
      logs: "#",
      message: "Test message",
    },
  ]);

  inject("processingBackend", processingBackend);
}
