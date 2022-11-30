<template>
  <content-section title="In feugiat nibh vel pretium tempus." :single="true" :spacious="true">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat nibh vel pretium tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget orci vel justo ultrices finibus non ut nulla. Pellentesque dignissim odio et urna rhoncus vestibulum in sit amet tortor. Aliquam molestie id libero quis porttitor. Nullam ornare efficitur mauris in bibendum.</p>
    <p>Proin sodales risus purus, id iaculis dolor rutrum eu. Vivamus at mi neque. Vivamus ornare, enim quis porta scelerisque, neque arcu rhoncus sapien, quis malesuada libero arcu ut tellus. In nec efficitur mi, non dignissim magna. Nullam volutpat placerat velit. Curabitur nec ultricies diam.</p>
  </content-section>
  <content-section :single="true">
    <div class="resume">
      <h3 class="resume__title">Work experience</h3>
      <ul class="resume__content">
        <resume-item title="Frontend developer"
                     subtitle="Blis Digital"
                     timestamp="June 2017 - current"
                     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vehicula urna, eget rutrum neque. Morbi consequat interdum arcu, non ullamcorper velit lobortis ut. Pellentesque ultrices, felis et scelerisque iaculis, risus ipsum pulvinar magna, vel mollis felis mi ut lorem."
                     content-title="Notable projects">
          <ul>
            <resume-subitem title="Powertrade" description="Vivamus ornare, enim quis porta scelerisque, neque arcu rhoncus sapien, quis malesuada libero arcu ut tellus"></resume-subitem>
            <resume-subitem title="Baarda" description="Vivamus ornare, enim quis porta scelerisque, neque arcu rhoncus sapien, quis malesuada libero arcu ut tellus"></resume-subitem>
            <resume-subitem title="Exact" description="Vivamus ornare, enim quis porta scelerisque, neque arcu rhoncus sapien, quis malesuada libero arcu ut tellus"></resume-subitem>
          </ul>
        </resume-item>
        <resume-item title="Multimedia developer"
                     subtitle="MCW Studios"
                     timestamp="Feb. 2014 - May 2017"
                     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vehicula urna, eget rutrum neque. Morbi consequat interdum arcu, non ullamcorper velit lobortis ut. Pellentesque ultrices, felis et scelerisque iaculis, risus ipsum pulvinar magna, vel mollis felis mi ut lorem."
                     content-title="Notable projects">
          <ul>
            <resume-subitem title="Aerokart Winscape Escape Room" description="Vivamus ornare, enim quis porta scelerisque, neque arcu rhoncus sapien, quis malesuada libero arcu ut tellus"></resume-subitem>
            <resume-subitem title="Opgeschaalde Ambulancezorg (Nederland)" description="Vivamus ornare, enim quis porta scelerisque, neque arcu rhoncus sapien, quis malesuada libero arcu ut tellus"></resume-subitem>
            <resume-subitem title="Hidrodoe" description="Vivamus ornare, enim quis porta scelerisque, neque arcu rhoncus sapien, quis malesuada libero arcu ut tellus"></resume-subitem>
          </ul>
        </resume-item>
        <resume-item title="Graduate internship"
                     subtitle="MCW Studios"
                     timestamp="Sep. 2013 - Jan 2014"
                     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vehicula urna, eget rutrum neque. Morbi consequat interdum arcu, non ullamcorper velit lobortis ut. Pellentesque ultrices, felis et scelerisque iaculis, risus ipsum pulvinar magna, vel mollis felis mi ut lorem.">
        </resume-item>
        <resume-item title="Content manager"
                     subtitle="Informatique"
                     timestamp="Jul. 2010 - Aug. 2012"
                     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vehicula urna, eget rutrum neque. Morbi consequat interdum arcu, non ullamcorper velit lobortis ut. Pellentesque ultrices, felis et scelerisque iaculis, risus ipsum pulvinar magna, vel mollis felis mi ut lorem.">
        </resume-item>
      </ul>
      <h3 class="resume__title">Education</h3>
      <ul class="resume__content">
        <resume-item title="Bachelor of applied sciences, Communication & Multimedia Design"
                     subtitle="Hogeschool rotterdam"
                     timestamp="2009 - 2014"
                     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vehicula urna, eget rutrum neque. Morbi consequat interdum arcu, non ullamcorper velit lobortis ut. Pellentesque ultrices, felis et scelerisque iaculis, risus ipsum pulvinar magna, vel mollis felis mi ut lorem.">
        </resume-item>
        <resume-item title="Industrieel Product Ontwerpen"
                     subtitle="Hogeschool rotterdam"
                     timestamp="2008 - 2009">
        </resume-item>
        <resume-item title="Voortgezet onderwijs (HAVO)"
                     subtitle="Melanchthon"
                     timestamp="2002 - 2007">
        </resume-item>
      </ul>
      <h3 class="resume__title">Certifications</h3>
      <ul class="resume__content">
          <resume-item title="Azure AZ-204: Developing solutions for Microsoft Azure"
                       timestamp="2022">
          </resume-item>
      </ul>
    </div>
  </content-section>
</template>

<script lang="ts" setup>
import ResumeItem from "../components/resume-item.vue";
</script>

<style>
.resume {
  display: grid;
  grid-gap: var(--spacer-6);
  grid-template-columns: 300px 1fr;
  grid-template-rows: repeat(4, auto);
}

.resume__title {
  border-top: 1px solid var(--font-color);
  font-size: var(--font-size-3);
  margin: 0;
  padding-top: var(--spacer-3);
}
</style>
