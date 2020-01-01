<template>
  <div class="table_demo">
    <div class="header">
      saryz-table-vue
    </div>

    <div class="content">
      <h1 class="h1-header"> 说明 </h1>
      <div>
        一个基于elementUI的快速列表创建组件，使用最少的dom代码自动呈现所需的外观，配置类似于Jquery easyUI
      </div>
      <h1 class="h1-header"> 提前依赖 </h1>
      <div>
        <a href="https://element.eleme.io/#/zh-CN">ElementUI</a>
      </div>
      <h1 class="h1-header"> 安装 </h1>
      <pre>npm install saryz-table-vue --save</pre>
      <h1 class="h1-header"> 引用 </h1>
      <pre>
// main.js 全局引用 Global references
import SaryzTable from 'saryz-table-vue'
import 'saryz-table-vue/lib/saryz-table-vue.css'
Vue.use(SaryzTable)</pre>
      <h1 class="h1-header"> 快速使用 </h1>
      <div class="show_demo">
        <SaryzTable :colsOption="colsOption" :tableData="tableData"></SaryzTable>
      </div>
      <pre>
&ltSaryzTable :colsOption="colsOption" :tableData="tableData"&gt&lt/SaryzTable&gt
data() {
  return {
    tableData: [
      {name: '刘德华', phoneNumber: '13989876567'},
      {name: '梁朝伟', phoneNumber: '13989876567'},
      {name: '周润发', phoneNumber: '13989876567'},
      {name: '古天乐', phoneNumber: '13989876567'}
    ],
    colsOption: [
      {id: 'name', name: '姓名', width: ''},
      {id: 'phoneNumber', name: '电话', width: '120'}
    ]
  }
}</pre>
      <h1 class="h1-header"> Props </h1>
      <TableApi></TableApi>
      <h1 class="h1-header"> Demo </h1>
      <h4 class="h4-header">小表格</h4>
      <div class="show_demo">
        <SaryzTable :colsOption="colsOption" :tableData="tableData" :miniTable="true"></SaryzTable>
      </div>
      <pre>&ltSaryzTable :colsOption="colsOption" :tableData="tableData" :miniTable="true"&gt&lt/SaryzTable&gt</pre>
      <h4 class="h4-header">高度固定</h4>
      <div class="show_demo">
        <SaryzTable :colsOption="colsOption" :tableData="tableData2" :height="500"></SaryzTable>
      </div>
      <pre>&ltSaryzTable :colsOption="colsOption" :tableData="tableData" :height="500"&gt&lt/SaryzTable&gt</pre>
      <h4 class="h4-header">文字不换行，鼠标悬停显示全部</h4>
      <div class="show_demo">
        <SaryzTable :colsOption="colsOption3" :tableData="tableData3"></SaryzTable>
      </div>
      <h4 class="h4-header">数据选择及回填</h4>
      <div class="show_demo">
        <SaryzTable ref="selectItemTable" :colsOption="colsOption" :tableData="tableData" :checkbox="true"
                    :selectedRowsData="selectData" @rowClick="rowClick" :rowKey="'id'"></SaryzTable>
        <div style="margin-bottom:20px;">
          {{selectedRowsData}}
        </div>
      </div>
      <pre>&ltSaryzTable ref="selectItemTable" :colsOption="colsOption" :tableData="tableData" :checkbox="true" :selectedRowsData="selectData"
        @rowClick="rowClick" :rowKey="'id'"&gt&lt/SaryzTable&gt
      tableData: [
        {id: '1', name: '刘德华', phoneNumber: '13989876567'},
        {id: '2', name: '梁朝伟', phoneNumber: '13989876567'},
        {id: '3', name: '周润发', phoneNumber: '13989876567'},
        {id: '4', name: '古天乐', phoneNumber: '13989876567'}
      ],
      selectedRowsData: [],
      selectData: [
        {id: '1', name: '刘德华', phoneNumber: '13989876567'},
        {id: '3', name: '周润发', phoneNumber: '13989876567'}
      ]

      rowClick() {
        this.selectedRowsData = this.$refs.selectItemTable.$refs.multipleTable.selection
      }
      </pre>
      <h4 class="h4-header">数据过滤</h4>
      <div class="show_demo">
        <SaryzTable :colsOption="colsOption4" :tableData="tableData4"></SaryzTable>
      </div>
      <pre>
tableData4: [
  {id: '1', name: '刘德华', phoneNumber: '13989876567', sex: 1},
  {id: '2', name: '梁朝伟', phoneNumber: '13989876567', sex: 1},
  {id: '3', name: '周润发', phoneNumber: '13989876567', sex: 1},
  {id: '4', name: '迪丽热巴', phoneNumber: '13989876567', sex: 2}
],
colsOption4: [
  {id: 'name', name: '姓名', width: '150', align: 'center'},
  {
    id: 'sex', name: '性别', align: 'center',
    formatter: (value, data) => {
      return value === 1 ? '男' : '女'
    }
  },
  {id: 'phoneNumber', name: '电话', width: '220', align: 'center'}
]
      </pre>
      <h4 class="h4-header">动态组件</h4>
      <div class="show_demo">
        <SaryzTable :colsOption="colsOption5" :tableData="tableData4"></SaryzTable>
      </div>
      <pre>
import handleDemo from './handle-demo'
colsOption5: [
  {id: 'name', name: '姓名', width: '150', align: 'center'},
  {
    id: 'sex', name: '性别', align: 'center',
    formatter: (value, data) => {
      return value === 1 ? '男' : '女'
    }
  },
  {id: 'phoneNumber', name: '电话', width: '220', align: 'center'},
  {
    id: 'handle', name: '操作', width: '220',
    component: handleDemo,
    params: {type: 'single'},
    componentCallBack: data => {
      // this.tableData.radio.list.splice(this.tableData.radio.list.findIndex(d => d.id === data.id), 1)
      alert('从自定义组件传回来的值'+JSON.stringify(data))
    }
  }
]

// handle-demo.vue
&lttemplate&gt
  &ltdiv&gt
    &ltel-button size="mini" type="success" icon="el-icon-delete" @click="showAlert"&gt传值&lt/el-button&gt
    &ltel-button size="mini" icon="el-icon-delete" @click="callBack"&gt回调&lt/el-button&gt
  &lt/div&gt
&lt/template&gt

&ltscript&gt
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
&lt/script&gt


      </pre>
    </div>
    <div class="footer">
      <div class="footer_box">
        <p>如果对您的项目有帮助，欢迎打赏</p>
        <img class="erweima" src="/images/erweima.png" alt="">
        <div class="other_link">
          <a href="https://github.com/a86115592/saryz-table-vue" target="_blank">Github</a>
          <a href="https://www.npmjs.com/package/saryz-table-vue" target="_blank">Npm</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TableApi from './table-api'
  import handleDemo from './handle-demo'

  export default {
    components: {TableApi},
    name: 'home',
    data() {
      return {
        tableData: [
          {id: '1', name: '刘德华', phoneNumber: '13989876567'},
          {id: '2', name: '梁朝伟', phoneNumber: '13989876567'},
          {id: '3', name: '周润发', phoneNumber: '13989876567'},
          {id: '4', name: '古天乐', phoneNumber: '13989876567'}
        ],
        tableData2: [
          {name: '刘德华', phoneNumber: '13989876567'},
          {name: '梁朝伟', phoneNumber: '13989876567'},
          {name: '周润发', phoneNumber: '13989876567'},
          {name: '古天乐', phoneNumber: '13989876567'},
          {name: '刘德华', phoneNumber: '13989876567'},
          {name: '梁朝伟', phoneNumber: '13989876567'},
          {name: '周润发', phoneNumber: '13989876567'},
          {name: '古天乐', phoneNumber: '13989876567'},
          {name: '刘德华', phoneNumber: '13989876567'},
          {name: '梁朝伟', phoneNumber: '13989876567'},
          {name: '周润发', phoneNumber: '13989876567'},
          {name: '古天乐', phoneNumber: '13989876567'}
        ],
        tableData3: [
          {
            desc: '刘德华（Andy Lau），1961年9月27日出生于中国香港，籍贯广东新会 [1]  ，中国香港男演员、歌手、作词人、制片人。',
            phoneNumber: '13989876567',
            name: '刘德华'
          },
          {
            desc: '梁朝伟，1962年6月27日出生于中国香港，祖籍广东省台山市，中国香港男演员、歌手，国家一级演员，毕业于香港无线训练班第11期。',
            phoneNumber: '13989876567',
            name: '梁朝伟'
          },
          {
            desc: '周润发（Chow Yun Fat），1955年5月18日出生在香港南丫岛，籍贯广东开平，中国香港影视演员、摄影家，国家一级演员。',
            phoneNumber: '13989876567',
            name: '周润发'
          },
          {desc: '古天乐，1970年10月21日出生于中国香港，中国香港男演员、歌手。香港演艺人协会会长', phoneNumber: '13989876567', name: '古天乐'}
        ],
        colsOption: [
          {id: 'name', name: '姓名', width: ''},
          {id: 'phoneNumber', name: '电话', width: '120'}
        ],
        colsOption3: [
          {id: 'name', name: '姓名', width: '150', align: 'center'},
          {id: 'desc', name: '简介', align: 'center'},
          {id: 'phoneNumber', name: '电话', width: '220', align: 'center'}
        ],
        selectedRowsData: [],
        selectData: [
          {id: '1', name: '刘德华', phoneNumber: '13989876567'},
          {id: '3', name: '周润发', phoneNumber: '13989876567'}
        ],
        tableData4: [
          {id: '1', name: '刘德华', phoneNumber: '13989876567', sex: 1},
          {id: '2', name: '梁朝伟', phoneNumber: '13989876567', sex: 1},
          {id: '3', name: '周润发', phoneNumber: '13989876567', sex: 1},
          {id: '4', name: '迪丽热巴', phoneNumber: '13989876567', sex: 2}
        ],
        colsOption4: [
          {id: 'name', name: '姓名', width: '150', align: 'center'},
          {
            id: 'sex', name: '性别', align: 'center',
            formatter: (value, data) => {
              return value === 1 ? '男' : '女'
            }
          },
          {id: 'phoneNumber', name: '电话', width: '220', align: 'center'}
        ],
        colsOption5: [
          {id: 'name', name: '姓名', width: '150', align: 'center'},
          {
            id: 'sex', name: '性别', align: 'center',
            formatter: (value, data) => {
              return value === 1 ? '男' : '女'
            }
          },
          {id: 'phoneNumber', name: '电话', width: '220', align: 'center'},
          {
            id: 'handle', name: '操作', width: '220',
            component: handleDemo,
            params: {type: 'single'},
            componentCallBack: data => {
              // this.tableData.radio.list.splice(this.tableData.radio.list.findIndex(d => d.id === data.id), 1)
              alert('从自定义组件传回来的值' + JSON.stringify(data))
            }
          }
        ]
      }
    },
    mounted() {
      this.selectedRowsData = this.$refs.selectItemTable.$refs.multipleTable.selection
    },
    methods: {
      rowClick() {
        this.selectedRowsData = this.$refs.selectItemTable.$refs.multipleTable.selection
      }
    }
  }
</script>
<style>
  .table_demo {
    width: 100%;
    background: #fff;
  }

  .header {
    width: 100%;
    /*filter: blur(1px) brightness(50%);*/
    /*background: url("/images/header.jpg") no-repeat;*/
    /*background-size: 100% 100%;*/
    /*background-position: 100% 100%;*/
    background: #323234;
    color: #fff;
    height: 200px;
    line-height: 200px;
    font-size: 20px;
    text-align: center;
  }

  .content {
    width: 1000px;
    margin: 0 auto;
  }

  pre {
    background-color: #f3f6fa;
    border-radius: 5px;
    border: 1px solid #dce6f0;
    font-size: 12px;
    line-height: 25px;
    overflow: auto;
    padding: 10px 16px;
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace;
    margin-bottom: 20px;
  }

  .h1-header {
    color: #159957;
    font-weight: 400;
    margin: 32px 0 16px;
  }

  .h4-header {
    color: #159957;
    font-weight: 400;
    margin: 32px 0 16px;
  }

  .show_demo {
    padding: 30px;
    background: #F0F9EB;
    margin-bottom: 30px;
  }

  .footer {
    height: 300px;
    text-align: center;
    background: #323234;
    padding: 50px;
    color: #fff;
  }

  .footer .erweima {
    width: 200px;
    margin-top: 20px;
  }

  .footer_box {
    width: 1000px;
    margin: 0 auto;
  }

  .other_link {
    padding: 30px;
  }

  .other_link a {
    color: #fff;
    margin: 20px;
  }
</style>
