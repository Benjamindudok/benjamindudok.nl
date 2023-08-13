<template>
  <span class="tag" :class="{ [`tag--${variant}`]: variant}">
    {{props.text}}
  </span>
</template>

<script lang="ts" setup>
import {computed} from "@vue/runtime-core";

const props = defineProps<{
  text: string;
}>();

const variant = computed(() => {
  switch (props.text.toLowerCase()) {
    case 'vuejs':
    case 'angular':
      return 'alternate-1';
    case 'scss':
      return 'alternate-2';
    case 'arduino':
      return 'alternate-3';
    case 'typescript':
      return 'alternate-4';
    case '.net core':
    case '.net mvc':
      return 'alternate-5';
    case 'electron':
    case 'chrome app':
    case 'processing':
      return 'alternate-6';
    default:
      return '';
  }
})
</script>

<style scoped>
.tag {
  align-items: center;
  background: rgba(255,255,255,0.15);
  border-radius: 6px;
  color: var(--color-neutral-100);
  display: inline-flex;
  font-size: var(--font-size-6);
  font-weight: var(--font-weight-bold);
  justify-content: center;
  overflow: hidden;
  padding: var(--spacer-0) var(--spacer-2);
  position: relative;
}

.tag::before {
  background: var(--color-neutral-100);
  bottom: 0;
  content: '';
  left: 0;
  opacity: 0.2;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
}

.tag--alternate-1 {
  color: var(--color-accent-800);
}
.tag--alternate-1::before {
  background: var(--color-accent-800);
}
.tag--alternate-2 {
  color: var(--color-neutral-100);
}
.tag--alternate-2::before {
  background: var(--color-accent-500);
}
.tag--alternate-3 {
  color: var(--color-neutral-100);
}
.tag--alternate-3::before {
  background: var(--color-accent-600);
}
.tag--alternate-4 {
  color: var(--color-neutral-100);
}
.tag--alternate-4::before {
  background: var(--color-accent-700);
}
.tag--alternate-5 {
  color: var(--color-accent-300);
}
.tag--alternate-5::before {
  background: var(--color-accent-300);
}
.tag--alternate-6 {
  color: var(--color-accent-900);
}
.tag--alternate-6::before {
  background: var(--color-accent-900);
}
</style>