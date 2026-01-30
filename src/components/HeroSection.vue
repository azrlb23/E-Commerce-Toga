<template>
  <section id="home" class="hero min-h-screen bg-[#F4F7F5] relative overflow-hidden pt-28 lg:pt-0">
    
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-[#354F38]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
    <div class="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#5F7161]/5 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3"></div>

    <div class="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-20 items-center z-10 w-full px-6 lg:px-12">
      
      <div class="relative w-full max-w-sm lg:max-w-lg">
         <img 
            src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070&auto=format&fit=crop" 
            class="w-full h-auto rounded-none rounded-tr-[80px] rounded-bl-[80px] shadow-2xl object-cover aspect-[4/5] lg:aspect-square" 
            alt="Kebun Tanaman Toga"
          />
        <div class="absolute -bottom-6 -left-6 w-full h-full border-2 border-[#354F38]/20 rounded-tr-[80px] rounded-bl-[80px] -z-10"></div>
      </div>
      
      <div class="text-center lg:text-left max-w-xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#354F38]/10 text-[#354F38] mb-6">
          <span class="w-2 h-2 rounded-full bg-[#354F38]"></span>
          <span class="text-sm font-semibold tracking-wide">Solusi Kesehatan Alami</span>
        </div>
        
        <h1 class="text-4xl lg:text-6xl font-bold leading-tight text-[#1F291F] mb-6 font-serif">
          Kebaikan Alam <br>untuk <span class="text-[#354F38] relative inline-block">
            Kesehatan
            <svg class="absolute w-full h-3 -bottom-1 left-0 text-[#5F7161]" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="3" fill="none" />
            </svg>
          </span>
        </h1>
        
        <p class="mb-8 text-gray-600 text-lg leading-relaxed">
          Temukan ragam tanaman obat keluarga (TOGA) pilihan. Kami menghubungkan Anda langsung dengan kebaikan alam yang dirawat dengan hati untuk keluarga tercinta.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a href="#shop" class="btn bg-[#354F38] hover:bg-[#263a29] border-none text-white btn-lg rounded-full shadow-lg hover:shadow-[#354F38]/30 transition-all px-8">
            Mulai Belanja
          </a>
          <a href="#logbook" class="btn btn-ghost hover:bg-[#354F38]/10 text-[#354F38] btn-lg rounded-full px-8">
            Pelajari Manfaat &rarr;
          </a>
        </div>
        
        <div class="mt-12 flex items-center justify-center lg:justify-start gap-8 border-t border-gray-200 pt-6">
           <div>
              <p class="text-2xl font-bold text-[#354F38]">100%</p>
              <p class="text-xs text-gray-500 uppercase tracking-wider">Organik</p>
           </div>
           <div class="w-px h-8 bg-gray-300"></div>
           <div>
              <p class="text-2xl font-bold text-[#354F38]">24 Jam</p>
              <p class="text-xs text-gray-500 uppercase tracking-wider">Pengiriman</p>
           </div>
        </div>

      </div>
    </div>
  </section>
</template>