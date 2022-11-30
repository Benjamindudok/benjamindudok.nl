<template>
  <li class="resume-item">
    <h4 class="resume-item__title">{{props.title}}</h4>
    <p class="resume-item__subtitle">
      {{props.subtitle}}
      <template v-if="props.timestamp"> <template v-if="props.subtitle">|</template> <span class="resume-item__timestamp">{{props.timestamp}}</span></template></p>
    <p v-if="props.description" class="resume-item__description">{{props.description}}</p>
    <div v-if="props.contentTitle" class="resume-item__content">
      <h5 class="resume-item__content-title">{{ props.contentTitle }}</h5>
      <slot></slot>
    </div>
  </li>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string,
  subtitle: string,
  timestamp: string,
  description?: string,
  contentTitle?: string,
}>();
</script>

<style>
.resume-item {
  margin: 0;
  padding: var(--spacer-3) var(--spacer-0);
}

.resume-item:first-child {
  padding-top: var(--spacer-4);
}

.resume-item__title,
.resume-item__subtitle,
.resume-item__content-title {
  font-size: var(--font-size-4);
  margin: 0;
  padding: 0;
}

.resume-item__subtitle {
  font-size: var(--font-size-6);
  font-weight: var(--font-weight-bold);
}

.resume-item__timestamp {
  font-style: italic;
  font-weight: var(--font-weight-normal);
}

.resume-item__content {
  padding: var(--spacer-0) var(--spacer-4);
}

.resume-item__content-title {
  color: var(--font-color-light);
  font-size: var(--font-size-6);
  margin-bottom: var(--spacer-2);
}
</style>
