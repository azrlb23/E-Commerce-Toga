<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
// Import Store Cart (Langkah 2 nanti)
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

// DATA DUMMY (Nantinya ini bisa diambil dari Database/API)
const products = ref([
  {
    id: 1,
    name: 'Bibit Jahe Merah',
    latin: 'Zingiber officinale var. rubrum',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&auto=format&fit=crop',
    tag: 'Terlaris'
  },
  {
    id: 2,
    name: 'Simplisia Kunyit',
    latin: 'Curcuma longa',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=600&auto=format&fit=crop',
    tag: null
  },
  {
    id: 3,
    name: 'Temulawak',
    latin: 'Curcuma zanthorrhiza',
    price: 20000,
    image: 'https://images.unsplash.com/photo-1603431777782-912e3b76f60d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tag: 'Baru'
  },
  {
    id: 4,
    name: 'Daun Sirih',
    latin: 'Piper betle',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1667889244750-6d5246c84bb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJldGVsJTIwbGVhZnxlbnwwfHwwfHx8MA%3D%3D   ',
    tag: null
  }
])

// Format Rupiah
const formatRupiah = (number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number)
}
</script>

<template>
  <section id="shop" class="py-16 lg:py-24 bg-white">
      <div class="container mx-auto px-6">
        
        <div class="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
             <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#354F38]/10 text-[#354F38] mb-3">
                <span class="text-xs font-bold tracking-wider uppercase">Katalog Pilihan</span>
             </div>
             <h2 class="text-3xl lg:text-4xl font-serif font-bold text-[#1F291F]">Produk Unggulan</h2>
             <p class="text-gray-500 mt-2 text-base">Tanaman dan produk olahan terbaik bulan ini.</p>
          </div>
          <RouterLink to="/menu" class="group flex items-center gap-2 text-[#354F38] font-bold hover:text-[#263a29] transition-colors">
            Lihat Semua Produk
            <span class="bg-[#354F38] text-white rounded-full p-1 transition-transform group-hover:rotate-45">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </span>
          </RouterLink>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          <div 
            v-for="product in products" 
            :key="product.id"
            class="card bg-[#F4F7F5] hover:bg-white border border-transparent hover:border-[#354F38]/10 transition-all duration-300 hover:shadow-xl rounded-[24px] overflow-hidden group"
          >
            <figure class="px-4 pt-4 relative">
              <div class="w-full aspect-square rounded-[20px] overflow-hidden bg-white">
                <img :src="product.image" :alt="product.name" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div v-if="product.tag" class="absolute top-6 right-6 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold text-[#354F38] shadow-sm">
                {{ product.tag }}
              </div>
            </figure>
            
            <div class="card-body p-5 text-center">
              <h2 class="text-lg font-bold text-[#1F291F] group-hover:text-[#354F38] transition-colors">{{ product.name }}</h2>
              <p class="text-gray-500 text-sm mb-3 italic">{{ product.latin }}</p>
              <p class="text-[#354F38] font-bold text-lg mb-4">{{ formatRupiah(product.price) }}</p>
              <div class="card-actions justify-center">
                <button 
                  @click="cartStore.addToCart(product)"
                  class="btn bg-[#354F38] hover:bg-[#263a29] text-white border-none rounded-full w-full shadow-md hover:shadow-[#354F38]/30 min-h-0 h-10 text-sm"
                >
                  + Keranjang
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
</template>