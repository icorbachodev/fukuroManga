<template>
    <header>
        <div class="container">
            <nav class="navbar mb-5" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <h1 class="title is-4">Fukuro <b class="has-text-danger">Manga</b></h1>
                    </a>

                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start mx-auto">
                    <a class="navbar-item">
                        Home
                    </a>

                    <a class="navbar-item">
                        Documentation
                    </a>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                        More
                        </a>

                        <div class="navbar-dropdown">
                        <a class="navbar-item">
                            About
                        </a>
                        <a class="navbar-item">
                            Jobs
                        </a>
                        <a class="navbar-item">
                            Contact
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">
                            Report an issue
                        </a>
                        </div>
                    </div>
                    </div>

                    <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                        <a href="login" class="button is-danger">
                            <strong>Iniciar sesión</strong>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>
    header {
        box-sizing: border-box;
        box-shadow: 0 0px 10px rgba(0, 0, 0, 0.25);
    }
</style>