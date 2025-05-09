<script setup lang="ts">
import { products } from '~/data/products'
import { Category, type Product } from '~/types'

// 产品分类数据
const categories = ref([
  {
    name: '禽类制品',
    category: Category.PoultryProducts,
    description: '精选优质禽肉与禽蛋，营养丰富，口感鲜美，为健康饮食提供理想选择。',
    image: '/肉鸡.jpg',
  },
  {
    name: '肉类制品',
    category: Category.MeatProducts,
    description: '优选牛肉、猪肉等肉类食材，品质卓越，兼顾美味与营养，满足多样化需求。',
    image: '/meat.jpg',
  },
  {
    name: '海鲜鱼类',
    category: Category.Other,
    description: '新鲜鱼、虾、蟹等海鲜，精心加工，保留海洋原味，带来舌尖上的鲜美享受。',
    image: '/seafood.jpg',
  },
  {
    name: '早餐及其他',
    category: Category.Breakfast,
    description: '多样早餐食品及其他营养美食，方便快捷，为每一天注入活力与美味。',
    image: '/Sliced Apples and Coffee.jpg',
  },
])

// 公司优势数据
const advantages = ref([
  {
    title: '品质保证',
    description: '严格的质量控制体系，确保食品安全',
    icon: 'pi pi-check-circle',
  },
  {
    title: '价格优惠',
    description: '直接从源头采购，为您提供优惠价格',
    icon: 'pi pi-dollar',
  },
  {
    title: '快速配送',
    description: '高效的物流配送系统，确保及时送达',
    icon: 'pi pi-send',
  },
])

// 热销产品数据
const hotProducts = ref<Product[]>(products.filter(p => p.category === Category.Breakfast).slice(0, 7))

// 轮播图响应式配置
const carouselResponsiveOptions = ref([
  {
    breakpoint: '1024px',
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: '768px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '560px',
    numVisible: 1,
    numScroll: 1,
  },
])

// 客户评价数据
const testimonials = ref([
  {
    name: '张先生',
    title: '餐饮企业负责人',
    content: '洪星商贸的产品质量非常稳定，价格也很合理，是我们餐厅的长期合作伙伴。',
    avatar: '/avatar-1.svg',
  },
  {
    name: '李女士',
    title: '家庭主妇',
    content: '他们家的鸡排非常新鲜，孩子们都很喜欢。包装也很精美，送人很有面子。',
    avatar: '/avatar-2.svg',
  },
  {
    name: '王先生',
    title: '办公室白领',
    content: '网上下单很方便，配送也很快。产品种类丰富，能满足我们办公室的各种需求。',
    avatar: '/avatar-3.svg',
  },
])
</script>

<template>
  <MainLayout>
    <main class="flex-grow">
      <!-- 英雄区域 -->
      <section class="relative from-green-50 to-green-100 bg-gradient-to-r py-20">
        <div class="mx-auto px-4 container">
          <div class="flex flex-col items-center md:flex-row">
            <div class="mb-10 md:mb-0 md:w-1/2">
              <h2 class="mb-4 text-4xl text-green-800 font-bold md:text-5xl">
                优质食品，健康生活
              </h2>
              <p class="mb-8 text-lg text-gray-700">
                萍乡洪星商贸有限公司致力于为您提供安全、健康、美味的食品，让每一餐都充满幸福。
              </p>
              <div class="flex flex-col sm:flex-row space-y-3 sm:space-x-4 sm:space-y-0">
                <Button label="了解更多" class="p-button-success p-button-lg" @click="$router.push('/products')" />
                <Button label="联系我们" class="p-button-success p-button-lg p-button-outlined" @click="$router.push('/contact')" />
              </div>
            </div>
            <div class="md:w-1/2">
              <!-- <img src="/hero-food-image.svg" alt="优质食品展示" class="h-auto w-full rounded-lg shadow-lg"> -->
            </div>
          </div>
        </div>

        <!-- 装饰元素 -->
        <div class="absolute bottom-0 left-0 w-full overflow-hidden" style="height: 70px;">
          <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon class="fill-current text-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>

      <!-- 产品分类 -->
      <section class="bg-white py-16">
        <div class="mx-auto px-4 container">
          <div class="mb-12 text-center">
            <h2 class="mb-4 text-3xl text-gray-800 font-bold">
              产品分类
            </h2>
            <p class="mx-auto max-w-2xl text-gray-600">
              我们提供多种类型的优质食品，满足您不同的需求
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 lg:grid-cols-4 sm:grid-cols-2">
            <div v-for="(category, index) in categories" :key="index" class="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <img :src="category.image" :alt="category.name" class="h-48 w-full object-cover">
              <div class="p-5">
                <h3 class="mb-2 text-xl text-gray-800 font-semibold">
                  {{ category.name }}
                </h3>
                <p class="mb-4 text-gray-600">
                  {{ category.description }}
                </p>
                <Button label="查看详情" class="p-button-success p-button-text" icon="pi pi-arrow-right" icon-pos="right" aria-label="查看详情" @click="$router.push(`/products?category=${category.category}`)" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 公司优势 -->
      <section class="bg-gray-50 py-16">
        <div class="mx-auto px-4 container">
          <div class="mb-12 text-center">
            <h2 class="mb-4 text-3xl text-gray-800 font-bold">
              我们的优势
            </h2>
            <p class="mx-auto max-w-2xl text-gray-600">
              为什么选择萍乡洪星商贸有限公司
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div v-for="(advantage, index) in advantages" :key="index" class="rounded-lg bg-white p-6 text-center shadow-md">
              <div class="mx-auto mb-4 h-16 w-16 flex items-center justify-center rounded-full bg-green-100">
                <i :class="advantage.icon" style="font-size: 1.5rem;" class="text-green-600" />
              </div>
              <h3 class="mb-2 text-xl text-gray-800 font-semibold">
                {{ advantage.title }}
              </h3>
              <p class="text-gray-600">
                {{ advantage.description }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 热销产品 -->
      <section class="bg-white py-16">
        <div class="mx-auto px-4 container">
          <div class="mb-12 text-center">
            <h2 class="mb-4 text-3xl text-gray-800 font-bold">
              热销产品
            </h2>
            <p class="mx-auto max-w-2xl text-gray-600">
              精选优质食品，满足您的味蕾
            </p>
          </div>

          <Carousel :autoplay-interval="3000" :value="hotProducts" :num-visible="3" :num-scroll="1" :responsive-options="carouselResponsiveOptions" class="mb-8">
            <template #item="slotProps">
              <div class="p-4">
                <div class="overflow-hidden border border-gray-200 rounded-lg bg-white shadow-sm">
                  <img :src="slotProps.data.image" :alt="slotProps.data.name" class="h-48 w-full object-cover">
                  <div class="p-4">
                    <h3 class="mb-2 text-lg text-gray-800 font-semibold">
                      {{ slotProps.data.name }}
                    </h3>
                    <p class="line-clamp-2 mb-3 text-gray-600">
                      {{ slotProps.data.description }}
                    </p>
                    <div class="flex items-center justify-between">
                      <span class="text-green-600 font-bold">¥{{ slotProps.data.price }}</span>
                      <Button icon="pi pi-shopping-cart" class="p-button-success p-button-rounded p-button-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </Carousel>

          <div class="text-center">
            <Button label="查看全部产品" class="p-button-outlined p-button-success" @click="$router.push('/products')" />
          </div>
        </div>
      </section>

      <!-- 关于我们 -->
      <section class="from-green-50 to-green-100 bg-gradient-to-r py-16">
        <div class="mx-auto px-4 container">
          <div class="flex flex-col items-center md:flex-row">
            <div class="mb-10 h-96 overflow-hidden md:mb-0 md:w-1/2">
              <img object-cover src="/about-us-image.png" alt="关于萍乡洪星商贸" class="h-auto w-full rounded-lg shadow-lg">
            </div>
            <div class="md:w-1/2 md:pl-12">
              <h2 class="mb-4 text-3xl text-gray-800 font-bold">
                关于我们
              </h2>
              <p class="mb-6 text-gray-700">
                萍乡洪星商贸有限公司成立于2021年，是一家专注于食品销售的企业。多年来，我们始终坚持"质量第一，客户至上"的经营理念，致力于为消费者提供安全、健康、美味的食品。
              </p>
              <p class="mb-6 text-gray-700">
                我们拥有完善的供应链体系和严格的质量控制流程，确保每一件产品都符合国家食品安全标准。同时，我们不断创新，推出更多符合现代人健康需求的食品。
              </p>
              <Button label="了解更多" icon="pi pi-arrow-right" icon-pos="right" class="p-button-success" @click="$router.push('/about')" />
            </div>
          </div>
        </div>
      </section>

      <!-- 客户评价 -->
      <section class="bg-white py-16">
        <div class="mx-auto px-4 container">
          <div class="mb-12 text-center">
            <h2 class="mb-4 text-3xl text-gray-800 font-bold">
              客户评价
            </h2>
            <p class="mx-auto max-w-2xl text-gray-600">
              听听我们的客户怎么说
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div v-for="(testimonial, index) in testimonials" :key="index" class="rounded-lg bg-gray-50 p-6 shadow-sm">
              <div class="mb-4 flex items-center">
                <Rating :model-value="5" readonly :cancel="false" />
              </div>
              <p class="mb-4 text-gray-700 italic">
                {{ testimonial.content }}
              </p>
              <div class="flex items-center">
                <!-- <img :src="testimonial.avatar" :alt="testimonial.name" class="mr-4 h-12 w-12 rounded-full"> -->
                <div>
                  <h4 class="text-gray-800 font-semibold">
                    {{ testimonial.name }}
                  </h4>
                  <p class="text-sm text-gray-600">
                    {{ testimonial.title }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </MainLayout>
</template>
