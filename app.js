new Vue({
  el: '#vue-app',
  data() {
    return {
      myChangeColor: false,
      myChangeLength: false
    }
  },
  computed: {
    compClasses() {
      return {
        changeColor: this.myChangeColor,
        changeLength: this.myChangeLength
      }
    }
  }
})
