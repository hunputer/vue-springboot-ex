<template>
  <div>{{var1}}</div>
  <button v-on:click="toggle"> 클릭! </button>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data(){
    let var1 = 0;

    axios.get("http://localhost:8082/api/getInt")
        .then(function (response) {
          // 성공한 경우 실행
          alert(response.data);
          var1 = response.data;
        })
        .catch(function (error) {
          // 에러인 경우 실행
          console.log(error);
        })
        .then(function () {
          // 항상 실행
        });

    return {
      var1 : var1
    }
  },
  methods : {
    toggle : function (){
      this.var1 *= 2;
    }
  }
}
</script>

<style scoped>

</style>