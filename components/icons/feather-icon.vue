<template>
  <svg
      :width="props.size ?? 24"
      :height="props.size ?? 24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
  >
    <slot />
  </svg>
</template>

<script lang="ts" setup>
const props = defineProps<{ size?: number }>();
</script>

<style scoped>

</style>