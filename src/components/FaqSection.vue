<script setup>
import { ref } from 'vue'

const faqs = ref([
  {
    question: "Apakah pengiriman aman ke luar pulau?",
    answer: "Sangat aman. Kami menggunakan teknik packing khusus dengan media tanam yang dilembapkan, vitamin anti-stres, dan rangka pelindung kardus tebal.",
    isOpen: false // Default terbuka satu agar user paham ini bisa diklik
  },
  {
    question: "Bagaimana jika tanaman mati saat sampai?",
    answer: "Kami memberikan GARANSI 100% Ganti Baru. Cukup kirimkan video unboxing saat paket diterima, dan kami akan mengirimkan bibit pengganti tanpa biaya tambahan.",
    isOpen: false
  },
  {
    question: "Apakah tanaman ini 100% organik?",
    answer: "Ya, 100%. Kami merawat bibit hanya menggunakan pupuk kandang fermentasi dan pestisida nabati buatan sendiri. Bebas dari bahan kimia berbahaya.",
    isOpen: false
  },
  {
    question: "Berapa lama bibit bisa bertahan di perjalanan?",
    answer: "Bibit kami disiapkan dengan nutrisi khusus agar tahan hingga 7-10 hari perjalanan ekspedisi reguler ke seluruh Indonesia.",
    isOpen: false
  },
  {
    question: "Apakah ada panduan perawatannya?",
    answer: "Tentu! Setiap pembelian disertai QR Code menuju Logbook Digital kami yang berisi panduan lengkap perawatan spesifik untuk tanaman tersebut.",
    isOpen: false
  },
  {
    question: "Apakah bisa konsultasi setelah membeli?",
    answer: "Sangat bisa. Kami memiliki layanan konsultasi gratis seumur hidup via WhatsApp untuk memantau perkembangan tanaman Toga Anda.",
    isOpen: false
  }
])

const toggleFaq = (index) => {
  // Opsi: Jika ingin accordion tertutup otomatis saat yang lain dibuka, uncomment baris bawah ini
  // faqs.value.forEach((item, i) => { if(i !== index) item.isOpen = false })
  
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script>

<template>
  <section class="py-16 lg:py-24 bg-[#F4F7F5] relative overflow-hidden">
    
    <div class="absolute top-0 left-0 w-64 h-64 bg-[#354F38]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 right-0 w-64 h-64 bg-[#5F7161]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

    <div class="container mx-auto px-6 max-w-6xl relative z-10">
      
      <div class="text-center mb-16">
         <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#354F38]/10 text-[#354F38] mb-3">
            <span class="text-xs font-bold tracking-wider uppercase">Pusat Bantuan</span>
         </div>
         <h2 class="text-3xl lg:text-4xl font-serif font-bold text-[#1F291F]">Pertanyaan Sering Diajukan</h2>
         <p class="text-gray-500 mt-3 max-w-xl mx-auto">
            Kami mengumpulkan pertanyaan populer dari pelanggan untuk membantu Anda berbelanja dengan nyaman dan tanpa ragu.
         </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="bg-white rounded-2xl border border-transparent hover:border-[#354F38]/10 transition-all duration-300 shadow-sm hover:shadow-lg group overflow-hidden"
        >
          <button 
            @click="toggleFaq(index)"
            class="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
          >
            <span class="text-lg font-bold text-[#1F291F] group-hover:text-[#354F38] transition-colors pr-4 leading-snug">
              {{ faq.question }}
            </span>
            
            <div :class="[
              'w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0', 
              faq.isOpen ? 'bg-[#354F38] text-white rotate-180' : 'bg-[#F4F7F5] text-[#354F38]'
            ]">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          
          <div 
            v-show="faq.isOpen"
            class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 animate-slideDown"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Animasi Halus saat Jawaban Muncul */
.animate-slideDown {
  animation: slideDown 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>