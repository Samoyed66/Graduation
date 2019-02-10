<template>
  <div id="list">
    <p>共 <span>23</span> 个商品</p>
    <div id="box">
      <div class="left">
        <div class="choice">
          <div class="city">
            <span>城市: </span>
            <ul>
              <li class="selection">全部</li>
              <li>北京</li>
              <li>上海</li>
              <li>深圳</li>
              <li>广州</li>
              <li>成都</li>
              <li>西安</li>
            </ul>
          </div>
          <div class="city">
            <span>分类: </span>
            <ul>
              <li class="selection">全部</li>
              <li>音乐会</li>
              <li>朗诵</li>
              <li>曲宛杂团</li>
              <li>独奏</li>
              <li>管弦乐</li>
              <li>声乐及合唱</li>
            </ul>
          </div>
          <div class="city">
            <span>时间: </span>
            <ul>
              <li class="selection">全部</li>
              <li>今天</li>
              <li>明天</li>
              <li>
                <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </li>
              <li>
                <el-date-picker
                  v-model="value2"
                  align="right"
                  type="date"
                  placeholder="选择日期"
                  :picker-options="pickerOptions1">
                </el-date-picker>
              </li>
            </ul>
          </div>
        </div>
        <div class="box1">
          <div class="tab">
            <ul>
              <li class="popular">热门推荐</li>
              <li>最近开场</li>
              <li>最新上架</li>
            </ul>
            <div class="typeface">
              <i class="fa fa-reorder in"></i>
              <i class="fa fa-th-large"></i>
            </div>
          </div>
          <div class="box2">
            <router-link class="main1" to="/details">
              <img src="@/assets/images/haibao_03.jpg">
              <dl>
                <dt>[上海] 火相确情况</dt>
                <dd>商战电传业它向况约下次是大的小</dd>
                <dd>
                  <i class="fa fa-th"></i>
                  2009-10-22
                </dd>
                <dd>
                  <i class="fa fa-map-marker"></i>
                  浙江省 丽水市 缙云县
                </dd>
                <dd>
                  <span>60-196元</span>
                  售票中
                </dd>
                <dd>
                  <i class="fa fa-square-o"></i>
                  电子票
                </dd>
              </dl>
            </router-link>
            <router-link class="main1" to="/details">
              <img src="@/assets/images/haibao_03.jpg">
              <dl>
                <dt>[上海] 火相确情况</dt>
                <dd>商战电传业它向况约下次是大的小</dd>
                <dd>
                  <i class="fa fa-th"></i>
                  2009-10-22
                </dd>
                <dd>
                  <i class="fa fa-map-marker"></i>
                  浙江省 丽水市 缙云县
                </dd>
                <dd>
                  <span>60-196元</span>
                  售票中
                </dd>
                <dd>
                  <i class="fa fa-square-o"></i>
                  电子票
                </dd>
              </dl>
            </router-link>
            <router-link class="main1" to="/details">
              <img src="@/assets/images/haibao_03.jpg">
              <dl>
                <dt>[上海] 火相确情况</dt>
                <dd>商战电传业它向况约下次是大的小</dd>
                <dd>
                  <i class="fa fa-th"></i>
                  2009-10-22
                </dd>
                <dd>
                  <i class="fa fa-map-marker"></i>
                  浙江省 丽水市 缙云县
                </dd>
                <dd>
                  <span>60-196元</span>
                  售票中
                </dd>
                <dd>
                  <i class="fa fa-square-o"></i>
                  电子票
                </dd>
              </dl>
            </router-link>
            <router-link class="main1" to="/details">
              <img src="@/assets/images/haibao_03.jpg">
              <dl>
                <dt>[上海] 火相确情况</dt>
                <dd>商战电传业它向况约下次是大的小</dd>
                <dd>
                  <i class="fa fa-th"></i>
                  2009-10-22
                </dd>
                <dd>
                  <i class="fa fa-map-marker"></i>
                  浙江省 丽水市 缙云县
                </dd>
                <dd>
                  <span>60-196元</span>
                  售票中
                </dd>
                <dd>
                  <i class="fa fa-square-o"></i>
                  电子票
                </dd>
              </dl>
            </router-link>
            <router-link class="main1" to="/details">
              <img src="@/assets/images/haibao_03.jpg">
              <dl>
                <dt>[上海] 火相确情况</dt>
                <dd>商战电传业它向况约下次是大的小</dd>
                <dd>
                  <i class="fa fa-th"></i>
                  2009-10-22
                </dd>
                <dd>
                  <i class="fa fa-map-marker"></i>
                  浙江省 丽水市 缙云县
                </dd>
                <dd>
                  <span>60-196元</span>
                  售票中
                </dd>
                <dd>
                  <i class="fa fa-square-o"></i>
                  电子票
                </dd>
              </dl>
            </router-link>
            <router-link class="main1" to="/details">
              <img src="@/assets/images/haibao_03.jpg">
              <dl>
                <dt>[上海] 火相确情况</dt>
                <dd>商战电传业它向况约下次是大的小</dd>
                <dd>
                  <i class="fa fa-th"></i>
                  2009-10-22
                </dd>
                <dd>
                  <i class="fa fa-map-marker"></i>
                  浙江省 丽水市 缙云县
                </dd>
                <dd>
                  <span>60-196元</span>
                  售票中
                </dd>
                <dd>
                  <i class="fa fa-square-o"></i>
                  电子票
                </dd>
              </dl>
            </router-link>
            <div class="paging">
              <span>共 23 条</span>
              <el-pagination
                background="#ff3c1b"
                layout="prev, pager, next"
                :total="50">
              </el-pagination>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <h4>您可能喜欢</h4>
        <div class="main">
          <img src="@/assets/images/haibao_03.jpg">
          <div class="right-1">
            <dl>
              <dt>斯界争程此</dt>
              <dd>吉林省 白山市 江...</dd>
              <dd>1980-04-19-1984-...</dd>
              <dd><span>82元</span> 起</dd>
            </dl>
          </div>
        </div>
        <div class="main">
          <img src="@/assets/images/haibao_03.jpg">
          <div class="right-1">
            <dl>
              <dt>斯界争程此</dt>
              <dd>吉林省 白山市 江...</dd>
              <dd>1980-04-19-1984-...</dd>
              <dd><span>82元</span> 起</dd>
            </dl>
          </div>
        </div>
        <div class="empty"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List'
}
</script>

<style scoped lang="less">
  #list{
    width: 1200px;
    margin: 0 auto;
    p{
      width: 100%;
      height: 52px;
      background: white;
      line-height: 52px;
      font-size: 12px;
      text-indent: 19px;
      span{
        color: #ff3c1b;
      }
    }
    #box{
      overflow: hidden;
      .left{
        width: 928px;
        float: left;
        margin-bottom: 41px;
        .choice{
          width: 100%;
          height: 234px;
          background: white;
          border: 1px solid #ccc;
          .city{
            width: 881px;
            height: 78px;
            margin:0 auto;
            border-bottom: 1px dashed #ccc;
            overflow: hidden;
            span{
              float: left;
              margin-top: 21px;
              font-size: 14px;
            }
            ul{
              float: left;
              height: 28px;
              line-height: 28px;
              margin-top: 11px;
              margin-left: 17px;
              li{
                display: inline-block;
                font-size: 14px;
                padding: 6px 10px;
                cursor: pointer;
              }
              .selection{
                background: #ff3c1b;
                color: white;
              }
            }
          }
          .city:nth-of-type(3){
            border: none;
          }
        }
        .box1{
          width: 927px;
          height: 100%;
          background: white;
          margin-top: 17px;
          border: 1px solid #ccc;
          .tab{
            width: 100%;
            height: 32px;
            background: #f8f8f9;
            margin-bottom: 15px;
            ul{
              float: left;
              overflow: hidden;
              li{
                float: left;
                font-size: 14px;
                padding: 6px 15px;
                cursor: pointer;
              }
              .popular{
                background: #fff;
                color: #ff3c1b;
              }
            }
            .typeface{
              height: 30px;
              float: left;
              margin-left: 524px;
              border-radius: 3px;
              cursor: pointer;
              i{
                font-size: 10px;
                padding: 9px 17px 9px 21px;
                border: 1px solid #ccc;
              }
              i:nth-of-type(1){
                border-top-left-radius: 3px;
                border-bottom-left-radius: 3px;
              }
              i:nth-of-type(2){
                border-top-right-radius: 3px;
                border-bottom-right-radius: 3px;
              }
              .in{
                border: 1px solid #ff3c1b;
                color: #ff3c1b;
              }
            }
          }
          .box2{
            width: 908px;
            margin: 0 auto;
            .main1{
              width: 908px;
              padding: 25px 0 19px 0;
              overflow: hidden;
              display: inline-block;
              border-bottom: 1px dashed #ccc;
              img{
                margin-left: 10px;
                width: 151px;
                height: 207px;
                float: left;
              }
              dl{
                float: left;
                margin-left: 21px;
                dt{
                  font-size: 16px;
                }
                dd{
                  font-size: 12px;
                  color: #999;
                  margin-top: 15px;
                  span{
                    display: inline-block;
                    margin-right: 12px;
                    color: #ff3c1c;
                    font-weight: bold;
                  }
                  i{
                    color: #ff3c1c;
                  }
                }
                dd:nth-of-type(3){
                  color: black;
                  font-size: 14px;
                }
                dd:nth-of-type(4){
                  font-size: 12px;
                }
                dd:nth-of-type(5){
                  color: black;
                }
              }
            }
            .paging{
              width: 100%;
              height: 42px;
              margin-left: 200px;
              display: flex;
              line-height: 42px;
            }
          }
        }
      }
      .right{
        width: 257px;
        float: right;
        h4{
          height: 40px;
          line-height: 40px;
          background: #e6e6e6;
          font-size: 14px;
          text-indent: 16px;
        }
        .main{
          overflow: hidden;
          padding: 21px 10px 16px 16px;
          background: white;
          cursor: pointer;
          img{
            width: 100px;
            height: 133px;
            float: left;
          }
          .right-1{
            width: 120px;
            float: right;
            dl{
              dt{
                font-size: 12px;
              }
              dd{
                font-size: 12px;
                color: #999;
                span{
                  color: #ff3c1b;
                  font-weight: bold;
                }
              }
              dd:nth-of-type(1){
                margin-top: 50px;
              }
              dd:nth-of-type(3){
                margin-top: 22px;
              }
            }
          }
        }
        .main:nth-of-type(2){
          border-bottom: 1px solid #ccc;
        }
        .empty{
          width: 262px;
          height: 17px;
          background: white;
        }
      }
    }
  }
</style>
