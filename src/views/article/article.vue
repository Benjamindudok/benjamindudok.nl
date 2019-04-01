<template>
    <article class="article" v-if="article">
        <header class="article__header">
            <h2 class="article__title">
                {{ article.title }}
            </h2>
        </header>

        <p class="article__lead lead">
            {{ article.introduction }}
        </p>

        <div class="article__content" v-html="article.content"></div>

        <footer class="article__footer" slot="footer">
            <router-link to="/">Back to all articles</router-link>
        </footer>
    </article>
</template>

<script lang="ts" src="./article.ts"></script>
<style lang="scss" src="./article.scss"></style>
