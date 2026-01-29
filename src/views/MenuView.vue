<script setup>
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules'
import { useCartStore } from '@/stores/cart'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import MenuCard from '@/components/MenuCard.vue'

// ... (IMPORT GAMBAR TETAP SAMA) ...
import noodlesImg from '@/assets/Noodles.png'
import kebabImg from '@/assets/Kebab.png'
import toastImg from '@/assets/Toast.png'
import squashImg from '@/assets/Squash.png'
import nonCoffeeImg from '@/assets/Non-Coffee.png'

const cartStore = useCartStore()
const activeCategory = ref('FOOD')
const activeSubFilter = ref('ALL')

const menuItems = {
  FOOD: [
    { id: 1, name: 'Spicy Noodles', price: 'RP 15.000', type: 'NOODLES', img: noodlesImg },
    { id: 2, name: 'Beef Kebab', price: 'RP 20.000', type: 'KEBAB', img: kebabImg },
    { id: 3, name: 'Choco Toast', price: 'RP 12.000', type: 'TOAST', img: toastImg },
    { id: 4, name: 'Chicken Kebab', price: 'RP 18.000', type: 'KEBAB', img: kebabImg },
    { id: 5, name: 'Cheese Toast', price: 'RP 14.000', type: 'TOAST', img: toastImg },
  ],
  DRINKS: [
    { id: 6, name: 'Lemon Squash', price: 'RP 10.000', type: 'SQUASH', img: squashImg },
    { id: 7, name: 'Taro Milk', price: 'RP 15.000', type: 'NON-COFFEE', img: nonCoffeeImg },
    { id: 8, name: 'Orange Squash', price: 'RP 10.000', type: 'SQUASH', img: squashImg },
    { id: 9, name: 'Matcha Latte', price: 'RP 18.000', type: 'NON-COFFEE', img: nonCoffeeImg },
    { id: 10, name: 'Berry Squash', price: 'RP 12.000', type: 'SQUASH', img: squashImg },
  ]
}

const currentItems = computed(() => menuItems[activeCategory.value])

const subCategories = computed(() => {
  const types = currentItems.value.map(item => item.type)
  return ['ALL', ...new Set(types)]
})

const filteredCarouselItems = computed(() => {
  if (activeSubFilter.value === 'ALL') return currentItems.value
  return currentItems.value.filter(item => item.type === activeSubFilter.value)
})

const modules = [Pagination, Navigation, EffectCoverflow]

const setCategory = (cat) => {
  activeCategory.value = cat
  activeSubFilter.value = 'ALL'
}
</script>

<template>
  <div class="w-full bg-[#FFF6E0] flex flex-col font-sans">

    <main class="flex-grow flex flex-col items-center justify-center py-6 md:py-10 relative overflow-hidden">
      
      <div class="mb-8 md:mb-12 relative z-10 w-full flex justify-start md:justify-center overflow-x-auto px-4 pb-2 no-scrollbar">
        
        <div class="bg-[#C62E2E] p-1.5 rounded-full flex items-center shadow-inner gap-1 min-w-max">
          <button 
            v-for="sub in subCategories" 
            :key="sub"
            @click="activeSubFilter = sub"
            class="px-5 py-2 md:px-6 rounded-full font-market text-xs md:text-sm tracking-wider uppercase transition-all duration-300 whitespace-nowrap"
            :class="activeSubFilter === sub 
              ? 'bg-white text-[#C62E2E] shadow-md' 
              : 'bg-transparent text-white hover:bg-white/20'"
          >
            {{ sub }}
          </button>
        </div>

      </div>

      <div class="w-full relative px-0 md:px-0 max-w-[1200px]">
        <swiper
          :effect="'coverflow'"
          :grabCursor="true"
          :centeredSlides="true"
          :slidesPerView="'auto'"
          :coverflowEffect="{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }"
          :pagination="{ clickable: true, dynamicBullets: true }"
          :modules="modules"
          :initialSlide="1"
          class="mySwiper py-8 md:py-12"
        >
          <swiper-slide 
            v-for="item in filteredCarouselItems" 
            :key="item.id"
            class="max-w-[260px] sm:max-w-[300px] md:max-w-[350px]"
          >
             <MenuCard :item="item" />
          </swiper-slide>
        </swiper>
      </div>

      <div class="mt-6 md:mt-8 flex flex-col items-center gap-6 relative z-10">
        
        <div class="bg-[#C62E2E] p-1 rounded-full flex items-center relative w-[220px] h-[45px] md:w-[240px] md:h-[50px] shadow-inner">
          <button 
            @click="setCategory('FOOD')"
            class="flex-1 h-full rounded-full font-market text-sm md:text-base tracking-widest transition-all duration-300 z-10"
            :class="activeCategory === 'FOOD' 
              ? 'bg-white text-[#C62E2E] shadow-md' 
              : 'text-white hover:text-white/80'"
          >
            FOOD
          </button>
          <button 
            @click="setCategory('DRINKS')"
            class="flex-1 h-full rounded-full font-market text-sm md:text-base tracking-widest transition-all duration-300 z-10"
            :class="activeCategory === 'DRINKS' 
              ? 'bg-white text-[#C62E2E] shadow-md' 
              : 'text-white hover:text-white/80'"
          >
            DRINKS
          </button>
        </div>

        <div>
          <button 
            @click="cartStore.isCheckoutOpen = true"
            class="bg-[#C62E2E] text-white px-8 py-3 md:px-10 md:py-3 rounded-full font-market text-base md:text-lg tracking-widest shadow-lg hover:bg-[#9E2222] transition-transform hover:-translate-y-1 active:scale-95"
          >
            ORDER NOW
          </button>
        </div>

      </div>

      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[70%] bg-gradient-to-b from-[#FFF6E0] to-[#FFE0B2]/40 rounded-full blur-3xl -z-0 pointer-events-none"></div>

    </main>

  </div>
</template>

<style scoped>
/* Hide scrollbar for sleek look */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.swiper {
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  overflow: visible;
}

@media (min-width: 768px) {
  .swiper {
    padding-top: 50px;
    padding-bottom: 50px;
  }
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  /* Responsive Width Slide */
  width: 260px; 
  opacity: 0.5;
  transition: all 0.3s ease;
  transform: scale(0.85);
}

@media (min-width: 768px) {
  .swiper-slide {
    width: 320px;
  }
}

.swiper-slide-active {
  opacity: 1;
  transform: scale(1.05);
  z-index: 10;
}

:deep(.swiper-pagination-bullet) {
  background: #C62E2E;
  opacity: 0.3;
  width: 8px;
  height: 8px;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  width: 10px;
  height: 10px;
}
</style>