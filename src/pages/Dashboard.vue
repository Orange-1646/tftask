<template>
  <div class="card-container">
    <div class="top">
      <index-card
        v-for="(item, index) in infoValidKeys"
        :name="item"
        :key="item"
        :number="info[item]"
        :imgSrc="imgList[index]"
      />
    </div>
    <div class="middle">
      <m-graph />
    </div>
    <div class="bottom">
      <m-table />
    </div>
  </div>
</template>

<script>
import IndexCard from '@/components/content/cards/IndexCard'
import MGraph from '@/components/content/cards/Graph'
import MTable from '@/components/content/cards/Table'
import async from '@/async/index.js'
export default {
  created() {
    this.getTotalReturn()
    this.getHistoryReturn()
  },
  data() {
    return {
      info: {},
      history: [],
      imgList: [
        {
          src: "/static/green.png",
          color: "green"
        },
        {
          src: "/static/darkpurple.png",
          color: "darkpurple"
        },
        {
          src: "/static/lightblue.png",
          color: "lightblue"
        }
      ]
    };
  },
  computed: {
    infoValidKeys() {
      return Object.keys(this.info).filter(item => {
        return item != "time"
      });
    }
  },
  components: {
    IndexCard,
    MGraph,
    MTable
  },
  methods: {
    getTotalReturn() {
      async('/total_return').then(res => {
        this.info = res
      })
    },
    getHistoryReturn() {
      async('/history_return').then(res => {
        this.history = res
      })
    }
  }
};
</script>

<style lang="scss">
.card-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .top {
    padding-top: 10px;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
  }
}
</style>
