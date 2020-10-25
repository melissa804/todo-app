


import Vue from 'vue';
import { Datetime } from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css';

Vue.component('datetime', Datetime);

// if (!StoredToDos) StoredToDos = {}
// console.log(StoredToDos)


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
    
  	addTodo({target}){
      
      if((target.value.trim()).length == 0) {
        return;
      }
      if(this.editing == true){
        this.editing = false
        this.todos[this.localId].title = target.value
        this.todos[this.localId].dueDate = this.selectedDate.substring(0,10)
        console.log(target.value)
        target.value = ''
        localStorage.setItem("ToDos",JSON.stringify(this.todos))
        return;
      }
      
    	this.todos.push({
        title: 
        target.value, 
        done: false, 
        dueDate:this.selectedDate.substring(0,10),
        beforeEditCache:'',
        
      })
      target.value = ''
      target.dueDate=''
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
    doneEdit(){
      if(this.title.trim() == ""){
        this.title= this.beforeEditCache;
      }
      this.$emit('finishedEdit',{
        todos:{
          index:this.index,
          title:this.title,
          done: this.done,
          dueDate: this.dueDate,
        }
      })
    },
    cancelEdit(){
      this.title = this.beforeEditCache;
    }


  }


});



 



