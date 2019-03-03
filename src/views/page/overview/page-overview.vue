<template>
    <div class="page">
        <ul class="page__list">
            <li class="page__item" v-for="post in posts" :key="post.id">
                <p class="page__meta">{{post.createdAt | formatDate}}</p>
                <router-link :to="'/page/' + post.id" class="page__link">
                    <h2 class="overview__title">
                        {{post.title}}
                    </h2>
                </router-link>
                <p class="page__description">
                    {{post.introduction | truncate(180)}}
                </p>
            </li>
        </ul>

        <the-pagination :pages="pages" :current-page="currentPage" @page-selected="onPageChange"></the-pagination>
    </div>
</template>

<script lang="ts" src="./page-overview.ts"></script>