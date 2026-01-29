import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// Import gambar dummy agar data awal tidak kosong
import noodlesImg from '@/assets/Noodles.png'
import kebabImg from '@/assets/Kebab.png'
import toastImg from '@/assets/Toast.png'
import squashImg from '@/assets/Squash.png'
import nonCoffeeImg from '@/assets/Non-Coffee.png'

export const useMenuStore = defineStore('menu', () => {
  // State: Data Menu (Simulasi Database)
  const items = ref([
    { 
      id: 1, 
      name: 'Spicy Noodles', 
      price: 15000, 
      category: 'FOOD', 
      type: 'NOODLES', 
      img: noodlesImg, 
      status: 'Tersedia',
      // DATA TAMBAHAN UNTUK DETAIL PAGE
      description: 'Mie goreng pedas dengan bumbu rahasia YUMMIX, dilengkapi pangsit goreng renyah dan daging cincang gurih. Level pedas bisa disesuaikan!',
      calories: '450 kkal',
      rating: 4.8
    },
    { 
      id: 2, 
      name: 'Beef Kebab', 
      price: 20000, 
      category: 'FOOD', 
      type: 'KEBAB', 
      img: kebabImg, 
      status: 'Tersedia',
      description: 'Tortilla lembut membungkus daging sapi panggang premium, sayuran segar, dan saus mayones spesial. Pilihan tepat untuk pengganjal lapar.',
      calories: '320 kkal',
      rating: 4.9
    },
    { id: 3, name: 'Choco Toast', price: 12000, category: 'FOOD', type: 'TOAST', img: toastImg, status: 'Habis' },
    { id: 4, name: 'Lemon Squash', price: 10000, category: 'DRINKS', type: 'SQUASH', img: squashImg, status: 'Tersedia' },
    { id: 5, name: 'Taro Milk', price: 15000, category: 'DRINKS', type: 'NON-COFFEE', img: nonCoffeeImg, status: 'Tersedia' },
  ])

  // Actions (Fungsi Admin)
  
  // 1. Tambah Menu Baru
  function addMenu(newItem) {
    // Simulasi ID auto increment
    const newId = items.value.length > 0 ? Math.max(...items.value.map(i => i.id)) + 1 : 1
    items.value.push({ ...newItem, id: newId })
  }

  // 2. Edit Menu
  function updateMenu(updatedItem) {
    const index = items.value.findIndex(i => i.id === updatedItem.id)
    if (index !== -1) {
      items.value[index] = updatedItem
    }
  }

  // 3. Hapus Menu
  function deleteMenu(id) {
    items.value = items.value.filter(i => i.id !== id)
  }

  function getItemById(id) {
    return items.value.find(i => i.id === parseInt(id))
  }

  // Helper: Format Rupiah
  function formatPrice(value) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(value)
  }

  return { items, addMenu, updateMenu, deleteMenu, formatPrice, getItemById }
})