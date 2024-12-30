<script setup lang="ts">
const keyword = ref('')
</script>

<template>
  <header class="bg-white shadow-md">
    <div class="mx-auto flex items-center justify-between px-4 py-4 container">
      <div class="flex items-center">
        <span class="text-xl text-gray-800 font-bold">萍乡优达配送有限公司</span>
      </div>
      <nav>
        <ul class="flex items-center space-x-6">
          <!-- search -->
          <IconField>
            <InputIcon class="i-carbon-search" />
            <InputText v-model="keyword" size="small" placeholder="搜索产品" />
          </IconField>
          <li>
            <RouterLink to="/" active-class="text-gray-900" class="text-gray-600 hover:text-gray-900">
              首页
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/about" active-class="text-gray-900" class="text-gray-600 hover:text-gray-900">
              关于我们
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/products" active-class="text-gray-900" class="text-gray-600 hover:text-gray-900">
              产品
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" active-class="text-gray-900" class="text-gray-600 hover:text-gray-900">
              联系我们
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/login" active-class="text-gray-900" class="text-gray-600 hover:text-gray-900">
              登录
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
