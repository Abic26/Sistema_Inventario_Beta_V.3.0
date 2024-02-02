<template>
  <div>
    <login />
    <ReloadPrompt />
  </div>

</template>
<script>
import login from './components/login.vue'
import ReloadPrompt from './components/ReloadPrompt.vue';



export default {
  components :{
    login,
    ReloadPrompt

}
}



</script>
