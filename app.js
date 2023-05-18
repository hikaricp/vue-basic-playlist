new Vue({
  el: '#vue-app',
  data() {
    return {
      todos: [],
      todo: {
        title: '',
        completed: false
      }
    }
  },
  mounted() {
    axios.get('http://jsonplaceholder.typicode.com/todos')
      .then(res => this.todos = res.data);
  },
  methods: {
    onSubmit() {
      axios.post('http://jsonplaceholder.typicode.com/todos', this.todo)
        .then(res => {
          // console.log(res.data);
          this.todos.unshift(res.data);
        })
    }
  }
});
