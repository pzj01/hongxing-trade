<script setup lang="ts">
import { format } from 'date-fns'
import { zhCN } from 'date-fns/locale'

const keywordValue = inject<string>('keyword', '')

const router = useRouter()
const keyword = ref(keywordValue || '')

function onSearch() {
  const value = keyword.value.trim()
  if (value) {
    if (value.includes('大米')) {
      router.push('/rice')
    }
    else if (value.includes('猪肉')) {
      router.push('/pork')
    }
    else if (value.includes('基围虾')) {
      router.push('/shrimp')
    }
    else if (value.includes('福禄花鲜香压榨菜籽油')) {
      router.push('/oil')
    }
    else if (value.includes('鸡肉')) {
      router.push('/chicken')
    }
    else if (value.includes('鲈鱼')) {
      router.push('/fish')
    }
    else {
      router.push(`/search?keyword=${value}`)
    }
  }
}
</script>

<template>
  <div bg-green-600 px-32 py-1 text-white>
    <span>欢迎来到萍乡优达配送官网！今天是：{{ format(new Date(), 'yyyy年MM月dd日 EEEE', { locale: zhCN }) }}</span>
  </div>
  <header class="main-header bg-white shadow-md">
    <div class="mx-auto flex items-center justify-between px-4 py-4 container">
      <div class="flex items-center">
        <a class="text-xl text-gray-800 font-bold" href="/">萍乡优达配送有限公司</a>
      </div>
      <nav>
        <ul class="flex items-center space-x-6">
          <!-- search -->
          <IconField>
            <InputIcon class="i-carbon-search" />
            <InputText v-model="keyword" size="small" placeholder="搜索产品..." @keydown.enter="onSearch" />
            <Button ml-2 size="small" @click="onSearch">
              搜索
            </Button>
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
