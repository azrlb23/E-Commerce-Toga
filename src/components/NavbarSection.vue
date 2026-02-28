<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

// Kita ubah logika scroll sedikit untuk efek mengecil saat scroll
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <div class="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4 transition-all duration-300">
    
    <div 
      :class="[
        'navbar transition-all duration-300 rounded-full shadow-lg border border-[#354F38]/10',
        isScrolled 
          ? 'w-[90%] md:w-[80%] bg-white/90 backdrop-blur-md py-2' 
          : 'w-[95%] md:w-[90%] bg-white/80 backdrop-blur-sm py-3'
      ]"
    >
      <div class="w-full flex justify-between px-2 md:px-6">
        
        <div class="navbar-start w-auto">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle lg:hidden text-[#354F38]">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-white rounded-2xl w-52 text-[#354F38] border border-[#354F38]/10">
              <li><a href="#home">Beranda</a></li>
              <li><a href="#about">Tentang</a></li>
              <li><a href="#logbook">Logbook</a></li>
              <li><a href="#shop">Belanja</a></li>
            </ul>
          </div>
          
          <RouterLink to="/" class="btn btn-ghost text-xl font-bold flex items-center gap-2 hover:bg-transparent px-2">
            <img src="/images/AE1.png" alt="Logo Asta Eleuthera" class="h-12 w-auto" />
            <span class="text-[#354F38] font-serif tracking-wide hidden sm:inline">Asta Eleuthera</span>
          </RouterLink>
        </div>

        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1 font-medium text-gray-600 gap-1">
            <li><a href="#home" class="hover:text-[#354F38] hover:bg-[#354F38]/10 rounded-full px-4">Beranda</a></li>
            <li><a href="#about" class="hover:text-[#354F38] hover:bg-[#354F38]/10 rounded-full px-4">Tentang Kami</a></li>
            <li><a href="#logbook" class="hover:text-[#354F38] hover:bg-[#354F38]/10 rounded-full px-4">Logbook</a></li>
            <li><a href="#shop" class="hover:text-[#354F38] hover:bg-[#354F38]/10 rounded-full px-4">Belanja</a></li>
          </ul>
        </div>

        <div class="navbar-end w-auto gap-2">
          <RouterLink to="/cart" class="btn btn-ghost btn-circle group hover:bg-[#354F38]/10">
            <div class="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 group-hover:text-[#354F38] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span class="badge badge-xs indicator-item bg-[#354F38] border-none text-white w-4 h-4 p-0 flex justify-center items-center">0</span>
            </div>
          </RouterLink>
          
          <a class="btn bg-[#354F38] hover:bg-[#263a29] border-none text-white rounded-full px-6 shadow-md transition-all h-10 min-h-0">
            Masuk
          </a>
        </div>

      </div>
    </div>
  </div>
</template>