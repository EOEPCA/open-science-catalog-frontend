<template>
  <div
    class="pa-4 grey lighten-4 rounded-xl mb-4"
  >
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
          <v-icon right dark>
            mdi-cloud-upload
          </v-icon>
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

    <v-alert v-if="message" border="left" color="primary" dark>
      {{ message }}
    </v-alert>

    <v-card v-if="fileInfos.length > 0" class="mx-auto">
      <v-list>
        <v-subheader>List of Files</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item v-for="(file, index) in fileInfos" :key="index">
            <a :href="file.url">{{ file.name }}</a>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'UploadFiles',
  data () {
    return {
      currentFile: undefined,
      currentPath: undefined,
      progress: 0,
      message: null,
      error: null,
      fileInfos: []
    }
  },
  methods: {
    selectFile (file) {
      this.progress = 0
      this.currentFile = file
    },
    upload () {
      if (!this.currentFile) {
        this.message = 'Please select a file!'
        return
      }
      this.message = ''

      const upload = (file, onUploadProgress) => {
        this.error = null
        const formData = new FormData()

        formData.append('upload_file', file)

        return this.$metadataBackend.post(`/upload/${this.currentPath}${this.currentFile.name}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress
        })
      }
      upload(this.currentFile, (event) => {
        this.progress = Math.round((100 * event.loaded) / event.total)
      })
        .then((response) => {
          this.message = response.data.message
          // return UploadService.getFiles();
        })
        .then((files) => {
          this.fileInfos = files.data
        })
        .catch((error) => {
          this.progress = 0
          this.error = `Could not upload the file! ${error.message}`
          this.currentFile = undefined
        })
    }
  }
  // mounted() {
  //   UploadService.getFiles().then((response) => {
  //     this.fileInfos = response.data;
  //   });
  // },
}
</script>
