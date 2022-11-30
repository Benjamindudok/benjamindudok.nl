<template>
  <nuxt-link class="navigation__link" :exact="true" exact-active-class="navigation__link--is-active" to="/">Home</nuxt-link>
  <nuxt-link class="navigation__link" :exact="true" exact-active-class="navigation__link--is-active" to="/resume">Resume</nuxt-link>
</template>

<style>
.navigation__link,
.navigation__link:visited {
  color: var(--font-color);
  font-size: var(--font-size-5);
  font-weight: var(--font-weight-bold);
  padding: var(--spacer-3) var(--spacer-5);
  text-decoration: none;
}

.navigation__link--is-active,
.navigation__link--is-active:visited,
.navigation__link:active {
  color: var(--color-accent-900);
}

.navigation__link:hover {
  color: var(--color-accent-700);
}
</style>