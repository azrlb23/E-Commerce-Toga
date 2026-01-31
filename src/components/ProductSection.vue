<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

// 1. DATA PRODUK (Diperluas dengan Kategori)
const products = ref([
  {
    id: 1,
    name: 'Bibit Jahe Merah',
    category: 'Bibit',
    latin: 'Zingiber officinale var. rubrum',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&auto=format&fit=crop',
    tag: 'Terlaris',
    stock: 50
  },
  {
    id: 2,
    name: 'Simplisia Kunyit',
    category: 'Simplisia',
    latin: 'Curcuma longa',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1768729341217-0e11cb959252?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHVybWVyaWMlMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D',
    tag: null,
    stock: 20
  },
  {
    id: 3,
    name: 'Temulawak',
    category: 'Rimpang',
    latin: 'Curcuma zanthorrhiza',
    price: 20000,
    image: 'https://images.unsplash.com/photo-1603431777782-912e3b76f60d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tag: 'Baru',
    stock: 15
  },
  {
    id: 4,
    name: 'Daun Sirih',
    category: 'Daun',
    latin: 'Piper betle',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1667889244854-364252b3c14a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJldGVsJTIwbGVhZnxlbnwwfHwwfHx8MA%3D%3D',
    tag: null,
    stock: 5
  },
  {
    id: 5,
    name: 'Paket Imun Booster',
    category: 'Paket',
    latin: 'Jahe + Kunyit + Sereh',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1576673442511-7e39b6545c87?w=600&auto=format&fit=crop',
    tag: 'Hemat',
    stock: 10
  }
])

// 2. LOGIKA FILTER & SEARCH
const searchQuery = ref('')
const selectedCategory = ref('Semua')

// Daftar Kategori Unik
const categories = ['Semua', 'Bibit', 'Simplisia', 'Rimpang', 'Daun', 'Paket']

// Computed Property: Filter otomatis jalan saat data berubah
// MODIFIKASI: Menambahkan .slice(0, 8) untuk membatasi maksimal 8 produk
const filteredProducts = computed(() => {
  return products.value.filter(product => {
    const matchCategory = selectedCategory.value === 'Semua' || product.category === selectedCategory.value
    const matchSearch = product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchCategory && matchSearch
  }).slice(0, 8) 
})

const formatRupiah = (number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number)
}
</script>

<template>
  <section id="shop" class="py-16 lg:py-24 bg-white scroll-mt-20">
      <div class="container mx-auto px-6">
        
        <div class="flex flex-col lg:flex-row justify-between items-end mb-10 gap-6">
          <div class="w-full lg:w-1/2">
             <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#354F38]/10 text-[#354F38] mb-3">
                <span class="text-xs font-bold tracking-wider uppercase">Katalog Pilihan</span>
             </div>
             <h2 class="text-3xl lg:text-4xl font-serif font-bold text-[#1F291F]">Produk Unggulan</h2>
             
             <div class="mt-6 relative w-full max-w-md">
                <input 
                  v-model="searchQuery"
                  type="text" 
                  placeholder="Cari tanaman (misal: Jahe)..." 
                  class="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-[#354F38] focus:ring-1 focus:ring-[#354F38] outline-none transition-all bg-[#F4F7F5] focus:bg-white text-[#1F291F]"
                />
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
             </div>
          </div>

          <div class="w-full lg:w-1/2 flex flex-wrap justify-start lg:justify-end gap-2">
            <button 
              v-for="cat in categories" 
              :key="cat"
              @click="selectedCategory = cat"
              :class="[
                'px-4 py-2 rounded-full text-sm font-bold transition-all border',
                selectedCategory === cat 
                  ? 'bg-[#354F38] text-white border-[#354F38]' 
                  : 'bg-white text-gray-500 border-gray-200 hover:border-[#354F38] hover:text-[#354F38]'
              ]"
            >
              {{ cat }}
            </button>
          </div>
        </div>

        <div v-if="filteredProducts.length > 0" class="flex overflow-x-auto gap-6 pb-8 -mx-6 px-6 scrollbar-hide snap-x">
          <div 
            v-for="product in filteredProducts" 
            :key="product.id"
            class="min-w-[280px] w-[280px] lg:min-w-[300px] lg:w-[300px] snap-center card bg-[#F4F7F5] hover:bg-white border border-transparent hover:border-[#354F38]/10 transition-all duration-300 hover:shadow-xl rounded-[24px] overflow-hidden group flex flex-col h-full flex-shrink-0"
          >
            <figure class="px-4 pt-4 relative">
              <div class="w-full aspect-square rounded-[20px] overflow-hidden bg-white relative">
                <img :src="product.image" :alt="product.name" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                
                <div v-if="product.stock < 10" class="absolute bottom-0 left-0 w-full bg-red-500/80 text-white text-[10px] font-bold text-center py-1">
                  Stok Menipis: Sisa {{ product.stock }}
                </div>
              </div>
              
              <div v-if="product.tag" class="absolute top-6 right-6 bg-white/95 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold text-[#354F38] shadow-sm">
                {{ product.tag }}
              </div>
            </figure>
            
            <div class="card-body p-5 text-center flex-grow">
              <div class="text-[10px] uppercase tracking-wider text-gray-400 mb-1">{{ product.category }}</div>
              <h2 class="text-lg font-bold text-[#1F291F] group-hover:text-[#354F38] transition-colors leading-tight">{{ product.name }}</h2>
              <p class="text-gray-500 text-xs mb-3 italic">{{ product.latin }}</p>
              
              <div class="mt-auto">
                <p class="text-[#354F38] font-bold text-lg mb-4">{{ formatRupiah(product.price) }}</p>
                <button 
                  @click="cartStore.addToCart(product)"
                  class="btn bg-[#354F38] hover:bg-[#263a29] text-white border-none rounded-full w-full shadow-md hover:shadow-[#354F38]/30 min-h-0 h-10 text-sm flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  + Keranjang
                </button>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="text-center py-20 bg-[#F4F7F5] rounded-[24px]">
           <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
           </div>
           <h3 class="text-xl font-bold text-gray-600">Produk tidak ditemukan</h3>
           <p class="text-gray-500">Coba kata kunci lain atau ganti kategori.</p>
           <button @click="searchQuery = ''; selectedCategory = 'Semua'" class="btn btn-link text-[#354F38] no-underline mt-2">Reset Filter</button>
        </div>

        <div class="text-center mt-12">
          <RouterLink to="/menu" class="btn btn-outline border-[#354F38] text-[#354F38] hover:bg-[#354F38] hover:text-white rounded-full px-8">
            Lihat Katalog Lengkap
          </RouterLink>
        </div>

      </div>
    </section>
</template>

<style scoped>
/* Tambahan Style untuk menyembunyikan scrollbar tapi tetap bisa di-scroll */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>