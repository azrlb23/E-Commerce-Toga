<script setup>
// HAPUS import NavbarSection dan FooterSection dari sini
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import LogbookSection from '@/components/LogbookSection.vue'
import ProductSection from '@/components/ProductSection.vue'
</script>

<template>
  <main class="min-h-screen bg-base-100">
    <HeroSection />
    <AboutSection />
    <LogbookSection />
    <ProductSection />
  </main>

  </template>