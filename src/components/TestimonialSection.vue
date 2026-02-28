<script setup>
import { ref } from 'vue'

const testimonials = ref([
  {
    id: 1,
    name: "Budi Santoso",
    role: "Pecinta Herbal",
    avatar: "https://i.pravatar.cc/100?img=11",
    content: "Saya kaget dengan kualitas bibit jahe merahnya. Segar banget pas sampai, packing aman, dan sekarang sudah tumbuh subur di halaman rumah!",
    rating: 5
  },
  {
    id: 2,
    name: "Siti Aminah",
    role: "Ibu Rumah Tangga",
    avatar: "https://i.pravatar.cc/100?img=5",
    content: "Logbook-nya sangat membantu! Saya jadi tahu cara merawat kunyit dengan benar. Anak-anak juga jadi suka bantu nyiram tanaman.",
    rating: 5
  },
  {
    id: 3,
    name: "Dr. Rahmat",
    role: "Praktisi Kesehatan",
    avatar: "https://i.pravatar.cc/100?img=3",
    content: "Simplisia yang dijual Asta Eleuthera sangat bersih dan berkualitas. Saya sering rekomendasikan ke pasien untuk pendamping terapi.",
    rating: 4
  }
])
</script>

<template>
  <section id="testimonials" class="py-16 lg:py-24 bg-[#F4F7F5] relative overflow-hidden">
    <!-- Dekorasi Background -->
    <div class="absolute top-0 left-0 w-32 h-32 bg-[#354F38]/5 rounded-full blur-xl"></div>
    <div class="absolute bottom-0 right-0 w-48 h-48 bg-[#5F7161]/5 rounded-full blur-xl"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-12 lg:mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#354F38]/10 text-[#354F38] mb-4">
           <span class="text-xs font-bold tracking-wider uppercase">Kata Mereka</span>
        </div>
        <h2 class="text-3xl lg:text-4xl font-serif font-bold text-[#1F291F]">Cerita Keluarga Toga</h2>
        <p class="text-gray-600 mt-4 max-w-2xl mx-auto">Bergabung dengan ratusan keluarga yang telah merasakan manfaat menanam kebaikan di rumah sendiri.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="item in testimonials" 
          :key="item.id"
          class="bg-white p-8 rounded-[24px] shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#354F38]/10 relative group"
        >
          <!-- Quote Icon -->
          <div class="absolute top-6 right-8 text-6xl text-gray-100 font-serif leading-none group-hover:text-[#354F38]/10 transition-colors">”</div>
          
          <div class="flex items-center gap-4 mb-6">
            <img :src="item.avatar" :alt="item.name" class="w-14 h-14 rounded-full border-2 border-[#F4F7F5]" />
            <div>
              <h4 class="font-bold text-[#1F291F]">{{ item.name }}</h4>
              <p class="text-xs text-gray-500">{{ item.role }}</p>
            </div>
          </div>

          <div class="flex gap-1 mb-4">
             <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" :class="i <= item.rating ? 'text-yellow-400' : 'text-gray-200'" viewBox="0 0 20 20" fill="currentColor">
               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
             </svg>
          </div>

          <p class="text-gray-600 italic relative z-10 leading-relaxed">
            "{{ item.content }}"
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
