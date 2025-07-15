<script setup lang="ts">
import MemberNode from '~/components/MemberNode.vue';
import GetDataTree from '~/hooks/gettree';


const {data,isLoading} = GetDataTree()

</script>

<template>
  <div class="p-6 flex justify-center">
   <MemberNode v-if="!isLoading && data" :node="data" />
  
  </div>
</template>