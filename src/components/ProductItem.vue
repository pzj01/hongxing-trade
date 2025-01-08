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
    <img :src="product.image" :alt="product.name" class="aspect-square w-full">
    <div class="p-4">
      <h3 class="w-60 overflow-hidden text-ellipsis text-nowrap text-lg text-gray-900 font-medium">
        {{ product.name }}
      </h3>
      <p class="mt-1 text-sm text-gray-500">
        {{ product.category }}
      </p>
      <p class="line-clamp-3 mt-2 text-sm text-gray-700">
        {{ product.desc }}
      </p>
      <p class="mt-2 text-sm text-gray-700">
        原产地：江西
      </p>
      <p class="mt-2 text-sm text-gray-700">
        生产日期：2024年12月1日
      </p>
      <div class="mt-4 flex items-center justify-between">
        <span class="text-xl text-green-600 font-semibold">
          ¥{{ product.price.toFixed(2) }} / {{ product.unit }}
        </span>
        <Button @click="toTestReport">
          查看检测报告
        </Button>
      </div>
      <div mt-4 space-y-2>
        <Button fluid variant="outlined" severity="secondary" @click="product.raw_material_path && $router.push(product.raw_material_path)">
          原材料信息
        </Button>
        <Button fluid variant="outlined" severity="secondary" @click="product.production_process_path && $router.push(product.production_process_path)">
          生产过程
        </Button>
      </div>
    </div>
  </div>
</template>
