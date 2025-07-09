<script setup>
import { BadgeDollarSign } from "lucide-vue-next";
import { BanknoteArrowUp } from "lucide-vue-next";
import { BanknoteArrowDown } from "lucide-vue-next";
</script>

<template>
  <div class="flex gap-5 justify-between mt-5">
    <div class="flex gap-5 p-5 border-1 w-full">
      <p><BadgeDollarSign size="48" /></p>
      <div>
        <p class="font-bold">saldo</p>
        <p>Rp.200000</p>
      </div>
    </div>
    <div class="flex gap-5 p-5 border-1 w-full">
      <p><BanknoteArrowDown size="48" /></p>
      <div>
        <p class="font-bold">Withdraw</p>
        <p>Rp.200000</p>
      </div>
    </div>
    <div class="flex gap-5 p-5 border-1 w-full">
      <p><BanknoteArrowUp size="48" /></p>
      <div>
        <p class="font-bold">Bonus</p>
        <p>Rp.200000</p>
      </div>
    </div>
  </div>
</template>
