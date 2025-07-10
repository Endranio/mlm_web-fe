<script setup lang="ts">
import UseLogin from '~/hooks/useLogin';


const { onSubmit, isPending, schema, state } = UseLogin()
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <UForm :schema="schema" :state="state" class="space-y-4" @submit=onSubmit>
      <UFormField label="Username" name="username">
        <UInput v-model="state.username" />
      </UFormField>

      <UFormField label="Password" name="password">
        <UInput v-model="state.password" type="password" />
      </UFormField>

      <UButton type="submit" block> Submit </UButton>
    </UForm>
  </div>
</template>