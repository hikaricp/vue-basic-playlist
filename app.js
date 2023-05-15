// 实例化 Vue 对象
new Vue({
  el: '#vue-app',
  data() {
    return {
      name: 'Lebron James',
      wechat: 'kingjames666'
    };
  },
  methods: {
    // greet: function () {
    //   return "Good night " + this.name;
    // }

    greet(time) {
      return `Goog ${time} ${this.name}`;
    },

    haveLunch() {
      return `吃过午饭了吗?`;
    }
  }
})
