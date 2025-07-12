<script setup lang="ts">
import withdraw from '~/hooks/withdraw';


const {onSubmit,schema,state} = withdraw()

</script>

<template>
  <div>
    <p class="text-3xl font-bold">Balance Withdrawal</p>
    <Balance />
  </div>
  <UForm
    :schema="schema"
    :state="state"
    class="space-y-4 mt-15"
    @submit="onSubmit"
  >
    <UFormField label="Amount" name="amount">
      <UInput type="number" v-model="state.amount" />
    </UFormField>

    <UButton type="submit"> Submit </UButton>
  </UForm>
</template>
