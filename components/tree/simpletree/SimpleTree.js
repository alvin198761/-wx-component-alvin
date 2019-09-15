// components/tree/simpletree/SimpleTree.js
import wxuuid from '../../../utils/wxuuid.js';
function trimTree(nodes, level) {
  const that = this;
  return nodes.map(item => {
    let node = {
      ...item,
      level: level,
      expand: false,
      select: false,
      _treeNodeKey: wxuuid.wxuuid(),
      hasChild: item.children && item.children.length > 0,
      children: item.children ? trimTree(item.children, level + 1) : []
    }
    return node;
  });
}

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    nodes: null,

  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  attached: function() {
    const that = this;
    console.log(that);
    this.setData({
      nodes: trimTree(that.data.nodes, 1)
    });
  },
  detached: function() {},


  /**
   * 组件的方法列表
   */
  methods: {
    nodeClick(e) {
      this.changeExpand(e.detail.node, this.data.nodes);
      this.triggerEvent('nodeClick', {
        node: e.detail.node
      }, {});
    },
    changeExpand(node, nodes) {
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i]._treeNodeKey == node._treeNodeKey) {
          let data = nodes[i];
          data.expand = !data.expand;
          this.setData({
            nodes: this.data.nodes
          });
        }
        if (!nodes[i].hasChild) {
          continue;
        }
        this.changeExpand(node, nodes[i].children);
      }
    },
  }
})