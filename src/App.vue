<template>
  <div id="app">
 <Todo/>
   

   
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import App from './App'
import Datepick from 'vue-date-pick'


export default {
  name: 'App',
  components: {Datepick},
    data: () => ({
      date: '2019-02-12'
    })


  
 
  
};

</script>

<style>

</style>
