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
  @import "~@/assets/less/details";
</style>
