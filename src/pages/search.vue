<script setup lang="ts">
import { products } from '~/products'

const route = useRoute()

const filteredProducts = computed(() => products.filter(product => product.name.includes(route.query.keyword as string)))

provide('keyword', route.query.keyword)
</script>

<template>
  <MainLayout>
    <div class="min-h-screen bg-gray-100">
      <main class="mx-auto max-w-7xl py-6 lg:px-8 sm:px-6">
        <div class="mb-8">
          <h2 class="mb-4 text-2xl text-gray-900 font-semibold">
            <span>以下是名称包含 “{{ route.query.keyword }}” 的采购产品</span>
          </h2>
        </div>
        <!-- 产品列表 -->
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4">
          <ProductItem
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
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
