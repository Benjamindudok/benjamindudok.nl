<template>
  <li class="resume-item">
    <div v-if="props.startDate || props.endDate" class="resume-item__timestamp">
      <h5 class="resume-item__end-date">
        <span>{{props.endDate[0]}}</span>
        {{props.endDate[1]}}
      </h5>
      <hr class="resume-item__timestamp-divider" v-if="props.endDate && props.startDate" />
      <h5 class="resume-item__start-date">
        <span>{{props.startDate[0]}}</span>
        {{props.startDate[1]}}
      </h5>
    </div>
    <div class="resume-item__content">
      <h5 v-if="subtitle" class="resume-item__subtitle">
        {{props.subtitle}}
      </h5>
      <h4 class="resume-item__title">{{props.title}}</h4>
      <p v-if="props.description" class="resume-item__description">{{props.description}}</p>
      <div v-if="$slots.default" class="resume-item__projects">
        <ul class="resume-item__projects-list">
          <slot></slot>
        </ul>
      </div>
      <div v-if="$slots.skills" class="resume-item__skills">
        <slot name="skills" />
      </div>
    </div>
  </li>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  subtitle?: string;
  startDate?: string[];
  endDate?: string[];
  description?: string;
}>();
</script>

<style>
.resume-item {
  align-items: flex-start;
  display: flex;
  gap: var(--spacer-6);
  margin: 0;
  padding: var(--spacer-6) var(--spacer-0);
}

.resume-item__content {
  max-width: 720px;
}

.resume-item:first-child {
  padding-top: var(--spacer-2);
}

.resume-item__title {
  font-size: var(--font-size-4);
  margin: 0;
  padding: 0;
}

.resume-item__subtitle {
  color: var(--color-accent-800);
  font-size: var(--font-size-6);
  font-weight: var(--font-weight-bold);
  margin-top: 0;
}

.resume-item__timestamp {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  flex: 0 0 20%;
  justify-content: flex-start;
  gap: calc(var(--spacer-2) * 1);
  text-align: right;
}

.resume-item__timestamp-divider {
  border-color: var(--color-accent-800);
  margin: 0;
  width: 50px;
}

.resume-item__start-date,
.resume-item__end-date {
  color: var(--font-color);
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-3);
  font-style: italic;
  font-weight: var(--font-weight-bold);
  margin: 0;
}

.resume-item__start-date {
  color: var(--color-neutral-100);
  font-size: var(--font-size-5);
}

.resume-item__start-date span,
.resume-item__end-date span {
  color: var(--color-neutral-100);
  font-size: var(--font-size-4);
  font-weight: var(--font-weight-normal);
}

.resume-item__start-date span {
  font-size: var(--font-size-6);
}

.resume-item__projects {
  padding: var(--spacer-0) var(--spacer-0);
}

.resume-item__projects-list {
  align-items: flex-start;
  display: flex;
  gap: var(--spacer-5);
  justify-content: space-between;
  margin: 0;
  max-width: none;
  padding: 0;
  width: 100%;
}

.resume-item__skills {
  display: flex;
  gap: var(--spacer-2);
  padding: var(--spacer-3) 0 0;
}
</style>
