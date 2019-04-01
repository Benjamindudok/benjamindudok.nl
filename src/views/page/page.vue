<template>
    <article class="page" v-if="page">
        <header class="page__header">
            <h2 class="page__title">
                {{ page.title }}
            </h2>
        </header>

        <p class="page__lead lead">
            {{ page.introduction }}
        </p>

        <div class="page__content" v-html="page.content"></div>
    </article>
</template>

<script lang="ts" src="./page.ts"></script>
<style lang="scss" src="./page.scss"></style>