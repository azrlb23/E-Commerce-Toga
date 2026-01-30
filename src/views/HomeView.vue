<script setup>
// 1. HAPUS import NavbarSection & FooterSection agar tidak ganda
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import LogbookSection from '@/components/LogbookSection.vue'
import ProductSection from '@/components/ProductSection.vue'

// Catatan: Navbar dan Footer sudah diurus otomatis oleh src/layouts/CustomerLayout.vue
</script>

<template>
  <div class="bg-base-100 font-sans">
    
    <HeroSection />

    <AboutSection /> 

    <LogbookSection />

    <ProductSection />
    
  </div>

  </template>