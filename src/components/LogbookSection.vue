<script setup>
import { ref } from 'vue'

// Data Tips Harian (Bisa ditambah)
const dailyTips = ref([
  {
    title: "Jahe Merah vs Jahe Putih",
    content: "Jahe merah memiliki kandungan minyak atsiri lebih tinggi dibanding jahe putih, sehingga lebih efektif untuk menghangatkan tubuh dan meredakan pegal linu.",
    icon: "🔥"
  },
  {
    title: "Waktu Terbaik Menyiram",
    content: "Hindari menyiram tanaman Toga di siang bolong. Waktu terbaik adalah pagi hari (06:00-09:00) atau sore hari (16:00-18:00) untuk mencegah penguapan ekstrem.",
    icon: "💧"
  },
  {
    title: "Media Tanam Kunyit",
    content: "Kunyit menyukai tanah yang gembur. Campurkan tanah, sekam bakar, dan pupuk kandang dengan perbandingan 1:1:1 agar rimpang bisa membesar maksimal.",
    icon: "🌱"
  }
])

const currentTipIndex = ref(0)

const nextTip = () => {
  currentTipIndex.value = (currentTipIndex.value + 1) % dailyTips.value.length
}
</script>

<template>
  <section id="logbook" class="py-16 lg:py-24 bg-[#F4F7F5] relative overflow-hidden">
      
      <div class="absolute top-0 right-0 w-64 h-64 bg-[#354F38]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 left-0 w-48 h-48 bg-[#5F7161]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/3"></div>

      <div class="container mx-auto px-6 relative z-10">
        
        <div class="flex flex-col lg:flex-row gap-12 items-start">
          
          <div class="w-full lg:w-1/3">
             <div class="bg-[#354F38] rounded-[32px] p-8 text-white shadow-2xl relative overflow-hidden h-full min-h-[400px] flex flex-col justify-between">
                <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                
                <div>
                  <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white mb-6 backdrop-blur-sm border border-white/10">
                    <span class="text-xs font-bold tracking-wider uppercase">✨ Tips Hari Ini</span>
                  </div>
                  
                  <div class="mb-4 text-4xl">{{ dailyTips[currentTipIndex].icon }}</div>
                  
                  <h3 class="text-2xl font-serif font-bold mb-4 leading-tight">
                    {{ dailyTips[currentTipIndex].title }}
                  </h3>
                  <p class="text-gray-200 leading-relaxed text-sm lg:text-base">
                    {{ dailyTips[currentTipIndex].content }}
                  </p>
                </div>

                <div class="mt-8 pt-6 border-t border-white/20 flex justify-between items-center">
                   <span class="text-xs text-gray-300">Tips {{ currentTipIndex + 1 }} dari {{ dailyTips.length }}</span>
                   <button @click="nextTip" class="btn btn-sm btn-circle bg-white text-[#354F38] border-none hover:bg-gray-200">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                   </button>
                </div>
             </div>
          </div>

          <div class="w-full lg:w-2/3">
             <div class="mb-8">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#354F38]/10 text-[#354F38] mb-4">
                    <span class="text-xs font-bold tracking-wider uppercase">Edukasi & Literasi</span>
                </div>
                <h2 class="text-3xl lg:text-4xl font-serif font-bold text-[#1F291F] mb-3">
                  Logbook <span class="text-[#354F38]">Toga</span>
                </h2>
                <p class="text-gray-600 text-lg">
                  Pusat literasi herbal. Pilih topik yang ingin Anda pelajari lebih dalam.
                </p>
             </div>

             <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div class="group bg-white p-6 rounded-[24px] border border-transparent hover:border-[#354F38]/20 hover:shadow-xl transition-all duration-300 flex items-start gap-4 cursor-pointer">
                   <div class="w-12 h-12 rounded-2xl bg-[#F4F7F5] flex items-center justify-center text-[#354F38] group-hover:bg-[#354F38] group-hover:text-white transition-colors flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                   </div>
                   <div>
                      <h4 class="font-bold text-lg text-[#1F291F] mb-1 group-hover:text-[#354F38] transition-colors">Ensiklopedia Manfaat</h4>
                      <p class="text-sm text-gray-500 mb-3">Database lengkap khasiat ratusan tanaman obat.</p>
                      <span class="text-xs font-bold text-[#354F38] uppercase tracking-wider underline">Baca Sekarang</span>
                   </div>
                </div>

                <div class="group bg-white p-6 rounded-[24px] border border-transparent hover:border-[#354F38]/20 hover:shadow-xl transition-all duration-300 flex items-start gap-4 cursor-pointer">
                   <div class="w-12 h-12 rounded-2xl bg-[#F4F7F5] flex items-center justify-center text-[#354F38] group-hover:bg-[#354F38] group-hover:text-white transition-colors flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                   </div>
                   <div>
                      <h4 class="font-bold text-lg text-[#1F291F] mb-1 group-hover:text-[#354F38] transition-colors">Resep Jamu & Teh</h4>
                      <p class="text-sm text-gray-500 mb-3">Panduan meracik herbal yang aman dan enak.</p>
                      <span class="text-xs font-bold text-[#354F38] uppercase tracking-wider underline">Lihat Resep</span>
                   </div>
                </div>

                <div class="group bg-white p-6 rounded-[24px] border border-transparent hover:border-[#354F38]/20 hover:shadow-xl transition-all duration-300 flex items-start gap-4 cursor-pointer">
                   <div class="w-12 h-12 rounded-2xl bg-[#F4F7F5] flex items-center justify-center text-[#354F38] group-hover:bg-[#354F38] group-hover:text-white transition-colors flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                   </div>
                   <div>
                      <h4 class="font-bold text-lg text-[#1F291F] mb-1 group-hover:text-[#354F38] transition-colors">Panduan Tanam</h4>
                      <p class="text-sm text-gray-500 mb-3">Tips perawatan, media tanam, dan jadwal panen.</p>
                      <span class="text-xs font-bold text-[#354F38] uppercase tracking-wider underline">Mulai Menanam</span>
                   </div>
                </div>

                 <div class="group bg-white p-6 rounded-[24px] border border-transparent hover:border-[#354F38]/20 hover:shadow-xl transition-all duration-300 flex items-start gap-4 cursor-pointer">
                   <div class="w-12 h-12 rounded-2xl bg-[#F4F7F5] flex items-center justify-center text-[#354F38] group-hover:bg-[#354F38] group-hover:text-white transition-colors flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                   </div>
                   <div>
                      <h4 class="font-bold text-lg text-[#1F291F] mb-1 group-hover:text-[#354F38] transition-colors">Forum Komunitas</h4>
                      <p class="text-sm text-gray-500 mb-3">Tanya jawab dengan sesama pegiat herbal.</p>
                      <span class="text-xs font-bold text-[#354F38] uppercase tracking-wider underline">Gabung Forum</span>
                   </div>
                </div>

             </div>
          </div>

        </div>

      </div>
    </section>
</template>