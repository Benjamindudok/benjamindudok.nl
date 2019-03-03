<template>
    <article class="page" v-if="post">
        <header class="page__header">
            <h2 class="page__title">
                {{ post.title }}
            </h2>
        </header>

        <p class="page__lead lead">
            {{ post.introduction }}
        </p>

        <div class="page__content" v-html="post.content"></div>

        <footer class="page__footer" slot="footer">
            <router-link to="/">Back to overview</router-link>
        </footer>
    </article>
</template>

<script lang="ts" src="./page-content.ts"></script>
