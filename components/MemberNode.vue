<script setup lang="ts">
import MemberNode from "~/components/MemberNode.vue"
import MemberCard from "~/components/MemberCard.vue"
import EmptySlot from "~/components/EmptySlot.vue"

const props = defineProps<{
  node: {
    id: string
    username: string | null
    joinDate?: string
    position: 'left' | 'right'
    left: any | null
    right: any | null
  }
}>()



const displayChildren = computed(() => [
  props.node.left,
  props.node.right
])


</script>

<template>
  <div class="flex flex-col items-center relative w-full">
    
    <!-- Kartu Member -->
    <div class="relative z-10">
      <component
        :is="node.username ? MemberCard : EmptySlot"
        :username="node.username"
        :joinDate="node.joinDate"
      />
    </div>

    <!-- Garis ke anak -->
    <template v-if="node.username">
      <div class="w-px bg-gray-400 h-[16px]"></div>

      <div
        class="relative h-4"
        :style="{ width: `${displayChildren.length * 175}px` }"
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
        class="flex justify-center gap-40 mt-3"
        :style="{ width: `${displayChildren.length * 200}px` }"
      >
        <MemberNode
          v-for="child in displayChildren"
          
          :key="child.id"
          :node="child"
          
        />
      </div>
    </template>
  </div>
</template>
