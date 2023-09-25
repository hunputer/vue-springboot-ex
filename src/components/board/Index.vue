<template>
  <div>{{var1}}</div>
  <button v-on:click="toggle"> 클릭! </button>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data(){
    return {
      var1 : null
    }
  },
  methods : {
    toggle : function (){
      this.var1 *= 2;
    }
  },
  created() {
    axios.get("http://localhost:8082/api/getInt")
        .then(response => {
          this.var1 = response.data;
        })
        .catch(function (error) {
          // 에러인 경우 실행
          console.log(error);
        })
        .then(function () {
          // 항상 실행
        });
  }
}
</script>

<style scoped>

</style>