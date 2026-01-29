<script setup>
// Tidak perlu script khusus untuk saat ini
</script>

<template>
  <section id="home" class="hero min-h-[80vh] bg-base-200 relative overflow-hidden">
    <div class="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-16 items-center">
      
      <img 
        src="https://images.unsplash.com/photo-1470167683935-77b311394f71?q=80&w=2070&auto=format&fit=crop" 
        class="max-w-sm lg:max-w-lg rounded-2xl shadow-2xl mask mask-squircle" 
        alt="Tanaman Toga"
      />
      
      <div class="text-center lg:text-left max-w-xl">
        <div class="badge badge-primary badge-outline mb-4">Solusi Kesehatan Alami</div>
        <h1 class="text-5xl font-bold leading-tight text-gray-800">
          Kebaikan Alam untuk <span class="text-primary">Kesehatan Anda</span>
        </h1>
        <p class="py-6 text-gray-600 text-lg">
          Temukan ragam tanaman obat keluarga (TOGA), pelajari manfaatnya di Logbook kami, dan beli produk herbal berkualitas langsung dari petani.
        </p>
        <div class="flex gap-4 justify-center lg:justify-start">
          <a href="#shop" class="btn btn-primary text-white btn-lg rounded-full shadow-lg hover:shadow-xl transition-all">
            Beli Sekarang
          </a>
          <a href="#logbook" class="btn btn-outline btn-primary btn-lg rounded-full">
            Pelajari Manfaat
          </a>
        </div>
      </div>
    </div>
  </section>
</template>