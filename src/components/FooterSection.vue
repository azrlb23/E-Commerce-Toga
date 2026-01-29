<script setup>
import logo from '@/assets/logo.svg'
</script>

<template>
  <footer class="bg-neutral text-neutral-content pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="footer grid-cols-1 md:grid-cols-4 gap-10">
        
        <aside class="col-span-1 md:col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <img :src="logo" alt="Logo" class="h-10 w-10 grayscale brightness-200" />
            <span class="text-2xl font-serif font-bold text-white">TogaWorld</span>
          </div>
          <p class="leading-relaxed opacity-80">
            Melestarikan warisan alam nusantara melalui tanaman obat keluarga yang berkualitas dan edukatif.
          </p>
          <div class="flex gap-4 mt-6">
            <a class="link link-hover opacity-70 hover:opacity-100 hover:text-primary transition"><i class="text-xl">IG</i></a> <a class="link link-hover opacity-70 hover:opacity-100 hover:text-primary transition"><i class="text-xl">FB</i></a>
            <a class="link link-hover opacity-70 hover:opacity-100 hover:text-primary transition"><i class="text-xl">WA</i></a>
          </div>
        </aside>

        <nav>
          <header class="footer-title text-white opacity-100">Perusahaan</header>
          <a href="#home" class="link link-hover hover:text-primary">Beranda</a>
          <a href="#about" class="link link-hover hover:text-primary">Tentang Kami</a>
          <a href="#" class="link link-hover hover:text-primary">Karir</a>
          <a href="#" class="link link-hover hover:text-primary">Kontak</a>
        </nav>

        <nav>
          <header class="footer-title text-white opacity-100">Layanan</header>
          <a href="#shop" class="link link-hover hover:text-primary">Belanja Bibit</a>
          <a href="#shop" class="link link-hover hover:text-primary">Produk Herbal</a>
          <a href="#logbook" class="link link-hover hover:text-primary">Konsultasi Toga</a>
          <a href="#" class="link link-hover hover:text-primary">Mitra Petani</a>
        </nav>

        <form>
          <header class="footer-title text-white opacity-100">Berita Terbaru</header>
          <p class="mb-4 text-sm opacity-80">Dapatkan tips kesehatan herbal setiap minggu.</p>
          <fieldset class="form-control w-80">
            <div class="join">
              <input type="text" placeholder="Email Anda" class="input input-bordered join-item text-gray-800 focus:outline-none" />
              <button class="btn btn-primary join-item rounded-r-lg text-white">Langganan</button>
            </div>
          </fieldset>
        </form>
      </div>

      <div class="divider divider-neutral my-10"></div>
      <div class="text-center text-sm opacity-60">
        <p>Copyright © 2026 - TogaWorld Indonesia. All right reserved.</p>
      </div>
    </div>
  </footer>
</template>