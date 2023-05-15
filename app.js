new Vue({
  el: '#vue-app',
  data() {
    return {
      name: '',
      age: 20
    }
  },
  methods: {
    getName() {
      // console.log(this.$refs.name.value);
      this.name = this.$refs.name.value;
    },
    getAge() {
      this.age = this.$refs.age.value;
    }
  },
  watch: {
    name(val, oldVal) {
      console.log(val, oldVal);
    },
    age(val, oldVal) {
      console.log(val, oldVal);
    }
  }
})
