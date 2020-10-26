


import Vue from 'vue';
import { Datetime } from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import '@/assets/style.css';

Vue.component('datetime', Datetime);


new Vue({
  el: "#app",
  data: {
    editing:false,
    localId:0,
  	todos: [
     
        ]
      },

mounted(){
  let StoredToDos = JSON.parse(localStorage.getItem('ToDos'))
  console.log(JSON.stringify(StoredToDos))
  this.todos= StoredToDos
},
  
  methods: {
    readStorage(){
      this.todos= JSON.parse(localStorage).getItem("ToDos")
    },
    writeStorage(){
      localStorage.setItem("ToDos",JSON.stringify(this.todos))
    },
    
  	addTodo(){
      // {target}
      console.log((this.$refs.inputTitle.value))
      if((this.$refs.inputTitle.value.trim()).length == 0) {
        return;
      }
      if(this.editing == true){
        this.editing = false
        this.todos[this.localId].title = this.$refs.inputTitle.value
        this.todos[this.localId].dueDate = this.selectedDate.substring(0,10)
        console.log(this.$refs.inputTitle.value)
        this.$refs.inputTitle.value = ''
        localStorage.setItem("ToDos",JSON.stringify(this.todos))
        return;
      }
      
    	this.todos.push({
        title: 
        this.$refs.inputTitle.value, 
        done: false, 
        dueDate:this.selectedDate.substring(0,10),
        beforeEditCache:'',
        
      })
      this.$refs.inputTitle.value = ''
      this.todos.sort((a,b) => (a.title > b.title) ? 1: -1)
      localStorage.setItem("ToDos",JSON.stringify(this.todos))
    },

    
    removeTodo(id) {
      console.log(id)
      this.todos.splice(id,1)
      localStorage.setItem("ToDos",JSON.stringify(this.todos))
    },


    EditTodo(index){
      this.editing=true
      this.localId= index
      this.beforeEditCache= this.todos[index].title
      console.log(this.editing)
      console.log(this.todos[index].title)
      this.$refs.inputTitle.value=this.todos[index].title
      this.$refs.inputTitle.focus();
    },
  


  }


});



 



