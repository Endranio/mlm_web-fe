<script setup lang="ts">
import type{ UserLogin } from "~/dto/dto";
import Balance from "./Balance.vue"

const user = useState<UserLogin>("user")
</script>

<template>

 <div class="mt-5">
    <p class="text-3xl font-bold">Welcome {{user.data.username}}</p>
    <p>Registered since {{user.data.created_at}}</p>
   <Balance/>
  </div>
</template>
