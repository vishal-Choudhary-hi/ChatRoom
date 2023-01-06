<template>
  <div class="chatWindow">
    <div class='error' v-if="error">{{error}}</div>
    <div v-if="formatedDocument" class="messages" ref="messages">
        <div v-for="doc in formatedDocument" :key="doc.id" class="single">
            <span class="createdAt">{{doc.createdAt}} ago</span>
            <span class="name">{{doc.name}}</span>
            <span class="message">{{doc.message}}</span>
        </div>
    </div>
  </div>
</template>

<script>
import getCollection from '../composables/getCollection'
import {formatDistanceToNow} from 'date-fns'
import { computed, onUpdated,ref } from '@vue/runtime-core'
export default {
    setup(){
        const {documents,error}=getCollection('message')
        const formatedDocument=computed(()=>{
            if(documents.value){
                return documents.value.map(doc=>{
                    let time =formatDistanceToNow(doc.createdAt.toDate())
                    return {...doc,createdAt:time}
                })
            }
        })
        const messages=ref(null)
        onUpdated(()=>{
            messages.value.scrollTop=messages.value.scrollHeight
        })
        return{error,formatedDocument,messages}
    }

}
</script>

<style>
    .chatWindow{
        background: #fafafa;
        padding:30px 20px;
    }
    .single{
        margin: 20px 0;
    }
    .createdAt{
        display:block;
        color:#999;
        font-size:12px;
        margin-bottom: 4px;
    }
    .name{
        font-weight: bold;
        margin-right:6px;
        text-transform: uppercase;
    }
    .messages{
        max-height:400px ;
        overflow: auto;
    }
</style>