<template>
    <div class="container">
        <div class="full" v-if="verCarrito == true">
            <h1 class="title is-1">Tu carrito</h1>
            <hr>
            <table class="table is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total(item)</th>
                        <td><a @click="vaciarCarrito">Vaciar</a></td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in carrito" :key="item.nombre">
                        <td>{{ item.nombreItem }}</td>
                        <td>{{ item.precioItem }}€</td>
                        <td>x{{ item.cantidad }}</td>
                        <td>{{ item.cantidad * item.precioItem }}€</td>
                        <td><button class="delete mt-1" @click="eliminarItem(item.nombreItem)"></button></td>
                    </tr>
                </tbody>
                <tfoot>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>Total: {{ precioTotal.toFixed(2) }}€</th>
                    <th></th>
                </tfoot>
            </table>
            <div class="buttons is-pulled-right">
                <button class="button is-danger" @click="mostrarFactura">Comprar</button>
            </div>
            <div class="modal" id="factura">
                <div class="modal-background"></div>
                <div class="modal-content">
                    <div class="box has-text-centered">
                        <h1 class="title is-2">¡Gracias por su compra!</h1>
                        <p>Transacción realizada con éxito.</p>
                        <button class="button is-danger mt-3" @click="vaciarCarrito">Aceptar</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="empty" v-if="verCarrito == false">
            <h1 class="title is-1">Tu carrito</h1>
            <img src="https://theoliveoilco.com/wp-content/uploads/2022/01/empty_cart_retina.png" class="image mx-auto p-5" width="600px">
            <p class="is-size-4 has-text-centered">El carrito está vacío</p>
        </div>
        
    </div>    
</template>

<script>
import { onAuthStateChanged } from 'firebase/auth'
import { db, auth } from "~/plugins/firebase"

export default {
    async created() {
        await onAuthStateChanged(auth, user => {
            if(user) {
                this.usuario = user.displayName
                this.obtenerCarrito()
            }
        })
    },
    data() {
        return {
            verCarrito: false,
            carrito: [],
            carritoTemp: [],
            precioTotal: 0,
            usuario: ''
        }
    },
    methods: {
        obtenerCarrito() {
            var cookie = document.cookie
            if(cookie != '') {
                var calcTotal
                this.carritoTemp = JSON.parse(cookie.slice(8))
                this.carritoTemp.forEach(item => {
                    if(item.usuario == this.usuario) {
                        this.verCarrito = true
                        this.carrito.push(item)
                    }
                })
                this.carrito.forEach(item => {
                    calcTotal = item.cantidad * item.precioItem
                    this.precioTotal += calcTotal
                })
            } else {
                this.verCarrito = false
            }
        },
        vaciarCarrito() {
            var arrayEliminado = this.carritoTemp.filter(item => item.usuario != this.usuario)
            document.cookie = "carrito="+JSON.stringify(arrayEliminado)+";path=/"
            location.reload()
        },
        eliminarItem(nombre) {
            var itemEliminado = this.carritoTemp.findIndex(item => item.usuario == this.usuario && item.nombreItem == nombre)
            this.carritoTemp.splice(itemEliminado, 1)
            this.carrito.splice(itemEliminado, 1)
            document.cookie = "carrito="+JSON.stringify(this.carritoTemp)+";path=/"
            if(this.carrito == '') this.verCarrito = false
        },
        mostrarFactura() {
            document.getElementById('factura').classList.add('is-active')
        }
    }
}
</script>

<style scoped>
    .container {
        min-height: 666px;
    }
</style>