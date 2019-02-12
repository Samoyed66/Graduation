<template>
    <div id="ticket">
      <h1>
        我的大麦>账户中心>常用购票人
      </h1>
      <el-button type="danger">危险按钮</el-button>
      <table width="100%">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>卡类型</th>
            <th>身份证号</th>
            <th>操作</th>
          </tr>
        </thead>
        <tr>
          <td>1</td>
          <td>小明</td>
          <td>商品名称</td>
          <td>60156468718</td>
          <td>
            <el-button  size="mini" type="danger">删除</el-button>
          </td>
        </tr>
      </table>
    </div>
</template>

<script>
export default {
  name: 'Ticket'
}
</script>

<style lang="less" scoped>
#ticket{
  h1{
    height: 38px;
    line-height: 38px;
    border-bottom: 1px solid #ccc;
  }
  &>button{
    float: right;
    margin: 30px 0;
  }
  table{
    thead{
      background: #eeeeee;
      th{
        border: 1px solid #ccc;
        padding: 8px 6px;
      }
    }
    td{
      border: 1px solid #ccc;
      padding: 10px 8px;
    }
  }
}
</style>
