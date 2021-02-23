import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import TestInicio from '@/components/TestInicio'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('TestInicio.vue', () => {
  it('deberia pasar si se renderizan los slots', () => {
    const title = '<span>Title</span>'
    const wrapper = shallowMount(TestInicio, {
      slots: { title:title }
    })
    expect(wrapper.html()).toMatch(title)
  })
})
