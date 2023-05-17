const one = new Vue({
  el: '#vue-app-one',
  data() {
    return {
      title: 'this is app one'
    }
  },
  computed: {
    greet() {
      return 'Hello App one'
    }
  }
});

const two = new Vue({
  el: '#vue-app-two',
  data() {
    return {
      title: 'this is app two'
    }
  },
  methods: {
    changeAppOneTitle() {
      one.title = '这是 APP one 的 title';
    }
  },
  computed: {
    greet() {
      return 'Hello App two'
    }
  }
});

two.title = '这是 APP two 的 title'
