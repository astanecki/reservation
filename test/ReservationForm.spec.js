import { mount } from '@vue/test-utils'
import ReservationForm from '@/components/ReservationForm.vue'

describe('ReservationForm', () => {
  const propsData = {
    price: 298,
    currency: 'zł',
    rating: 4.5,
    ratingQuantity: 123,
    dateFrom: '2017-03-16',
    dateTo: '2017-03-20',
  };

  const createWrapper = () => {
    return mount(ReservationForm, {
      propsData,
    });
  };

  it('is a Vue instance', () => {
    const wrapper = createWrapper();

    expect(wrapper.vm).toBeTruthy();
  });

  it(`should match snapshot when props given`, () => {
    const wrapper = createWrapper();

    expect(wrapper.vm.$el).toMatchSnapshot();
  });
})
