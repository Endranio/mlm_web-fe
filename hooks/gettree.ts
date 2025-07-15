import { useQuery } from "@tanstack/vue-query";
import type { UserLogin } from "~/dto/dto";

export default function GetDataTree(){

    const {$axios} = useNuxtApp()
    const user = useState<UserLogin>("user")
    console.log(user)
    const {data,isLoading} = useQuery({
        queryKey:['data-tree'],
        queryFn: async()=>{
            console.log(user.value.data.username,"ini userr")
            const res = await $axios.get(`/network/${user.value.data.username}`)
            console.log(res.data,"ini datass")
            return res.data
        }
    })
    return{
        data,
        isLoading
    }

}