<template>
  <form @submit.prevent="handleSubmit">
    <label>Email</label>
    <input type="text" required placeholder="Email" v-model="email">
    <label>Password</label>
    <input type="text" required placeholder="password" v-model="password">
    <div class="error">{{error}}</div>
    <button>login</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import userLogin from '../composables/userLogin'
export default {
    setup(props,context){
        const {error,login}=userLogin();
        const email=ref('')
        const password=ref('')
        const handleSubmit = async()=>{
            await login(email.value,password.value)
            if(!error.value){
              context.emit('login')
            }
        }
        return {email,password,handleSubmit,error}
    }
}
</script>

<style>

</style>