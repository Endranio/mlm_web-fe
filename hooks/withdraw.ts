import { useMutation, useQueryClient } from "@tanstack/vue-query";
import type { UserLogin, Withdraw } from "~/dto/dto";
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

export default function withdraw(){


const schema = z.object({
  amount: z.number().min(10000),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  amount: undefined,
});



    const queryClient = useQueryClient()
    const user = useState<UserLogin>('user')
    const {$axios,$isAxiosError} = useNuxtApp()
    const toast = useToast()
    const {mutateAsync} = useMutation({
        mutationKey:['withdraw'],
        mutationFn: async(data:Withdraw)=>{
            const res = await $axios.post(`/withdraw/${user.value.data.id}`,data)
            return res.data
        },
        onError:(error)=>{
            if($isAxiosError(error)){
                return toast.add({
                    color:'error',
                    title:"Error",
                    description:error.response?.data.messages.error
                });
            }
            toast.add({
                color:'error',
                title:'Error',
                description:"Something went wrong"
            })
        },
        onSuccess: async (data)=>{
            queryClient.invalidateQueries({queryKey:['user']}),
            toast.add({
                color:'error',
                description:data.message
            })
        }
    })
async function onSubmit(event: FormSubmitEvent<Schema>) {
 await mutateAsync(event.data);
  console.log(event.data);
}

return{
    state,
    schema,
    onSubmit
}

}