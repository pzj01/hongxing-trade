<script setup>
import { ref } from 'vue'

const products = ref(['有机蔬菜', '新鲜水果', '全麦面包'])
const services = ref([
  {
    name: '新鲜配送',
    desc: '当天采购，当天配送，确保食材的新鲜与品质。',
  },
  {
    name: '多品类供应',
    desc: '从主食到生鲜，从调味品到油脂，一应俱全，满足多元化需求。',
  },
  {
    name: '定制化方案',
    desc: '为餐厅、企事业单位提供定制的配送服务，灵活调整配送频率与品类。',
  },
  {
    name: '全程冷链',
    desc: '采用冷链运输技术，保障食品品质不受环境影响。',
  },
])

// 添加公司优势
const advantages = ref([
  { title: '专注食品配送', desc: '多年的行业经验，深耕食品配送领域，了解客户需求。' },
  { title: '覆盖广泛', desc: '萍乡及周边区域全覆盖，无论城市还是乡村，都能高效送达。' },
  { title: '安全可靠', desc: '从采购到配送，全流程严格管控，保证食品安全。' },
  { title: '客户为本', desc: '始终以客户为中心，提供灵活、高效的个性化服务。' },
])

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
            让健康食材快速到家，为您的餐桌保驾护航
          </h1>
          <p class="mb-8 text-xl">
            优达配送有限公司致力于为您提供健康美味的食材，让您的餐桌上的食物更加美味。
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
            萍乡优达食品配送有限公司是一家专业从事食品配送的企业，专注于为客户提供安全、优质、快捷的配送服务。我们主营各类食品配送，包括大米、鱼类、鸡鸭、食用油等日常所需食材，致力于打造一站式食品供应链服务。无论是餐饮企业、商超还是社区用户，我们都能满足您的需求。
          </p>
        </div>
      </section>

      <!-- Services Section -->
      <section text-black class="py-16">
        <div class="mx-auto px-4 container">
          <h2 class="mb-8 text-center text-3xl font-bold">
            我们的服务
          </h2>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div v-for="service in services" :key="service.name" class="overflow-hidden rounded-lg bg-white shadow-md">
              <div class="p-4">
                <img src="https://g-b5z0x2cbbqj.vusercontent.net/placeholder.svg?height=200&width=300&text=${encodeURIComponent(product)}" :alt="product" class="mb-4 h-48 w-full rounded-md object-cover">
                <h3 class="mb-2 text-xl font-semibold">
                  {{ service.name }}
                </h3>
                <p>{{ service.desc }}</p>
              </div>
            </div>
          </div>
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

      <section text-black class="bg-gray-100 py-16">
        <div class="mx-auto px-4 container">
          <h2 class="mb-8 text-center text-3xl font-bold">
            公司优势
          </h2>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div v-for="advantage in advantages" :key="advantage.title" class="rounded-lg bg-white p-6 shadow-md">
              <h3 class="text-lg font-semibold">
                {{ advantage.title }}
              </h3>
              <p class="mt-2">
                {{ advantage.desc }}
              </p>
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
