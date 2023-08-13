<template>
    <TheHeader class="layout__header" />
    <main class="layout__content">
      <slot></slot>
    </main>
    <TheFooter class="layout__footer" />
</template>

<style>
html,
body {
  min-height: 100%;
}

#__nuxt {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.layout__header,
.layout__footer {
  position: relative;
  z-index: 2;
}

.layout__content {
  flex: 1 0 auto;
}
</style>