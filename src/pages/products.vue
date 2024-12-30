<script setup lang="ts">
import { ref } from 'vue'

const categories = ref([
  { id: 1, name: '新鲜蔬果', icon: '🥬' },
  { id: 2, name: '肉禽蛋品', icon: '🍗' },
  { id: 3, name: '海鲜水产', icon: '🐟' },
  { id: 4, name: '粮油调味', icon: '🌾' },
  { id: 5, name: '乳制品', icon: '🥛' },
])

const products = ref([
  { id: 1, name: '有机生菜', category: 1, price: 5.99, unit: '份', image: 'https://g-b5z0x2cbbqj.vusercontent.net/placeholder.svg?height=300&width=300&text=有机生菜' },
  { id: 2, name: '新鲜番茄', category: 1, price: 3.99, unit: '斤', image: 'https://g-b5z0x2cbbqj.vusercontent.net/placeholder.svg?height=300&width=300&text=新鲜番茄' },
  { id: 3, name: '精选苹果', category: 1, price: 6.99, unit: '斤', image: 'https://g-b5z0x2cbbqj.vusercontent.net/placeholder.svg?height=300&width=300&text=精选苹果' },
  { id: 4, name: '去骨鸡胸', category: 2, price: 15.99, unit: '斤', image: 'https://g-b5z0x2cbbqj.vusercontent.net/placeholder.svg?height=300&width=300&text=去骨鸡胸' },
  { id: 5, name: '新鲜猪里脊', category: 2, price: 22.99, unit: '斤', image: 'https://g-b5z0x2cbbqj.vusercontent.net/placeholder.svg?height=300&width=300&text=新鲜猪里脊' },
  { id: 6, name: '散养土鸡蛋', category: 2, price: 18.99, unit: '盒', image: 'https://g-b5z0x2cbbqj.vusercontent.net/placeholder.svg?height=300&width=300&text=散养土鸡蛋' },
  { id: 7, name: '三文鱼片', category: 3, price: 39.99, unit: '份', image: 'https://g-b5z0x2cbbqj.vusercontent.net/placeholder.svg?height=300&width=300&text=三文鱼片' },
  { id: 8, name: '鲜活大虾', category: 3, price: 59.99, unit: '斤', image: 'https://g-b5z0x2cbbqj.vusercontent.net/placeholder.svg?height=300&width=300&text=鲜活大虾' },
  { id: 9, name: '东北大米', category: 4, price: 39.99, unit: '袋', image: 'https://g-b5z0x2cbbqj.vusercontent.net/placeholder.svg?height=300&width=300&text=东北大米' },
  { id: 10, name: '特级橄榄油', category: 4, price: 89.99, unit: '瓶', image: 'https://g-b5z0x2cbbqj.vusercontent.net/placeholder.svg?height=300&width=300&text=特级橄榄油' },
  { id: 11, name: '有机纯牛奶', category: 5, price: 29.99, unit: '箱', image: 'https://g-b5z0x2cbbqj.vusercontent.net/placeholder.svg?height=300&width=300&text=有机纯牛奶' },
  { id: 12, name: '希腊酸奶', category: 5, price: 12.99, unit: '盒', image: 'https://g-b5z0x2cbbqj.vusercontent.net/placeholder.svg?height=300&width=300&text=希腊酸奶' },
])

const selectedCategory = ref(null)

const filteredProducts = computed(() => {
  if (selectedCategory.value === null) {
    return products.value
  }
  return products.value.filter(product => product.category === selectedCategory.value)
})

function selectCategory(categoryId: number) {
  selectedCategory.value = categoryId === selectedCategory.value ? null : categoryId
}
</script>

<template>
  <MainLayout>
    <div class="min-h-screen bg-gray-100">
      <main class="mx-auto max-w-7xl py-6 lg:px-8 sm:px-6">
        <!-- 产品分类 -->
        <div class="mb-8">
          <h2 class="mb-4 text-2xl text-gray-900 font-semibold">
            产品分类
          </h2>
          <div class="flex flex-wrap gap-4">
            <button
              v-for="category in categories"
              :key="category.id"
              class="rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ease-in-out"
              :class="[
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100',
              ]"
              @click="selectCategory(category.id)"
            >
              {{ category.icon }} {{ category.name }}
            </button>
          </div>
        </div>

        <!-- 产品列表 -->
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4">
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="overflow-hidden rounded-lg bg-white shadow"
          >
            <img :src="product.image" :alt="product.name" class="h-48 w-full object-cover">
            <div class="p-4">
              <h3 class="text-lg text-gray-900 font-medium">
                {{ product.name }}
              </h3>
              <p class="mt-1 text-sm text-gray-500">
                {{ categories.find(c => c.id === product.category).name }}
              </p>
              <div class="mt-4 flex items-center justify-between">
                <span class="text-xl text-blue-600 font-semibold">
                  ¥{{ product.price.toFixed(2) }} / {{ product.unit }}
                </span>
                <button
                  class="border border-transparent rounded-md bg-blue-600 px-4 py-2 text-sm text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  加入购物车
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 无产品提示 -->
        <div v-if="filteredProducts.length === 0" class="py-12 text-center">
          <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
          <h3 class="mt-2 text-sm text-gray-900 font-medium">
            暂无产品
          </h3>
          <p class="mt-1 text-sm text-gray-500">
            该分类下暂时没有可用的产品。
          </p>
        </div>
      </main>
    </div>
  </MainLayout>
</template>
