<template>
<div class="hero">
  <TheBackground :has-scrolled="hasScrolled"/>
  <div class="hero__content">
    <h2 class="hero__title">I Love building digital products that matter</h2>
  </div>
  <ul class="hero__list">
    <li class="hero__list-item">
      <h3 class="hero__list-heading hero__list-heading--subtitle">Who I am</h3>
      <h3 class="hero__list-heading">Hi there!</h3>
      <p class="hero__list-description">I'm Benjamin Dudok, a frontend developer currently working at <a href="https://www.blisdigital.com">Blis Digital</a></p>
    </li>
    <li class="hero__list-item">
      <h3 class="hero__list-heading hero__list-heading--subtitle">What I do</h3>
      <h4 class="hero__list-heading">Digital Product Development</h4>
      <p class="hero__list-description">I craft applications that provide seamless experiences.</p>
    </li>
    <li class="hero__list-item">
      <h3 class="hero__list-heading hero__list-heading--subtitle">and...</h3>
      <h3 class="hero__list-heading">Coaching</h3>
      <p class="hero__list-description">Through mentorship and guidance, I foster a culture of continuous improvement.</p>
    </li>
    <li class="hero__list-item">
      <h3 class="hero__list-heading hero__list-heading--subtitle">I also do</h3>
      <h3 class="hero__list-heading">Technical Consultancy</h3>
      <p class="hero__list-description">I help organizations make well-informed architectural decisions.</p>
    </li>
  </ul>
</div>
</template>

<script lang="ts" setup>
const hasScrolled = ref<boolean>(false);

function setScrolled() {
  hasScrolled.value = window.scrollY > 0;
}

window.addEventListener('scroll', setScrolled);

onBeforeUnmount(() => {
  window.removeEventListener('scroll', setScrolled);
})
</script>

<style>
.hero {
  align-items: center;
  display: block;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-end;
  padding-top: calc(var(--spacer-6) * 4);
  position: relative;
  width: 100%;
}

@media (min-width: 768px) {
  .hero {
    display: flex;
    height: 100vh;
  }
}

.hero__content,
.hero__list {
  margin: auto 0;
  max-width: 762px;
  position: relative;
  z-index: 2;
}

.hero__title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-black);
  line-height: var(--line-height-condensed);
  margin: 0 0 var(--spacer-6);
  padding: 0;
  text-align: center;
}

@media (min-width: 768px) {
  .hero__title {
    font-size: var(--font-size-00);
    margin-bottom: 0;
  }
}

.hero__list {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: var(--spacer-3);
  justify-content: space-between;
  margin: 0 0 var(--spacer-6) 0;
  max-width: none;
  padding: 0 var(--spacer-6);
  width: 100%;
}

@media (min-width: 768px) {
  .hero__list {
    flex-direction: row;
    gap: 0;
    padding: 0 calc(var(--spacer-6) * 2);
  }
}

.hero__list-item {
  flex: 1 1 auto;

}

@media(min-width: 768px) {
  .hero__list-item {
    flex: 1 1 25%;
    max-width: 300px;
  }
}

.hero__list-heading {
  font-size: var(--font-size-5);
  margin: 0;
}

.hero__list-heading--subtitle {
  color: var(--color-accent-800);
  font-size: var(--font-size-6);
  margin: 0 0 var(--spacer-3);
}

.hero__list-description {
  font-size: var(--font-size-5);
  margin: 0;
}
</style>
<script setup lang="ts">
</script>