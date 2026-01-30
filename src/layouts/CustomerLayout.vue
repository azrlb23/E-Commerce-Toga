<script setup>
import { RouterView } from 'vue-router'
import NavbarSection from '@/components/NavbarSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import ToastNotification from '@/components/ToastNotification.vue'
</script>

<template>
  <div class="min-h-screen w-full bg-white flex flex-col font-sans text-[#1F291F]">
    
    <NavbarSection />

    <main class="flex-grow w-full">
      
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>

    </main>

    <FooterSection />

    <ToastNotification />
    
  </div>
</template>

<style scoped>
/* Transisi Halaman Global */
.page-enter-active, .page-leave-active { transition: opacity 0.4s ease, transform 0.4s ease; }
.page-enter-from { opacity: 0; transform: translateY(10px); }
.page-leave-to { opacity: 0; transform: translateY(-10px); }
</style>