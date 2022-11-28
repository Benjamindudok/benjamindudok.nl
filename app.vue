<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<style>
@import 'node_modules/normalize.css/normalize.css';

:root {
  --font-color: #333;
  --font-family: 'Montserrat', sans-serif;
  --font-family-heading: 'Montserrat', sans-serif;
  --font-size-00: 4.209rem;
  --font-size-0: 3.157rem;
  --font-size-1: 2.369rem;
  --font-size-2: 1.777rem;
  --font-size-3: 1.333rem;
  --font-size-4: 1rem;
  --font-size-5: 0.75rem;
  --font-size-6: 0.563rem;
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  --font-weight-black: 900;
  --line-height: 1.5;
  --line-height-condensed: 1.2;
  --spacer-0: 0;
  --spacer-1: 4px;
  --spacer-2: 8px;
  --spacer-3: 16px;
  --spacer-4: 24px;
  --spacer-5: 32px;
  --spacer-6: 48px;

  color: var(--font-color);
  font-size: 16px;
  line-height: var(--line-height);
}

@media (min-width: 960px) {
  :root {
    font-size: 18px;
  }
}
</style>
