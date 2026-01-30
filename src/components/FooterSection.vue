<script setup>
import logo from '@/assets/logo.svg'
</script>

<template>
  <footer class="bg-[#354F38] text-white pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <aside class="col-span-1 md:col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <img :src="logo" alt="Logo" class="h-10 w-10 brightness-0 invert" />
            <span class="text-2xl font-serif font-bold">TogaWorld</span>
          </div>
          <p class="leading-relaxed text-gray-300 text-sm">
            Melestarikan warisan alam nusantara melalui tanaman obat keluarga yang berkualitas.
          </p>
        </aside>

        <nav class="flex flex-col gap-2">
          <header class="font-bold text-white mb-2 uppercase tracking-wider text-sm opacity-80">Perusahaan</header>
          <a href="#home" class="link link-hover text-gray-300 hover:text-white">Beranda</a>
          <a href="#about" class="link link-hover text-gray-300 hover:text-white">Tentang Kami</a>
          <a href="#" class="link link-hover text-gray-300 hover:text-white">Kontak</a>
        </nav>

        <nav class="flex flex-col gap-2">
          <header class="font-bold text-white mb-2 uppercase tracking-wider text-sm opacity-80">Layanan</header>
          <a href="#shop" class="link link-hover text-gray-300 hover:text-white">Belanja Bibit</a>
          <a href="#logbook" class="link link-hover text-gray-300 hover:text-white">Edukasi Toga</a>
          <a href="#" class="link link-hover text-gray-300 hover:text-white">Mitra Petani</a>
        </nav>

        <form>
          <header class="font-bold text-white mb-2 uppercase tracking-wider text-sm opacity-80">Newsletter</header>
          <p class="mb-4 text-xs text-gray-300">Dapatkan tips kesehatan herbal mingguan.</p>
          <div class="join w-full">
            <input type="text" placeholder="Email Anda" class="input input-sm join-item text-gray-800 focus:outline-none w-full" />
            <button class="btn btn-sm join-item bg-[#5F7161] border-none text-white hover:bg-[#4a5a4c]">Kirim</button>
          </div>
        </form>
      </div>

      <div class="border-t border-white/10 my-10"></div>
      <div class="text-center text-xs text-gray-400">
        <p>Copyright © 2026 - TogaWorld Indonesia. All right reserved.</p>
      </div>
    </div>
  </footer>
</template>