<script setup lang="ts">
import type { Product } from '~/products'
import { ref } from 'vue'
import { products as _products } from '~/products'
import { Category } from '~/types'

const categories = ref([
  { id: Category.FRUITS, icon: '🥬' },
  { id: Category.MEAT, icon: '🍗' },
  { id: Category.SEAFOOD, icon: '🐟' },
  { id: Category.OIL, icon: '🌾' },
  { id: Category.MILK, icon: '🥛' },
])

const products = reactive<Product[]>(_products)

const selectedCategory = ref<Category | null>(null)

const filteredProducts = computed(() => {
  if (selectedCategory.value === null) {
    return products
  }
  return products.filter(product => product.category === selectedCategory.value)
})

function selectCategory(category: Category) {
  selectedCategory.value = category === selectedCategory.value ? null : category
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
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100',
              ]"
              @click="selectCategory(category.id)"
            >
              {{ category.icon }} {{ category.id }}
            </button>
          </div>
        </div>

        <!-- 产品列表 -->
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4">
          <ProductItem
            v-for="product in filteredProducts"
            :key="product.id"
            :product
          />
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
