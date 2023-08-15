<template>
  <TheScrollSpy />
  <TheHero id="intro" />
    <content-section id="about" title="" intro="Hi! I'm Benjamin Dudok, a Frontend Developer from the Netherlands." :small="true">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat nibh vel pretium tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget orci vel justo ultrices finibus non ut nulla. Pellentesque dignissim odio et urna rhoncus vestibulum in sit amet tortor. Aliquam molestie id libero quis porttitor. Nullam ornare efficitur mauris in bibendum.</p>
      <p>Proin sodales risus purus, id iaculis dolor rutrum eu. Vivamus at mi neque. Vivamus ornare, enim quis porta scelerisque, neque arcu rhoncus sapien, quis malesuada libero arcu ut tellus. In nec efficitur mi, non dignissim magna. Nullam volutpat placerat velit. Curabitur nec ultricies diam.</p>
    </content-section>

    <content-section id="manifest" title="Manifest" intro="In multiple aspects of my life I draw inspiration from Bauhaus design. From furniture to digital products. I seek to pursue their values in my development career too.">
      <ul class="home__manifest">
        <li class="home__manifest-principle">
          <h5 class="home__manifest-subtitle">Form</h5>
          <h4 class="home__manifest-title">Form Follows Function</h4>
          <p class="home__manifest-text">In code, prioritize functionality over complexity. Strive to create code that is efficient, maintainable, and user-centric. </p>
        </li>
        <li class="home__manifest-principle">
          <h5 class="home__manifest-subtitle">Minimalism</h5>
          <h4 class="home__manifest-title">Minimalism and Simplicity</h4>
          <p class="home__manifest-text">Believe in the power of simplicity. Avoid unnecessary complexity. Simple solutions are often more robust, easier to understand, and maintainable.</p>
        </li>
        <li class="home__manifest-principle">
          <h5 class="home__manifest-subtitle">Innovation</h5>
          <h4 class="home__manifest-title">Embrace Technology and Innovation</h4>
          <p class="home__manifest-text">Keep an open mind toward emerging technologies and innovative tools. Push the boundaries of what's possible.</p>
        </li>
        <hr class="home__manifest-divider" />
        <li class="home__manifest-principle">
          <h5 class="home__manifest-subtitle">Collaboration</h5>
          <h4 class="home__manifest-title">Collaboration is key</h4>
          <p class="home__manifest-text">Foster a culture of interdisciplinary collaboration. Developers, designers and stakeholders should work together to achieve a harmonious and unified product.</p>
        </li>
        <li class="home__manifest-principle">
          <h5 class="home__manifest-subtitle">Harmony</h5>
          <h4 class="home__manifest-title">Harmony of Components</h4>
          <p class="home__manifest-text">Carefully consider the interactions between different components. A codebase should foster code reusability for easier maintenance, and scalability.</p>
        </li>
        <li class="home__manifest-principle">
          <h5 class="home__manifest-subtitle">Accesibility</h5>
          <h4 class="home__manifest-title">Develop for Accessibility and Inclusivity</h4>
          <p class="home__manifest-text">Develop with all users in mind, ensuring our creations are usable by people of diverse abilities and backgrounds.</p>
        </li>
      </ul>
    </content-section>
  <content-section id="resume" title="Resume" intro="">
    <div class="resume">
      <h3 class="resume__title">Work experience</h3>
      <ul class="resume__content">
        <resume-item subtitle="Frontend developer"
                     title="Blis Digital"
                     :start-date="['June', '2017']"
                     :end-date="['', 'current']"
                     description="Setting up and working on greenfield projects using VueJS and/or Angular. Researching new frontend tech. Coaching other frontend developers. Maintaining frontend quality among all projects.">
            <resume-subitem subtitle="project" title="Navipract" description="Created an application to digitalize treatment protocols.">
              <tag text="VueJS" />
              <tag text="Typescript" />
              <tag text="SCSS" />
              <tag text=".Net Core" />
              <tag text="Vite" />
              <tag text="Vitest" />
            </resume-subitem>
            <resume-subitem subtitle="project" title="Powertrade" description="Rebuild an existing application to track trades and inventory.">
              <tag text="VueJS" />
              <tag text="Typescript" />
              <tag text="SCSS" />
              <tag text=".Net Core" />
              <tag text="Webpack" />
            </resume-subitem>
            <resume-subitem subtitle="project"   title="Exact" description="Created a module in a large enterprise-application.">
              <tag text="Angular" />
              <tag text="Typescript" />
              <tag text="SCSS" />
              <tag text=".Net Core" />
              <tag text="NX/Angular" />
            </resume-subitem>
        </resume-item>
        <resume-item subtitle="Multimedia developer"
                     title="MCW Studios"
                     :start-date="['Feb.', '2014']"
                     :end-date="['May', '2017']"
                     description="Working on all kinds of different tech projects for museums and also websites and apps. Researching and implemented a transition from Flash to Electron apps. Occasionally micro electronics and VR work.">
            <resume-subitem subtitle="project" title="Aerokart Escape Room" description="Created interactive installations using electron and micro-electronics." :size="50">
              <tag text="Typescript" />
              <tag text="SCSS" />
              <tag text="Electron" />
              <tag text="Arduino" />
              <tag text="Gulp" />
            </resume-subitem>
            <resume-subitem subtitle="project" title="Hidrodoe" description="Created interactive installations for an experience center." :size="50">
              <tag text="Typescript" />
              <tag text="SCSS" />
              <tag text="Chrome app" />
              <tag text="Gulp" />
            </resume-subitem>
        </resume-item>
        <resume-item title="MCW Studios"
                     subtitle="Graduate internship"
                     :start-date="['Sep.', '2013']"
                     :end-date="['Jan.', '2014']">
          <template #skills>
          <tag text="Processing" />
          <tag text="Arduino" />
          </template>
        </resume-item>
        <resume-item subtitle="Marketeer internship"
                     title="Informatique"
                     :start-date="['Aug.', '2011']"
                     :end-date="['Jan.', '2012']"
                     description="Creating e-mail newsletters, printed advertisements. Setting up advertisement campaigns for brands like NVIDIA, Corsair and intel.">
        </resume-item>
        <resume-item subtitle="Content manager"
                     title="Informatique"
                     :start-date="['Jul.', '2010']"
                     :end-date="['Aug.', '2012']"
                     description="Creating and updating product pages. Helping the marketing department with content pages. Creating e-mail newsletters.">
        </resume-item>
      </ul>
      <h3 class="resume__title">Education</h3>
      <ul class="resume__content">
        <resume-item subtitle="Hogeschool Rotterdam"
                     title="Bachelor of applied sciences, Communication & Multimedia Design"
                     :start-date="['', '2009']"
                     :end-date="['', '2014']">
          <resume-subitem subtitle="Thesis" title="Tangible user interfaces"
                          description="Can tangible user interfaces help illiterate people learn a language?"
                          :size="100"></resume-subitem>
        </resume-item>
        <resume-item subtitle="Hogeschool Rotterdam"
                     title="Industrieel Product Ontwerpen"
                     :start-date="['', '2008']"
                     :end-date="['', '2009']">
        </resume-item>
        <resume-item subtitle="Melanchthon"
                     title="Voortgezet onderwijs (HAVO)"
                     :start-date="['', '2002']"
                     :end-date="['', '2007']">
        </resume-item>
      </ul>
<!--      <h3 class="resume__title">Certifications</h3>-->
<!--      <ul class="resume__content">-->
<!--        <resume-item title="Azure AZ-204: Developing solutions for Microsoft Azure"-->
<!--                     start-date="2022">-->
<!--        </resume-item>-->
<!--      </ul>-->
    </div>
  </content-section>
</template>

<script lang="ts" setup>
import ContentSection from "../components/content-section.vue";
import ResumeItem from "~/components/resume-item.vue";
import Tag from "~/components/tag.vue";
import TheScrollSpy from "~/components/the-scroll-spy.vue";
</script>

<style>

.home__manifest {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: var(--spacer-4);
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
}

@media (min-width: 768px) {
  .home__manifest {
    flex-direction: row;
  }
}

.home__manifest-principle {
  flex: 0 0 30%;
  text-align: left;
}

.home__manifest-divider {
  border: none;
  border-top: 1px solid var(--color-neutral-300);
  display: none;
  width: 100%;
  flex: 0 0 auto;
}

@media (min-width: 768px) {
  .home__manifest-divider {
    display: block;
  }
}

.home__manifest-subtitle {
  color: var(--color-accent-800);
  font-size: var(--font-size-6);
}

.home__manifest-title,
.home__manifest-text {
  font-size: var(--font-size-4);
  margin: 0;
  padding: 0;
}

.home__manifest-text {
  color: var(--color-neutral-100);
  font-size: var(--font-size-5);
  font-style: italic;
  margin: var(--spacer-2) var(--spacer-0);
}
</style>
