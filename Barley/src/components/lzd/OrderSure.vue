<template>
  <div id="OrderSure">
    <!-- 头部 -->
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
          <a href="javascript:;">我的大麦 <i class="el-icon-arrow-down"></i></a>
          <ul class="clear mineInfo">
            <li>个人信息</li>
            <li>订单管理</li>
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
    <!-- 头部 -->
    <div class="OrderCont">
      <div class="wrap">
        <ul class="selectNav">
          <li>1 选择商品</li>
          <li>
            <div class="subBottom"></div>
            <div class="subtop"></div>
            <p>2 确认订单信息</p>
          </li>
          <li>3 支付订单</li>
          <li>4 收取商品</li>
        </ul>
        <div class="orderTitle">
          <span>实名证件信息</span>
        </div>
        <div class="presonWrap">
          <div class="selectPreson">
            购票人: <button>选择购票人</button>
          </div>
        </div>
        <div class="orderTitle">
          <span>选择付款方式</span>
        </div>
        <div class="payment">
          <span class="fa fa-dot-circle-o"></span>
          <span>网上付款</span>
        </div>
        <div class="orderTitle">
          <span>商品清单</span>
        </div>
        <div class="orderList">
          <div class="listTitle">
            <div>商品名称</div>
            <div>座位号</div>
            <div>价格</div>
            <div>数量</div>
            <div>价格小计（元）</div>
          </div>
          <div class="listCont" v-for="(listItem, liseIndex) in seatInfo" :key="liseIndex">
            <div>{{detailCont.picTitle}}</div>
            <div>{{listItem.row}}排{{listItem.col}}座</div>
            <div>{{detailPrice}}</div>
            <div>1</div>
            <div>{{detailPrice}}</div>
          </div>
        </div>
        <div class="orderTitle">
          <span>我要开发票</span>
        </div>
        <div class="invoice">
          <ul class="invoiceTitle clear">
            <li @click="changeInvoiceClass(invoiceIndex)" :class="{'invoiceActive': invoiceNum === invoiceIndex}" v-for="(invoiceItem, invoiceIndex) in invoiceList" :key="invoiceIndex">{{invoiceItem}}</li>
          </ul>
          <div class="invoiceWrap">
            <div class="invoiceBox clear" :style="{'transform': 'translateX(-' + invoiceNum * 1158 + 'px)'}">
              <div class="invoiceCont">
                <div>
                  公司抬头:
                  <input type="text" placeholder="请输入公司抬头">
                </div>
                <div>
                  公司税号:
                  <input type="text" placeholder="请输入公司税号">
                </div>
                <button>确认发票信息</button>
              </div>
              <div class="invoiceCont">
                <div>
                  个人抬头:
                  <input type="text" placeholder="请输入个人抬头">
                </div>
                <button>确认发票信息</button>
              </div>
            </div>
          </div>
        </div>
        <div class="insurance">
          <p>
            <input id="insuranceCheck" type="checkbox" v-model="insuranceVal">
            <label for="insuranceCheck">购买“安心订票保险”，本单保费金额: 20.00元</label>
          </p>
          <p>查看 保险服务说明 和 《安心订票保险条款》</p>
          <p>购买保险，请填写真实姓名</p>
          <p>商品金额: <span>¥{{allPrice}}</span></p>
          <p>商品保险: +<span>¥{{changeCheck}}</span></p>
        </div>
        <div class="orderAll">
          <p>
            <span>待支付总额: </span>
            <span>{{allPrice + changeCheck}}</span>
          </p>
          <p>
            <input id="orderCheck" type="checkbox" v-model="orderVal">
            <label for="orderCheck"><span>我已经阅读同意</span> 《订购服务条款》 《退换货约定》 《退款约定》</label>
          </p>
          <p>同意“票品为不记名凭证，请您妥善保管，遗失不补”</p>
          <button @click="toOrderPay" :style="{'background': orderVal ? '#ff3c1b':'#c3c3c3'}">同意以上协议并提交订单</button>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <footer class="footer">
      <div class="wrap">
        <!-- 企业介绍标签 -->
        <ul class="clear">
          <li>
            <a href="javascript:;">公司介绍</a>
          </li>
          <li>
            <a href="javascript:;">品牌识别</a>
          </li>
          <li>
            <a href="javascript:;">企业荣誉</a>
          </li>
          <li>
            <a href="javascript:;">隐私声明</a>
          </li>
          <li>
            <a href="javascript:;">联系及合作</a>
          </li>
          <li>
            <a href="javascript:;">招聘信息</a>
          </li>
          <li>
            <a href="javascript:;">网站地图</a>
          </li>
          <li>
            <a href="javascript:;">友情链接</a>
          </li>
          <li>
            <a href="javascript:;">公司大事记</a>
          </li>
        </ul>
        <p>京ICP证031086号|京ICP备1013248号|京公安网11032040599500349号|广播电视节目制作经营许可证（京）字第032256号</p>
        <p>网络文化经营许可证 京网文[2018]3243-534号|营业性演出许可证 京市演出888号</p>
        <p>北京阿博文化有限公司 大麦网 Copyright 2008-2018 All Right Reserved</p>
      </div>
    </footer>
    <!-- 底部 -->
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'OrderSure',
  data () {
    return {
      off: true,
      // local数据
      getListDate: [],
      detailCont: {},
      invoiceList: ['公司', '个人'],
      invoiceNum: 0,
      insuranceVal: true,
      orderVal: false
    }
  },
  computed: {
    // vuex选定时间
    ...mapState(['seatInfo', 'allPrice', 'detailPrice']),
    changeCheck () {
      if (this.insuranceVal) {
        return 20
      } else {
        return 0
      }
    }
  },
  methods: {
    // vuex
    ...mapMutations(['toSeatInfo', 'toAllPrice']),
    outerLocal () {
      this.getListDate = []
      this.$local.remove('loginUser')
      this.off = true
    },
    changeInvoiceClass (invoiceI) {
      this.invoiceNum = invoiceI
    },
    toOrderPay () {
      if (this.orderVal) {
        this.toAllPrice(this.allPrice + this.changeCheck)
        this.$router.push({path: '/orderPay'})
      }
    }
  },
  created () {
    if (this.off && this.$local.obtain('loginUser')) {
      this.getListDate = this.$local.obtain('loginUser')
      this.off = false
    }
    if (this.$local.obtain('DetailData')) {
      this.detailCont = this.$local.obtain('DetailData')
    }
  }
}
</script>

<style scoped lang="less">
  #OrderSure{
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
            z-index: 5;
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
    .OrderCont{
      .wrap{
        background: white;
        margin-bottom: 30px;
        box-sizing: border-box;
        padding: 10px 20px 0;
        .selectNav{
          height: 50px;
          display: flex;
          justify-content: space-around;
          background: linear-gradient(to bottom, #555, #3e3e3e, #555);
          margin-bottom: 8px;
          li{
            color: white;
            font-size: 18px;
            line-height: 50px;
            text-align: center;
            width: 25%;
            &:nth-of-type(2){
              position: relative;
              &>div{
                width: 100%;
                height: 25px;
                background: #ff3c1b;
                &.subBottom{
                  transform: skew(45deg);
                }
                &.subtop{
                  transform: skew(-45deg);
                }
              }
              &>p{
                width: 100%;
                height: 50px;
                position: absolute;
                top: 0;
                left: 0;
              }
            }
          }
        }
        .orderTitle{
          width: 100%;
          height: 32px;
          line-height: 32px;
          border-bottom: 1px solid #d7d7d7;
          span{
            display: inline-block;
            width: 120px;
            text-indent: 10px;
            color: #ff3c1b;
            border-bottom: 1px solid #ff3c1b;
          }
        }
        .presonWrap{
          width: 100%;
          padding-bottom: 18px;
          .selectPreson{
            height: 52px;
            line-height: 52px;
            font-size: 12px;
            color: #495060;
            button{
              width: 92px;
              height: 32px;
              background: #ff3c1b;
              color: white;
              border-radius: 5px;
              cursor: pointer;
              margin-left: 10px;
            }
          }
        }
        .payment{
          width: 100%;
          height: 40px;
          line-height: 40px;
          padding-bottom: 17px;
          font-size: 12px;
          color: #495060;
          .fa-dot-circle-o{
            color: #ff3c1b;
            padding-right: 10px;
            cursor: pointer;
          }
        }
        .orderList{
          width: 100%;
          border: 1px solid #dddee1;
          margin: 10px 0 28px;
          &>div{
            display: flex;
            justify-content: space-around;
            font-size: 12px;
            color: #495060;
            div{
              height: 40px;
              line-height: 40px;
              width: 20%;
              padding-left: 18px;
              border-right: 1px solid #dddee1;
              border-bottom: 1px solid #dddee1;
            }
            &.listTitle{
              background: #f8f8f9;
              div:last-of-type{
                border-right: none;
              }
            }
            &.listCont{
              div{
                height: 48px;
                line-height: 48px;
                &:nth-of-type(1){
                  height: 42px;
                  padding-top: 6px;
                  line-height: 18px;
                }
              }
              &:last-of-type{
                div{
                  border-bottom: none;
                  &:last-of-type{
                    border-right: none;
                  }
                }
              }
            }
          }
        }
        .invoice{
          width: 100%;
          padding-bottom: 20px;
          border-bottom: 1px solid #c3c3c3;
          .invoiceTitle{
            height: 35px;
            border-bottom: 1px solid #dddee1;
            li{
              width: 60px;
              text-align: center;
              line-height: 35px;
              float: left;
              cursor: pointer;
              &.invoiceActive{
                line-height: 34px;
                border-bottom: 2px solid #ff3c1b;
                color: #ff3c1b;
              }
            }
          }
          .invoiceWrap{
            width: 1158px;
            height: 199px;
            border: 1px solid #dddee1;
            border-top: none;
            overflow: hidden;
            .invoiceBox{
              width: 2316px;
              transition: .3s;
              .invoiceCont{
                width: 1158px;
                height: 199px;
                box-sizing: border-box;
                padding: 15px 0 0 15px;
                float: left;
                &>div{
                  height: 50px;
                  line-height: 50px;
                  font-size: 12px;
                  color: #495060;
                  input{
                    width: 298px;
                    height: 30px;
                    border: 1px solid #c3c3c3;
                    border-radius: 3px;
                    text-indent: 4px;
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
                }
                button{
                  width: 104px;
                  height: 32px;
                  background: #ff3c1b;
                  color: white;
                  border-radius: 5px;
                  font-size: 12px;
                  margin: 20px 0 0 30px;
                  cursor: pointer;
                }
              }
            }
          }
        }
        .insurance{
          width: 100%;
          height: 119px;
          padding: 20px 0 21px;
          text-align: right;
          border-bottom: 1px dashed #c3c3c3;
          p{
            font-size: 12px;
            color: #1b1b1b;
            height: 23px;
            line-height: 23px;
            span{
              color: #ff3c1b;
            }
          }
        }
        .orderAll{
          text-align: right;
          padding: 20px 0 70px;
          p{
            font-size: 12px;
            color: #495060;
            height: 23px;
            line-height: 23px;
            span{
              font-weight: bold;
            }
            &:first-of-type{
              span:last-of-type{
                color: #ff3c1b;
              }
            }
          }
          button{
            width: 164px;
            height: 32px;
            border-radius: 5px;
            margin-top: 21px;
            color: white;
            font-size: 12px;
          }
        }
      }
    }
    // 底部
    .footer{
      padding-bottom: 5px;
      .wrap{
        width: 1000px;
        margin: 0 auto;
        p{
          text-align: center;
          height: 30px;
          line-height: 30px;
          font-size: 12px;
          color: #1b1b1b;
        }
        ul{
          width: 824px;
          margin: 0 auto;
          padding-bottom: 70px;
          li{
            float: left;
            a{
              font-size: 12px;
              color: #1b1b1b;
              padding: 0 14px 0 26px;
              border-right: 1px solid #1b1b1b;
            }
            &:last-of-type{
              a{
                border-right: none;
              }
            }
          }
        }
      }
    }
  }
</style>
