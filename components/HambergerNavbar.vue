<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items = ref<DropdownMenuItem[]>([
  {
    label: 'Home',
    icon: 'i-lucide-house',
    to:"/"

  },
  {
    label: 'Withdraw',
    icon: 'i-lucide-banknote-arrow-down',
    to:"/withdraw"
  },
  {
    label: 'Network',
    icon: 'i-lucide-network',
    to:"/network"
  }
])
</script>

<template>
  <UDropdownMenu
    size="xl"
    :items="items"
    :content="{
      align: 'start'
    }"
    :ui="{
      content: 'w-48'
    }"
  >
    <UButton size="xl" icon="i-lucide-menu" color="neutral" variant="ghost" class="hover:bg-transparent" />
  </UDropdownMenu>
</template>
