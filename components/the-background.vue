<template>
  <div class="background"></div>
</template>

<style>
.background {
  background: var(--color-background-alternate);
  height: 95vh;
  left: 0;
  position: absolute;
  top: 0;
  transition: var(--transition-default);
  width: 95vw;
  z-index: 1;
}

.background {
  --bg-color: var(--color-background-alternate);
  --dot-color: var(--color-background-highlight);
  --dot-size: 2px;
  --dot-space: 24px;
  background: linear-gradient(90deg, var(--bg-color) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center, linear-gradient(var(--bg-color) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center, var(--dot-color);
  background-size: var(--dot-space) var(--dot-space);
}
</style>