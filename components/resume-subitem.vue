<template>
  <li class="resume-subitem">
    <h6 class="resume-subitem__title">{{ props.title }}</h6>
    <p v-if="props.description" class="resume-subitem__description">{{ props.description }}</p>
  </li>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string,
  description?: string;
}>();
</script>

<style>
.resume-subitem {
  margin: 0;
  padding: var(--spacer-1) var(--spacer-2) var(--spacer-2) var(--spacer-4);
  position: relative;
}

.resume-subitem::before {
  background: var(--font-color);
  border-radius: 50%;
  content: '';
  display: block;
  height: 4px;
  left: var(--spacer-1);
  position: absolute;
  top: var(--spacer-2);
  width: 4px;
}

.resume-subitem__title {
  font-size: var(--font-size-5);
  margin: 0;
  padding: 0;
}

.resume-subitem__description {
  font-size: var(--font-size-5);
  margin: 0;
  padding: 0;
}
</style>
