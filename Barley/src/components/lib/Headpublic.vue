<template>
  <div id="Headpublic">
    <!-- 头部导航 -->
    <nav class="nav">
      <div class="wrap clear">
        <!-- 登录注册 -->
        <div class="loginBtn">
          HI,欢迎来大麦[
          <div v-show="off">
            <router-link to="/login">登录</router-link>
            <router-link to="/registered">注册</router-link>
          </div>
          <div v-show="!off">
            <a href="javascript:;">{{getListDate.num}}</a>
            <a href="javascript:;" @click="outerLocal">退出</a>
          </div>
          ]
        </div>
        <!-- 我的大麦 -->
        <div class="myMai">
          <router-link to="/mine">我的大麦 <i class="el-icon-arrow-down"></i></router-link>
          <ul class="clear mineInfo">
            <li>
              <router-link to="/mine/message">个人信息</router-link>
            </li>
            <li>
              <router-link to="/mine">订单管理</router-link>
            </li>
          </ul>
        </div>
        <!-- 右侧列表 -->
        <ul class="clear">
          <!-- 大麦微信 -->
          <li>
            <a href="javascript:;">大麦网微信</a>
            <div>
              <img src="@/assets/images/download.jpg">
            </div>
          </li>
          <!-- 手机版 -->
          <li>
            <a href="javascript:;">手机版</a>
            <div>
              <img src="@/assets/images/download.jpg">
            </div>
          </li>
          <!-- 客户服务 -->
          <li>
            <a href="javascript:;">客户服务 <i class="el-icon-arrow-down"></i></a>
            <ul class="clear mineInfo">
              <li>帮助中心</li>
              <li>在线客服</li>
              <li>人工服务</li>
            </ul>
          </li>
          <!-- 网站导航 -->
          <li>
            <a href="javascript:;">网站导航 <i class="el-icon-arrow-down"></i></a>
            <dl class="clear mineInfo">
              <dt>演出分类</dt>
              <dd>演唱会</dd>
              <dd>音乐会</dd>
              <dd>舞蹈芭蕾</dd>
              <dd>曲苑杂坛</dd>
              <dd>度假休闲</dd>
              <dd>儿童亲子</dd>
              <dd>话剧歌剧</dd>
              <dd>动漫</dd>
            </dl>
          </li>
          <!-- 中英翻译 -->
          <li>
            <a href="javascript:;">English</a>
          </li>
        </ul>
      </div>
    </nav>
    <!-- 头部搜索 -->
    <header class="header">
      <div class="wrap clear">
        <!-- logo -->
        <router-link to="/">
          <img src="@/assets/images/logo.png">
        </router-link>
        <!-- 城市列表 -->
        <div class="cityList">北京 <i class="el-icon-arrow-down"></i></div>
        <!-- 搜索框 -->
        <div class="search clear">
          <input type="text" placeholder="请输入演出、艺人、场馆名称...">
          <router-link tag="button" to="/list">搜索</router-link>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Headpublic',
  data () {
    return {
      // local数据
      getListDate: [],
      off: true
    }
  },
  methods: {
    outerLocal () {
      this.$local.remove('loginUser')
      this.off = true
    }
  },
  watch: {
    $route (to, from) {
      if (this.off && this.$local.obtain('loginUser')) {
        this.getListDate = this.$local.obtain('loginUser')
        this.off = false
      }
    }
  }
}
</script>

<style scoped lang="less">
#Headpublic{
  // 中间区公共
  .wrap{
    width: 1200px;
    margin: 0 auto;
  }
  // 导航
  .nav{
    width: 100%;
    height: 34px;
    line-height: 34px;
    border-bottom: 1px solid #e5e5e5;
    .wrap{
      .loginBtn{
        font-size: 12px;
        color: #495060;
        float: left;
        padding-right: 10px;
        div{
          display: inline-block;
          a{
            &:nth-of-type(1){
              color: #ff3c1b;
            }
            &:nth-of-type(2){
              color: #495060;
              &:hover{
                color: #57a3f3;
              }
            }
          }
        }
      }
      .myMai{
        float: left;
        position: relative;
        a{
          font-size: 12px;
          color: #495060;
        }
        a:hover{
          color: #57a3f3;
        }
        .mineInfo{
          width: 100px;
          height: 0;
          position: absolute;
          top: 40px;
          background: white;
          border-radius: 3px;
          left: -20px;
          transition: .5s;
          overflow: hidden;
          li{
            height: 30px;
            line-height: 30px;
            font-size: 12px;
            color: #495060;
            text-indent: 15px;
            cursor: pointer;
            &:first-of-type{
              margin-top: 5px;
            }
            &:last-of-type{
              margin-bottom: 5px;
            }
          }
          li:hover{
            background: #f3f3f3;
          }
        }
        &:hover .mineInfo{
          height: 70px;
        }
      }
      &>ul{
        float: right;
        padding-right: 29px;
        &>li{
          position: relative;
          float: left;
          a{
            font-size: 12px;
            color: #495060;
            padding: 0 13px;
          }
          a:hover{
            color: #57a3f3;
          }
          &:nth-of-type(1){
            div{
              width: 122px;
              height: 0;
              overflow: hidden;
              background: white;
              border-radius: 3px;
              position: absolute;
              top: 39px;
              left: -15px;
              transition: .5s;
              img{
                margin: 12px 16px 15px;
                display: inline-block;
              }
            }
            &:hover div{
              height: 116px;
            }
          }
          &:nth-of-type(2){
            div{
              width: 122px;
              height: 0;
              overflow: hidden;
              background: white;
              border-radius: 3px;
              position: absolute;
              top: 39px;
              left: -30px;
              transition: .5s;
              img{
                margin: 12px 16px 15px;
                display: inline-block;
              }
            }
            &:hover div{
              height: 116px;
            }
          }
          &:nth-of-type(3){
            .mineInfo{
              width: 100px;
              height: 0;
              position: absolute;
              top: 40px;
              background: white;
              border-radius: 3px;
              left: -5px;
              transition: .5s;
              overflow: hidden;
              li{
                height: 30px;
                line-height: 30px;
                font-size: 12px;
                color: #495060;
                text-indent: 15px;
                cursor: pointer;
                &:first-of-type{
                  margin-top: 5px;
                }
                &:last-of-type{
                  margin-bottom: 5px;
                }
              }
              li:hover{
                background: #f3f3f3;
              }
            }
            &:hover .mineInfo{
              height: 100px;
            }
          }
          &:nth-of-type(4){
            .mineInfo{
              width: 139px;
              height: 0;
              position: absolute;
              top: 40px;
              background: white;
              border-radius: 3px;
              left: -5px;
              transition: .5s;
              overflow: hidden;
              dt{
                font-size: 12px;
                color: #495060;
                height: 27px;
                line-height: 27px;
                text-indent: 20px;
                margin-top: 11px;
              }
              dd{
                width: 49px;
                height: 27px;
                line-height: 27px;
                font-size: 12px;
                color: #495060;
                cursor: pointer;
                float: left;
                padding: 0 11px 0 9px;
              }
              dd:hover{
                color: #57a3f3;
              }
            }
            &:hover .mineInfo{
              height: 157px;
            }
          }
        }
      }
    }
  }
  // 头部搜索
  .header{
    padding: 15px 0 18px;
    .wrap{
      img{
        float: left;
        width: 165px;
        height: 59px;
      }
      .cityList{
        padding: 0 117px 0 18px;
        float: left;
        height: 19px;
        line-height: 19px;
        font-size: 15px;
        color: #333;
        cursor: pointer;
      }
      .search{
        width: 569px;
        height: 34px;
        line-height: 34px;
        border: 3px solid #ff3c1b;
        float: left;
        input{
          height: 100%;
          width: 479px;
          text-indent: 10px;
          font-size: 12px;
          float: left;
          &::-webkit-input-placeholder{
            color: #757575;
          }
          &::-moz-input-placeholder{/* Firefox 19+ */
            color: #757575;
          }
          &:-moz-input-placeholder{/* Firefox 4 to 18 */
            color: #757575;
          }
          &:-ms-input-placeholder{
            color: #757575;
          }
        }
        button{
          width: 90px;
          height: 100%;
          float: left;
          background: #ff3c1b;
          font-size: 16px;
          color: white;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
