<script setup lang="ts">
import MemberNode from "~/components/MemberNode.vue";
import MemberCard from "~/components/MemberCard.vue";
import EmptySlot from "~/components/EmptySlot.vue";

const props = defineProps<{
  node: {
    id: string;
    username: string | null;
    joinDate?: string;
    position: "left" | "right";
    left: any | null;
    right: any | null;
  };
}>();

const displayChildren = computed(() =>
  [props.node.left, props.node.right].filter(Boolean)
);
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
        class="relative h-4 w-[350px]"
        
      >
        <div class="absolute top-0 left-0 right-0 h-px bg-gray-400"></div>
        <div
          v-for="(_, index) in displayChildren.length"
          :key="index"
          class="absolute top-0 w-px bg-gray-400"
          :style="{
            left: `${(index / (displayChildren.length - 1)) * 100}%`,
            transform: 'translateX(-50%)',
            height: '16px',
          }"
        ></div>
      </div>

      <!-- Node anak-anak -->
      <!-- Node anak-anak -->
      <div class="flex justify-center gap-40 mt-3 w-full">
        <!-- Left child -->
        <div>
          <MemberNode v-if="node.left" :node="node.left" />
          <EmptySlot v-else />
        </div>

        <!-- Right child -->
        <div>
          <MemberNode v-if="node.right" :node="node.right" />
          <EmptySlot v-else />
        </div>
      </div>
    </template>
  </div>
</template>
