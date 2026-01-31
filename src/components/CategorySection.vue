<script setup>
import { ref } from 'vue'

const categories = ref([
  {
    id: 1,
    name: 'Bibit Tanaman',
    icon: '🌱',
    description: 'Bibit unggul siap tanam',
    color: 'bg-green-100 text-green-700'
  },
  {
    id: 2,
    name: 'Simplisia',
    icon: '🍂',
    description: 'Bahan herbal kering',
    color: 'bg-amber-100 text-amber-700'
  },
  {
    id: 3,
    name: 'Rimpang',
    icon: '🥔',
    description: 'Jahe, kunyit, lengkuas',
    color: 'bg-yellow-100 text-yellow-700'
  },
  {
    id: 4,
    name: 'Daun Herbal',
    icon: '🌿',
    description: 'Daun segar & berkhasiat',
    color: 'bg-emerald-100 text-emerald-700'
  },
  {
    id: 5,
    name: 'Paket Hemat',
    icon: '📦',
    description: 'Bundling lebih murah',
    color: 'bg-blue-100 text-blue-700'
  }
])
</script>

<template>
  <section class="py-12 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-10">
        <h2 class="text-2xl lg:text-3xl font-serif font-bold text-[#1F291F]">Kategori Pilihan</h2>
        <p class="text-gray-500 mt-2">Temukan kebutuhan herbal Anda berdasarkan kategori</p>
      </div>
      
      <div class="flex flex-wrapjustify-center gap-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <a 
          href="#shop" 
          v-for="category in categories" 
          :key="category.id"
          class="group flex flex-col items-center text-center p-6 rounded-2xl bg-[#F4F7F5] border border-transparent hover:border-[#354F38]/20 hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          <div :class="`w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 ${category.color} group-hover:scale-110 transition-transform`">
            {{ category.icon }}
          </div>
          <h3 class="font-bold text-[#1F291F] mb-1">{{ category.name }}</h3>
          <p class="text-xs text-gray-500">{{ category.description }}</p>
        </a>
      </div>
    </div>
  </section>
</template>
