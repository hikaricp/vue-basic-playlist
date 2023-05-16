new Vue({
  el: '#vue-app',
  data() {
    return {
      a: 0,
      b: 0,
      age: 23
    }
  },
  methods: {
    // addToA() {
    //   console.log("addAgeToA");
    //   return this.a + this.age;
    // },
    // addToB() {
    //   console.log("addAgeToB");
    //   return this.b + this.age;
    // }
  },
  computed: {
    addToA() {
      console.log("addAgeToA");
      return this.a + this.age;
    },
    addToB() {
      console.log("addAgeToB");
      return this.b + this.age;
    }
  }
})
