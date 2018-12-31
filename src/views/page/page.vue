<template>
    <pageContent>
        <header class="page__header" slot="header">
            <h2 class="page__title">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
                                    adipisci velit...</h2>
        </header>

        <footer class="page__footer" slot="footer">
            <router-link to="/">Back to overview</router-link>
        </footer>
    </pageContent>
</template>

<script lang="ts" src="./page.ts"></script>

<style lang="scss" src="./page.scss"></style>
