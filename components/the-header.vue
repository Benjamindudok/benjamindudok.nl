<template>
<header class="navigation">
  <div class="navigation__brand">
    <nuxt-link class="navigation__brand-title" to="/">Benjamin Dudok</nuxt-link>
  </div>
  <nuxt-link class="navigation__link" :exact="true" exact-active-class="navigation__link--is-active" to="/">Home</nuxt-link>
  <nuxt-link class="navigation__link" :exact="true" exact-active-class="navigation__link--is-active" to="/manifest">Manifest</nuxt-link>
  <nuxt-link class="navigation__link" :exact="true" exact-active-class="navigation__link--is-active" to="/resume">Resume</nuxt-link>
</header>
</template>

<style>
.navigation {
  align-items: center;
  display: flex;
  margin: 0;
  padding: var(--spacer-3) var(--spacer-5);
  width: 100%;
}

.navigation__brand {
  display: flex;
  margin-right: auto;
}

.navigation__brand-title,
.navigation__brand-title:visited {
  color: var(--font-color);
  letter-spacing: -2px;
  font-family: var(--font-family-heading);
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-bold);
  text-decoration: none;
}


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

</style>
