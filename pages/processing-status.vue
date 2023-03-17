<template>
  <v-container :class="$vuetify.breakpoint.lgAndUp ? 'px-15 pt-8' : 'pa-4'">
    <h2 class="text-h2 mt-3 mb-5">Processing status</h2>
    <v-row class="d-flex justify-center">
      <v-col cols="12">
        <v-data-table
          v-if="jobs"
          :headers="headers"
          :items="jobs"
          dense
          :items-per-page="20"
        >
          <template #[`item.jobID`]="{ item }">
            <code>{{ item.jobID }}</code>
          </template>
          <template #[`item.status`]="{ item }">
            <v-tooltip right>
              <template #activator="{ on, attrs }">
                <v-chip
                  :color="getStatusStyle(item.status).color"
                  small
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon small left>
                    {{ getStatusStyle(item.status).icon }}
                  </v-icon>
                  {{ item.status
                  }}<span v-if="item.progress" class="ml-1"
                    >({{ item.progress }}%)</span
                  >
                </v-chip>
              </template>
              <small>{{ item.message }}</small>
            </v-tooltip>
          </template>
          <template #[`item.statusLink`]="{ item }">
            <v-btn
              v-if="item.statusLink"
              color="primary"
              plain
              small
              :href="`https://eoepca-staging.spaceapplications.com/ades${item.statusLink}`"
              target="_blank"
              class="px-0"
            >
              <v-icon small left> mdi-cloud-print-outline </v-icon>
              logs
              <!-- <v-icon
                    small
                    right
                  >
                    mdi-open-in-new
                  </v-icon> -->
            </v-btn>
          </template>
          <template #[`item.resultLink`]="{ item }">
            <v-btn
              v-if="item.resultLink"
              color="primary"
              text
              small
              target="_blank"
              class="px-0"
              @click="
                fetchItem(
                  `https://eoepca-staging.spaceapplications.com/ades${item.resultLink}`
                )
              "
            >
              <v-icon small left> mdi-cloud-download-outline </v-icon>
              result
              <!-- <v-icon
                    small
                    right
                  >
                    mdi-open-in-new
                  </v-icon> -->
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    jobs: null,
    headers: [
      {
        text: "Job ID",
        value: "jobID",
      },
      {
        text: "Status",
        value: "status",
      },
      {
        text: "Process",
        value: "process_id",
      },
      {
        text: "Product",
        value: "product_id",
      },
      {
        text: "Start",
        value: "start_datetime",
      },
      {
        text: "End",
        value: "end_datetime",
      },
      {
        text: "Status location",
        value: "statusLink",
      },
      {
        text: "Result location",
        value: "resultLink",
      },
    ],
  }),
  async created() {
    try {
      const response = await this.$processingBackend.$get("/jobs");
      this.jobs = response.jobs
        .map((job) => ({
          ...job,
          statusLink: job.links.find((l) => l.rel === "status")?.href,
          resultLink: job.links.find((l) => l.rel.includes("/results"))?.href,
        }))
        .reverse();
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    getStatusStyle(type) {
      const styling = {
        color: "",
        icon: "",
      };
      switch (type) {
        case "running":
          styling.color = "warning";
          styling.icon = "mdi-progress-clock";
          break;
        case "successful":
          styling.color = "success";
          styling.icon = "mdi-progress-check";
          break;
        case "failed":
          styling.color = "error";
          styling.icon = "mdi-progress-close";
      }
      return styling;
    },
    async fetchItem(url) {
      const params = new URLSearchParams();
      params.append("scope", "openid user_name is_operator");
      params.append("grant_type", "password");
      params.append("username", "osc");
      params.append("password", "OSCClientPassword!");
      params.append("client_id", "eba82eb7-5cb0-4f5e-99ab-3830eef383e2");
      const auth = await this.$axios.post(
        "https://auth.eoepca-staging.spaceapplications.com/oxauth/restv1/token",
        params,
        {
          headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      const result = await this.$axios.$get(url, {
        headers: {
          Accept: "application/json",
          "X-User-Id": auth.data.id_token,
          "Content-Type": "application/json",
          Prefer: "respond-async",
        },
      });

      console.log(result);
      window.open(result.StacCatalogUri, "_blank").focus();
    },
  },
};
</script>
