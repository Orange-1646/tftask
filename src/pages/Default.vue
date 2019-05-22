<template>
  <div class="wrapper">
    <div class="nav">
      <ul>
        <li class="nav-title"
            v-for="(item, index) in navOptions"
            :class="index == currentActive? 'active' : ''"
            :key="item"
            @click="redirect(item, index)"
            >
            {{item}}
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="content-nav">
        <search :name="name"></search>
      </div>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search'
export default {
  components: {
    Search
  },
  data () {
    return {
      name: 'Steve',
      currentActive: 0,
      navOptions: ['Dashboard', 'Profile', 'Basic Table', 'Icons', 'Google Map']
    }
  },
  methods: {
    redirect (name, index) {
      this.currentActive = index
      let route = name.toLowerCase()
      this.$router.push({
        path: `/${route}`
      })
    }
  }
}
</script>

<style lang="scss">
  .wrapper {
    overflow-y: hidden;
    width : 100%;
    height: 100%;
    position: absolute;
    display: flex;
    .nav{
      padding-top: 60px;
      min-width: 220px;
      .nav-title{
        height: 70px;
        line-height: 70px;
        padding: 0 70px 0 30px;
        transition: background-color 0.5s;
        box-sizing: border-box;
        display: block;
        text-align: left;
        border-left: 5px solid transparent;
        &.active{
          border-left: 5px solid #63b8ff;
        }
        &:hover{
          background: #eeeeee;
          cursor: pointer;
        }
      }
    }
    .content{
      flex: 1;
      .main-content{
        background: #eeeeee;
        width: 100%;
        height: calc(100% - 50px);
      }
    }
  }
</style>
