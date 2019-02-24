<template>
    <article class="container page">
        <header class="page__header" slot="header">
            <h2 class="page__title">
                {{ post.title }}
            </h2>
        </header>

        <p class="lead">
            {{ post.introduction }}
        </p>

        <div class="page__content" v-html="post.content"></div>

        <footer class="page__footer" slot="footer">
            <router-link to="/">Back to overview</router-link>
        </footer>
    </article>
</template>

<script lang="ts" src="./page-content.ts"></script>
