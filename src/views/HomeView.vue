<script setup>
import HeroSection from '@/components/HeroSection.vue'
import CategorySection from '@/components/CategorySection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ProductSection from '@/components/ProductSection.vue'
import TestimonialSection from '@/components/TestimonialSection.vue'
import LogbookSection from '@/components/LogbookSection.vue'
import FaqSection from '@/components/FaqSection.vue'
import CtaSection from '@/components/CtaSection.vue'

// Catatan: Navbar dan Footer sudah diurus otomatis oleh src/layouts/CustomerLayout.vue
</script>

<template>
  <div class="bg-base-100 font-sans">
    
    <HeroSection />

    <CategorySection />

    <AboutSection /> 

    <ProductSection />

    <TestimonialSection />

    <LogbookSection />

    <FaqSection />

    <CtaSection />
    
  </div>

</template>