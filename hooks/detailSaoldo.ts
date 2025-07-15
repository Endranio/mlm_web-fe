import { useQuery } from "@tanstack/vue-query";
import type{ UserLogin } from "~/dto/dto";

export default function DetailSaldo() {
  const user = useState<UserLogin>("user");
  
  if (!user.value.data.id || !user.value.data.id) {
    return {
      data: ref(null),
      isPending: ref(false),
    };
  }
  const { $axios } = useNuxtApp();
  const { data, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await $axios.get(`/user/${user.value.data.id}`);

      return res.data;
    },
  });

  return {
    data,
    isPending,
  };
}
