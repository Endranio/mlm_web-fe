<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const schema = z.object({
  amount: z.number().min(10000),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  amount: undefined,
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({
    title: "Pending",
    description: "Processed",
    color: "info",
  });
  console.log(event.data);
}
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
