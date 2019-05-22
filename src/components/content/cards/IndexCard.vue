<template>
    <div id="card">
        <div class="card-name">{{name}}</div>
        <div class="card-info">
            <div class="icon">
                <img :src="imgSrc.src" alt="123">
            </div>
            <div class="number" :class="imgSrc.color">{{number}}</div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['name', 'number', 'imgSrc']
}
</script>

<style lang="scss">
    #card{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: #ffffff;
        padding: 10px;
        box-sizing: border-box;
        width: 30%;
        height: 100%;
        font-weight: bold;
        .card-info{
            display: flex;
            justify-content: space-between;
            .icon{
                width: 30px;
                img{
                    width: 100%;
                }
            }
            .number{
                height: 30px;
                line-height: 30px;
                &.green{
                    color: #00ff00;
                }
                &.lightblue{
                    color: #87ceff;
                }
                &.darkpurple{
                    color: #5f30c8;
                }
            }
        }
    }
</style>
