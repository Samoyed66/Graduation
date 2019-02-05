<template>
  <div id="details">
    <div class="head">
      <p>大麦 > 北京 > <span>电影</span> > 大型多媒体励志互动儿童剧《奇门遁甲》( 11月 )</p>
    </div>
    <div id="box">
      <div class="information">
        <img src="@/assets/images/haibao_03.jpg">
        <div class="content">
          <h2>
            大型多媒体励志互动儿童剧《奇门遁甲》( 11月 )
          </h2>
          <p>“奇门遁甲”</p>
          <img src="@/assets/images/jingdu-01_03.jpg">
          <div class="time">
            <span>演出时间:</span>
            <ul>
              <li class="selection">1999-11-09 09:44:55</li>
              <li>1999-11-09 09:44:55</li>
              <li>1999-11-09 09:44:55</li>
              <li>1999-11-09 09:44:55</li>
            </ul>
          </div>
          <div class="ticket">
            <span>选择价票:</span>
            <ul>
              <li class="on">80元</li>
              <li>90元</li>
              <li>100元</li>
            </ul>
          </div>
          <a href="#">
            <button>选座购买</button>
          </a>
        </div>
      </div>
      <div class="score">
        <dl>
          <dt>大麦网评分:</dt>
          <dd>
            <el-rate
              score-template="{value}"
              v-model="value5"
              disabled
              show-score
              text-color="#ff9900">
            </el-rate>
            <span>3000</span>人参与评论
          </dd>
        </dl>
        <dl>
          <dt>演出时间</dt>
          <dd>2017-12-23-2017-12-26</dd>
        </dl>
        <dl>
          <dt>演出场馆</dt>
          <dd>中国中心儿童剧院-海淀</dd>
          <dd>
            <i class="fa fa-map-marker"></i>
            交通路线
          </dd>
        </dl>
        <dl>
          <dt>票品支持</dt>
          <dd>
            <i class="fa fa-usd"></i>
            返积分
          </dd>
        </dl>
        <dl>
          <dt>买票配送</dt>
          <dd>同城满100.00元免运费，</dd>
        </dl>
      </div>
    </div>
    <div id="box1">
      <div class="left">
        <ul>
          <li class="selection1">演出信息</li>
          <li>精彩剧评</li>
          <li>购买说明</li>
          <li>付款方式</li>
        </ul>
        <div class="information">
          <span>基本信息</span>
          <strong></strong>
        </div>
        <img src="@/assets/images/baoge_03.jpg">
        <div class="information">
          <span>项目介绍</span>
          <strong></strong>
        </div>
        <dl>
          <dt>英文站入口</dt>
          <dd>英文站入口 hrt//sadisdjsacdskjcjckdsvbsv</dd>
          <dt>演出介绍</dt>
          <dd>世界经典原版音乐剧《猫》</dd>
          <dd>猫的足迹</dd>
          <dd>发动机设计费第三萨卡积分卡萨九分裤卡房间卡萨来得及发啥艰苦奋斗拉萨附近开了大是否爱神的箭弗兰克大水井坊都流口水就发来看sdf
          发的撒多拉斯加的卡萨阿克苏解放贷款撒酒疯案件开发卡萨荆防颗粒第三方卡卡发到付件
          司法鉴定撒疯狂拉升的积分akdsaja爱德华撒垃圾袋卡死了肯德基卡萨丁雷克萨九分裤拉法基分开打来的解答康师傅的空间撒肥肠粉a
            华东师范大框架和房间爱上咖啡大垃圾袋撒萨哈迪斯凯迪拉克加大进口大量开始打圣诞快乐加大卡接口的就爱看的奥凯电缆卡的金卡时间段adaj
            傻大姐啊实打实的马圣诞节卡萨记斗看阿加圣诞节撒谎
          </dd>
          <dd>
            <img src="@/assets/images/haibao_03.jpg">
          </dd>
          <dd>伦敦西区及纽约百老汇有史以来成功,连续公演以来最久的音乐剧之一</dd>
          <dd>伦敦西区及纽约百老汇有史以来成功,连续公演以来最久的音乐剧之一</dd>
          <dd>伦敦西区及纽约百老汇有史以来成功,连续公演以来最久的音乐剧之一</dd>
        </dl>
        <div class="information">
          <span>写剧评</span>
          <strong></strong>
        </div>
        <div class="comments">
          <div class="stars">
            打个分吧:
            <el-rate
              v-model="value5"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}">
            </el-rate>
          </div>
          <textarea rows="8" cols="40" maxlength="1000" placeholder="写个评论吧10-1000字"></textarea>
          <a href="#">
            <button>评论</button>
          </a>
        </div>
        <ul>
          <li>
            <p>
              <img src="@/assets/images/haibao_03.jpg">
              <span>13</span>
            </p>
            <p>
              <span>喜剧风格引发深度思考，精彩！精彩！精彩！非常值得一看!</span>
              <strong>
                <el-rate
                  v-model="value5"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate>
                2017年12月23日
              </strong>
            </p>
          </li>
          <li>
            <p>
              <img src="@/assets/images/haibao_03.jpg">
              <span>14</span>
            </p>
            <p>
              <span>喜剧风格引发深度思考，精彩！精彩！精彩！非常值得一看!</span>
              <strong>
                <el-rate
                  v-model="value5"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate>
                2017年12月23日
              </strong>
            </p>
          </li>
          <li>
            <p>
              <img src="@/assets/images/haibao_03.jpg">
              <span>15</span>
            </p>
            <p>
              <span>喜剧风格引发深度思考，精彩！精彩！精彩！非常值得一看!</span>
              <strong>
                <el-rate
                  v-model="value5"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate>
                2017年12月23日
              </strong>
            </p>
          </li>
          <li>
            <p>
              <img src="@/assets/images/haibao_03.jpg">
              <span>16</span>
            </p>
            <p>
              <span>喜剧风格引发深度思考，精彩！精彩！精彩！非常值得一看!</span>
              <strong>
                <el-rate
                  v-model="value5"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate>
                2017年12月23日
              </strong>
            </p>
          </li>
          <li>
            <p>
              <img src="@/assets/images/haibao_03.jpg">
              <span>17</span>
            </p>
            <p>
              <span>喜剧风格引发深度思考，精彩！精彩！精彩！非常值得一看!</span>
              <strong>
                <el-rate
                  v-model="value5"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate>
                2017年12月23日
              </strong>
            </p>
          </li>
          <li>
            <p>
              <img src="@/assets/images/haibao_03.jpg">
              <span>18</span>
            </p>
            <p>
              <span>喜剧风格引发深度思考，精彩！精彩！精彩！非常值得一看!</span>
              <strong>
                <el-rate
                  v-model="value5"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate>
                2017年12月23日
              </strong>
            </p>
          </li>
        </ul>
      </div>
      <div class="right">
        <dl>
          <dt>热门推荐</dt>
          <dd class="recommend">
            <img src="@/assets/images/haibao_03.jpg">
             大型多媒体励志互动儿童剧《爱丽丝梦幻仙境》( 11月 )
          </dd>
          <dd>
            大型多媒体励志互动儿童剧《爱丽丝梦幻仙境》( 11月 )
            <p>2017-09-17-2017-09-17</p>
          </dd>
          <dd>
            大型多媒体励志互动儿童剧《爱丽丝梦幻仙境》( 11月 )
            <p>2017-09-17-2017-09-17</p>
          </dd>
          <dd>
          大型多媒体励志互动儿童剧《爱丽丝梦幻仙境》( 11月 )
            <p>2017-09-17-2017-09-17</p>
          </dd>
          <dd>
            大型多媒体励志互动儿童剧《爱丽丝梦幻仙境》( 11月 )
            <p>2017-09-17-2017-09-17</p>
          </dd>
          <dd>
            大型多媒体励志互动儿童剧《爱丽丝梦幻仙境 ( 11月 )
            <p>2017-09-17-2017-09-17</p>
          </dd>
        </dl>
        <dl>
          <dt>浏览历史</dt>
          <dd>
            大型多媒体励志互动儿童剧《爱丽丝梦幻仙境》( 11月 )
            <p>2017-09-17-2017-09-17</p>
          </dd>
          <dd>
            大型多媒体励志互动儿童剧《爱丽丝梦幻仙境》( 11月 )
            <p>2017-09-17-2017-09-17</p>
          </dd>
          <dd>
            大型多媒体励志互动儿童剧《爱丽丝梦幻仙境》( 11月 )
            <p>2017-09-17-2017-09-17</p>
          </dd>
          <dd>
            大型多媒体励志互动儿童剧《爱丽丝梦幻仙境》( 11月 )
            <p>2017-09-17-2017-09-17</p>
          </dd>
          <dd>
            大型多媒体励志互动儿童剧《爱丽丝梦幻仙境》( 11月 )
            <p>2017-09-17-2017-09-17</p>
          </dd>
          <dd>
            大型多媒体励志互动儿童剧《爱丽丝梦幻仙境》( 11月 )
            <p>2017-09-17-2017-09-17</p>
          </dd>
          <dd>
            大型多媒体励志互动儿童剧《爱丽丝梦幻仙境》( 11月 )
            <p>2017-09-17-2017-09-17</p>
          </dd>
          <dd>
            大型多媒体励志互动儿童剧《爱丽丝梦幻仙境》( 11月 )
            <p>2017-09-17-2017-09-17</p>
          </dd>
          <dd>
            大型多媒体励志互动儿童剧《爱丽丝梦幻仙境》( 11月 )
            <p>2017-09-17-2017-09-17</p>
          </dd>
          <dd>
            大型多媒体励志互动儿童剧《爱丽丝梦幻仙境》( 11月 )
            <p>2017-09-17-2017-09-17</p>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Details'
}
</script>

<style scoped lang="less">
  #details{
    .head{
      width: 1200px;
      height: 50px;
      line-height: 50px;
      margin: 0 auto;
      background: #f6f6f6;
      p{
        text-indent: 21px;
        font-size: 12px;
        span{
          color: #ff3c1b;
        }
      }
    }
    #box{
      width: 1200px;
      height: 457px;
      background: white;
      margin: 0 auto;
      overflow: hidden;
      margin-bottom: 30px;
      .information{
        padding: 31px 11px 18px 22px;
        float: left;
        overflow: hidden;
        img{
          width: 277px;
          height: 372px;
          float: left;
        }
        .content{
          width: 600px;
          float: left;
          margin-left: 19px;
          h2{
            font-size: 20px;
            margin-bottom: 38px;
          }
          p{
            font-size: 16px;
            color: #495060;
            margin-bottom: 23px;
          }
          img{
            width: 600px;
            height: 84px;
            display: block;
          }
          .time{
            width: 100%;
            overflow: hidden;
            span{
              display: inline-block;
              margin-top: 56px;
              font-size: 12px;
              float: left;
            }
            ul{
              overflow: hidden;
              margin-top: 22px;
              li{
                border: 1px solid #ccc;
                border-radius: 4px;
                padding: 8px 20px;
                display: inline-block;
                font-size: 12px;
                margin-left: 10px;
                margin-top: 5px;
              }
              .selection{
                border: 1px solid #ff3c1b;
                color: #ff3c1b;
              }
            }
          }
          .ticket{
            width: 100%;
            height: 36px;
            overflow: hidden;
            margin-top: 25px;
            span{
              display: inline-block;
              font-size: 14px;
              float: left;
              margin-top: 8px;
            }
            ul{
              li{
                display: inline-block;
                padding: 8px 13px;
                border: 1px solid #ccc;
                border-radius: 3px;
                font-size: 12px;
                margin-left: 12px;
              }
              .on{
                background: #f7f7f7;
                color: #ccc;
              }
            }
          }
          a{
            display: inline-block;
            button{
              width: 152px;
              height: 41px;
              border-radius: 4px;
              font-size: 16px;
              color: white;
              background: #ff3c1b;
              margin: 12px 0 0 66px;
            }
          }
        }
      }
      .score{
        float: left;
        dl:nth-of-type(1){
          width: 263px;
          border-bottom: 1px dashed #ccc;
          dt{
            font-size: 14px;
            margin-top: 34px;
            margin-bottom: 19px;
          }
          dd{
            display: flex;
            font-size: 12px;
            margin-bottom: 18px;
            span{
              display: inline-block;
              margin-left: 8px;
              color: #ff3c1b;
            }
          }
        }
        dl{
          border-bottom: 1px dashed #ccc;
          dt{
            font-size: 12px;
            margin: 12px 0 20px 0;
          }
          dd{
            font-size: 12px;
            margin-bottom: 12px;
            i{
              color: #ff3c1b;
            }
          }
        }
      }
    }
    #box1{
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      .left{
        width: 915px;
        height: 2269px;
        float: left;
        background: white;
        ul{
          width: 100%;
          overflow: hidden;
          margin-bottom: 42px;
          li{
            float: left;
            font-size: 16px;
            padding: 7px 17px;
          }
          .selection1{
            border-top: 3px solid #ff3c1b;
          }
        }
        .information{
          width: 899px;
          height: 27px;
          line-height: 27px;
          border-left: 2px solid #ff3c1b;
          margin-left: 30px;
          span{
            display: inline-block;
            margin-left: 9px;
            font-size: 18px;
          }
          strong{
            width: 765px;
            display: inline-block;
            border-bottom: 1px dashed #ccc;
            margin-left: 30px;
          }
        }
        .information:nth-of-type(3){
          margin: 22px 0 25px 40px;
        }
        img{
          margin: 35px 0 39px 130px;
        }
        dl{
          width: 721px;
          margin-left: 143px;
          dt{
            width: 721px;
            height: 41px;
            line-height: 41px;
            background: #eee;
            text-indent: 8px;
            margin: 22px 0;
          }
          dd{
            width: 721px;
            font-size: 12px;
            line-height: 22px;
            img{
              width: 277px;
              height: 372px;
              margin:0 0 9px 230px;
            }
          }
        }
        .comments{
          width: 721px;
          margin-left: 143px;
          .stars{
            display: flex;
            margin-bottom: 9px;
            span{
              display: inline-block;
              margin-right: 8px;
            }
          }
          textarea{
            width: 741px;
            border-radius: 5px;
            border: 1px solid #ccc;
            text-indent: 7px;
          }
          a{
            margin: 20px 0 20px 20px;
            display: inline-block;
            button{
              width: 153px;
              height: 42px;
              border-radius: 5px;
              background: #ff3c1b;
              color: white;
              font-size: 14px;
            }
          }
        }
        ul{
          li{
            width: 847px;
            overflow: hidden;
            margin-: 20px 0 39px 0;
            p:nth-of-type(1){
              float: left;
              img{
                width: 45px;
                height: 45px;
                margin: 0;
              }
              span{
                display: inline-block;
                margin-left: 13px;
                font-size: 12px;
              }
            }
            p:nth-of-type(2){
              width: 742px;
              height: 87px;
              background: #f0f0f0;
              float: right;
              span{
                display: inline-block;
                margin: 23px 0 0 20px;
                font-size: 14px;
              }
              strong{
                display: inline-block;
                display: flex;
                margin: 20px;
                font-size: 12px;
              }
            }
          }
        }
      }
      .right{
        width: 264px;
        float: right;

        dl{
          background: white;
          padding: 0 6px 34px 6px;
          dt{
            width: 100%;
            height: 33px;
            line-height: 33px;
            border-bottom: 1px solid #ccc;
            font-size: 16px;
            margin-bottom: 18px;
          }
          dd{
            font-size: 12px;
            line-height: 24px;
            border-bottom: 1px dashed #ccc;
            p{
              margin-bottom: 8px;
            }
          }
          .recommend{
            font-size: 12px;
            text-align: center;
            line-height: 24px;
            border-bottom: 1px dashed #ccc;
            img{
              width: 100%;
              height: 356px;
            }
          }
          dd:nth-of-type(6){
            border-bottom: 1px solid #ccc;
          }
        }
        dl:nth-of-type(2){
          margin-top: 10px;
        }
        dd:nth-of-type(10){
          border-bottom: 1px solid #ccc;
        }
      }
    }
  }
</style>
