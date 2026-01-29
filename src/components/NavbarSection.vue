<script setup>
import { RouterLink } from 'vue-router'
import logo from '@/assets/logo.svg' // Pastikan logo ada
import { ref, onMounted, onUnmounted } from 'vue'

// Efek scroll agar navbar berubah shadow-nya
const isScrolled = ref(false)
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <div 
    :class="[
      'navbar sticky top-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
    ]"
  >
    <div class="container mx-auto">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-gray-700 font-medium">
            <li><a href="#home">Beranda</a></li>
            <li><a href="#about">Tentang</a></li>
            <li><a href="#logbook">Logbook</a></li>
            <li><a href="#shop">Belanja</a></li>
          </ul>
        </div>
        
        <RouterLink to="/" class="btn btn-ghost text-xl font-bold flex items-center gap-2 hover:bg-transparent">
          <img :src="logo" alt="Logo" class="h-10 w-10" />
          <span class="text-primary font-serif tracking-wide hidden sm:inline">TogaWorld</span>
        </RouterLink>
      </div>

      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 font-medium text-gray-600 gap-1">
          <li><a href="#home" class="hover:text-primary hover:bg-green-50 rounded-lg">Beranda</a></li>
          <li><a href="#about" class="hover:text-primary hover:bg-green-50 rounded-lg">Tentang Kami</a></li>
          <li><a href="#logbook" class="hover:text-primary hover:bg-green-50 rounded-lg">Logbook</a></li>
          <li><a href="#shop" class="hover:text-primary hover:bg-green-50 rounded-lg">Belanja</a></li>
        </ul>
      </div>

      <div class="navbar-end gap-3">
        <RouterLink to="/cart" class="btn btn-ghost btn-circle group">
          <div class="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span class="badge badge-sm indicator-item badge-primary text-white">0</span>
          </div>
        </RouterLink>
        
        <a class="btn btn-primary text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all">
          Masuk
        </a>
      </div>
    </div>
  </div>
</template>