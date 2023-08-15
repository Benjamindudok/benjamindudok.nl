<template>
  <section class="content-section" :class="{'content-section--small': props.small}">
    <h3 v-if="props.title" class="content-section__title">{{ props.title }}</h3>
    <p v-if="props.intro" class="content-section__intro"> {{ props.intro }}</p>
    <div class="content-section__content">
      <slot />
    </div>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps<{ title?: string, intro?: string; small?: boolean}>();
</script>

<style>
.content-section {
  margin: calc(var(--spacer-6) * 5) auto;
  max-width: 1280px;
  padding: var(--spacer-6);
}

@media (min-width: 768px) {
  .content-section {
    padding: var(--spacer-6) var(--spacer-0);
  }
}

.content-section__title {
  color: var(--color-accent-800);
  font-size: var(--font-size-0);
  margin: 0;
  opacity: 0.3;
  padding: 0;
  text-align: center;
}

@media (min-width: 768px) {
  .content-section__title {
    font-size: calc(var(--font-size-00) * 2);
    margin: 0 0 calc(var(--spacer-6) * -1.77) 0 ;
    text-align: left;
  }
}

.content-section__intro {
  font-size: var(--font-size-3);
  text-align: center;
  position: relative;
  z-index: 2;
}

@media (min-width: 768px) {
  .content-section__intro {
    font-size: var(--font-size-2);
  }
}

.content-section__content {
  padding: var(--spacer-3) 0;
  width: 100%;
}

.content-section--small {
  max-width: 960px;
}
</style>
