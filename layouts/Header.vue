<template>
    <header>
        <div class="container">
            <nav class="navbar mb-5" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/">
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
                    <a class="navbar-item" href="/">
                        Inicio
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
                        <div class="navbar-item" v-if="desconectado == true">
                            <div class="buttons">
                            <a href="login" class="button is-danger">
                                <strong>Iniciar sesión</strong>
                            </a>
                            </div>
                        </div>
                        <div class="navbar-item has-dropdown is-hoverable" v-if="desconectado == false">
                            <img src="https://wallpapercave.com/wp/wp8846862.jpg" class="mt-3">
                            <a class="navbar-item userName"><strong>{{nombre}}</strong></a>
                            <div class="navbar-dropdown">
                                <a class="navbar-item">Tu perfil</a>
                                <a class="navbar-item">Ver carrito</a>
                                <a class="navbar-item" @click="desconectar">Desconectar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    
</template>

<script>
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from "~/plugins/firebase"

export default {
    data() {
        return {
            desconectado: true,
            nombre: '',
            fotoPerfil: ''
        }
    },
    created() {
        this.comprobarSesion()
        console.log(this.fotoPerfil)
    },
    methods: {
        comprobarSesion() {
            onAuthStateChanged(auth, user => {
                if(user) {
                    this.desconectado = false
                    this.nombre = user.displayName
                    this.fotoPerfil = user.photoURL
                } else {
                    this.desconectado = true
                }
            })
        },
        desconectar() {
            signOut(auth)
                .then(() => { })
                .catch(error => {
                    alert(error.message)
                })
        }
    }
}
</script>

<style scoped>
    header {
        box-sizing: border-box;
        box-shadow: 0 0px 10px rgba(0, 0, 0, 0.25);
    }
    img {
        border-radius: 100%;
        width: 30px;
    }
    .userName:hover {
        background-color: white;
    }
</style>