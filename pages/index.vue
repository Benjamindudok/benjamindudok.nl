<template>
  <div class="home">
    <div class="home__header">
      <div class="home__header-content">
        <h2 class="home__title">I Love building digital products that matter</h2>
        <p class="home__subtitle">but are also fun, engaging and interactive</p>
      </div>
    </div>
  </div>
</template>

<style>
.home__header {
  align-items: center;
  display: flex;
  height: 80vh;
  justify-content: space-around;
  padding: var(--spacer-6);
  width: 100%;
}

.home__title,
.home__subtitle {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-00);
  font-weight: var(--font-weight-black);
  line-height: var(--line-height-condensed);
  margin: 0;
  padding: 0;
  text-align: center;
}

.home__subtitle {
  font-size: var(--font-size-4);
  font-weight: var(--font-weight-bold);
}
</style>
