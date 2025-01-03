<script setup lang="ts">
import type { Product } from '~/products'

const { product } = defineProps<{
  product: Product
}>()

function toTestReport() {
  window.open(product.testReport, '_blank')
}
</script>

<template>
  <div
    class="overflow-hidden rounded-lg bg-white pt-4 shadow"
  >
    <img :src="product.image" :alt="product.name" class="w-full object-cover">
    <div class="p-4">
      <h3 class="w-70 overflow-hidden text-ellipsis text-nowrap text-lg text-gray-900 font-medium">
        {{ product.name }}
      </h3>
      <p class="mt-1 text-sm text-gray-500">
        {{ product.category }}
      </p>
      <div class="mt-4 flex items-center justify-between">
        <span class="text-xl text-green-600 font-semibold">
          ¥{{ product.price.toFixed(2) }} / {{ product.unit }}
        </span>
        <Button @click="toTestReport">
          查看检测报告
        </Button>
      </div>
    </div>
  </div>
</template>
