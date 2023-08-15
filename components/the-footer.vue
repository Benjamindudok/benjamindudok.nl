<template>
<footer class="footer">
  <div class="footer__content">
    <div class="footer__brand">
      <h6 class="footer__brand-title">Benjamin Dudok</h6>
      <p class="footer__brand-subtitle">Frontend developer</p>
    </div>
    <hr class="footer__divider" />
    <p class="footer__description">
      Proudly developed with VueJS/Nuxt/P5 <br/> and some good old fashioned css
    </p>
  </div>
  <ul class="footer__contacts">
    <a class="footer__contact" target="_blank" href="mailto:benjaminwd@gmail.com"><IconsFeatherMail /></a>
    <a class="footer__contact" target="_blank" href="https://www.linkedin.com/in/benjaminwdudok/"><IconsFeatherLinkedin /></a>
    <a class="footer__contact" target="_blank" href="https://github.com/Benjamindudok"><IconsFeatherGithub/></a>
  </ul>
</footer>
</template>

<style>

.footer {
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: var(--spacer-4);
  justify-content: space-between;
  margin-top: var(--spacer-6);
  padding: var(--spacer-2) var(--spacer-6) var(--spacer-4);
}

@media (min-width: 768px) {
  .footer {
    flex-direction: row;
    padding: var(--spacer-4) calc(var(--spacer-6) * 2);
  }
}

.footer__content {
  display: flex;
  flex-direction: column;
  gap: var(--spacer-2);
  justify-content: flex-start;
}

@media (min-width: 768px) {
  .footer__content {
    align-items: center;
    gap: 0;
    flex-direction: row;
    width: 50vw;
  }
}

.footer__brand {
  flex-shrink: 0;
}

.footer__brand-title,
.footer__brand-subtitle {
  font-size: var(--font-size-4);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-condensed);
  margin: 0;
  padding: 0;
}

.footer__brand-subtitle {
  color: var(--color-accent-800);
  font-size: var(--font-size-6);
  font-weight: var(--font-weight-normal);
}

.footer__description {
  font-size: var(--font-size-5);
}

.footer__divider {
  background: var(--font-color);
  border: none;
  display: none;
  height: var(--spacer-6);
  margin: var(--spacer-0) var(--spacer-3);
  width: 1px;
}

@media (min-width: 768px) {
  .footer__divider {
    display: block;
  }
}

.footer__contacts {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer__contact,
.footer__contact:visited {
  color: var(--font-color);
  display: block;
  height: 32px;
  margin: var(--spacer-0) var(--spacer-2);
  width: 32px;
}

.footer__contact:hover {
  color: var(--color-accent-800);
}

.footer__contact:last-child {
  margin-right: 0;
}
</style>
