export const state = () => ({
  processingEndpoints: [
    {
      id: "eoepca-staging-spaceapplications",
      title: "Space Application Services",
      auth: {
        url: "https://auth.eoepca-staging.spaceapplications.com/realms/master/protocol/openid-connect/token",
        params: {
          scope: "openid user_name",
          grant_type: "password",
          username: "<user>",
          password: "<pass>",
          client_id: "<client>",
        },
      },
      root: "https://eoepca-staging.spaceapplications.com/ades",
    },
    {
      id: "terradue",
      title: "Terradue",
    },
  ],
});
