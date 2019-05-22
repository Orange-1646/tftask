<template>
  <div class="table-wrapper">
    <table class="table-content">
      <thead>
        <tr>
          <th v-for="item in head" :key="item">{{item}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, iterations) in head.slice(0, 4)" :key="item + 1">
          <td v-for="(item, index) in head" :key="index">{{iterations == 0 ? (index + 1) : 'test'}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      head: ["Date", "Security", "Amount", "Value", "Return", "Price", "Type"]
    };
  }
};
</script>

<style lang="scss">
.table-wrapper {
  font-weight: 100;
  margin: 20px 2%;
  padding: 20px;
  box-sizing: border-box;
  height: calc(100% - 40px);
  background: #ffffff;
  .table-content {
    border-collapse: collapse;
    width: 100%;
    th,
    td {
      text-align: center;
      padding: 15px;
      border: 1px solid black;
    }
  }
}
</style>
