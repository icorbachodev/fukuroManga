<template>
    <div class="container">
        <div class="block">
            <h1 class="title is-1">Información personal:</h1>
            <hr>
            <div class="columns">
                <div class="column is-4">
                    <figure class="image">
                        <img :src="foto"/>
                    </figure>
                </div>
                <div class="column is-size-5" id="datos">
                    <label class="label is-size-4">Usuario:</label>
                    <p>{{ nombre }}</p>
                    <label class="label pt-3 is-size-4">Correo:</label>
                    <p>{{ correo }}</p>
                    <button class="button is-danger mt-4" @click="editar">Editar</button>
                </div>
           </div>
        </div>
    </div>
</template>

<script>
import { onAuthStateChanged } from '@firebase/auth'
import { auth } from "~/plugins/firebase"

export default {
    created() {
        this.obtenerUsuario()
    },
    data() {
        return {
            foto: '',
            nombre: '',
            correo: '',
            password: ''
        }
    },
    methods: {
        async obtenerUsuario() {
            await onAuthStateChanged(auth, user => {
                if(user !== null) {
                this.nombre = user.displayName
                this.foto = user.photoURL
                this.correo = user.email
            }
            })
        },
        editar() {
            document.getElementById('datos').innerHTML = `<div class="field">
                                                          <label for="name" class="label">Usuario:</label>
                                                            <div class="control has-icons-left">
                                                                <input class="input" type="text" placeholder="${this.nombre}" v-model="nombre">
                                                                <span class="icon is-small is-left">
                                                                    <img src="https://img.icons8.com/material-rounded/24/CCCCCC/badge.png"/>
                                                                </span>
                                                            </div>
                                                          </div>
                                                          <div class="field">
                                                            <label for="name" class="label">Correo:</label>
                                                            <div class="control has-icons-left">
                                                                <input class="input" type="email" placeholder="${this.correo}" v-model="correo">
                                                                <span class="icon is-small is-left">
                                                                    <img src="https://img.icons8.com/material-rounded/24/CCCCCC/mail.png"/>
                                                                </span>
                                                            </div>
                                                          </div>
                                                          <div class="field">
                                                            <label for="password" class="label">Contraseña:</label>
                                                            <div class="control has-icons-left">
                                                                <input class="input" type="password" placeholder="Introduce tu nueva contraseña" v-model="password">
                                                                <span class="icon is-small is-left">
                                                                    <img src="https://img.icons8.com/ios-glyphs/24/CCCCCC/key--v1.png"/>
                                                                </span>
                                                            </div>
                                                          </div>
                                                          <div class="field">
                                                          <label for="name" class="label">Foto:</label>
                                                            <div class="control has-icons-left">
                                                                <input class="input" type="text" placeholder="${this.foto}" v-model="foto">
                                                                <span class="icon is-small is-left">
                                                                    <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/24/CCCCCC/external-photo-multimedia-tanah-basah-glyph-tanah-basah.png"/>
                                                                </span>
                                                            </div>
                                                          </div>
                                                          <button class="button is-danger mt-4">Guardar</button>
                                                          <button class="button is-danger mt-4">Cancelar</button>`
        }
    }
}
</script>

<style scoped>
    .block {
        min-height: 666px;
    }
</style>