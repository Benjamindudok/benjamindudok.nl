<template>
  <NuxtLayout class="content">
    <NuxtPage/>
  </NuxtLayout>
</template>

<style>
@import 'node_modules/normalize.css/normalize.css';
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@300;700;900&display=swap');

:root {
  --color-neutral-900: #292929;
  --color-neutral-800: #525252;
  --color-neutral-700: #7A7A7A;
  --color-neutral-600: #A3A3A3;
  --color-neutral-500: #CCCCCC;
  --color-neutral-400: #D6D6D6;
  --color-neutral-300: #DFDFDF;
  --color-neutral-200: #E9E9E9;
  --color-neutral-100: #F3F3F3;
  --color-neutral-000: #FDFDFD;
  --color-accent-900: #F20055;
  --color-accent-800: #FB2576;
  --color-accent-700: #8A00C9;
  --color-accent-600: #3F0071;
  --color-accent-500: #0002A1;
  --color-accent-400: #3D5DB7;
  --color-accent-300: #79A4CE;
  --color-accent-200: #B6D9E4;
  --color-accent-100: #F2FAFA;
  --font-color: var(--color-neutral-900);
  --font-family: 'Lato', sans-serif;
  --font-family-heading: 'Montserrat', sans-serif;
  --font-size-00: 4.209rem;
  --font-size-0: 3.157rem;
  --font-size-1: 2.369rem;
  --font-size-2: 1.777rem;
  --font-size-3: 1.333rem;
  --font-size-4: 1rem;
  --font-size-5: 0.889rem;
  --font-size-6: 0.75rem;
  --font-weight-light: 300;
  --font-weight-normal: 400;
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
  font-family: var(--font-family);
  font-size: 16px;
  line-height: var(--line-height);
}

@media (min-width: 960px) {
  :root {
    font-size: 18px;
  }
}

* {
  box-sizing: border-box;
}

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
