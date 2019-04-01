<template>
    <header class="header">

        <router-link to="/">
            <h1 class="header__title">Benjamin Dudok.</h1>
        </router-link>

        <nav id="nav" class="header__navigation">
            <router-link to="/" active-class="header__link--is-active" :exact="true" class="header__link">
                Articles
            </router-link>
            <router-link to="/about" active-class="header__link--is-active" :exact="true" class="header__link">
                About
            </router-link>
        </nav>

    </header>
</template>

<style lang="scss" src="./header.scss"></style>
