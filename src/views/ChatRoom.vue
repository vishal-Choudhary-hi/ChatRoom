<template>
<div class="container">
    <NavBar/>
    <ChatWindow/>
    <ChatForm/>
</div>
</template>

<script>
import getUser from '@/composables/getUser'
import NavBar from '../components/NavBar.vue'
import ChatWindow from '../components/ChatWindow.vue'
import { watch } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import ChatForm from '../components/ChatForm.vue'
export default {
    components: {
        NavBar,
        ChatForm,
        ChatWindow,
    },
    setup(){
        const router=useRouter()
        const {user}=getUser()
        watch(user,()=>{
            if(!user.value){
                router.push({name:'Welcome'})
            }
        })
    }
}
</script>

<style>

</style>