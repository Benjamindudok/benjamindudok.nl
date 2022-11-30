<template>
  <li class="resume-item">
    <h4 class="resume-item__title">{{props.title}}</h4>
    <p class="resume-item__subtitle">
      {{props.subtitle}}
      <template v-if="props.timestamp"> <template v-if="props.subtitle">|</template> <span class="resume-item__timestamp">{{props.timestamp}}</span></template></p>
    <p v-if="props.description" class="resume-item__description">{{props.description}}</p>
    <slot></slot>
  </li>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string,
  subtitle: string,
  timestamp: string,
  description?: string,
}>();
</script>

<style scoped>
.resume-item {
  margin: 0;
  padding: 0;
}
</style>