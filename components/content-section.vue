<template>
  <section :class="classes">
    <h3 v-if="props.title" class="content-section__title">{{ props.title }}</h3>
    <div class="content-section__content">
      <slot />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity';

const props = defineProps<{ title?: string, single?: boolean, spacious?: boolean }>();

const classes = computed(() => (({
  'content-section': true,
  'content-section--single': props.single,
  'content-section--spacious': props.spacious
})))
</script>

<style>
.content-section {
  display: flex;
  gap: var(--spacer-5);
  margin: 0 auto;
  max-width: 1024px;
  padding: var(--spacer-6) var(--spacer-0);
}

.content-section__title {
  flex-shrink: 0.5;
  font-size: var(--font-size-3);
  margin: var(--spacer-2) var(--spacer-0);
  padding: 0;
}

.content-section__content {
  display: flex;
  gap: var(--spacer-5);
  width: 100%;
}

.content-section__content * {
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: 50%;
}

.content-section--single {
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: var(--spacer-0);
}

.content-section--spacious {
  padding: calc(var(--spacer-6) * 2) var(--spacer-0);
}

.content-section--single .content-section__title {
  margin: var(--spacer-3) var(--spacer-1);
  max-width: 75%;
  text-align: center;
}
</style>
