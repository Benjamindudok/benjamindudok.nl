<template>
    <div id="app" class="app">
        <header class="app__header container">
            <h1 class="app__title">Benjamin Dudok</h1>
            <nav id="nav">
                <router-link to="/">Home</router-link>
                |
                <router-link to="/about">About</router-link>
            </nav>
        </header>

        <main>
            <router-view />
        </main>

        <footer class="container">
            <a href="http://www.github.com" target="_blank">Github</a> |
            <a href="http://www.linkedin.com" target="_blank">Linkedin</a>
        </footer>
    </div>
</template>

<script lang="ts" src="./app.ts"></script>

<style lang="scss" src="./app.scss"></style>
