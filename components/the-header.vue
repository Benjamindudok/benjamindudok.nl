<template>
<header class="header">
  <div class="header__brand">
    <a class="header__brand-contact" href="mailto:benjaminwd@gmail.com"><feather-mail /></a><nuxt-link class="header__brand-title" to="/">Benjamin Dudok</nuxt-link>
  </div>
  <the-navigation></the-navigation>
  <button class="header__theme-switcher" type="button" @click="toggleCurrentTheme">
    <feather-night v-if="currentColorScheme === 'light'" />
    <feather-day v-if="currentColorScheme === 'dark'" />
  </button>
</header>
</template>

<script lang="ts" setup>
import TheNavigation from "~/components/the-navigation.vue";
import FeatherMail from "./icons/feather-mail.vue";
import FeatherNight from "./icons/feather-night.vue";
import FeatherDay from "./icons/feather-day.vue";
import { ref } from "@vue/reactivity";

const currentColorScheme = ref('light');

function setCurrentTheme(scheme: 'light'|'dark') {
  currentColorScheme.value = scheme;
  localStorage.setItem('color-scheme', scheme);

  const $body = document.querySelector('body') as HTMLBodyElement;
  $body.setAttribute('data-color-scheme', scheme);
}

function initCurrentTheme() {
  const prefersDarkColorScheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const hasSelectedDarkColorScheme = localStorage.getItem('color-scheme') === 'dark';
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
.header {
  align-items: center;
  display: flex;
  margin: 0;
  padding: var(--spacer-3) var(--spacer-5);
  width: 100%;
}

.header__brand {
  align-items: center;
  display: flex;
  gap: var(--spacer-3);
  margin-right: auto;
}

.header__brand-contact {
  color: var(--font-color);
  display: block;
  line-height: 0;
  margin-bottom: var(--spacer-1);
}

.header__brand-contact:hover {
  color: var(--color-accent-800);
 }

.header__brand-title,
.header__brand-title:visited {
  color: var(--font-color);
  letter-spacing: -2px;
  font-family: var(--font-family-heading);
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-bold);
  text-decoration: none;
}

.header__brand-title:hover {
  color: var(--color-accent-800);
}

.header__theme-switcher {
  align-items: center;
  background: none;
  border: none;
  color: var(--font-color);
  cursor: pointer;
  display: flex;
  justify-content: space-around;
}

</style>