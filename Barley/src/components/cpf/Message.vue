<template>
    <div id="message">
      <h1>
        我的大麦>账户中心>个人信息
      </h1>
      <!--主体内容-选项卡-->
      <div class="content-wrap">
        <ul>
          <li @click="select(index)" :class="{'active':isActive == index}" v-for="(item, index) in minedata" :key="index">
            {{item}}
          </li>
        </ul>
        <div class="tip">
          完善更多个人信息，有助于我们提供更加完善的活动，我们尊重并保护您的个人隐私
        </div>
        <div class="content" :style="[{display:isActive == 0 ? 'block' : 'none'}]">
          <el-form label-position="right" label-width="80px" :model="formLabelAlign">
            <el-form-item label="昵称" class="is-required">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="联系电话"  class="is-required">
              <el-input v-model="formLabelAlign.telphone"></el-input>
            </el-form-item>
            <el-form-item label="真实姓名">
              <el-input v-model="formLabelAlign.realname"></el-input>
            </el-form-item>
            <el-form-item label="身份证号">
              <el-input v-model="formLabelAlign.id"></el-input>
            </el-form-item>
            <el-form-item label="生日">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.date" style="width: 100%;"></el-date-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="性别">
              <el-radio-group v-model="formLabelAlign.resource">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">保存</el-button>
              <el-button>重置</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="content" :style="[{display:isActive == 1 ? 'block' : 'none'}]">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" v-lazy="dialogImageUrl">
          </el-dialog>
        </div>
        <div class="content" :style="[{display:isActive == 2 ? 'block' : 'none'}]">
          <textarea cols="100" rows="5" placeholder="请输入兴趣爱好"></textarea>
          <button>保存</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Message',
  data () {
    return {
      minedata: ['基本资料', '头像设置', '兴趣爱好'],
      formLabelAlign: {
        name: '',
        telphone: '',
        realname: '',
        id: '',
        date: '',
        resource: ''
      },
      value1: '',
      isActive: 0,
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    select: function (index) {
      this.isActive = index
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="less" scoped>
#message{
  margin-bottom: 71px;
  h1{
    height: 38px;
    line-height: 38px;
    border-bottom: 1px solid #ccc;
  }
  .content-wrap{
    margin-top: 20px;
    border-left: 1px solid #ccc;
    ul{
      height: 38px;
      border-bottom: 1px solid #ccc;
      li{
        float: left;
        margin-right: 10px;
        border: 1px solid #969696;
        padding: 8px 16px;
        border-bottom: none;
        position: relative;
        background: #ccc;
        cursor: pointer;
      }
      li.active{
        background: white;
        &:before{
          content: '';
          display: block;
          width: 100%;
          height: 1px;
          position: absolute;
          left: 0;
          bottom: -1px;
          background: white;
        }
      }
      li:first-of-type{
        border-left: none;
      }
    }
    .content{
      padding-left: 30px;
      textarea{
        border: 1px solid #ff3c1b;
        border-radius: 5px;
        box-sizing: border-box;
        padding: 5px;
        margin-bottom: 20px;
      }
      &:nth-of-type(4){
        button{
          display: block;
          width: 48px;
          height: 30px;
          background: #ff3c1b;
          color: white;
          border-radius: 5px;
          cursor: pointer;
        }
      }
    }
    .tip{
      border: 1px solid #edd28b;
      background: #fffdee;
      padding: 12px 26px;
      margin: 20px 0 20px 30px;
    }
  }
}
</style>
