<template>
  <form @submit.prevent="handleSubmit">
    <label>Name</label>
    <input type="text" required placeholder="Display Name" v-model="displayName">
    <label>Email</label>
    <input type="text" required placeholder="Email" v-model="email">
    <label>Password</label>
    <input type="password" required placeholder="password" v-model="password">
    <div class="error">{{error}}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import userSignup from '../composables/userSignup'
import { ref } from '@vue/reactivity'
export default {
    setup(props,context){
      const {error,signup}=userSignup()
        const displayName=ref('')
        const email=ref('')
        const password=ref('')
        const handleSubmit =async()=>{
            await signup(email.value,password.value,displayName.value)
            if(!error.value){
              context.emit('signUp')
            }
        }
        return {displayName,email,password,handleSubmit,error}
    }
}
</script>

<style>

</style>