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
              <i class="fa fa-reorder in"></i><i class="fa fa-th-large"></i>
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
  @import "~@/assets/less/list";
</style>
