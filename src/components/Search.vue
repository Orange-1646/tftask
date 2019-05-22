<template>
  <div class="search">
    <div class="name">
      <span class="name">{{name}}</span>
    </div>
    <div class="avatar">
      <img src="@/assets/avatar.jpg" alt="avatar">
    </div>
    <div class="inp">
      <input placeholder="Search..." type="text">
      <img class="search" src="@/assets/search.png" alt="">
    </div>
  </div>

</template>

<script>
export default {
  props: {
    name
  }
}
</script>

<style lang="scss">
.search {
  background: #000000;
  height: 50px;
  width: 100%;
  >*{
      float: right;
      height: 30px;
      margin-top: 10px;
      margin-right: 10px;
  }
  .name {
    color: #ffffff;
    line-height: 30px;
  }
  .avatar {
    border-radius: 50%;
    overflow: hidden;
    width: 30px;
    border-radius: 50%;
    border: 1px solid #ffffff;
    img {
      width: 30px;
      height: 30px;
    }
  }
  .inp {
    position: relative;
    .search{
      position: absolute;
      width: 30px;
      height: 30px;
      top: 0;
      right: 15px;
      background: #eeeeee;
      border-radius: 50%;
    }
    input {
      background: #eeeeee;
      color: #666666;
      padding-left: 10px;
      margin: auto 10px;
      width: 100px;
      height: 30px;
      border-radius: 15px;
      box-shadow: none;
      border-style: none;
      transition: width 0.5s ease-in-out;
      &::placeholder{
          color: #666666;
      }
      &:focus{
        width: 200px;
      }
    }
  }
}
</style>
