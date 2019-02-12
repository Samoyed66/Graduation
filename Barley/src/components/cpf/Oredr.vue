<template>
  <div id="order">
    <h1>
      我的大麦>交易中心>订单管理
    </h1>
    <!--近期订单列表-->
    <div class="order-wrap">
      <h2>
        近期订单列表
      </h2>
      <div class="head">
        <div class="left">
          <el-col :span="14">
            <el-dropdown trigger="click">
          <span class="el-dropdown-link">
           全部订单<i class="fa fa-caret-down"></i>
          </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item>双皮奶</el-dropdown-item>
                <el-dropdown-item>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :span="14">
            <el-dropdown trigger="click">
          <span class="el-dropdown-link">
           全部<i class="fa fa-caret-down"></i>
          </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item>双皮奶</el-dropdown-item>
                <el-dropdown-item>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </div>
        <div class="seach-right">
          <input type="input" placeholder="请输入订单编号/商品名称...">
          <button>查询</button>
        </div>
      </div>
      <!--订单详情-->
      <table width="100%">
        <tr>
          <th>订单编号</th>
          <th>购买时间</th>
          <th>商品名称</th>
          <th>数量</th>
          <th>单价</th>
          <th>订单金额</th>
          <th>交易状态</th>
          <th>操作</th>
        </tr>
        <tr>
          <td>60156468718</td>
          <td>2018-05-14 14:31:23</td>
          <td>商品名称</td>
          <td>2</td>
          <td>1230</td>
          <td>2341</td>
          <td>未支付</td>
          <td>操作</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'oredr'
}
</script>

<style lang="less" scoped>
#order{
  h1{
    height: 38px;
    line-height: 38px;
    border-bottom: 1px solid #ccc;
  }
  .order-wrap{
    margin-top: 36px;
    h2{
      width: 120px;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: red;
      border-bottom: 1px solid red;
    }
    .head{
      display: flex;
      justify-content: space-between;
      margin: 16px 0 26px;
      .left{
        display: flex;
        .el-col{
          margin-right: 8px;
          .el-dropdown{
            padding: 8px;
            width: 148px;
            border: 1px solid #ccc;
            border-radius: 6px;
          }
          .el-dropdown-link{
            display: inline-block;
            width: 100%;
            cursor: pointer;
            .fa{
              float: right;
            }
          }
        }
      }
      .seach-right{
        input{
          width: 300px;
          height: 38px;
          border-radius: 6px;
          border: 1px solid #ccc;
          text-indent: 6px;
        }
        button{
          width: 54px;
          height: 38px;
          border-radius: 6px;
          border: 1px solid #ccc;
          background: white;
          cursor: pointer;
        }
      }
    }
    table{
      th{
        padding: 16px;
        border: 1px solid #ccc;
      }
      td{
        padding: 16px;
        border: 1px solid #ccc;
      }
    }
  }
}
</style>
