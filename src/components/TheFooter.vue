<script setup lang="ts">
import { Category } from '~/types'
</script>

<template>
  <!-- 页脚 -->
  <footer class="bg-gray-800 py-12 text-white">
    <div class="mx-auto px-4 container">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div>
          <h3 class="mb-4 text-xl font-bold">
            萍乡洪星商贸有限公司
          </h3>
          <p class="mb-4 text-gray-400">
            优质食品，健康生活
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="pi pi-facebook" />
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="pi pi-twitter" />
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="pi pi-instagram" />
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="pi pi-linkedin" />
            </a>
          </div>
        </div>

        <div>
          <h3 class="mb-4 text-lg font-semibold">
            快速链接
          </h3>
          <ul class="space-y-2">
            <li><a href="/" class="text-gray-400 hover:text-white">首页</a></li>
            <li><a href="/products" class="text-gray-400 hover:text-white">产品中心</a></li>
            <li><a href="/about" class="text-gray-400 hover:text-white">关于我们</a></li>
            <li><a href="/contact" class="text-gray-400 hover:text-white">联系我们</a></li>
          </ul>
        </div>

        <div>
          <h3 class="mb-4 text-lg font-semibold">
            产品分类
          </h3>
          <ul class="space-y-2">
            <li><a :href="`/products?category=${Category.PoultryProducts}`" class="text-gray-400 hover:text-white">禽类制品</a></li>
            <li><a :href="`/products?category=${Category.MeatProducts}`" class="text-gray-400 hover:text-white">肉类制品</a></li>
            <li><a :href="`/products?category=${Category.Breakfast}`" class="text-gray-400 hover:text-white">早餐</a></li>
            <li><a :href="`/products?category=${Category.Other}`" class="text-gray-400 hover:text-white">其他类</a></li>
          </ul>
        </div>

        <div>
          <h3 class="mb-4 text-lg font-semibold">
            联系我们
          </h3>
          <ul class="text-gray-400 space-y-2">
            <li class="flex items-start">
              <i class="pi pi-map-marker mr-2 mt-1" />
              <span>江西省萍乡市安源区城南农副产品批发大市场南门旁</span>
            </li>
            <li class="flex items-start">
              <i class="pi pi-phone mr-2 mt-1" />
              <span>18307994169</span>
            </li>
            <li class="flex items-start">
              <i class="pi pi-envelope mr-2 mt-1" />
              <span>contact@hongxing.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} 萍乡洪星商贸有限公司. 版权所有.</p>
      </div>
    </div>
  </footer>
</template>
