<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import logo from '@/assets/logo.svg'

// State untuk newsletter
const email = ref('')
const isSubscribed = ref(false)

const handleSubscribe = () => {
  if (email.value) {
    // Simulasi subscribe (Nantinya bisa diganti API backend)
    isSubscribed.value = true
    email.value = ''
    setTimeout(() => {
      isSubscribed.value = false
    }, 3000)
  }
}
</script>

<template>
  <footer class="bg-[#354F38] text-white pt-16 lg:pt-20 pb-8 relative overflow-hidden">
    
    <div class="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10">
      
      <div class="flex flex-col lg:flex-row items-center justify-between bg-[#F4F7F5]/10 backdrop-blur-sm rounded-3xl p-8 lg:p-10 mb-16 border border-white/10">
        <div class="mb-6 lg:mb-0 text-center lg:text-left">
           <h3 class="text-2xl lg:text-3xl font-serif font-bold mb-2">Bergabung dengan Komunitas Kami</h3>
           <p class="text-gray-300 text-sm lg:text-base max-w-md">Dapatkan tips merawat tanaman herbal dan diskon eksklusif mingguan langsung di inbox Anda.</p>
        </div>
        
        <div class="w-full lg:w-auto w-full max-w-md">
           <form @submit.prevent="handleSubscribe" class="relative">
             <input 
               v-model="email"
               type="email" 
               placeholder="Masukkan alamat email..." 
               class="w-full pl-6 pr-32 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all"
               required
             />
             <button 
               type="submit"
               class="absolute right-2 top-2 bottom-2 bg-[#F4F7F5] text-[#354F38] hover:bg-white px-6 rounded-full font-bold text-sm transition-all shadow-lg hover:scale-105"
             >
               {{ isSubscribed ? 'Terdaftar!' : 'Langganan' }}
             </button>
           </form>
           <p class="text-xs text-gray-400 mt-3 ml-4">*Kami menjaga privasi data Anda.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
        
        <div class="space-y-6">
          <RouterLink to="/" class="flex items-center gap-3 group w-max">
            <img :src="logo" alt="Logo TogaWorld" class="h-10 w-10 brightness-0 invert group-hover:rotate-12 transition-transform" />
            <span class="text-2xl font-serif font-bold tracking-wide">TogaWorld</span>
          </RouterLink>
          <p class="text-gray-300 leading-relaxed text-sm">
            Platform e-commerce terpercaya yang menghubungkan Anda dengan petani lokal untuk menyediakan bibit tanaman obat keluarga (TOGA) berkualitas tinggi.
          </p>
          <div class="pt-2">
             <a href="https://maps.google.com" target="_blank" class="flex items-start gap-3 text-gray-300 hover:text-white transition-colors text-sm mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Jl. Soekarno Hatta Km. 15,<br>Balikpapan, Kalimantan Timur.</span>
             </a>
          </div>
        </div>

        <div>
           <h4 class="text-lg font-bold mb-6 font-serif border-b border-white/20 pb-2 inline-block">Jelajahi</h4>
           <ul class="space-y-3 text-sm">
             <li><a href="#home" class="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">Beranda</a></li>
             <li><a href="#about" class="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">Tentang Kami</a></li>
             <li><a href="#shop" class="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">Katalog Produk</a></li>
             <li><a href="#logbook" class="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">Logbook Edukasi</a></li>
             <li><RouterLink to="/karir" class="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">Karir (Hiring)</RouterLink></li>
             <li><RouterLink to="/blog" class="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">Blog Artikel</RouterLink></li>
           </ul>
        </div>

        <div>
           <h4 class="text-lg font-bold mb-6 font-serif border-b border-white/20 pb-2 inline-block">Bantuan</h4>
           <ul class="space-y-3 text-sm">
             <li><RouterLink to="/faq" class="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">FAQ</RouterLink></li>
             <li><RouterLink to="/pengiriman" class="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">Info Pengiriman</RouterLink></li>
             <li><RouterLink to="/kebijakan-privasi" class="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">Kebijakan Privasi</RouterLink></li>
             <li><RouterLink to="/syarat-ketentuan" class="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">Syarat & Ketentuan</RouterLink></li>
             <li><RouterLink to="/disclaimer" class="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">Disclaimer</RouterLink></li>
           </ul>
        </div>

        <div>
           <h4 class="text-lg font-bold mb-6 font-serif border-b border-white/20 pb-2 inline-block">Kontak</h4>
           <ul class="space-y-4 text-sm mb-8">
             <li>
                <a href="tel:+6281234567890" class="flex items-center gap-3 text-gray-300 hover:text-white group">
                  <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <span>+62 812-3456-7890</span>
                </a>
             </li>
             <li>
                <a href="mailto:hello@togaworld.id" class="flex items-center gap-3 text-gray-300 hover:text-white group">
                  <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <span>hello@togaworld.id</span>
                </a>
             </li>
           </ul>

           <h5 class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Ikuti Kami</h5>
           <div class="flex gap-3">
             <a href="#" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] hover:scale-110 transition-all text-white" aria-label="Facebook">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
             </a>
             <a href="#" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E4405F] hover:border-[#E4405F] hover:scale-110 transition-all text-white" aria-label="Instagram">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
             </a>
             <a href="#" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1DA1F2] hover:border-[#1DA1F2] hover:scale-110 transition-all text-white" aria-label="Twitter">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
             </a>
             <a href="#" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:scale-110 transition-all text-white" aria-label="LinkedIn">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
             </a>
           </div>
        </div>

      </div>

      <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
        <p>&copy; 2026 TogaWorld Indonesia. All rights reserved.</p>
        <div class="flex gap-6">
           <RouterLink to="/terms" class="hover:text-white transition-colors">Syarat & Ketentuan</RouterLink>
           <RouterLink to="/privacy" class="hover:text-white transition-colors">Kebijakan Privasi</RouterLink>
           <a href="#" class="hover:text-white transition-colors">Sitemap</a>
        </div>
      </div>

    </div>
  </footer>
</template>