<template>
  <div>
    <el-table
      :data="(pagination?tableDataComputed.slice((currentPage-1)*pageSize,currentPage*pageSize):tableDataComputed)
      .filter(data => !filterObj['name'] || data[filterObj['key']].toLowerCase().includes(filterObj['name'].toLowerCase()))"
      style="width: 100%"
      :height="height"
      :class="{'mini-table':miniTable,'saryz_table':'true'}"
      stripe
      :border="border"
      ref="multipleTable"
      @row-click="rowClick"
      @sort-change="sortChange"
      :row-key="rowKey"
      :row-style="rowStyle"
      :empty-text="emptyText"
      @selection-change="handleSelectionChange"
      :row-class-name="tableRowClassName">
      <el-table-column
        type="index"
        v-if="indexNum"
        :class-name="'saryz_table_index'"
        :width="miniTable?'36px':'48px'"
        :index="indexMethod">
      </el-table-column>
      <el-table-column
        v-if="checkbox"
        type="selection"
        :reserve-selection="true"
        align="center"
        width="45">
      </el-table-column>
      <el-table-column
        v-for="option in colsOption"
        :prop="option.id"
        :label="option.name"
        :align="option.align"
        :sortable="sortable&&!option.hideSortable&&option.id!=='handle'"
        :formatter="option.formatter"
        :width="option.width">
        <template slot-scope="scope">
          <div v-if="option.component">
            <component :is="option.component"
                       :rowData="scope.row"
                       :params="option.params"
                       @component-callback="componentCallBack($event,option.componentCallBack)">
            </component>
          </div>
          <div :class="{'ccslh':ccslh}" v-if="!option.component&&!option.formatter"
               :title="ccslh&&scope.row[option.id]">
            {{scope.row[option.id]}}
          </div>
          <div :class="{'ccslh':ccslh}" v-if="!option.component&&option.formatter"
               :title="ccslh&&option.formatter(scope.row[option.id],scope.row)"
               v-html="option.formatter(scope.row[option.id],scope.row)"></div>
        </template>
      </el-table-column>
    </el-table>
    <div v-if="pagination" class="table_page">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40, 50, 100, 200]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableDataComputed.length">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SaryzTable',
  props: {
    'colsOption': {
      type: Array,
      default: []
    },
    'tableData': {
      type: Array,
      default: []
    },
    'height': {
      type: Number,
      default: null
    },
    'pagination': {
      type: Boolean,
      default: true
    },
    'checkbox': {
      type: Boolean,
      default: false
    },
    'border': {
      type: Boolean,
      default: false
    },
    'ccslh': {
      type: Boolean,
      default: true
    },
    'selectedRowsData': {
      type: Array,
      default: () => {
        return []
      }
    },
    'emptyText': {
      type: String,
      default: '暂无数据'
    },
    'rowKey': {
      type: String,
      default: ''
    },
    'miniTable': {
      type: Boolean,
      default: () => {
        return false
      }
    },
    'rowStyle': {
      type: Function,
      default: () => {
      }
    },
    'filterObj': {
      type: Object,
      default: () => {
        return {
          key: '',
          name: ''
        }
      }
    },
    'filterSwitch': {
      type: Boolean,
      default: () => {
        return false
      }
    },
    'sortable': {
      type: Boolean,
      default: () => {
        return true
      }
    },
    'indexNum': {
      type: Boolean,
      default: () => {
        return true
      }
    }
  },
  data () {
    return {
      currentPage: 1,
      pageSize: 10,
      selectedRow: this.selectedRowsData,
      multipleSelection: [],
      search: ''
    }
  },
  mounted () {
    if (this.selectedRow.length > 0) {
      this.$nextTick(function () {
        this.selectedRow.forEach(data => {
          this.$refs.multipleTable.toggleRowSelection(this.tableData.find(d => d[ this.rowKey ] === data[ this.rowKey ]))
        })
      })
    }
  },
  methods: {
    componentCallBack (data, fn) {
      fn && fn(data)
    },
    handleSizeChange (num) {
      this.pageSize = num
    },
    tableRowClassName ({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    },
    rowClick (row, column, event) {
      this.$refs.multipleTable.toggleRowSelection(row)
      this.$emit('rowClick', row)
    },
    // 分页事件
    handleCurrentChange (page) {
      this.currentPage = page
      // console.log(this.multipleSelection[ this.currentPage ])
      // if (this.multipleSelection[ this.currentPage ]) {
      //   this.toggleSelection(this.multipleSelection[ this.currentPage ])
      // }
    },
    toggleSelection (rows) {
      this.$nextTick(function () {
        rows.forEach(data => {
          this.$refs.multipleTable.toggleRowSelection(this.tableData.find(d => d[ this.rowKey ] === data[ this.rowKey ]))
        })
      })
    },
    handleSelectionChange (selection, row) {
      // this.multipleSelection[ this.currentPage ] = selection
      // this.$refs.multipleTable.selection = []
    },
    sortChange (arg) {
      // console.log('arg', arg)
      if (arg.column) {
        let sortTableData = [ ...this.tableData ]
        if (arg.order === 'descending') {
          if (arg.prop === 'id') {
            this.tableData.sort(this.sortByProp(arg.prop, true))
          } else {
            this.tableData.sort(this.sortByName(arg.prop, true))
          }
        } else if (arg.order === 'ascending') {
          if (arg.prop === 'id') {
            this.tableData.sort(this.sortByProp(arg.prop, false))
          } else {
            this.tableData.sort(this.sortByName(arg.prop, false))
          }
        }
        // TODO 暂时未添加返回原来排序，需要时再加吧
        // else {
        //   this.tableData = sortTableData
        // }
        // this.tableData = sortTableData
      }
      this.currentPage = 1
    },
    sortByProp (sortKey, order) {
      if (order) {
        return (a, b) => {
          return b[ sortKey ] - a[ sortKey ]
        }
      } else {
        return (a, b) => {
          return a[ sortKey ] - b[ sortKey ]
        }
      }
    },
    sortByName (sortKey, order) {
      if (order) {
        return (a, b) => {
          a[ sortKey ] = this.isNull(a[ sortKey ]) ? '' : a[ sortKey ]
          b[ sortKey ] = this.isNull(b[ sortKey ]) ? '' : b[ sortKey ]
          return typeof b[ sortKey ] === 'string' ? b[ sortKey ].localeCompare(a[ sortKey ]) : ('' + b[ sortKey ]).localeCompare('' + a[ sortKey ])
        }
      } else {
        return (a, b) => {
          a[ sortKey ] = this.isNull(a[ sortKey ]) ? '' : a[ sortKey ]
          b[ sortKey ] = this.isNull(b[ sortKey ]) ? '' : b[ sortKey ]
          return typeof a[ sortKey ] === 'string' ? a[ sortKey ].localeCompare(b[ sortKey ]) : ('' + a[ sortKey ]).localeCompare('' + b[ sortKey ])
        }
      }
    },
    isNull (arg) {
      return !!(!arg && arg !== 0 && typeof arg !== 'boolean')
    },
    indexMethod (index) {
      return (this.currentPage - 1) * this.pageSize + index + 1
    }
  },
  computed: {
    tableDataComputed: function () {
      this.currentPage = 1
      return this.tableData
    }
  }
}
</script>

<style scoped>

</style>
