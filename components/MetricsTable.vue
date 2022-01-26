<template>
  <div class="tableWrap">
    <table role="table" class="tableWrap">
      <thead class="header">
        <tr role="row">
          <th class="expandCell">
            <v-icon>mdi-chevron-down</v-icon>
          </th>
          <th class="nameCell">
            <v-icon>mdi-chart-bar</v-icon>
          </th>
          <th
            v-for="header in headers"
            :key="header"
          >
            {{ header }}
          </th>
          <td class="coverageCell">
            Coverage
          </td>
        </tr>
      </thead>
      <tbody role="rowgroup" class="body">
        <tr v-for="item in items" :key="item.id">
          <td class="expandCell">
            <v-icon>mdi-chevron-down</v-icon>
          </td>
          <td class="nameCell">
            {{ item.name }}
          </td>
          <td v-for="year in headers" :key="`${item.id}-${year}`">
            <v-progress-linear
              v-if="item.years.includes(year)"
              color="primary"
              height="25"
              buffer-value="100"
            />
          </td>
          <td class="coverageCell">
            <v-icon>mdi-earth</v-icon>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'MetricsTable',
  props: {
    headers: [],
    items: []
  }
}
</script>

<style>
.tableWrap {
  display: block;
  width: 100%;
  overflow-x: auto;
  overflow-y: auto;
  max-height: calc(100vh - 180px);
  font-size: 14px;
  font-weight: 700;
  background: white;
}

.tableWrap table {
  border-spacing: 0 1px;
  text-align: center;
}

.tableWrap table td {
  border-bottom: 1px solid rgb(204, 204, 204);
}

.tableWrap table thead th {
  padding: 10px 10px;
  border-bottom: 1px solid rgb(204, 204, 204);
  top: 0;
  position: sticky;
  background: white;
}

.expandCell {
  min-width: 136px;
  max-width: 136px;
  left: 0;
  position: sticky;
  background: white;
  padding: 10px 20px !important;
  z-index: 100;
}

.nameCell {
  min-width: 136px;
  max-width: 136px;
  left: 136px;
  position: sticky;
  background: white;
  padding: 10px 20px !important;
  z-index: 100;
  border-right: 1px solid rgb(204, 204, 204);
}

.coverageCell {
  right: 0;
  position: sticky;
  background: white;
  padding: 10px 20px !important;
  z-index: 100;
  border-left: 1px solid rgb(204, 204, 204);
}
</style>