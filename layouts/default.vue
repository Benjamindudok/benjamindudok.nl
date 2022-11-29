<template>
    <TheHeader />
    <div class="content">
      <slot></slot>
    </div>
    <TheFooter />
</template>

<style>
html,
body {
  height: 100%;
}

#__nuxt {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content {
  flex: 1 0 auto;
}
</style>
