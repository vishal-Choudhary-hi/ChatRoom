<template>
  <nav v-if="user">
    <div>
        <p>Hello {{user.displayName}}</p>
        <p class="email">Logged in as {{user.email}} </p>
    </div>
    <button @click="handleLogout">Logout</button>
  </nav>
</template>

<script>
import userLogout from '../composables/userLogout'
import getUser from '../composables/getUser'
export default {
    setup(){
        const {logout,error}=userLogout()
        const {user}=getUser()
        const handleLogout=async ()=>{
            await logout()
            if(!error){
                console.log("User Logged out")
            }
        }
        return {error,handleLogout,user}
    }
}
</script>

<style>
    nav{
        padding:20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    nav p{
        margin: 2px auto;
        font-size:16px;
        color:#444;
    }
    nav p.email{
        font-size:14px ;
        color:#999;
    }
</style>