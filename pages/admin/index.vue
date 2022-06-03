<template>
    <div class="container">
        <div class="main mt-6" v-if="accion == 'main'">
            <div class="buttons is-pulled-right mt-3">
                <button class="button is-danger" @click="accion = 'createManga'">Nuevo manga+</button>
                <button class="button is-danger">Nuevo merch+</button>
            </div>
            <h1 class="title is-1">Panel de Administrador</h1>
            <hr>
            <table class="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item of items" :key="item.id">
                        <td>{{ item.name }}</td>
                        <td class="is-capitalized">{{ item.item }}</td>
                        <td><img src="https://img.icons8.com/windows/24/undefined/edit--v1.png" class="pr-3"><button class="delete mt-1"></button></td>
                    </tr>
                </tbody>
            </table>
            <button class="button is-danger">Salir</button>
        </div>

        <div class="createManga mt-5" v-if="accion == 'createManga'">
            <div class="box newBox mx-auto">
                <h1 class="title is-2 has-text-centered">Nuevo Manga</h1>
                <div class="field">
                    <label class="label">Nombre:</label>
                    <input type="text" class="input">
                </div>
                <div class="field">
                    <label class="label">Autor:</label>
                    <input type="text" class="input">
                </div>
                <div class="field">
                    <label class="label">Género:</label>
                    <input type="text" class="input">
                </div>
                <div class="field">
                    <label class="label">Categoría:</label>
                    <input type="text" class="input">
                </div>
                <div class="field">
                    <label class="label">Imagen:</label>
                    <input type="text" class="input">
                </div>
                <div class="field pb-3">
                    <label class="label">Precio:</label>
                    <input type="text" class="input">
                </div>
                <button class="button is-danger is-fullwidth mb-3">Guardar</button>
                <button class="button is-danger is-fullwidth" @click="accion = 'main'">Cancelar</button>
            </div>
        </div>

        <div class="createManga mt-5" v-if="accion == 'createManga'">
            <div class="box newBox mx-auto">
                <h1 class="title is-2 has-text-centered">Nuevo Manga</h1>
                <div class="field">
                    <label class="label">Nombre:</label>
                    <input type="text" class="input">
                </div>
                <div class="field">
                    <label class="label">Autor:</label>
                    <input type="text" class="input">
                </div>
                <div class="field">
                    <label class="label">Género:</label>
                    <input type="text" class="input">
                </div>
                <div class="field">
                    <label class="label">Categoría:</label>
                    <input type="text" class="input">
                </div>
                <div class="field">
                    <label class="label">Imagen:</label>
                    <input type="text" class="input">
                </div>
                <div class="field pb-3">
                    <label class="label">Precio:</label>
                    <input type="text" class="input">
                </div>
                <button class="button is-danger is-fullwidth mb-3">Guardar</button>
                <button class="button is-danger is-fullwidth" @click="accion = 'main'">Cancelar</button>
            </div>
        </div>
    </div>
</template>

<script>
import { collection, getDocs } from 'firebase/firestore'
import { db } from "~/plugins/firebase"

export default {
    middleware: 'auth',
    layout: 'Admin',
    created() {
        this.getItems()
    },
    data() {
        return {
            items: [],
            accion: 'main'
        }
    },
    methods: {
        async getItems() {
            const responseManga = await getDocs(collection(db, 'mangas'))
            responseManga.forEach(doc => {
                this.items.push(doc.data())
            })
            const responseMerch = await getDocs(collection(db, 'merchandising'))
            responseMerch.forEach(doc => {
                this.items.push(doc.data())
            })
        }
    }
}
</script>

<style scoped>
    img {
        cursor: pointer;
    }

    .container {
        min-height: 718px;
    }

    .newBox {
        width: 60%;
    }
</style>