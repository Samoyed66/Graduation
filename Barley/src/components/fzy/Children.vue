<template>
  <!-- 导航栏 -->
  <div id="Navigation">
    <ul class="clear">
      <li>首页</li>
      <li>体育</li>
      <li>舞蹈古典</li>
      <li>亲子</li>
      <li>摇滚</li>
      <li>戏剧</li>
    </ul>
    <!-- 轮播图 -->
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="(item, index) in picList" :key="index">
        <img :src="item">
      </el-carousel-item>
    </el-carousel>
    <!-- 猜你喜欢 -->
    <div class="books">
      <img src='@/assets/images/like.png' class="like"/>
      <ul>
        <li v-for="(likeItem, likeIndex) in likeList" :key="likeIndex">
          <img :src="likeItem.src">
          <h4>{{likeItem.title}}</h4>
          <p>票价：<span>{{likeItem.price}}</span>起</p>
        </li>
      </ul>
    </div>
    <!-- 精彩聚集 -->
    <div class="Gather">
      <img src='@/assets/images/Gather.png' class="Gather1"/>
      <div class="clear">
        <div class="chh" v-for="(chhItem, chhIndex) in focusing.bigPic" :key="chhIndex">
          <img :src="chhItem.src">
        </div>
        <ul>
          <li v-for="(smallItem, smallIndex) in focusing.smallPic" :key="smallIndex">
            <img :src="smallItem.src">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Children',
  data () {
    return {
      /* 精彩聚焦 */
      focusing: [],
      /* 猜我喜欢 */
      likeList: [],
      picList: [
        require('@/assets/images/banner01.jpg'),
        require('@/assets/images/banner02.jpg'),
        require('@/assets/images/banner03.jpg')
      ]
    }
  },
  /* 事件 */
  methods: {
    /* 精彩聚集初始化数据 */
    focusingFn () {
      this.$http.get(this.$url + 'childrenFocus').then((res) => {
        this.focusing = res.data.focus[0]
      })
    },
    /* 猜我喜欢初始化数据 */
    LikeFn () {
      this.$http.get(this.$url + 'childrenLike').then((res) => {
        this.likeList = res.data.like
      })
    }
  },
  /* 初始化生命周期 */
  created () {
    this.LikeFn()
    this.focusingFn()
  }
}
</script>

<style scoped lang="less">
 #Navigation {
   width: 1200px;
   margin: 0 auto;
   ul {
     background: #ffffff;
     width: 100%;
     li {
       line-height: 57px;
       float: left;
       margin-right: 17px;
       padding: 0px;
       width: 91px;
       height: 57px;
       text-align: center;
     }
     li:nth-of-type(4) {
       color: #ffffff;
       background: #ff3c1b;
     }
   }
   .Gather{
     height: 620px;
     background: #ffffff;
     margin-top: 20px;
     ul{
       margin-left: 370px;
       position: relative;
       top:-470px;
       width: 577px;
       li{
         margin-top: 12px;
         float: left;
         width: 140px;
         height: 250px;
         background: white;
       }
     }
     .clear{
       .chh:nth-of-type(2){
         float: right;
         margin-top: -460px;
       }
     }
     .Gather1{
       margin: 0 auto;
       padding-top: 16px;
       width: 160px;
       height: 37px;
     }
   }
   .books{
     margin-top: 20px;
     background: #ffffff;
     height: 337px;
     ul li{
       margin-left: 80px;
       img{
       height: 170px;
       }
       h4{
         font-size: 12px;
         color: #b57660;
       }
       p{
         font-size: 12px;
         color: #dacfcf;
         span{
           color: black;
         }
       }
       h4{
         white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
       }
     }
     .like{
       width: 160px;
       height: 42px;
       margin: 0 auto;
       padding-top: 17px;
     }
   }

 }
</style>
