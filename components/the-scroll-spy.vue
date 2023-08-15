<template>
  <div class="content-tracker">
    <ul class="content-tracker__sections">
      <li v-for="section of sections" :key="section.id"
          class="content-tracker__section">
        <a :href="`/#${section.id}`" class="content-tracker__section-button" :class="{ 'content-tracker__section-button--active': activeSectionId === section.id}">
          <span class="content-tracker__section-title">{{section.title}}</span>
        </a>
      </li>
    </ul>
    <p class="content-tracker__current-title" :class="{ 'content-tracker__current-title--scrolled': hasScrolled }">{{activeSection?.title ?? ''}}</p>
  </div>
</template>

<script setup lang="ts">
const activeSectionId = ref('');
const hasScrolled = ref(false);
const sections = ref([
  {
    title: 'Intro',
    id: 'intro',
    y: 0,
  },
  {
    title: 'About',
    id: 'about',
    y: 0,
  },
  {
    title: 'Manifest',
    id: 'manifest',
    y: 0,
  },
  {
    title: 'Resume',
    id: 'resume',
    y: 0
  }
]);

const activeSection = computed(() => {
  return sections.value.find((s) => s.id === activeSectionId.value);
})

function onScroll() {
  const scrolled = window.scrollY;
  const items = sections.value.filter((s) => s.y <= scrolled + 500);
  activeSectionId.value = items[items.length - 1].id;
  hasScrolled.value = scrolled > 0;
}

onMounted(() => {
  window.addEventListener('scroll', onScroll);

  sections.value =  sections.value.map((s) => ({ ...s, y: (document.querySelector(`#${s.id}`) as HTMLElement).offsetTop ?? 0}));
  onScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
})

</script>

<style>
.content-tracker {
  align-items: center;
  bottom: 0;
  display: none;
  justify-content: space-between;
  left: 0;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
}

@media (min-width: 768px) {
  .content-tracker {
    display: flex;
  }
}

.content-tracker__sections {
  display: flex;
  flex-direction: column;
  pointer-events: all;
}

.content-tracker__section-button {
  align-items: center;
  background: none;
  border: none;
  color: var(--font-color-light);
  display: flex;
  gap: var(--spacer-3);
  margin: var(--spacer-1) 0;
  padding: var(--spacer-1) var(--spacer-4);
}

.content-tracker__section-button::before {
  background: var(--font-color);
  border-radius: 50%;
  content: '';
  display: block;
  height: var(--spacer-2);
  width: var(--spacer-2);
}

.content-tracker__section-title {
  color: var(--font-color-light);
  font-size: var(--font-size-5);
  font-weight: var(--font-weight-bold);
  opacity: 0;
  transform: translateX(30px);
  transition: var(--transition-default);
}

.content-tracker__section-button:hover .content-tracker__section-title {
  opacity: 1;
  transform: translateX(0);
}

.content-tracker__section-button--active,
.content-tracker__section-button--active .content-tracker__section-title {
  color: var(--font-color);
}

.content-tracker__section-button--active::before {
  background: var(--color-accent-800);
}


.content-tracker__current-title {
  color: var(--font-color-light);
  font-size: var(--font-size-4);
  font-weight: var(--font-weight-light);
  padding: 0 var(--spacer-4);
  transform: translateX(50px);
  transition: var(--transition-default);
  writing-mode: vertical-lr;
}

.content-tracker__current-title--scrolled {
  transform: translateX(0);
}
</style>