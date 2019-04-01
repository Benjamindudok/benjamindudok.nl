<template>
    <div class="archive">
        <ul class="archive__list">
            <li class="archive__item" v-for="post in posts" :key="post.id">
                <span class="archive__meta">{{post.createdAt | formatDate}}</span>
                <router-link :to="'/articles/' + post.slug" class="archive__link">
                    <h2 class="archive__title">
                        {{post.title}}
                    </h2>
                </router-link>
            </li>
        </ul>

        <the-pagination :pages="pages" :current-page="currentPage" @page-selected="onPageChange"></the-pagination>
    </div>
</template>

<script lang="ts" src="./archive.ts"></script>
<style lang="scss" src="./archive.scss"></style>