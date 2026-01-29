<template>
  <section id="logbook" class="py-20 bg-green-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800">Logbook Toga</h2>
          <p class="text-gray-600 mt-2">Panduan lengkap manfaat, kegunaan, dan racikan herbal.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all border-t-4 border-primary">
            <div class="card-body">
              <div class="p-3 bg-green-100 w-fit rounded-lg mb-2 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 class="card-title">Ensiklopedia Manfaat</h3>
              <p>Cari tahu khasiat jahe, kunyit, temulawak, dan ratusan tanaman lainnya untuk kesehatan tubuh.</p>
              <div class="card-actions justify-end mt-4">
                <button class="btn btn-sm btn-ghost text-primary">Baca Selengkapnya →</button>
              </div>
            </div>
          </div>

          <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all border-t-4 border-secondary">
            <div class="card-body">
              <div class="p-3 bg-orange-100 w-fit rounded-lg mb-2 text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h3 class="card-title">Resep Campuran</h3>
              <p>Panduan meracik jamu dan obat herbal dengan takaran yang tepat dan aman.</p>
              <div class="card-actions justify-end mt-4">
                <button class="btn btn-sm btn-ghost text-secondary">Lihat Resep →</button>
              </div>
            </div>
          </div>

          <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all border-t-4 border-accent">
            <div class="card-body">
              <div class="p-3 bg-blue-100 w-fit rounded-lg mb-2 text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h3 class="card-title">Jurnal Kegiatan</h3>
              <p>Dokumentasi kegiatan penanaman dan panen di kebun kami.</p>
              <div class="card-actions justify-end mt-4">
                <button class="btn btn-sm btn-ghost text-accent">Lihat Jurnal →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>