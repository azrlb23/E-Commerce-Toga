<script setup>
import { ref } from 'vue'
import ReviewModal from '@/components/ReviewModal.vue' 

const showReviewModal = ref(false)
</script>

<template>
  <section id="about" class="py-16 px-4 bg-white">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row items-center gap-12">
          
          <div class="flex-1">
             <h2 class="text-3xl font-bold mb-4 text-gray-800">Tentang <span class="text-primary">TogaWorld</span></h2>
             <p class="text-gray-600 leading-relaxed mb-4">
               Kami adalah perusahaan agritech yang berdedikasi untuk melestarikan tanaman obat keluarga (TOGA). 
               Misi kami adalah mengedukasi masyarakat tentang manfaat herbal alami dan menyediakan akses mudah 
               ke bibit serta produk olahan tanaman obat berkualitas.
             </p>
             <div class="stats shadow w-full bg-base-200">
                <div class="stat place-items-center">
                  <div class="stat-title">Jenis Tanaman</div>
                  <div class="stat-value text-primary">150+</div>
                </div>
                <div class="stat place-items-center">
                  <div class="stat-title">Petani Mitra</div>
                  <div class="stat-value text-secondary">50+</div>
                </div>
             </div>
             
             <div class="mt-6">
                <button 
                  @click="showReviewModal = true"
                  class="btn btn-primary text-white rounded-full"
                >
                  Lihat Review Pembeli
                </button>
             </div>
          </div>

          <div class="flex-1 flex justify-center relative">
             <div class="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-green-100 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1540932296774-344cd3e97969?q=80&w=2070&auto=format&fit=crop" 
                  alt="Tentang TogaWorld" 
                  class="w-full h-full object-cover" 
                />
             </div>
             <div class="absolute -bottom-4 -right-4 w-20 h-20 bg-secondary rounded-full -z-10 opacity-20"></div>
          </div>
        </div>
      </div>
      <ReviewModal :is-open="showReviewModal" @close="showReviewModal = false" />
    </section>
</template>