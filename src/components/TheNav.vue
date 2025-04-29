<script setup lang="ts">
// const keywordValue = inject<string>('keyword', '')

// const router = useRouter()
// const keyword = ref(keywordValue || '')

// function onSearch() {
//   const value = keyword.value.trim()
//   if (value) {
//     router.push(`/search?keyword=${value}`)
//   }
// }

// 移动端菜单状态
const menuVisible = ref(false)
</script>

<template>
  <!-- 导航栏 -->
  <header class="sticky top-0 z-50 bg-white shadow-md">
    <div class="mx-auto px-4 py-3 container">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <!-- <img src="/logo-placeholder.svg" alt="萍乡洪星商贸有限公司" class="mr-3 h-12"> -->
          <h1 class="text-2xl text-green-700 font-bold">
            <RouterLink to="/">
              萍乡洪星商贸有限公司
            </RouterLink>
          </h1>
        </div>

        <nav class="hidden items-center lg:flex space-x-8">
          <!-- <IconField>
            <InputIcon class="i-carbon-search" />
            <InputText v-model="keyword" size="small" placeholder="搜索产品..." @keydown.enter="onSearch" />
            <Button ml-2 size="small" @click="onSearch">
              搜索
            </Button>
          </IconField> -->
          <RouterLink to="/" active-class="text-green-600" class="font-medium hover:text-green-600">
            首页
          </RouterLink>
          <RouterLink to="/products" active-class="text-green-600" class="text-gray-600 font-medium hover:text-green-600">
            产品中心
          </RouterLink>
          <RouterLink to="/about" active-class="text-green-600" class="text-gray-600 font-medium hover:text-green-600">
            关于我们
          </RouterLink>
          <RouterLink to="/contact" active-class="text-green-600" class="text-gray-600 font-medium hover:text-green-600">
            联系我们
          </RouterLink>
          <RouterLink to="/login" active-class="text-green-600" class="text-gray-600 font-medium hover:text-green-600">
            登录
          </RouterLink>
        </nav>

        <Button
          icon="pi pi-bars"
          class="p-button-text p-button-rounded lg:hidden!"
          aria-label="菜单"
          @click="menuVisible = true"
        />
      </div>
    </div>
  </header>

  <!-- 移动端菜单 -->
  <Sidebar v-model:visible="menuVisible" position="right" class="lg:hidden!">
    <div class="p-4">
      <h2 class="mb-6 text-xl text-green-700 font-bold">
        萍乡洪星商贸有限公司
      </h2>
      <div class="flex flex-col space-y-4">
        <RouterLink to="/" active-class="text-green-600" class="border-b border-gray-100 py-2 font-medium hover:text-green-600">
          首页
        </RouterLink>
        <RouterLink to="/products" active-class="text-green-600" class="border-b border-gray-100 py-2 text-gray-600 font-medium hover:text-green-600">
          产品中心
        </RouterLink>
        <RouterLink to="/about" active-class="text-green-600" class="border-b border-gray-100 py-2 text-gray-600 font-medium hover:text-green-600">
          关于我们
        </RouterLink>
        <RouterLink to="/contact" active-class="text-green-600" class="py-2 text-gray-600 font-medium hover:text-green-600">
          联系我们
        </RouterLink>
        <RouterLink to="/login" active-class="text-green-600" class="border-b border-gray-100 py-2 text-gray-600 font-medium hover:text-green-600">
          登录
        </RouterLink>
      </div>
    </div>
  </Sidebar>
</template>
