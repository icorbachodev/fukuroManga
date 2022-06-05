<template>
    <div class="container">
        <div class="main mt-6" v-if="accion == 'main'">
            <div class="buttons is-pulled-right mt-3">
                <button class="button is-danger" @click="accion = 'create';elemento = 'manga'">Nuevo manga+</button>
                <button class="button is-danger" @click="accion = 'create';elemento = 'merch'">Nuevo merch+</button>
                <button class="button is-danger" @click="salir">Salir</button>
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
                        <td><img src="https://img.icons8.com/windows/24/undefined/edit--v1.png" class="pr-3" @click="editar(item.id, item.item)"><button class="delete mt-1" @click="eliminar(item.id, item.item)"></button></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="create mt-5" v-if="accion == 'create'">
            <div class="box newBox mx-auto">
                <h1 class="title is-2 has-text-centered" v-if="elemento == 'manga'">Nuevo Manga</h1>
                <h1 class="title is-2 has-text-centered" v-if="elemento == 'merch'">Nuevo Merch</h1>
                <div class="field">
                    <label class="label">Nombre:</label>
                    <input type="text" class="input" v-model="nuevoManga.nombre" v-if="elemento == 'manga'">
                    <input type="text" class="input" v-model="nuevoMerch.nombre" v-if="elemento == 'merch'">
                </div>
                <div class="field">
                    <label class="label" v-if="elemento == 'manga'">Autor:</label>
                    <label class="label" v-if="elemento == 'merch'">Fabricante:</label>
                    <input type="text" class="input" v-model="nuevoManga.autor" v-if="elemento == 'manga'">
                    <input type="text" class="input" v-model="nuevoMerch.fabricante" v-if="elemento == 'merch'">
                </div>
                <div class="field">
                    <label class="label" v-if="elemento == 'manga'">Género:</label>
                    <label class="label" v-if="elemento == 'merch'">Tipo:</label>
                    <input type="text" class="input" v-model="nuevoManga.genero" v-if="elemento == 'manga'">
                    <input type="text" class="input" v-model="nuevoMerch.tipo" v-if="elemento == 'merch'">
                </div>
                <div class="field" v-if="elemento == 'manga'">
                    <label class="label">Categoría:</label>
                    <input type="text" class="input" v-model="nuevoManga.categoria">
                </div>
                <div class="field">
                    <label class="label">Imagen:</label>
                    <input type="text" class="input" v-model="nuevoManga.imagen" v-if="elemento == 'manga'">
                    <input type="text" class="input" v-model="nuevoMerch.imagen" v-if="elemento == 'merch'">
                </div>
                <div class="field pb-3">
                    <label class="label">Precio:</label>
                    <input type="number" class="input" v-model="nuevoManga.precio" v-if="elemento == 'manga'">
                    <input type="number" class="input" v-model="nuevoMerch.precio" v-if="elemento == 'merch'">
                </div>
                <div class="field">
                    <label class="label">Descripción:</label>
                    <textarea cols="30" rows="5" class="textarea" v-model="nuevoManga.descripcion" v-if="elemento == 'manga'"></textarea>
                    <textarea cols="30" rows="5" class="textarea" v-model="nuevoMerch.descripcion" v-if="elemento == 'merch'"></textarea>
                </div>
                <button class="button is-danger is-fullwidth mb-3" @click="add(elemento)">Guardar</button>
                <button class="button is-danger is-fullwidth" @click="accion = 'main'">Cancelar</button>
            </div>
        </div>

        <div class="edit mt-5" v-if="accion == 'edit'">
            <div class="box newBox mx-auto">
                <h1 class="title is-2 has-text-centered" v-if="elemento == 'editManga'">Editar Manga</h1>
                <h1 class="title is-2 has-text-centered" v-if="elemento == 'editMerch'">Editar Merch</h1>
                <input type="hidden" id="codigo" :value="manga.id">
                <div class="field">
                    <label class="label">Nombre:</label>
                    <input type="text" class="input" v-model="manga.nombre" v-if="elemento == 'editManga'">
                    <input type="text" class="input" v-model="merch.nombre" v-if="elemento == 'editMerch'">
                </div>
                <div class="field">
                    <label class="label" v-if="elemento == 'editManga'">Autor:</label>
                    <label class="label" v-if="elemento == 'editMerch'">Fabricante:</label>
                    <input type="text" class="input" v-model="manga.autor" v-if="elemento == 'editManga'">
                    <input type="text" class="input" v-model="merch.fabricante" v-if="elemento == 'editMerch'">
                </div>
                <div class="field">
                    <label class="label" v-if="elemento == 'editManga'">Género:</label>
                    <label class="label" v-if="elemento == 'editMerch'">Tipo:</label>
                    <input type="text" class="input" v-model="manga.genero" v-if="elemento == 'editManga'">
                    <input type="text" class="input" v-model="merch.tipo" v-if="elemento == 'editMerch'">
                </div>
                <div class="field" v-if="elemento == 'editManga'">
                    <label class="label">Categoría:</label>
                    <input type="text" class="input" v-model="manga.categoria">
                </div>
                <div class="field">
                    <label class="label">Imagen:</label>
                    <input type="text" class="input" v-model="manga.imagen" v-if="elemento == 'editManga'">
                    <input type="text" class="input" v-model="merch.imagen" v-if="elemento == 'editMerch'">
                </div>
                <div class="field pb-3">
                    <label class="label">Precio:</label>
                    <input type="number" class="input" v-model="manga.precio" v-if="elemento == 'editManga'">
                    <input type="number" class="input" v-model="merch.precio" v-if="elemento == 'editMerch'">
                </div>
                <div class="field">
                    <label class="label">Descripción:</label>
                    <textarea cols="30" rows="5" class="textarea" v-model="manga.descripcion" v-if="elemento == 'editManga'"></textarea>
                    <textarea cols="30" rows="5" class="textarea" v-model="merch.descripcion" v-if="elemento == 'editMerch'"></textarea>
                </div>
                <button class="button is-danger is-fullwidth mb-3" @click="guardar(elemento)">Guardar</button>
                <button class="button is-danger is-fullwidth" @click="accion = 'main'">Cancelar</button>
            </div>
        </div>
    </div>
</template>

<script>
import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from 'firebase/firestore'
import { db, auth } from "~/plugins/firebase"
import { signOut } from '@firebase/auth'

export default {
    middleware: 'auth',
    layout: 'Admin',
    created() {
        this.getItems()
    },
    data() {
        return {
            items: [],
            accion: 'main',
            elemento: '',
            manga: {
                id: '',
                nombre: '',
                autor: '',
                genero: '',
                categoria: '',
                imagen: '',
                precio: 0,
                descripcion: ''
            },
            nuevoManga: {
                nombre: '',
                autor: '',
                genero: '',
                categoria: '',
                imagen: '',
                precio: 0,
                descripcion: ''
            },
            merch: {
                id: '',
                nombre: '',
                fabricante: '',
                tipo: '',
                imagen: '',
                precio: 0,
                descripcion: ''
            },
            nuevoMerch: {
                nombre: '',
                fabricante: '',
                tipo: '',
                imagen: '',
                precio: 0,
                descripcion: ''
            }
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
        },
        async editar(id, item) {
            if(item == 'manga') {
                this.accion = 'edit'
                this.elemento = 'editManga'
                const q = query(collection(db, 'mangas'), where("id", "==", id))
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach(doc => {
                    this.manga.id = doc.data().id
                    this.manga.nombre = doc.data().name
                    this.manga.autor = doc.data().author
                    this.manga.genero = doc.data().genre
                    this.manga.categoria = doc.data().category
                    this.manga.imagen = doc.data().image
                    this.manga.precio = doc.data().price
                    this.manga.descripcion = doc.data().description
                })
            } else {
                this.accion = 'edit'
                this.elemento = 'editMerch'
                const q = query(collection(db, 'merchandising'), where("id", "==", id))
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach(doc => {
                    this.merch.id = doc.data().id
                    this.merch.nombre = doc.data().name
                    this.merch.fabricante = doc.data().manufacturer
                    this.merch.tipo = doc.data().type
                    this.merch.imagen = doc.data().image
                    this.merch.precio = doc.data().price
                    this.merch.descripcion = doc.data().description
                })
            }
        },
        async add(elemento) {
            if(elemento == 'manga') {
                await addDoc(collection(db, 'mangas'), {
                    id: this.nuevoManga.nombre.toLowerCase().replace(/ /g, ""),
                    name: this.nuevoManga.nombre,
                    author: this.nuevoManga.autor,
                    genre: this.nuevoManga.genero,
                    category: this.nuevoManga.categoria,
                    image: this.nuevoManga.imagen,
                    price: this.nuevoManga.precio,
                    description: this.nuevoManga.descripcion,
                    item: 'manga',
                    likes: 0,
                    dislikes: 0
                })
                this.items = []
                this.getItems()
                this.accion = 'main'
            } else {
                await addDoc(collection(db, 'merchandising'), {
                    id: this.nuevoMerch.nombre.toLowerCase().replace(/ /g, ""),
                    name: this.nuevoMerch.nombre,
                    manufacturer: this.nuevoMerch.fabricante,
                    type: this.nuevoMerch.tipo,
                    image: this.nuevoMerch.imagen,
                    price: this.nuevoMerch.precio,
                    description: this.nuevoMerch.descripcion,
                    item: 'merchandising',
                    likes: 0,
                    dislikes: 0
                })
                this.items = []
                this.getItems()
                this.accion = 'main'
            }
        },
        async guardar(elemento) {
            var trueID
            var codigo = document.getElementById("codigo").value
            if(elemento == 'editManga') {
                const q = query(collection(db, 'mangas'), where("id", "==", codigo))
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach(doc => trueID = doc.id)
                const mangaRef = doc(db, "mangas", trueID)
                updateDoc(mangaRef, {
                    id: this.manga.nombre.toLowerCase().replace(/ /g, ""),
                    name: this.manga.nombre,
                    author: this.manga.autor,
                    genre: this.manga.genero,
                    category: this.manga.categoria,
                    image: this.manga.imagen,
                    price: this.manga.precio,
                    description: this.manga.descripcion
                })
                this.items = []
                this.getItems()
                this.accion = 'main'
            } else {
                const q = query(collection(db, 'merchandising'), where("id", "==", codigo))
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach(doc => trueID = doc.id)
                const merchRef = doc(db, "merchandising", trueID)
                updateDoc(merchRef, {
                    id: this.nuevoMerch.nombre.toLowerCase().replace(/ /g, ""),
                    name: this.merch.nombre,
                    manufacturer: this.merch.fabricante,
                    type: this.merch.tipo,
                    image: this.merch.imagen,
                    price: this.merch.precio,
                    description: this.merch.descripcion
                })
                this.items = []
                this.getItems()
                this.accion = 'main'
            }
        },
        async eliminar(id, item) {
            var trueID
            if(item == 'manga') {
                const q = query(collection(db, 'mangas'), where("id", "==", id))
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach(doc => trueID = doc.id)
                deleteDoc(doc(db, "mangas", trueID))
                this.items = []
                this.getItems()
            } else {
                const q = query(collection(db, 'merchandising'), where("id", "==", id))
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach(doc => trueID = doc.id)
                deleteDoc(doc(db, "merchandising", trueID))
                this.items = []
                this.getItems()
            }
        },
        salir() {
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