import { createRouter, createWebHistory } from 'vue-router'

// 1. Import Layouts
import CustomerLayout from '@/layouts/CustomerLayout.vue'
// import AdminLayout from '@/layouts/AdminLayout.vue' // Disimpan dulu untuk nanti

// 2. Import Views (Hanya HomeView yang diaktifkan)
import HomeView from '../views/HomeView.vue'

// View lainnya dikomentari dulu agar tidak error "File Not Found"
// import MenuView from '../views/MenuView.vue'
// import MenuDetailView from '../views/MenuDetailView.vue'
// import AdminDashboard from '@/views/admin/DashboardView.vue'
// import MenuManagementView from '@/views/admin/MenuManagementView.vue'
// import OrderManagementView from '@/views/admin/OrderManagementView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // --- RUTE PELANGGAN (Group Customer) ---
    {
      path: '/',
      component: CustomerLayout, // Layout utama (Navbar + Footer)
      children: [
        {
          path: '', // URL: / (Halaman Utama)
          name: 'home',
          component: HomeView,
        },
        // Rute Menu dinonaktifkan sementara
        /*
        {
          path: 'menu',
          name: 'menu',
          component: MenuView
        },
        {
          path: 'menu/:id',
          name: 'menu-detail',
          component: MenuDetailView
        },
        */
      ]
    },

    // --- RUTE ADMIN (Group Admin) ---
    // Dinonaktifkan sementara sampai folder views/admin dibuat
    /*
    {
      path: '/admin',
      component: AdminLayout,
      children: [
        { path: '', name: 'admin-dashboard', component: AdminDashboard },
        { path: 'menu', name: 'admin-menu', component: MenuManagementView },
        { path: 'orders', name: 'admin-orders', component: OrderManagementView }
      ]
    }
    */
  ],
  // Scroll behavior agar saat pindah halaman selalu mulai dari atas
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 0 }
    return { top: 0 }
  }
})

export default router