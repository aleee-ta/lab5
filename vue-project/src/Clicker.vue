<script setup>
  import { ref } from 'vue'
  const count = ref(0);

  const props = defineProps(['amount']);
  defineEmits(['someEvent']);
</script>


<template>
  <div>Вы нажали на меня {{ count }} раз.</div>
  <div @click="count+=amount;$emit('someEvent', amount);"><slot/></div>
</template>