<template>
    <div class="container-fluid pt-6">
        <div class="card mx-auto" v-if="registro == false">
            <div class="card-content">
                <div class="field">
                    <label for="email" class="label">E-mail:</label>
                    <div class="control has-icons-left">
                        <input class="input" type="email" id="email" placeholder="Introduce tu correo" v-model="correo">
                        <span class="icon is-small is-left">
                            <img src="https://img.icons8.com/material-rounded/24/CCCCCC/mail.png"/>
                        </span>
                    </div>
                </div>
                <div class="field">
                    <label for="password" class="label">Contraseña:</label>
                    <div class="control has-icons-left">
                        <input class="input" type="password" id="password" placeholder="Introduce tu contraseña" v-model="password">
                        <span class="icon is-small is-left">
                            <img src="https://img.icons8.com/ios-glyphs/24/CCCCCC/key--v1.png"/>
                        </span>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <label class="checkbox">¿No tienes cuenta? Registrate <a href="#" @click="registro = true">aqui.</a></label>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <button class="button is-danger is-fullwidth" @click="iniciarSesion">Iniciar sesión</button>
                        <div class="control has-icons-left mt-2">
                            <button class="button is-light is-fullwidth" @click="sesionGoogle">Continuar con Google</button>
                            <span class="icon is-small is-left">
                                <img src="https://img.icons8.com/fluency/24/000000/google-logo.png"/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mx-auto" v-if="registro == true">
            <div class="card-content">
                <div class="field">
                    <label for="name" class="label">Nombre:</label>
                    <div class="control has-icons-left">
                        <input class="input" type="text" id="name" placeholder="Introduce tu nombre" v-model="nombre">
                        <span class="icon is-small is-left">
                            <img src="https://img.icons8.com/material-rounded/24/CCCCCC/badge.png"/>
                        </span>
                    </div>
                </div>
                <div class="field">
                    <label for="email" class="label">E-mail:</label>
                    <div class="control has-icons-left">
                        <input class="input" type="email" id="email" placeholder="Introduce tu correo" v-model="correo">
                        <span class="icon is-small is-left">
                            <img src="https://img.icons8.com/material-rounded/24/CCCCCC/mail.png"/>
                        </span>
                    </div>
                </div>
                <div class="field">
                    <label for="password" class="label">Contraseña:</label>
                    <div class="control has-icons-left">
                        <input class="input" type="password" id="password" placeholder="Introduce tu contraseña" v-model="password">
                        <span class="icon is-small is-left">
                            <img src="https://img.icons8.com/ios-glyphs/24/CCCCCC/key--v1.png"/>
                        </span>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <label class="checkbox">¿Ya tienes cuenta? Inicia sesión <a href="#" @click="registro = false">aqui.</a></label>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <button class="button is-danger is-fullwidth" @click="registrar">Registrarse</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import { auth } from "~/plugins/firebase"

export default {
    layout: 'login',
    data() {
        return {
            nombre: '',
            correo: '',
            password: '',
            registro: false
        }
    },
    methods: {
        registrar() {
            createUserWithEmailAndPassword(auth, this.correo, this.password)
                .then(userCredential => {
                    updateProfile(auth.currentUser, {
                        displayName: this.nombre, photoURL: 'https://freepikpsd.com/file/2019/10/default-profile-picture-png-1-Transparent-Images.png'
                    }).then(() => { })
                    .catch(error => {
                        alert(error.message)
                    })
                    location.href = '/'
                })
                .catch(error => {
                    alert(error.message)
                })
        },
        iniciarSesion() {
            signInWithEmailAndPassword(auth, this.correo, this.password)
                .then(userCredential => {
                    location.href = '/'
                })
                .catch(error => {
                    alert(error.message)
                })
        },
        sesionGoogle() {
            const provider = new GoogleAuthProvider()
            signInWithPopup(auth, provider)
                .then(result => {
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
    .card {
        width: 450px;
    }
</style>