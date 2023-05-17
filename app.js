let data = {
  name: 'James',
  wechat: 'james666'
};

Vue.component('Greeting', {
  template: `
    <p>
      我是：{{name}}, 我的微信是：{{wechat}}
      <button @click="changeName">改名</button>
    </p>
  `,
  data() {
    return data;
  },
  methods: {
    changeName() {
      this.name = 'KB'
    }
  }
});
const one = new Vue({
  el: '#vue-app-one',
  data() {
    return {}
  }
});

const two = new Vue({
  el: '#vue-app-two',
  data() {
    return {}
  }
});
