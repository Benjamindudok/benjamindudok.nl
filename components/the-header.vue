<template>
<header class="navigation">
  <div class="navigation__brand">
    <feather-mail /><nuxt-link class="navigation__brand-title" to="/">Benjamin Dudok</nuxt-link>
  </div>
  <nuxt-link class="navigation__link" :exact="true" exact-active-class="navigation__link--is-active" to="/">Home</nuxt-link>
  <nuxt-link class="navigation__link" :exact="true" exact-active-class="navigation__link--is-active" to="/resume">Resume</nuxt-link>
  <button class="navigation__theme-switcher" type="button" @click="toggleCurrentTheme">
    <feather-night v-if="currentColorScheme === 'light'" />
    <feather-day v-if="currentColorScheme === 'dark'" />
  </button>
</header>
</template>

<script lang="ts" setup>
import FeatherMail from "./icons/feather-mail.vue";
import FeatherNight from "./icons/feather-night.vue";
import FeatherDay from "./icons/feather-day.vue";
import {ref} from "@vue/reactivity";

const currentColorScheme = ref('light');

function setCurrentTheme(scheme: 'light'|'dark') {
  currentColorScheme.value = scheme;
  localStorage.setItem('color-scheme', scheme);

  const $body = document.querySelector('body') as HTMLBodyElement;
  $body.setAttribute('data-color-scheme', scheme);
}

function initCurrentTheme() {
  const $body = document.querySelector('body') as HTMLBodyElement;
  const prefersDarkColorScheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const hasSelectedDarkColorScheme = $body.getAttribute('data-color-scheme') === 'dark' || localStorage.getItem('color-scheme') === 'dark';
  if (prefersDarkColorScheme || hasSelectedDarkColorScheme) {
    setCurrentTheme('dark');
  }
  else
  {
    setCurrentTheme('light');
  }
}

function toggleCurrentTheme() {
  setCurrentTheme(currentColorScheme.value === 'light' ? 'dark' : 'light');
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  setCurrentTheme(event.matches ? 'dark' : 'light')
});

initCurrentTheme();

</script>

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

.navigation__theme-switcher {
  align-items: center;
  background: none;
  border: none;
  color: var(--font-color);
  cursor: pointer;
  display: flex;
  justify-content: space-around;
}

</style>