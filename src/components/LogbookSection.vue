<template>
  <section id="logbook" class="py-16 lg:py-24 bg-[#F4F7F5] relative">
      
      <div class="absolute top-0 right-0 w-64 h-64 bg-[#354F38]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-12 lg:mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#354F38]/10 text-[#354F38] mb-4">
             <span class="text-xs font-bold tracking-wider uppercase">Edukasi & Literasi</span>
          </div>
          <h2 class="text-3xl lg:text-4xl font-serif font-bold text-[#1F291F] mb-4">
            Logbook <span class="text-[#354F38]">Toga</span>
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-base lg:text-lg">
            Panduan lengkap yang kami kurasi untuk membantu Anda memahami khasiat, cara tanam, dan pengolahan herbal yang benar.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div class="group h-full">
            <div class="bg-white rounded-[24px] p-8 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-[#354F38]/10 relative overflow-hidden">
               <div class="absolute top-0 right-0 w-24 h-24 bg-[#354F38]/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>

               <div class="w-14 h-14 bg-[#F4F7F5] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#354F38] transition-colors relative z-10">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-[#354F38] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
               </div>
               
               <h3 class="text-xl font-bold text-[#1F291F] mb-3 group-hover:text-[#354F38] transition-colors">Ensiklopedia Manfaat</h3>
               <p class="text-gray-600 mb-6 flex-grow leading-relaxed">
                 Database lengkap khasiat jahe, kunyit, temulawak, dan ratusan tanaman lainnya untuk referensi kesehatan keluarga.
               </p>
               
               <button class="flex items-center gap-2 text-[#354F38] font-bold text-sm uppercase tracking-wider group/btn w-max">
                 Baca Selengkapnya
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
               </button>
            </div>
          </div>

          <div class="group h-full">
            <div class="bg-white rounded-[24px] p-8 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-[#354F38]/10 relative overflow-hidden">
               <div class="absolute top-0 right-0 w-24 h-24 bg-[#354F38]/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>

               <div class="w-14 h-14 bg-[#F4F7F5] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#354F38] transition-colors relative z-10">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-[#354F38] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
               </div>
               
               <h3 class="text-xl font-bold text-[#1F291F] mb-3 group-hover:text-[#354F38] transition-colors">Resep Campuran</h3>
               <p class="text-gray-600 mb-6 flex-grow leading-relaxed">
                 Panduan meracik jamu tradisional dan teh herbal dengan takaran yang aman, enak, dan berkhasiat.
               </p>
               
               <button class="flex items-center gap-2 text-[#354F38] font-bold text-sm uppercase tracking-wider group/btn w-max">
                 Lihat Resep
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
               </button>
            </div>
          </div>

          <div class="group h-full">
            <div class="bg-white rounded-[24px] p-8 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-[#354F38]/10 relative overflow-hidden">
               <div class="absolute top-0 right-0 w-24 h-24 bg-[#354F38]/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>

               <div class="w-14 h-14 bg-[#F4F7F5] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#354F38] transition-colors relative z-10">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-[#354F38] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
               </div>
               
               <h3 class="text-xl font-bold text-[#1F291F] mb-3 group-hover:text-[#354F38] transition-colors">Jurnal Tanam</h3>
               <p class="text-gray-600 mb-6 flex-grow leading-relaxed">
                 Dokumentasi kegiatan, jadwal panen, dan tips perawatan tanaman musiman di kebun kami.
               </p>
               
               <button class="flex items-center gap-2 text-[#354F38] font-bold text-sm uppercase tracking-wider group/btn w-max">
                 Buka Jurnal
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
</template>