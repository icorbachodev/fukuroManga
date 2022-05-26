<template>
    <div>
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li><a href="/">Inicio</a></li>
                <li v-if="item == 'manga'"><a :href="'/'+categoria" class="is-capitalized">{{ categoria }}</a></li>
                <li v-else><a href="/merchandising">Merchandising</a></li>
                <li class="is-active"><a href="#">{{ nombre }}</a></li>
            </ul>
        </nav>
        <div class="columns">
            <div class="column is-two-fifths">
                <img :src="imagen"/>
            </div>
            <div class="column">
                <h1 class="title is-1">{{ nombre }}</h1>
                <label class="label" v-if="item == 'manga'">Autor:</label>
                <label class="label" v-else>Fabricante:</label>
                <span>{{ fabricante }}</span>
                <label class="label pt-4" v-if="item == 'manga'">Género:</label>
                <label class="label pt-4" v-else>Tipo:</label>
                <span v-if="item == 'manga'">{{ genero }}</span>
                <span v-else class="is-capitalized">{{ tipo }}</span>
                <label class="label pt-4">Precio:</label>
                <span>{{ precio }}€</span>
                <p class="pt-6 pb-5 has-text-justified">{{ descripcion }}</p>
                <hr>
                <div class="buttons">
                    <img src="https://img.icons8.com/material-sharp/24/000000/filled-like.png" class="pb-2" @click="sumLikes"/>
                    <label class="label pl-1">{{ likes }}</label>
                    <img src="https://img.icons8.com/material-sharp/24/000000/dislike.png" class="pb-2 pl-4" @click="sumDislikes"/>
                    <label class="label pl-1">{{ dislikes }}</label>
                    <button class="button is-danger" @click="addCarrito">Añadir al carrito</button>
                </div>
            </div>
        </div>
        <div class="tabs is-boxed">
            <ul>
                <li class="is-active"><a>Comentarios</a></li>
            </ul>
        </div>
        <article class="media">
            <figure class="media-left">
                <p class="image is-64x64">
                <img src="https://i.pinimg.com/474x/67/de/2e/67de2ee9a650b53f641cb4494be4c216.jpg" v-if="usuario== null">
                <img :src="usuario.photoURL" v-else>
                </p>
            </figure>
            <div class="media-content">
                <div class="field">
                <p class="control">
                    <textarea class="textarea" placeholder="Añade un comentario..." v-model="mensaje"></textarea>
                </p>
                </div>
                <nav class="level">
                <div class="level-left">
                    <div class="level-item">
                    <a class="button is-danger" @click="enviarComentario">Enviar</a>
                    </div>
                </div>
                </nav>
            </div>
        </article>
        <article class="media" v-for="comentario in comentarios" :key="comentario.id">
            <figure class="media-left">
                <p class="image is-64x64">
                <img :src="comentario.image">
                </p>
            </figure>
            <div class="media-content">
                <div class="content">
                <p>
                    <strong>{{ comentario.name }}</strong>
                    <br>
                    {{ comentario.message }}
                </p>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { db, auth } from "~/plugins/firebase"

export default {
    props: {
        id: {
            type: String,
            default: ''
        },
        item: {
            type: String,
            default: ''
        },
        tipo: {
            type: String,
            default: ''
        },
        categoria: {
            type: String,
            default: ''
        },
        nombre: {
            type: String,
            default: ''
        },
        imagen: {
            type: String,
            default: ''
        },
        fabricante: {
            type: String,
            default: ''
        },
        genero: {
            type: String,
            default: ''
        },
        precio: {
            type: Number,
            default: ''
        },
        descripcion: {
            type: String,
            default: ''
        },
        likes: {
            type: Number,
            default: ''
        },
        dislikes: {
            type: Number,
            default: ''
        },
        comentarios: {
            type: Array,
            default: []
        },
        articuloID: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            mensaje: '',
            usuario: auth.currentUser
        }
    },
    methods: {
        async sumLikes() {
            if(this.usuario != null) {
                if(this.item == 'manga') {
                this.likes++
                const manga = doc(db, "mangas", this.id)
                await updateDoc(manga, {
                    likes: this.likes
                })
                } else {
                    this.likes++
                    const merch = doc(db, "merchandising", this.id)
                    await updateDoc(merch, {
                        likes: this.likes
                    })
                }
            } else {
                alert('Debes estar conectado para dar like')
            }
            
        },
        async sumDislikes() {
            if(this.usuario != null) {
                if(this.item == 'manga') {
                this.dislikes++
                const manga = doc(db, "mangas", this.id)
                await updateDoc(manga, {
                    dislikes: this.dislikes
                })
                } else {
                    this.dislikes++
                    const merch = doc(db, "merchandising", this.id)
                    await updateDoc(merch, {
                        dislikes: this.dislikes
                    })
                }
            } else {
                alert('Debes estar conectado para dar dislike')
            }
        },
        async enviarComentario() {
            if(this.usuario != null) {
                const comRef = await addDoc(collection(db,"comentarios"), {
                    articleID: this.articuloID,
                    image: this.usuario.photoURL,
                    message: this.mensaje,
                    name: this.usuario.displayName
                })
                location.reload()
            } else {
                alert('Debes estar conectado para escribir un comentario')
            }
        },
        addCarrito() {
            if(auth.currentUser != null) {
                var cookie = document.cookie
                if(cookie != '') {
                    carrito = JSON.parse(cookie.slice(8))
                }
                var repetido = carrito.findIndex(item => item.nombreItem == this.nombre)
                if(repetido != -1) {
                    carrito.map(item => item.nombreItem == this.nombre ? {...item, cantidad: item.cantidad++} :item)
                    document.cookie = "carrito="+JSON.stringify(carrito)
                    alert('Cantidad del producto actualizada')
                } else {
                    carrito.push({
                        "usuario": auth.currentUser.displayName, 
                        "nombreItem": this.nombre, 
                        "precioItem": this.precio,
                        "cantidad": 1 
                    })
                    document.cookie = "carrito="+JSON.stringify(carrito)
                    alert('Producto añadido al carrito')
                }
            } else {
                alert('Debes iniciar sesión para añadir al carrito')
            }
            
        }
    }
}
</script>

<style scoped>
    button {
        margin-left: auto;
    }
    .buttons img {
        cursor: pointer;
    }
</style>