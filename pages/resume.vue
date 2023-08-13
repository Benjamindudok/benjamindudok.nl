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
                     description="Setting up and working on greenfield projects using VueJS and/or Angular. Researching new frontend tech. Coaching other frontend developers. Maintaining frontend quality among all projects."
                     content-title="Notable projects">
          <ul>
            <resume-subitem title="Navipract" description="Created a medical application to digitalize protocols of child oncology departments."></resume-subitem>
            <resume-subitem title="Powertrade" description="Rebuild an existing old trading application."></resume-subitem>
            <resume-subitem title="Baarda" description="Created an application to monitor employee growth."></resume-subitem>
            <resume-subitem title="Exact" description="Created a module in a large enterprise-application in Angular."></resume-subitem>
          </ul>
        </resume-item>
        <resume-item title="Multimedia developer"
                     subtitle="MCW Studios"
                     timestamp="Feb. 2014 - May 2017"
                     description="Working on all kinds of different tech projects for museums and also websites and apps. Researching and implemented a transition from Flash to Electron apps. Occasionally micro electronics and VR work."
                     content-title="Notable projects">
          <ul>
            <resume-subitem title="Aerokart Winscape Escape Room" description="Created multiple interactive installations which were a combination of electron apps and micro electronic projects."></resume-subitem>
            <resume-subitem title="Opgeschaalde Ambulancezorg (Nederland)" description="Created an e-learning application for people in the emergency healthcare sector."></resume-subitem>
            <resume-subitem title="Hidrodoe" description="Created multiple interactive points of interest for an experience center using chrome apps."></resume-subitem>
          </ul>
        </resume-item>
        <resume-item title="Graduate internship"
                     subtitle="MCW Studios"
                     timestamp="Sep. 2013 - Jan 2014">
        </resume-item>
        <resume-item title="Marketeer internship"
                     subtitle="Informatique"
                     timestamp="Aug. 2011 - Jan. 2012"
                     description="Creating e-mail newsletters, printed advertisements. Setting up advertisement campaigns for brands like NVIDIA, Corsair and intel.">
        </resume-item>
        <resume-item title="Content manager"
                     subtitle="Informatique"
                     timestamp="Jul. 2010 - Aug. 2012"
                     description="Creating and updating product pages. Helping the marketing department with content pages. Creating e-mail newsletters.">
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
