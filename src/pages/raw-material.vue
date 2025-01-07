<script setup>
import { ArrowRightIcon, SearchIcon } from 'lucide-vue-next'
import { rawMaterials } from '~/raw-materials'

const route = useRoute()

const filtered = computed(() => rawMaterials.filter(material => route.query.ids.includes(material.id)))
</script>

<template>
  <MainLayout>
    <div class="min-h-screen bg-gray-100 px-4 py-8 lg:px-8 sm:px-6">
      <div class="mx-auto max-w-7xl">
        <h1 class="mb-6 text-3xl text-gray-900 font-bold">
          {{ route.query.name }}原材料信息
        </h1>

        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 sm:grid-cols-2">
          <div
            v-for="material in filtered"
            :key="material.id"
            class="overflow-hidden rounded-lg bg-white shadow"
          >
            <div class="p-6">
              <div class="flex items-center">
                <div>
                  <h2 class="text-xl text-gray-900 font-semibold">
                    {{ material.name }}
                  </h2>
                  <p class="text-sm text-gray-500">
                    {{ material.category }}
                  </p>
                </div>
              </div>
              <div class="mt-4">
                <p class="text-gray-600">
                  {{ material.description }}
                </p>
              </div>
              <div class="mt-4">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                  <div class="sm:col-span-1">
                    <dt class="text-sm text-gray-500 font-medium">
                      产地
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ material.origin }}
                    </dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm text-gray-500 font-medium">
                      供应商
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ material.supplier }}
                    </dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm text-gray-500 font-medium">
                      库存
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ material.stock }} {{ material.unit }}
                    </dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm text-gray-500 font-medium">
                      价格
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      ¥{{ material.price.toFixed(2) }} / {{ material.unit }}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
