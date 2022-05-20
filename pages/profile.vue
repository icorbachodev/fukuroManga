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
                <div class="column is-size-5" v-if="editar == false">
                    <label class="label is-size-4">Usuario:</label>
                    <p>{{ nombre }}</p>
                    <label class="label pt-3 is-size-4">Correo:</label>
                    <p>{{ correo }}</p>
                    <button class="button is-danger mt-4" @click="editar = true">Editar</button>
                </div>
                <div class="column is-size-5" v-if="editar == true">
                    <div class="field">
                        <label for="name" class="label">Usuario:</label>
                        <div class="control has-icons-left">
                            <input class="input" type="text" v-model="nombre">
                            <span class="icon is-small is-left">
                                <img src="https://img.icons8.com/material-rounded/24/CCCCCC/badge.png"/>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <label for="name" class="label">Correo:</label>
                        <div class="control has-icons-left">
                            <input class="input" type="email" v-model="correo">
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
                            <input class="input" type="text" v-model="foto">
                            <span class="icon is-small is-left">
                                <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/24/CCCCCC/external-photo-multimedia-tanah-basah-glyph-tanah-basah.png"/>
                            </span>
                        </div>
                    </div>
                    <button class="button is-danger mt-4" @click="mostrarModal">Guardar</button>
                    <a href="/profile" class="button is-danger mt-4">Cancelar</a>
                </div>
           </div>
        </div>
        <div class="modal" id="prompt">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <div class="field">
                        <label for="password" class="label">Introduce tu contraseña actual:</label>
                        <div class="control has-icons-left">
                            <input class="input" type="password" placeholder="Contraseña" v-model="passwordActual">
                            <span class="icon is-small is-left">
                                <img src="https://img.icons8.com/ios-glyphs/24/CCCCCC/key--v1.png"/>
                            </span>
                        </div>
                    </div>
                    <button class="button is-danger" @click="guardar">Aceptar</button>
                </div>
            </div>
            <button class="modal-close is-large"></button>
        </div>
    </div>
</template>

<script>
import { EmailAuthProvider, onAuthStateChanged, reauthenticateWithCredential, signOut, updateEmail, updatePassword, updateProfile } from 'firebase/auth'
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
            password: '',
            passwordActual: '',
            editar: false
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
        mostrarModal() {
            document.getElementById('prompt').classList.add('is-active')
        },
        guardar() {
            const credential =  EmailAuthProvider.credential(auth.currentUser.email, this.passwordActual)
            reauthenticateWithCredential(auth.currentUser, credential).then(() => {
                updateProfile(auth.currentUser, {
                displayName: this.nombre, photoURL: this.foto
                }).then(() => {})
                .catch(error => {
                    alert(error)
                })
                updateEmail(auth.currentUser, this.correo).then(() => {})
                .catch(error => {
                    alert(error)
                })
                updatePassword(auth.currentUser, this.password).then(() => {
                    alert('Actualizacion realizada. Vuelve a iniciar sesión para aplicar los cambios.')
                    signOut(auth)
                        .then(() => {
                            location.href = '/login'
                        })
                        .catch(error => {
                            alert(error.message)
                        })
                })
                .catch(error => {
                    alert(error)
                })
            }).catch(error => {
                alert(error)
            })
        },
        cerrarModal() {
            document.getElementById('prompt').classList.remove('is-active')
        }
    }
}
</script>

<style scoped>
    .block {
        min-height: 666px;
    }
</style>