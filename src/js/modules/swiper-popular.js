import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

function getSwiperFunc() {
  const swiper = new Swiper('.popular__swiper', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
      nextEl: '#popularSliderNext',
      prevEl: '#popularSliderPrev',
    },
    breakpoints: {
      425: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      }
    }
  })
}

export default getSwiperFunc