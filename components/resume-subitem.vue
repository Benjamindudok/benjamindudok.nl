<template>
  <li class="resume-subitem" :style="{ 'flex-basis': `${props.size}%`}">
    <h6 v-if="props.subtitle" class="resume-subitem__subtitle">{{ props.subtitle }}</h6>
    <h5 class="resume-subitem__title">{{ props.title }}</h5>
    <p v-if="props.description" class="resume-subitem__description">{{ props.description }}</p>
    <div class="resume-subitem__tags">
      <slot />
    </div>
  </li>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string,
  description?: string;
  subtitle?: string;
  size?: number;
}>();
</script>

<style>
.resume-subitem {
  flex: 0 0 30%;
}

.resume-subitem__title {
  font-size: var(--font-size-5);
  margin: 0;
}

.resume-subitem__description {
  color: var(--color-neutral-100);
  font-style: italic;
}

.resume-subitem__subtitle {
  color: var(--color-accent-800);
  font-size: var(--font-size-6);
  margin-bottom: var(--spacer-2);
}

.resume-subitem__tags {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacer-2);
}
</style>
