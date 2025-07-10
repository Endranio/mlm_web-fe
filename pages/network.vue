<script setup lang="ts">
import MemberNode from '~/components/MemberNode.vue';





const tree : {
  id: number
  username: string | null
  joinDate?: string
  position: 'left' | 'right'
  children: any[]
} = {
  id: 1,
  username: 'baru2',
  joinDate: '03/07/2025',
  position: 'left',
  children: [
    {
      id: 2,
      username: "Endra",
      position: 'left',
      children: []
    },
    {
      id: 3,
      username: null,
      position: 'right',
      children: []
    }
  ]
}
</script>

<template>
  <div class="p-6 flex justify-center">
    <MemberNode :node="tree" />
   
  </div>
</template>