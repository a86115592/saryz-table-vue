<template>
  <div>
    <el-button size="mini" type="success" icon="el-icon-delete" @click="showAlert">传值</el-button>
    <el-button size="mini" icon="el-icon-delete" @click="callBack">回调</el-button>
  </div>
</template>

<script>
  export default {
    props: ['rowData', 'params'],
    created() {
      console.log('rowData', this.params)
    },
    methods: {
      showAlert() {
        alert(JSON.stringify('传入自定义组件中的值rowData'+JSON.stringify(this.rowData)+',params'+JSON.stringify(this.params)))

      },
      callBack() {
        this.$emit('component-callback', this.rowData)
      }
    }
  }
</script>

