<template>
    <ul class="pagination" v-if="pages > 1">

        <li v-for="page in pagesInRange" :key="page" class="pagination__item">
            <span @click="onPageSelect(page)" :class="linkClassesForPage(page)">{{page}}</span>
        </li>

    </ul>
</template>

<script lang="ts" src="./pagination.ts"></script>
<style lang="scss" src="./pagination.scss"></style>
