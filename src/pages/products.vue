<script setup lang="ts">
import type { Product } from '~/types'
import { products } from '~/data/products'
import { Category, CategoryList } from '~/types'
// 视图模式
const viewMode = ref('grid') // 'grid' 或 'list'

const route = useRoute()

// 分页设置
const pagination = ref({
  first: 0,
  rows: 6,
  page: 0,
})

// 排序选项
const sortOptions = ref([
  { name: '默认排序', value: 'default' },
  { name: '价格从低到高', value: 'price-asc' },
  { name: '价格从高到低', value: 'price-desc' },
])

const keyword = useLocalStorage('keyword', '')

// 筛选条件
const filters = ref({
  search: keyword.value,
  selectedCategories: [route.query.category || Category.DumplingsAndBuns] as Category[],
  priceRange: [0, 500],
  sortBy: 'default',
})

watch(() => filters.value.search, (value) => {
  keyword.value = value
})

// 产品分类
const categories = ref<Category[]>([...CategoryList])

// 模拟产品数据
const allProducts = ref<Product[]>(products)

// 筛选后的产品
const filteredProducts = computed(() => {
  let result = [...allProducts.value]

  // 搜索筛选
  if (filters.value.search) {
    const searchLower = filters.value.search.toLowerCase()
    result = result.filter(product =>
      product.name.includes(searchLower),
    )
  }

  // 分类筛选
  if (filters.value.selectedCategories.length > 0) {
    result = result.filter(product =>
      filters.value.selectedCategories.includes(product.category),
    )
  }

  // 价格范围筛选
  result = result.filter(product =>
    product.price >= filters.value.priceRange[0]
    && product.price <= filters.value.priceRange[1],
  )

  // 排序
  if (filters.value.sortBy === 'price-asc') {
    result.sort((a, b) => a.price - b.price)
  }
  else if (filters.value.sortBy === 'price-desc') {
    result.sort((a, b) => b.price - a.price)
  }
  else if (filters.value.sortBy === 'sales') {
    // 这里假设我们有销量数据，但实际上我们没有，所以只是随机排序
    result.sort(() => Math.random() - 0.5)
  }

  return result
})

// 分页后的产品
const paginatedProducts = computed(() => {
  const start = pagination.value.first
  const end = pagination.value.first + pagination.value.rows
  return filteredProducts.value.slice(start, end)
})

// 分页变化处理
function onPageChange(event: any) {
  pagination.value.first = event.first
  pagination.value.rows = event.rows
  pagination.value.page = event.page
}

// 应用筛选
function applyFilters() {
  // 重置分页
  pagination.value.first = 0
  pagination.value.page = 0
}

// 重置筛选
function resetFilters() {
  filters.value = {
    search: '',
    selectedCategories: [],
    priceRange: [0, 500],
    sortBy: 'default',
  }
  // 重置分页
  pagination.value.first = 0
  pagination.value.page = 0
}

// 生命周期钩子
onMounted(() => {
  // 可以在这里加载产品数据
})
</script>

<template>
  <MainLayout>
    <main class="flex-grow">
      <!-- 页面标题 -->
      <section class="from-green-50 to-green-100 bg-gradient-to-r py-12">
        <div class="mx-auto px-4 text-center container">
          <h1 class="mb-4 text-4xl text-green-800 font-bold">
            产品中心
          </h1>
          <p class="mx-auto max-w-2xl text-gray-700">
            我们提供多种优质食品，满足您的各种需求。所有产品均经过严格筛选，确保品质与安全。
          </p>
        </div>
      </section>

      <!-- 产品筛选和列表 -->
      <section class="bg-white py-12">
        <div class="mx-auto px-4 container">
          <div class="flex flex-col gap-8 lg:flex-row">
            <!-- 筛选侧边栏 -->
            <div class="lg:w-1/4">
              <div class="sticky top-24 rounded-lg bg-gray-50 p-6 shadow-sm">
                <h2 class="mb-6 text-xl text-gray-800 font-bold">
                  产品筛选
                </h2>

                <div class="mb-6">
                  <h3 class="mb-2 text-sm text-gray-700 font-medium">
                    搜索
                  </h3>
                  <div class="relative">
                    <InputText
                      v-model.trim.lazy="filters.search"
                      placeholder="搜索产品..."
                      class="w-full pr-10"
                    />
                    <i class="pi pi-search absolute right-3 top-1/2 transform text-gray-400 -translate-y-1/2" />
                  </div>
                </div>

                <div class="mb-6">
                  <h3 class="mb-2 text-sm text-gray-700 font-medium">
                    产品分类
                  </h3>
                  <div class="space-y-2">
                    <div v-for="category in categories" :key="category" class="flex items-center">
                      <Checkbox
                        v-model="filters.selectedCategories"
                        :input-id="`category-${category}`"
                        :value="category"
                        class="mr-2"
                      />
                      <label :for="`category-${category}`" class="cursor-pointer text-gray-700">
                        {{ category }}
                      </label>
                    </div>
                  </div>
                </div>

                <div class="mb-6">
                  <h3 class="mb-2 text-sm text-gray-700 font-medium">
                    价格范围
                  </h3>
                  <div class="px-2">
                    <Slider
                      v-model="filters.priceRange"
                      range
                      :min="0"
                      :max="500"
                      class="mt-4"
                    />
                    <div class="mt-2 flex justify-between text-sm text-gray-600">
                      <span>¥{{ filters.priceRange[0] }}</span>
                      <span>¥{{ filters.priceRange[1] }}</span>
                    </div>
                  </div>
                </div>

                <div class="mb-6">
                  <h3 class="mb-2 text-sm text-gray-700 font-medium">
                    排序方式
                  </h3>
                  <Dropdown
                    v-model="filters.sortBy"
                    :options="sortOptions"
                    option-label="name"
                    option-value="value"
                    placeholder="选择排序方式"
                    class="w-full"
                  />
                </div>

                <div class="flex space-x-2">
                  <Button
                    label="应用筛选"
                    class="p-button-success flex-grow"
                    @click="applyFilters"
                  />
                  <Button
                    icon="pi pi-refresh"
                    class="p-button-success p-button-outlined"
                    aria-label="重置筛选"
                    @click="resetFilters"
                  />
                </div>
              </div>
            </div>

            <!-- 产品列表 -->
            <div class="lg:w-3/4">
              <!-- 排序和视图切换 -->
              <div class="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h2 class="text-xl text-gray-800 font-bold">
                    共找到 <span class="text-green-600">{{ filteredProducts.length }}</span> 个产品
                  </h2>
                </div>
                <div class="flex items-center space-x-4">
                  <span class="text-gray-700">视图：</span>
                  <div class="flex overflow-hidden border rounded">
                    <button
                      class="flex items-center justify-center p-2"
                      :class="viewMode === 'grid' ? 'bg-green-50 text-green-600' : 'bg-white text-gray-600'"
                      @click="viewMode = 'grid'"
                    >
                      <i class="pi pi-th-large" />
                    </button>
                    <button
                      class="flex items-center justify-center p-2"
                      :class="viewMode === 'list' ? 'bg-green-50 text-green-600' : 'bg-white text-gray-600'"
                      @click="viewMode = 'list'"
                    >
                      <i class="pi pi-list" />
                    </button>
                  </div>
                </div>
              </div>

              <div v-if="filteredProducts.length === 0" class="py-8 text-center">
                <p class="text-gray-600">
                  没有找到匹配的产品
                </p>
              </div>

              <!-- 网格视图 -->
              <div v-if="viewMode === 'grid'" class="grid grid-cols-1 gap-6 lg:grid-cols-3 sm:grid-cols-2">
                <div
                  v-for="product in paginatedProducts"
                  :key="product.id"
                  class="overflow-hidden border border-gray-200 rounded-lg bg-white shadow-sm transition-transform duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div class="relative">
                    <img :src="product.image" :alt="product.name" class="h-48 w-full object-cover">
                  </div>
                  <div class="p-4">
                    <div class="mb-2 flex items-start justify-between">
                      <h3 class="text-lg text-gray-800 font-semibold">
                        {{ product.name }}
                      </h3>
                      <Badge v-if="product.stockQuantity <= 10 && product.stockQuantity > 0" value="库存紧张" severity="warning" />
                      <Badge v-else-if="product.stockQuantity === 0" value="售罄" severity="danger" />
                    </div>
                    <p class="line-clamp-2 mb-3 text-gray-600">
                      {{ product.description }}
                    </p>
                    <div class="flex items-center justify-between">
                      <span class="text-green-600 font-bold">¥{{ product.price.toFixed(2) }}</span>
                      <!-- <Button
                        icon="pi pi-shopping-cart"
                        class="p-button-rounded p-button-success p-button-sm"
                        :disabled="product.stock === 0"
                        @click="addToCart(product)"
                      /> -->
                      <Button
                        label="查看详情"
                        class="p-button-success p-button-rounded p-button-sm"
                        @click="$router.push(`/details/${product.id}`)"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- 列表视图 -->
              <div v-else class="space-y-4">
                <div
                  v-for="product in paginatedProducts"
                  :key="product.id"
                  class="overflow-hidden border border-gray-200 rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <div class="flex flex-col sm:flex-row">
                    <div class="relative sm:w-1/4">
                      <img :src="product.image" :alt="product.name" class="h-48 w-full object-cover sm:h-full">
                    </div>
                    <div class="flex flex-col justify-between p-4 sm:w-3/4">
                      <div>
                        <div class="mb-2 flex items-start justify-between">
                          <h3 class="text-xl text-gray-800 font-semibold">
                            {{ product.name }}
                          </h3>
                          <Badge v-if="product.stockQuantity <= 10 && product.stockQuantity > 0" value="库存紧张" severity="warning" />
                          <Badge v-else-if="product.stockQuantity === 0" value="售罄" severity="danger" />
                        </div>
                        <p class="mb-4 text-gray-600">
                          {{ product.description }}
                        </p>
                        <div class="mb-4 flex flex-wrap gap-2">
                          <Chip
                            v-for="tag in product.tags"
                            :key="tag"
                            :label="tag"
                            class="border-green-100 bg-green-50 text-green-600"
                          />
                        </div>
                      </div>
                      <div class="flex items-center justify-between">
                        <span class="text-xl text-green-600 font-bold">¥{{ product.price.toFixed(2) }}</span>
                        <!-- <Button
                          label="加入购物车"
                          icon="pi pi-shopping-cart"
                          class="p-button-success"
                          :disabled="product.stock === 0"
                          @click="addToCart(product)"
                        /> -->
                        <Button
                          label="查看详情"
                          class="p-button-success p-button-sm"
                          @click="$router.push(`/details/${product.id}`)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 分页 -->
              <div class="mt-8 flex justify-center">
                <Paginator
                  v-model:first="pagination.first"
                  :rows="pagination.rows"
                  :total-records="filteredProducts.length"
                  :rows-per-page-options="[5, 10, 15]"
                  template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                  @page="onPageChange($event)"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </MainLayout>
</template>
