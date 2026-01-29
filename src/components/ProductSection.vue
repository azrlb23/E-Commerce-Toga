<template>
  <section id="shop" class="py-16 container mx-auto px-4">
      <div class="flex justify-between items-end mb-8">
        <div>
          <h2 class="text-3xl font-bold text-gray-800">Produk Unggulan</h2>
          <p class="text-gray-500">Tanaman dan produk olahan terbaik bulan ini.</p>
        </div>
        <button class="btn btn-outline">Lihat Semua</button>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div class="card bg-base-100 shadow-sm hover:shadow-lg transition-all border border-gray-100">
          <figure class="px-4 pt-4">
            <img src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&auto=format&fit=crop" alt="Jahe Merah" class="rounded-xl h-40 w-full object-cover" />
          </figure>
          <div class="card-body p-4 items-center text-center">
            <h2 class="card-title text-base">Bibit Jahe Merah</h2>
            <p class="text-primary font-bold">Rp 15.000</p>
            <div class="card-actions">
              <button class="btn btn-sm btn-primary text-white rounded-full">Beli</button>
            </div>
          </div>
        </div>
        
        <div class="card bg-base-100 shadow-sm hover:shadow-lg transition-all border border-gray-100">
          <figure class="px-4 pt-4">
            <img src="https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=500&auto=format&fit=crop" alt="Kunyit" class="rounded-xl h-40 w-full object-cover" />
          </figure>
          <div class="card-body p-4 items-center text-center">
            <h2 class="card-title text-base">Simplisia Kunyit</h2>
            <p class="text-primary font-bold">Rp 25.000</p>
            <div class="card-actions">
              <button class="btn btn-sm btn-primary text-white rounded-full">Beli</button>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>