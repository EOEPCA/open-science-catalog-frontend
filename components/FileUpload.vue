<template>
  <div class="pa-4 grey lighten-4 rounded-xl mb-4">
    <v-file-input
      clearable
      dense
      :error-messages="error"
      :hide-details="!error"
      show-size
      outlined
      :label="!currentFile ? 'Select file for upload' : 'Selected File'"
      @change="selectFile"
      @click:clear="error = null"
    >
      <template #append-outer>
        <v-btn
          v-if="currentFile"
          block
          color="success"
          dark
          style="transform: translateY(-6px)"
          @click="upload"
        >
          Upload
          <v-icon right dark> mdi-cloud-upload </v-icon>
        </v-btn>
      </template>
    </v-file-input>

    <div v-if="progress > 0" class="pb-4 pl-8">
      <v-progress-linear
        v-model="progress"
        color="primary lighten-4"
        dark
        height="25"
        reactive
        rounded
      >
        <strong>{{ progress }} %</strong>
      </v-progress-linear>
    </div>

    <v-text-field
      v-model="currentPath"
      label="Upload Path (optional)"
      outlined
      prefix="/"
      placeholder="path/to/folder/"
      hide-details
      class="my-2"
      dense
    />

    <v-alert v-if="message" border="left" color="info" dark icon="mdi-info">
      {{ message }}
    </v-alert>
  </div>
</template>

<script>
export default {
  name: "UploadFiles",
  data() {
    return {
      currentFile: undefined,
      currentPath: undefined,
      progress: 0,
      message: null,
      error: null,
    };
  },
  methods: {
    selectFile(file) {
      this.progress = 0;
      this.currentFile = file;
    },
    async upload() {
      if (!this.currentFile) {
        this.message = "Please select a file!";
        return;
      }
      this.message = "";

      try {
        this.error = null;

        const onUploadProgress = (event) => {
          this.progress = Math.round((100 * event.loaded) / event.total);
        };

        const formData = new FormData();
        formData.append("upload_file", this.currentFile);
        const response = await this.$metadataBackend.post(
          `/upload/${this.currentPath}${this.currentFile.name}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            onUploadProgress,
          }
        );
        if (response) {
          this.message = "Success!";
          this.$emit("upload", response.data);
        }
      } catch (error) {
        this.progress = 0;
        this.error = `Could not upload the file! ${error.message}`;
        this.currentFile = undefined;
      }
    },
  },
};
</script>
