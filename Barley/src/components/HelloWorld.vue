<template>
  <div class="hello" style="height: 4000px">
    <!-- 公共头部 -->
    <Headpublic></Headpublic>
    <!-- 公共头部 -->
    <!-- 试验element插件库 -->
    <p>试验element插件库</p>
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 试验element插件库 -->
    <!-- 返回顶部 -->
    <BackTop></BackTop>
    <!-- 返回顶部 -->
    <!-- 公共底部 -->
    <Footpublic></Footpublic>
    <!-- 公共底部 -->
  </div>
</template>

<script>
// 头部引入
import Headpublic from '@/components/lib/Headpublic'
// 底部引入
import Footpublic from '@/components/lib/Footpublic'
// 返回顶部引入
import BackTop from '@/components/lib/BackTop'

// 引用局部组件内部
// tween.js引用示例
// import TWEEN from 'tween.js'
// better-scroll引用示例
// import BScroll from 'better-scroll'
export default {
  name: 'HelloWorld',
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(() => {
          done()
        })
        .catch(() => {})
    }
  },
  components: {
    Headpublic,
    Footpublic,
    BackTop
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
