<script setup lang="ts">
import MemberNode from "~/components/MemberNode.vue"
import MemberCard from "~/components/MemberCard.vue"
import EmptySlot from "~/components/EmptySlot.vue"

const props = defineProps<{
  node: {
    id: number
    username: string | null
    joinDate?: string
    children: Array<{
      id: number
      username: string | null
      joinDate?: string
      position: 'left' | 'right'
      children: any[]
    }>
  },
  level?: number
}>()

const currentLevel = computed(() => props.level ?? 0)

const displayChildren = computed(() => {
  const leftChild = props.node.children.find(c => c.position === 'left') 
    || { id: props.node.id * 10 + 1, username: null, position: 'left', children: [] }

  const rightChild = props.node.children.find(c => c.position === 'right')
    || { id: props.node.id * 10 + 2, username: null, position: 'right', children: [] }

  return [leftChild, rightChild]
})

const lineHeight = computed(() => {
  const baseHeight = 36
  const reductionPerLevel = 4
  const height = baseHeight - (currentLevel.value * reductionPerLevel)
  return `${Math.max(16, height)}px`
})
</script>

<template>
  <div v-if="node" class="flex flex-col items-center relative w-full">
    
    <!-- Kartu Member -->
    <div class="relative z-10">
      <component
        :is="node.username ? MemberCard : EmptySlot"
        :username="node.username"
        :joinDate="node.joinDate"
      />
    </div>

    <!-- Anak-anak -->
    <template v-if="node.username">
      <!-- Garis vertikal dari node ke horizontal -->
      <div class="w-px bg-gray-400" :style="{ height: lineHeight }"></div>

      <!-- Garis horizontal dan vertikal ke anak -->
      <div
        class="relative h-4"
        :style="{ width: `${displayChildren.length * 200}px` }"
      >
        <div class="absolute top-0 left-0 right-0 h-px bg-gray-400"></div>
        <div
          v-for="(_, index) in displayChildren.length"
          :key="index"
          class="absolute top-0 w-px bg-gray-400"
          :style="{ 
            left: `${(index / (displayChildren.length - 1)) * 100}%`,
            transform: 'translateX(-50%)',
            height: '16px'
          }"
        ></div>
      </div>

      <!-- Node anak-anak -->
      <div
        class="flex justify-center gap-4 mt-3"
        :style="{ width: `${displayChildren.length * 200}px` }"
      >
        <MemberNode
          v-for="child in displayChildren"
          :key="child.id"
          :node="child"
          :level="currentLevel + 1"
        />
      </div>
    </template>
  </div>
</template>
