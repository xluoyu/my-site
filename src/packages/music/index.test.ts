import { mount } from '@vue/test-utils'
import Music from './index.vue'

describe('music test', () => {
  it('mount component', async() => {
    const component = mount(Music)
    expect(component.text()).toMatch('音乐播放器')
  })
})
