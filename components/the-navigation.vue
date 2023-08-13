<template>
  <nav class="navigation">
    <a class="navigation__link" target="_blank" href="https://www.linkedin.com/in/benjaminwdudok/">Linkedin</a>
    <a class="navigation__link" target="_blank" href="https://github.com/Benjamindudok">Github</a>
  </nav>
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

.navigation__link:active {
  color: var(--color-accent-900);
}

.navigation__link:hover {
  color: var(--color-accent-700);
}
</style>
<script setup lang="ts">
</script>