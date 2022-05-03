import { mount } from "@vue/test-utils"
import Hero from "~/components/Hero"

describe('Hero Component', () => {
    const SLOT_CONTENT = '<p>Titulo de pruebas</p>'
    const wrapper = mount(Hero, {
        slots: {
            header: SLOT_CONTENT
        }
    })

    test('is rendered inside slot', () => {
        expect(wrapper.html()).toContain(SLOT_CONTENT)
    })
})