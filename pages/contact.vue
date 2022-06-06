<template>
    <div class="container">
        <h1 class="title is-1 has-text-centered">Contacto</h1>
        <hr>
        <div class="columns">
            <div class="column has-text-justified primera">
                <p class="pb-3">En Fukuro Manga estamos encatados de solucionar todos los problemas de nuestros clientes relacionados con la web. Si tienes alguna consulta que hacernos no dudes en mandarnos un correo electrónico o hacernos una llamada. Una vez recibido el mensaje se tramitará la respuesta en un lapso de máximo 48 horas.</p>
                <p class="pb-3"><b>Email:</b> fukuromanga@gmail.com</p>
                <p class="pb-3"><b>Teléfono:</b> 918101780</p>
                <p><b>Mostóles Oficina</b></p>
                <p class="pb-4">Av. de la Onu, 81, 28936 Móstoles, Madrid</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.338449813384!2d-3.854398384306476!3d40.31264556988646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418c3bb783d911%3A0x143c15acc6da4a9e!2sAv.%20de%20la%20Onu%2C%2081%2C%2028936%20M%C3%B3stoles%2C%20Madrid!5e0!3m2!1ses!2ses!4v1654437212047!5m2!1ses!2ses" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="column ml-3">
                <div class="field">
                    <label for="name" class="label">Tu nombre:</label>
                    <div class="control has-icons-left">
                        <input class="input" type="text" v-model="nombre" placeholder="Nombre">
                        <span class="icon is-small is-left">
                            <img src="https://img.icons8.com/material-rounded/24/CCCCCC/badge.png"/>
                        </span>
                    </div>
                </div>
                <div class="field">
                    <label for="name" class="label">Correo:</label>
                    <div class="control has-icons-left">
                        <input class="input" type="email" v-model="correo" placeholder="Correo">
                        <span class="icon is-small is-left">
                            <img src="https://img.icons8.com/material-rounded/24/CCCCCC/mail.png"/>
                        </span>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Mensaje:</label>
                    <textarea cols="30" rows="5" class="textarea" v-model="mensaje" placeholder="Dejanos tu mensaje"></textarea>
                </div>
                <div class="buttons">
                    <button class="button is-danger is-fullwidth" @click="guardarMensaje">Enviar</button>
                </div>
            </div>
        </div>
        <div class="modal" id="exito">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box has-text-centered">
                    <h1 class="title is-2">¡Gracias por tu comentario!</h1>
                    <p>Mensaje recibido con éxito.</p>
                    <button class="button is-danger mt-3" @click="cerrar">Aceptar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { addDoc, collection } from 'firebase/firestore'
import { db } from "~/plugins/firebase"

export default {
    data() {
        return {
            nombre: '',
            correo: '',
            mensaje: ''
        }
    },
    methods: {
        async guardarMensaje() {
            await addDoc(collection(db, 'contacto'), {
                name: this.nombre,
                email: this.correo,
                message: this.mensaje
            })
            document.getElementById('exito').classList.add('is-active')
        },
        cerrar() {
            document.getElementById('exito').classList.remove('is-active')
        }
    }
}
</script>

<style scoped>
    .container {
        min-height: 667px;
    }

    .primera {
        border-right: 1px solid gainsboro;
    }
</style>