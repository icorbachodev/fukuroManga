<template>
    <div>
        <p>{{ message }}</p>
        <p v-show="false">Hola este es un texto que se muestra</p>
        <p v-if="num > 10">Este texto es con v-if</p>
        <p v-else>Este texto es con v-else</p>
        <ul>
            <li v-for="item in items">{{ item }}</li>
        </ul>
        <p>Nombre: {{ name }}</p>
        <input v-model="name" type="text" />
        <button v-on:click="saludo" class="button is-danger">Saluda</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "Hola Mamahuevo",
            num: 5,
            items: [1,2,3,4,5,6],
            name: ''
        }
    },
    methods: {
        saludo() {
            console.log("Esto es un saludo")
        }
    }
}
</script>