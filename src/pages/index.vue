<script setup>
import { ref } from 'vue'

const products = ref(['有机蔬菜', '新鲜水果', '全麦面包'])

const testimonials = ref([
  { name: '张女士', comment: '产品新鲜可口，服务态度很好，非常满意！' },
  { name: '李先生', comment: '质量有保证，吃得放心，会继续购买的。' },
  { name: '王女士', comment: '服务很好，产品也很好，非常满意！' },
])
</script>

<template>
  <MainLayout>
    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <section class="relative h-[70vh] flex items-center justify-center text-white">
        <img src="https://g-b5z0x2cbbqj.vusercontent.net/placeholder.svg?height=1080&width=1920" alt="Fresh ingredients" class="absolute inset-0 h-full w-full object-cover">
        <div class="absolute inset-0 bg-black bg-opacity-50" />
        <div class="z-10 text-center">
          <h1 class="mb-4 text-5xl font-bold">
            美味与健康的完美结合
          </h1>
          <p class="mb-8 text-xl">
            我们用心制作每一道美食，为您带来舌尖上的享受
          </p>
          <button class="rounded-full bg-white px-6 py-3 text-black font-semibold transition duration-300 hover:bg-gray-200">
            了解更多
          </button>
        </div>
      </section>

      <!-- About Us Section -->
      <section text-black class="bg-gray-100 py-16">
        <div class="mx-auto px-4 container">
          <h2 class="mb-8 text-center text-3xl font-bold">
            关于我们
          </h2>
          <p class="mx-auto max-w-2xl text-center">
            我们是一家致力于为消费者提供高品质、健康美味食品的公司。
            自成立以来，我们始终坚持使用最新鲜的原料，采用传统工艺与现代技术相结合的方式，
            为您呈现最美味、最健康的食品。
          </p>
        </div>
      </section>

      <!-- Products Section -->
      <section text-black class="py-16">
        <div class="mx-auto px-4 container">
          <h2 class="mb-8 text-center text-3xl font-bold">
            我们的产品
          </h2>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div v-for="product in products" :key="product" class="overflow-hidden rounded-lg bg-white shadow-md">
              <div class="p-4">
                <img src="https://g-b5z0x2cbbqj.vusercontent.net/placeholder.svg?height=200&width=300&text=${encodeURIComponent(product)}" :alt="product" class="mb-4 h-48 w-full rounded-md object-cover">
                <h3 class="mb-2 text-xl font-semibold">
                  {{ product }}
                </h3>
                <p>优质{{ product }}，为您的健康保驾护航。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section text-black class="bg-gray-100 py-16">
        <div class="mx-auto px-4 container">
          <h2 class="mb-8 text-center text-3xl font-bold">
            客户评价
          </h2>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div v-for="(testimonial, index) in testimonials" :key="index" class="rounded-lg bg-white p-6 shadow-md">
              <p class="mb-4">
                "{{ testimonial.comment }}"
              </p>
              <p class="font-semibold">
                - {{ testimonial.name }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Us Section -->
      <section class="py-16">
        <div class="mx-auto px-4 text-center container">
          <h2 class="mb-8 text-3xl font-bold">
            联系我们
          </h2>
          <p class="mb-4">
            如果您有任何问题或建议，请随时与我们联系
          </p>
          <button class="rounded-full bg-black px-6 py-3 text-white font-semibold transition duration-300 hover:bg-gray-800">
            联系我们
          </button>
        </div>
      </section>
    </main>
  </MainLayout>
</template>
