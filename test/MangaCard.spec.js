import { mount } from "@vue/test-utils"
import MangaCard from "~/components/MangaCard"

describe('MangaCard', () => {
    const props = {
        id: 0,
        imagen: 'https://images-na.ssl-images-amazon.com/images/I/713U7787WCL.jpg',
        nombre: 'nombre',
        autor: 'autor',
        genero: 'genero',
        descripcion: 'descripcion',
        precio: "8.00",
        likes: 0
    }

    const wrapper = mount(MangaCard, {propsData: props})

    test('is mounted', () => {
        expect(wrapper.isVueInstance()).toBe(true)
    })

    test('is rendering a manga', () => {
        expect(wrapper.props().nombre).toBe('nombre')
        expect(wrapper.props().descripcion).toBe('descripcion')
    })
})