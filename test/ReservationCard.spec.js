import { mount } from '@vue/test-utils'
import ReservationCard from '@/components/ReservationCard.vue'

describe('ReservationCard', () => {
  const requiredProps = {
    price: 123,
    currency: 'zł',
    rating: 4,
    ratingQuantity: 123,
  };

  const createWrapper = (propsData = requiredProps) => {
    return mount(ReservationCard, {
      propsData,
    });
  };

  it('is a Vue instance', () => {
    let wrapper = createWrapper();

    expect(wrapper.vm).toBeTruthy();
  });

  it(`should match initial snapshot`, () => {
    let wrapper = createWrapper();

    expect(wrapper.vm.$el).toMatchSnapshot();
  });
})
