import { mount } from '@vue/test-utils'
import Stars from '@/components/Stars.vue'

describe('Stars', () => {
  const createWrapper = value => {
    return mount(Stars, {
      propsData: {
        number: value,
      }
    });
  };
  let wrapper;

  it('is a Vue instance', () => {
    wrapper = createWrapper(2);

    expect(wrapper.vm).toBeTruthy();
  });

  it(`should be mounted properly when 0 given`, () => {
    expect(createWrapper(0).vm.$el).toMatchSnapshot();
  });

  it(`should be mounted properly when 1 given`, () => {
    expect(createWrapper(1).vm.$el).toMatchSnapshot();
  });

  // todo implement half star
  xit(`should be mounted properly when 4.5 given`, () => {
    expect(createWrapper(4.5).vm.$el).toMatchSnapshot();
  });

  it(`should be mounted properly when 5 given`, () => {
    expect(createWrapper(5).vm.$el).toMatchSnapshot();
  });
})
