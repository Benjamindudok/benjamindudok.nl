<template>
    <div class="overview">
        <ul class="overview__list">
            <li class="overview__item" v-for="post in posts" :key="post.id">
                <p class="overview__meta">{{post.createdAt | formatDate}}</p>
                <router-link :to="'/articles/' + post.slug" class="overview__link">
                    <h2 class="overview__title">
                        {{post.title}}
                    </h2>
                </router-link>
                <p class="overview__description">
                    {{post.introduction | truncate(180)}}
                </p>
            </li>
        </ul>

        <the-pagination :pages="pages" :current-page="currentPage" @page-selected="onPageChange"></the-pagination>
    </div>
</template>

<script lang="ts" src="./overview.ts"></script>
<style lang="scss" src="./overview.scss"></style>