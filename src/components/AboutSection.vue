<script setup>

</script>

<template>
  <section id="about" class="py-16 lg:py-24 bg-white relative overflow-hidden">
      
      <div class="absolute top-0 left-0 w-48 h-48 bg-[#354F38]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-72 h-72 bg-[#5F7161]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div class="container mx-auto px-6 relative z-10">
        
        <div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-16 lg:mb-24">
          
          <div class="flex-1 w-full flex justify-center lg:justify-end relative group order-last lg:order-first">
             <div class="w-full max-w-sm lg:max-w-md aspect-[4/5] relative z-10 overflow-hidden rounded-[32px] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1620901433789-1d2f85a93653?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Petani Toga" 
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#1F291F]/60 to-transparent opacity-60"></div>
                
                <div class="absolute bottom-5 left-5 bg-white/95 backdrop-blur px-5 py-2.5 rounded-xl shadow-lg border-l-4 border-[#354F38]">
                  <p class="text-[#354F38] font-bold text-base">Sejak 2024</p>
                  <p class="text-[10px] text-gray-500 uppercase tracking-widest">Terpercaya</p>
                </div>
             </div>

             <div class="absolute top-8 -right-4 w-full h-full max-w-sm lg:max-w-md border-2 border-[#354F38]/20 rounded-[32px] -z-0 hidden md:block"></div>
             
             </div>

          <div class="flex-1 w-full text-center lg:text-left">
             <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#354F38]/10 text-[#354F38] mb-5">
                <span class="text-xs font-bold tracking-wider uppercase">Cerita Kami</span>
             </div>

             <h2 class="text-3xl lg:text-5xl font-serif font-bold mb-5 text-[#1F291F] leading-tight">
               Mengembalikan <span class="text-[#354F38] underline decoration-[#5F7161] decoration-wavy underline-offset-4">Alam</span> <br class="hidden lg:block">ke Rumah Anda.
             </h2>
             
             <p class="text-gray-600 leading-relaxed mb-5 text-base lg:text-lg font-medium">
               Asta Eleuthera lahir dari keresahan sederhana: betapa sulitnya menemukan tanaman obat asli yang berkualitas di tengah hiruk pikuk kota. 
             </p>
             <p class="text-gray-600 leading-relaxed mb-8 text-sm lg:text-base">
               Kami bukan sekadar toko tanaman. Kami adalah komunitas yang percaya bahwa kesehatan terbaik dimulai dari kebun sendiri. Kami bermitra langsung dengan petani lokal untuk memastikan setiap bibit yang sampai ke tangan Anda adalah bibit terbaik yang dirawat dengan hati.
             </p>

             <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a 
                  href="#testimonials"
                  class="btn bg-[#354F38] hover:bg-[#263a29] text-white border-none rounded-full px-6 shadow-lg hover:shadow-[#354F38]/30 min-h-0 h-11 flex items-center"
                >
                  Lihat Kata Mereka
                </a>

                <a 
                  href="https://wa.me/6281234567890?text=Halo%20Asta%20Eleuthera,%20saya%20tertarik%20menjadi%20mitra%20petani."
                  target="_blank"
                  class="btn btn-outline border-[#354F38] text-[#354F38] hover:bg-[#354F38] hover:text-white rounded-full px-6 min-h-0 h-11"
                >
                  Hubungi Kami
                </a>

                <div class="flex items-center gap-3 px-2">
                   <div class="flex -space-x-3">
                      <img class="w-9 h-9 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1" alt="User" />
                      <img class="w-9 h-9 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=5" alt="User" />
                      <img class="w-9 h-9 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=8" alt="User" />
                   </div>
                   <div class="text-xs text-left">
                      <p class="font-bold text-[#1F291F]">500+</p>
                      <p class="text-gray-500">Keluarga Terbantu</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-0 items-stretch">
            
            <div class="group h-full">
                <div class="bg-[#F4F7F5] rounded-[24px] p-8 h-full flex flex-col items-center text-center lg:items-start lg:text-left transition-all duration-300 hover:bg-white hover:shadow-xl border border-transparent hover:border-[#354F38]/10">
                    <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#354F38] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-[#354F38] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-[#1F291F] mb-3">Asli & Organik</h3>
                    <p class="text-gray-600 text-sm leading-relaxed flex-grow">
                        Tanpa pestisida kimia. Kami menjamin setiap tanaman tumbuh secara alami untuk khasiat maksimal.
                    </p>
                </div>
            </div>

            <div class="group h-full">
                <div class="bg-[#354F38] rounded-[24px] p-8 h-full flex flex-col items-center text-center lg:items-start lg:text-left shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden border border-[#354F38]">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
                    <div class="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-3">Mitra Petani Lokal</h3>
                    <p class="text-gray-200 text-sm leading-relaxed flex-grow">
                        Setiap pembelian Anda berkontribusi langsung pada kesejahteraan petani rempah di pedesaan Indonesia.
                    </p>
                </div>
            </div>

            <div class="group h-full">
                <div class="bg-[#F4F7F5] rounded-[24px] p-8 h-full flex flex-col items-center text-center lg:items-start lg:text-left transition-all duration-300 hover:bg-white hover:shadow-xl border border-transparent hover:border-[#354F38]/10">
                    <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#354F38] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-[#354F38] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-[#1F291F] mb-3">Edukasi Tanpa Henti</h3>
                    <p class="text-gray-600 text-sm leading-relaxed flex-grow">
                        Tidak hanya menjual, kami mendampingi Anda merawat tanaman melalui Logbook digital kami.
                    </p>
                </div>
            </div>
        </div>

      </div>

    </section>
</template>