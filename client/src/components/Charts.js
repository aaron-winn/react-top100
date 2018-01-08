import React from 'react'

class App extends Component {
    state = { todos: [] }
  
    componentDidMount() {
      axios.get('/api/sharts')
        .then( res => this.setState({ todos: res.data }) )
    }
  
    createItem = (name) => {
      const item = { name }
      axios.post('/api/charts', { chart })
        .then( res => {
          const { todos } = this.state;
          this.setState({ todos: [...todos, res.data] })
        })
    }
  
    updateTodo = (id) => {
      axios.put(`/api/charts/${id}`)
        .then( res => {
          let todos = this.state.todos.map( t => {
            if (t.id === id)
              return res.data;
            return t;
          });
  
          this.setState({ todos });
        })
    }
  
    deleteTodo = (id) => {
      axios.delete(`/api/items/${id}`)
        .then( () => {
          const { todos } = this.state;
          this.setState({ todos: todos.filter( t => t.id !== id ) })
        })
    }
  
    render() {
      return (
        <div className="container">
          <TodoForm addItem={this.createItem} />
          <TodoList
            todos={this.state.todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
        </div>
      );
    }
  }

export default Charts;
