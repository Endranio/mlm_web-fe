<script setup lang="ts">
defineProps<{
  username: string
  joinDate: string
}>()
</script>

<template>
  <UCard class="bg-purple-600 text-white text-center relative w-48">
    <div class="flex flex-col items-center gap-2">
      <UIcon name="i-lucide-user" class="w-12 h-12" />
      <div class="font-bold">{{ username }}</div>
      <div class="text-sm">Bergabung {{ joinDate }}</div>

      <div class="grid grid-cols-3 gap-1 mt-2 text-xs">
        <div>0</div>
        <div><UIcon name="i-lucide-arrow-left-right" /></div>
        <div>0</div>
        <div>0</div>
        <div><UIcon name="i-lucide-gift" /></div>
        <div>0</div>
      </div>

      <UButton icon="i-lucide-folder-open" size="xs" variant="outline" label="Buka" />
    </div>
  </UCard>
</template>