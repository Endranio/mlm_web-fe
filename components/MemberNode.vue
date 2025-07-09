<script setup lang="ts">
import MemberNode from "~/components/MemberNode.vue"
import MemberCard from "~/components/MemberCard.vue"
import EmptySlot from "~/components/EmptySlot.vue"

const props = defineProps<{
  node: {
    id: number
    username: string | null
    joinDate?: string
    position: 'left' | 'right'
    children: any[]
  }
}>()

const sortedChildren = computed(() => {
  return [...props.node.children].sort((a, b) => {
    if (a.position === 'left' && b.position === 'right') return -1
    if (a.position === 'right' && b.position === 'left') return 1
    return 0
  })
})
</script>

<template>
  <div v-if="node" class="flex flex-col items-center relative">
    <div class="relative z-10">
      <component
        :is="node.username ? MemberCard : EmptySlot"
        :username="node.username"
        :joinDate="node.joinDate"
      />
    </div>

    <div v-if="node.children.length" class="h-6 w-px bg-gray-400"></div>

    <div
      v-if="node.children.length"
      class="relative w-full flex justify-center items-start"
    >
      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gray-400"
      ></div>

      <div class="flex gap-8 mt-2 z-10">
        <!-- Sort children by position -->
        <MemberNode
          v-for="(child, idx) in sortedChildren"
          :key="idx"
          :node="child"
        />
      </div>
    </div>
  </div>
</template>

