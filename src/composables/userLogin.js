import { projectAuth } from "@/firebase/config"
import { ref } from "vue"
const error=ref(null)

const login= async (email,password)=>{
    error.value=null
    try {
        const res=await projectAuth.signInWithEmailAndPassword(email,password)
        error.value=null
        console.log(res)
        return res
    } catch (err) {
        console.log(err.message)
        error.value="Invalid login credentials"
    }
}
const userLogin=()=>{
    return {error,login}
}
export default userLogin