import { prejectFirestore} from "@/firebase/config"
import { ref, watchEffect } from "vue"

const getCollection=(collection)=>{
    const documents=ref(null)
    const error=ref(null);

    let collectionRef=prejectFirestore.collection(collection)
        .orderBy('createdAt')
    const unsub=collectionRef.onSnapshot((snap)=>{
        let res=[]
        snap.docs.forEach(doc=>{
           doc.data().createdAt && res.push({...doc.data(),id:doc.id})
        })
        documents.value=res
        error.value=null
    },(err)=>{
        console.log(err.message)
        documents.value=null
        error.value='Could not fetch data'
    })
    watchEffect((onInvalidate)=>{
        onInvalidate(()=>{
            unsub()
        })
    })
    return {documents,error}
}

export default getCollection