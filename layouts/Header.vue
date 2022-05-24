<template>
    <header>
        <div class="container mb-4">
            <nav class="navbar is-transparent pb-2" role="navigation" aria-label="main navigation">
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
                    <div class="navbar-start pl-6 mx-auto">
                        <a class="navbar-item" href="/">
                            Inicio
                        </a>

                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                Mangas
                            </a>

                            <div class="navbar-dropdown">
                                <a class="navbar-item" href="/novedad">
                                    Novedades
                                </a>
                                <a class="navbar-item" href="/recomendado">
                                    Recomendados
                                </a>
                                <a class="navbar-item" href="/completo">
                                    Catálogo Completo
                                </a>
                            </div>
                        </div>

                        <a class="navbar-item" href="/merchandising">
                            Merchandising
                        </a>

                        <a class="navbar-item">
                            Contacto
                        </a>

                        <a class="navbar-item">
                            Sobre nosotros
                        </a>
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item" v-if="desconectado == true">
                            <div class="buttons">
                            <a href="/login" class="button is-danger">
                                <strong>Iniciar sesión</strong>
                            </a>
                            </div>
                        </div>
                        <div class="navbar-item has-dropdown is-hoverable" v-if="desconectado == false">
                            <figure class="image mt-2">
                                <img :src="fotoPerfil" class="is-rounded">
                            </figure>
                            <a class="navbar-item"><strong>{{nombre}}</strong></a>
                            <div class="navbar-dropdown">
                                <a class="navbar-item" href="/profile">Tu perfil</a>
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
    },
    methods: {
        async comprobarSesion() {
            await onAuthStateChanged(auth, user => {
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
                .then(() => { 
                    location.href = '/'
                })
                .catch(error => {
                    alert(error.message)
                })
        }
    }
}
</script>

<style scoped>
    header {
        box-shadow: 0 0px 10px rgba(0, 0, 0, 0.25);
    }
    img {
        width: 30px;
    }
</style>