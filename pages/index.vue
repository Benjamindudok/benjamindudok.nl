<template>
  <div class="home">
    <div class="home__header">
      <div class="home__header-content">
        <h2 class="home__title">I Love building digital products that matter</h2>
        <p class="home__subtitle">but are also fun, engaging and interactive</p>
      </div>
    </div>

    <content-section title="Lorem ipsum dolor sit amet">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat nibh vel pretium tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget orci vel justo ultrices finibus non ut nulla. Pellentesque dignissim odio et urna rhoncus vestibulum in sit amet tortor. Aliquam molestie id libero quis porttitor. Nullam ornare efficitur mauris in bibendum.</p>
      <p>Proin sodales risus purus, id iaculis dolor rutrum eu. Vivamus at mi neque. Vivamus ornare, enim quis porta scelerisque, neque arcu rhoncus sapien, quis malesuada libero arcu ut tellus. In nec efficitur mi, non dignissim magna. Nullam volutpat placerat velit. Curabitur nec ultricies diam. <nuxt-link to="/manifest">Read my manifest</nuxt-link></p>
    </content-section>

    <content-section :single="true">
      <ul class="home__manifest">
        <li class="home__manifest-principle">
          <h4 class="home__manifest-title">Lorem ipsum dolor sit amet</h4>
          <p class="home__manifest-text">Proin sodales risus purus, id iaculis dolor rutrum eu. Vivamus at mi neque.</p>
        </li>
        <li class="home__manifest-principle">
          <h4 class="home__manifest-title">Lorem ipsum dolor sit amet</h4>
          <p class="home__manifest-text">Proin sodales risus purus, id iaculis dolor rutrum eu. Vivamus at mi neque.</p>
        </li>
        <li class="home__manifest-principle">
          <h4 class="home__manifest-title">Lorem ipsum dolor sit amet</h4>
          <p class="home__manifest-text">Proin sodales risus purus, id iaculis dolor rutrum eu. Vivamus at mi neque.</p>
        </li>
        <li class="home__manifest-principle">
          <h4 class="home__manifest-title">Lorem ipsum dolor sit amet</h4>
          <p class="home__manifest-text">Proin sodales risus purus, id iaculis dolor rutrum eu. Vivamus at mi neque.</p>
        </li>
        <li class="home__manifest-principle">
          <h4 class="home__manifest-title">Lorem ipsum dolor sit amet</h4>
          <p class="home__manifest-text">Proin sodales risus purus, id iaculis dolor rutrum eu. Vivamus at mi neque.</p>
        </li>
      </ul>
    </content-section>

    <content-section title="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." :single="true">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat nibh vel pretium tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget orci vel justo ultrices finibus non ut nulla. Pellentesque dignissim odio et urna rhoncus vestibulum in sit amet tortor. Aliquam molestie id libero quis porttitor. Nullam ornare efficitur mauris in bibendum.</p>
    </content-section>
  </div>
</template>

<style>
.home__header {
  align-items: center;
  display: flex;
  height: calc(100vh - 100px);
  justify-content: space-around;
  padding: var(--spacer-6);
  width: 100%;
}

.home__header-content {
  max-width: 762px;
}

.home__title,
.home__subtitle {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-00);
  font-weight: var(--font-weight-black);
  line-height: var(--line-height-condensed);
  margin: 0;
  padding: 0;
  text-align: center;

}

.home__subtitle {
  font-size: var(--font-size-4);
  font-weight: var(--font-weight-bold);
}

.home__manifest {
  list-style: none;
  margin: 0 auto;
  padding: 0;
}

.home__manifest-principle {
  margin: var(--spacer-6) var(--spacer-0);
  text-align: center;
}

.home__manifest-title,
.home__manifest-text {
  font-size: var(--font-size-3);
  line-height: var(--line-height-condensed);
  margin: 0;
  padding: 0;
}

.home__manifest-text {
  font-size: var(--font-size-4);
  margin: var(--spacer-2) var(--spacer-0);
  font-style: italic;
}
</style>

<script lang="ts" setup>
import ContentSection from "../components/content-section";
</script>
