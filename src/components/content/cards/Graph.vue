<template>
  <div id="mgraph"></div>
</template>

<script>
import async from "@/async/index.js";
export default {
  data() {
    return {
      date: [],
      returnValue: [],
      promise: null,
      mChart: null
    };
  },
  created() {
    this.initData();
  },
  mounted() {
    this.drawLine();
    this.initResize()
  },
  methods: {
    initData() {
      this.promise = async("/history_return");
    },
    drawLine() {
      let self = this;
      this.promise.then(res => {
        res.history_return.forEach(item => {
          this.date.push(item.date);
          this.returnValue.push(item.return);
          let mChart = this.$echarts.init(document.getElementById("mgraph"));
          self.mChart = mChart
          var option = {
            xAxis: {
              splitLine: {
                show: true
              },
              data: [...self.date]
            },
            yAxis: {
              splitLine: {
                show: true
              }
            },
            series: [
              {
                type: "line",
                itemStyle: {
                  normal: {
                    color: "#999999",
                    lineStyle: {
                      color: "#999999"
                    }
                  }
                },
                data: self.returnValue
              }
            ]
          };
          mChart.setOption(option);
        });
      });
    },
    initResize(){
        let self = this
        setTimeout(() => {
            window.onresize = function() {
                self.mChart.resize()
            }
        }, 20);
    }
  }
};
</script>

<style lang="scss">
#mgraph {
  margin: 20px 2%;
  height: 280px;
  background: #ffffff;
}
</style>
