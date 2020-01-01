<template>
  <div class="table_api">
    <table>
      <tr>
        <th width="120px"> Name</th>
        <th width="100px"> Type</th>
        <th width="200px"> Default</th>
        <th> Description</th>
      </tr>
      <tr>
        <td>colsOption</td>
        <td>Array</td>
        <td>[]</td>
        <td>表格列定义,详见下面</td>
      </tr>
      <tr>
        <td>tableData</td>
        <td>Array</td>
        <td>[]</td>
        <td>表格源数据</td>
      </tr>
      <tr>
        <td>height</td>
        <td>Number</td>
        <td>null</td>
        <td>表格高度，超出高度部分自动出现滚动条</td>
      </tr>
      <tr>
        <td>pagination</td>
        <td>Boolean</td>
        <td>true</td>
        <td>分页控件</td>
      </tr>
      <tr>
        <td>checkbox</td>
        <td>Boolean</td>
        <td>false</td>
        <td>是否显示多选框</td>
      </tr>
      <tr>
        <td>border</td>
        <td>Boolean</td>
        <td>false</td>
        <td>是否显示边框</td>
      </tr>
      <tr>
        <td>ccslh</td>
        <td>Boolean</td>
        <td>true</td>
        <td>超出部分省略号，如为true，表格单元格超出设置宽度不换行，自动出现省略号</td>
      </tr>
      <tr>
        <td>selectedRowsData</td>
        <td>Array</td>
        <td>[]</td>
        <td>已选择行数据</td>
      </tr>
      <tr>
        <td>emptyText</td>
        <td>String</td>
        <td>&#39;&#39;</td>
        <td>空数据时显示默认提示内容</td>
      </tr>
      <tr>
        <td>rowKey</td>
        <td>String</td>
        <td>&#39;&#39;</td>
        <td>行数据唯一标识,行数据选择操作时必填</td>
      </tr>
      <tr>
        <td>miniTable</td>
        <td>Boolean</td>
        <td>false</td>
        <td>小表格 表格字体会缩小</td>
      </tr>
      <tr>
        <td>rowStyle</td>
        <td>Function</td>
        <td>() =&gt; {}</td>
        <td>表格自定义样式</td>
      </tr>
      <tr>
        <td>filterObj</td>
        <td>Object</td>
        <td>() =&gt; {return {key:&#39;&#39;,name:&#39;&#39;}}</td>
        <td>过滤器配置</td>
      </tr>
      <tr>
        <td>filterSwitch</td>
        <td>Boolean</td>
        <td>false</td>
        <td>过滤器开关</td>
      </tr>
      <tr>
        <td>sortable</td>
        <td>Boolean</td>
        <td>true</td>
        <td>是否排序</td>
      </tr>
      <tr>
        <td>indexNum</td>
        <td>Boolean</td>
        <td>true</td>
        <td>行号</td>
      </tr>
    </table>
    <h4 class="h4-header">colsOption:列定义</h4>
    <table>
      <tr class="firstRow">
        <th width="140px"> Name</th>
        <th width="180px"> Type</th>
        <th width="160px"> Required Fields</th>
        <th> Description</th>
      </tr>
      <tr>
        <td>id</td>
        <td>String</td>
        <td>required</td>
        <td>表格列定义</td>
      </tr>
      <tr>
        <td>name</td>
        <td>String</td>
        <td>required</td>
        <td>列名称</td>
      </tr>
      <tr>
        <td>width</td>
        <td>String/Number</td>
        <td></td>
        <td>列宽</td>
      </tr>
      <tr>
        <td>align</td>
        <td>String(center,left,right)</td>
        <td></td>
        <td>对齐方式</td>
      </tr>
      <tr>
        <td>formatter</td>
        <td>Function(value,rowData)</td>
        <td></td>
        <td>数据过滤，需要return</td>
      </tr>
      <tr>
        <td>hideSortable</td>
        <td>Boolean</td>
        <td></td>
        <td>是否对该列取消排序，默认id为handle自动取消排序</td>
      </tr>
      <tr>
        <td>component</td>
        <td>Component</td>
        <td></td>
        <td>自定义组件，通常用于放置通用按钮或者图片等</td>
      </tr>
      <tr>
        <td>componentCallBack</td>
        <td>Function(data)</td>
        <td></td>
        <td>自定义组件回调，接收自定义组件回调方法</td>
      </tr>
      <tr>
        <td>params</td>
        <td>Object</td>
        <td></td>
        <td>传给自定义组件的参数</td>
      </tr>
    </table>
    <h4 class="h4-header">Methods</h4>
    <table>
      <tr class="firstRow">
        <th width="140px"> Name</th>
        <th width="180px"> Type</th>
        <th> Description</th>
      </tr>
      <tr>
        <td>rowClick</td>
        <td>Function(rowData)=>{}</td>
        <td>行点击事件</td>
      </tr>
    </table>
  </div>
</template>
<script>
  export default {
    name: 'home',
    data() {
      return {}
    }
  }
</script>
<style>
  .table_api {

  }

  .table_api table {
    width: 100%;
    border: 1px solid #DFE2E5;
    border-collapse: collapse;
    table-layout: fixed;
    word-break: break-all;
    word-wrap: break-word;
  }

  .table_api table td, .table_api table th {
    /*width: 100%;*/
    border: 1px solid #DFE2E5;
    padding: 10px;
    line-height: 20px;
  }

  .table_api table tr:nth-of-type(odd) {
    background: #F6F8FA;
  }

  .table_api table tr:nth-of-type(even) {
    background: #fff;
  }

  .h4-header {
    color: #159957;
    font-weight: 400;
    margin: 32px 0 16px;
  }
</style>
