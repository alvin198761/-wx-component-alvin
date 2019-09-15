// components/tree/simpletree/SimpleTreeNode.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
      userObj: null
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //本节点点击
    nodeClick(e){
      const that= this;
      this.triggerEvent('nodeClick', {
        node: that.data.userObj
      }, {

      });
    },
    //子节点点击
    childNodeClick(e){
      this.triggerEvent('nodeClick', {
        node: e.detail.node
      }, {

        });
    }
  }
})
