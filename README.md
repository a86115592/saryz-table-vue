# saryz-table-vue
一个基于elementUI的快速列表创建组件，使用最少的dom代码自动呈现所需的外观，配置类似于Jquery easyUI
## 安装 install
```
npm install saryz-table-vue --save
```

组件依赖 [elementUI](https://element.eleme.io/#/zh-CN)  
dependence [elementUI](https://element.eleme.io/#/zh-CN)
### 快速使用 Quick to use
```
// main.js 全局引用 Global references
import SaryzTable from 'saryz-table-vue'
import 'saryz-table-vue/lib/saryz-table-vue.css'

Vue.use(SaryzTable)
```
```
// xxxxxx.vue 使用 use
<template>
  <div class="table_demo">
    <SaryzTable :colsOption="colsOption" :tableData="tableData" :height="500"></SaryzTable>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        { name: '刘德华', phoneNumber: '13989876567' },
        { name: '刘德华', phoneNumber: '13989876567' },
        { name: '刘德华', phoneNumber: '13989876567' }
      ],
      colsOption: [
        {
          id: 'name',
          name: '姓名',
          width: ''
        }, {
          id: 'phoneNumber',
          name: '电话',
          width: '120'
        }
      ]
    }
  }
}
</script>
<style>
  .table_demo {
    padding: 30px;
    border: 1px solid #ccc;
    width: 1000px;
    margin: 30px auto;
    background: #fff;
  }
</style>
```
Props  

|  Name   | Type  |  Default   | Description  |
|  ----  | ----  |  ----  | ----  |
| colsOption  | Array | []  | 表格列定义,详见下面 |
| tableData  | Array | []  | 表格源数据 |
| height  | Number | null  | 表格高度，超出高度部分自动出现滚动条 |
| pagination  | Boolean | true  | 分页控件 |
| checkbox  | Boolean | false  | 是否显示多选框 |
| border  | Boolean | false  | 是否显示边框 |
| ccslh  | Boolean | true  | 超出部分省略号，如为true，表格单元格超出设置宽度不换行，自动出现省略号 |
| selectedRowsData  | Array | []  | 已选择行数据,用于数据回填 |
| emptyText  | String | '暂无数据'  | 空数据时显示默认提示内容 |
| rowKey  | String | ''  | 行数据唯一标识,行数据选择操作时必填 |
| miniTable  | Boolean | false  | 小表格 表格字体会缩小 |
| rowStyle  | Function | () => {}  | 表格自定义样式 |
| filterObj  | Object | () => {return {key:'',name:''}}  | 过滤器配置 |
| filterSwitch  | Boolean | false  | 过滤器开关 |
| sortable  | Boolean | true  | 是否排序 , 全部前端数据排序 |
| indexNum  | Boolean | true  | 行号 |
colsOption:列定义  

|  Name   | Type  |  Required Fields   | Description  |
|  ----  | ----  |  ----  | ----  |
| id  | String | required  | 表格列定义 |
| name  | String | required  | 列名称 |
| width  | String/Number |   | 列宽 |
| align  | String(center,left,right) |   | 对齐方式 |
| formatter  | Function(value,rowData) |   | 数据过滤，需要return |
| hideSortable  | Boolean |   | 是否对该列取消排序，默认id为handle自动取消排序 |
| component  | Component |   | 自定义组件，通常用于放置通用按钮或者图片等 |
| componentCallBack  | Function(data) |   | 自定义组件回调，接收自定义组件回调方法 |
| params  | Object |   | 传给自定义组件的参数 |

### demo
[https://saryz-ui.github.io/](https://saryz-ui.github.io/)

