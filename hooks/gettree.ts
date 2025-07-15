import { useQuery } from "@tanstack/vue-query";
import type { UserLogin } from "~/dto/dto";

export default function GetDataTree(){

    const {$axios} = useNuxtApp()
    const user = useState<UserLogin>("user")
    
    const {data} = useQuery({
        queryKey:['data-tree'],
        queryFn: async()=>{
            const res = await $axios.get(`/network/${user.value.data.username}`)
            return res.data
        }
    })

    return{
        data
    }

}