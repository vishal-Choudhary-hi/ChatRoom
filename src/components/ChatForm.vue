<template>
  <form>
    <textarea placeholder="Type your message" @keydown.prevent.enter="handleSubmit" v-model="message">
    </textarea>
    <div class="error">{{error}}</div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '@/composables/getUser'
import useCollection from '@/composables/useCollection'
import {timestamp} from "../firebase/config"
export default {
    setup(){
        const {addDoc,error}=useCollection('message')
        const {user}=getUser()
        const message=ref('')
        const handleSubmit=async ()=>{
            const chat={
                message:message.value,
                name:user.value.displayName,
                createdAt:timestamp()
            }
            await addDoc(chat)
            if(!error.value)
                message.value=''
        }
        return {handleSubmit,message,error}
    }
}
</script>

<style scoped>
    form{
        margin: 10px;
    }
    textarea{
        width:100%;
        max-width: 100%;
        margin-bottom: 10px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 25px;
        outline:none;
    }
</style>