<script setup lang="ts">
import MemberNode from '~/components/MemberNode.vue';
import GetDataTree from '~/hooks/gettree';


const {data} = GetDataTree()

</script>

<template>
  <div class="p-6 flex justify-center">
    <MemberNode :node="data" />
   
  </div>
</template>