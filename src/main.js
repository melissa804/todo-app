
import Vue from 'vue';



new Vue({
  el: "#app",
  data: {
    
  	todos: [
      {
        title: 'test',
       done: false, 
       
         }
        ]
      },

  
  methods: {
    
  	addTodo({target}){
      if((target.value.trim()).length == 0) {
        return;
      }
      
    	this.todos.push({
        title: 
        target.value, 
        done: false, 
      })
      target.value = ''
      this.todos.sort((a,b) => (a.title > b.title) ? 1: -1)
    },
    
    removeTodo(id) {
      console.log(id)
      this.todos.splice(id,1)
    },

    

  }


});

 



