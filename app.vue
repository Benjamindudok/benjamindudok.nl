<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<style>
@import 'node_modules/normalize.css/normalize.css';
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@300;700;900&display=swap');

:root {
  --color-accent-900: #F20055;
  --color-accent-800: #FB2576;
  --color-accent-700: #8A00C9;
  --color-accent-600: #3F0071;
  --color-accent-500: #0002A1;
  --color-accent-400: #3D5DB7;
  --color-accent-300: #79A4CE;
  --color-accent-200: #B6D9E4;
  --color-accent-100: #F2FAFA;
  --color-background: var(--color-neutral-000);
  --color-background-alternate: var(--color-neutral-000);
  --color-background-highlight: var(--color-neutral-400);
  --color-neutral-900: #050608;
  --color-neutral-800: #0B0D12;
  --color-neutral-700: #10131C;
  --color-neutral-600: #151A26;
  --color-neutral-500: #192030;
  --color-neutral-400: #1D273C;
  --color-neutral-300: #212D47;
  --color-neutral-200: #243453;
  --color-neutral-100: #738797;
  --color-neutral-050: #BECBCF;
  --color-neutral-000: #FDFDFD;
  --font-color: var(--color-neutral-900);
  --font-color-light: var(--color-neutral-700);
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
  --line-height: 1.7;
  --line-height-condensed: 1.2;
  --spacer-0: 0;
  --spacer-1: 4px;
  --spacer-2: 8px;
  --spacer-3: 16px;
  --spacer-4: 24px;
  --spacer-5: 32px;
  --spacer-6: 48px;
  --transition-timing: ease-in-out;
  --transition-duration: .4s;
  --transition-default: all var(--transition-timing) var(--transition-duration);
}

[data-color-scheme='dark'] {
  --color-background: var(--color-neutral-900);
  --color-background-alternate: var(--color-neutral-900);
  --color-background-highlight: var(--color-neutral-500);
  --font-color: var(--color-neutral-000);
  --font-color-light: var(--color-neutral-100);
}

@media (min-width: 960px) {
  :root {
    font-size: 18px;
  }
}

* {
  box-sizing: border-box;
}

*::selection {
  background: var(--color-accent-800);
  color: var(--color-neutral-000);
}

html,
body {
  background-color: var(--color-background);
  color: var(--font-color);
  font-family: var(--font-family);
  font-size: 16px;
  line-height: var(--line-height);
  transition: var(--transition-default);
  scroll-behavior: smooth;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-black);
  line-height: var(--line-height-condensed);
  transition: var(--transition-default);
}

h1 {
  font-size: var(--font-size-00);
}

h2 {
  font-size: var(--font-size-0);
}

h3 {
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-bold);
}

h4 {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-bold);
}

h5 {
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-bold);
}

h6 {
  font-size: var(--font-size-4);
  font-weight: var(--font-weight-bold);
}

p {
  margin: var(--spacer-2) var(--spacer-0);
}

a,
a:visited {
  color: var(--color-accent-500);
  font-weight: var(--font-weight-bold);
  text-decoration: none;
  transition: var(--transition-default);
}

a:active,
a:focus,
a:hover {
  color: var(--color-accent-700);
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 0;
  padding: 0;
}
</style>
