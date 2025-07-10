// hooks/useLogin.ts

import * as z from "zod";
// Pastikan untuk mengimpor tipe ini dari @nuxt/ui
import type { FormSubmitEvent } from "@nuxt/ui";
import { useMutation } from "@tanstack/vue-query";


export default function UseLogin(){

    const schema = z.object({
      username: z.string().min(4, "Must be at least 4 characters"),
      password: z.string().min(8, "Must be at least 8 characters"),
    });
    
    type Schema = z.output<typeof schema>;
    
    const state = reactive<Partial<Schema>>({
      username: undefined,
      password: undefined,
    });
    
    const toast = useToast();
    const { $axios,$isAxiosError } = useNuxtApp()
    
    const {mutateAsync,isPending} = useMutation({
        mutationKey:["login"],
        mutationFn:async (data: Schema) => {
          const res = await $axios.post("/login", data);
          return res.data;
        },
        onError: (error) => {
          if ($isAxiosError(error)) {
            // Perbaikan kecil: Gunakan toast.add untuk menampilkan pesan error
            return toast.add({ color:"error", title: 'Error', description: error.response?.data.messages.error });
          }
          toast.add({color:"error", title: 'Error', description: 'Something went wrong' });
        },
        onSuccess: async (data) => {
          // Perbaikan kecil: Gunakan deskripsi agar lebih jelas
          toast.add({ title: 'Success', description: data.message });
          navigateTo("/")
        },
    });

  // --- BAGIAN YANG DIUBAH ---
  // Fungsi `onSubmit` sekarang menerima 'event' bertipe 'FormSubmitEvent<Schema>'
  const onSubmit = async (event: FormSubmitEvent<Schema>) => {
    // Kirim 'event.data', bukan 'event' itu sendiri
    await mutateAsync(event.data);
  };
  // -------------------------

  return{
    onSubmit,
    isPending,
    schema,
    state
  }
}