<template>
<footer class="footer">
  <div class="footer__content">
    <div class="footer__brand">
      <h6 class="footer__brand-title">Benjamin Dudok</h6>
      <p class="footer__brand-subtitle">Frontend developer</p>
    </div>
    <hr class="footer__divider" />
    <p class="footer__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id nisl quis lorem tempus convallis. Nunc imperdiet augue a libero sollicitudin, vel condimentum odio congue.
    </p>
  </div>
  <ul class="footer__contacts">
    <li class="footer__contact"></li>
    <li class="footer__contact"></li>
    <li class="footer__contact"></li>
    <li class="footer__contact"></li>
  </ul>
</footer>
</template>

<style>

.footer {
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  padding: var(--spacer-4) var(--spacer-6);
}

.footer__content {
  align-items: center;
  display: flex;
  justify-content: flex-start;
  width: 50vw;
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
  font-size: var(--font-size-6);
  font-weight: var(--font-weight-normal);
}

.footer__description {
  /*flex: 1 auto;*/
  font-size: var(--font-size-5);
}

.footer__divider {
  background: var(--color-neutral-800);
  height: var(--spacer-6);
  margin: var(--spacer-0) var(--spacer-3);
  width: 1px;
}

.footer__contacts {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer__contact {
  background: var(--color-neutral-800);
  display: block;
  height: 32px;
  margin: var(--spacer-0) var(--spacer-2);
  width: 32px;
}

.footer__contact:last-child {
  margin-right: 0;
}
</style>