import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
<<<<<<< Updated upstream
import TestInicio from '@/components/TestInicio'
=======
import TestComponent from '@/components/TestComponent.vue'
>>>>>>> Stashed changes

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

<<<<<<< Updated upstream
describe('TestInicio.vue', () => {
  it('deberia pasar si se renderizan los slots', () => {
    const title = '<span>Title</span>'
    const wrapper = shallowMount(TestInicio, {
      slots: { title:title }
    })
    expect(wrapper.html()).toMatch(title)
  })
})
=======
describe('TestComponent.vue', () => {
  it('should pass when rendering slots', () => {
    const title = '<span>Title</span>'
    const wrapper = shallowMount(TestComponent, {
      slots: { title: title }
    })
    expect(wrapper.html()).toMatch(title)
  })
})
>>>>>>> Stashed changes
