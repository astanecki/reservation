import { mount } from '@vue/test-utils'
import ReservationForm from '@/components/ReservationForm.vue'

describe('ReservationForm', () => {
  const createWrapper = (propsData = {}) => {
    return mount(ReservationForm, {
      propsData,
    });
  };
  let wrapper;

  it('is a Vue instance', () => {
    wrapper = createWrapper();

    expect(wrapper.vm).toBeTruthy();
  });

  it(`should match snapshot when props given`, () => {
    const props = {
      price: 298,
      currency: 'zł',
      rating: 4.5,
      ratingQuantity: 123,
      dateFrom: '2017-03-16',
      dateTo: '2017-03-20',
    };

    wrapper = createWrapper(props);

    expect(wrapper.vm.$el).toMatchSnapshot();
  });
})
