<script setup>
import useVuelidate from '@vuelidate/core'
import { minLength, required } from '@vuelidate/validators'
import { products } from '~/data/products'

const { params } = useRoute()

// 模拟产品数据
const product = ref(products.find(product => product.id === +params.id))

// 用户反馈表单
const feedbackForm = ref({
  name: '',
  contact: '',
  type: null,
  message: '',
  privacy: false,
})

const feedbackTypes = ref([
  { name: '产品建议', code: 'suggestion' },
  { name: '质量问题', code: 'quality' },
  { name: '售后服务', code: 'service' },
  { name: '其他', code: 'other' },
])

const rules = computed(() => ({
  name: { required },
  contact: { required },
  type: { required },
  message: { required, minLength: minLength(10) },
  privacy: { required },
}))

const v$ = useVuelidate(rules, feedbackForm)
const submitting = ref(false)
const showSuccessDialog = ref(false)

async function submitFeedback() {
  const result = await v$.value.$validate()
  if (!result) {
    return
  }

  submitting.value = true
  setTimeout(() => {
    submitting.value = false
    showSuccessDialog.value = true
    feedbackForm.value = {
      name: '',
      contact: '',
      type: null,
      message: '',
      privacy: false,
    }
    v$.value.$reset()
  }, 1500)
}

// 生命周期钩子
onMounted(() => {
  // 可以在这里加载产品数据
  // 例如从API获取产品详情
})

function openTestReport(product) {
  window.open(product.testReport, '_blank')
}
</script>

<template>
  <MainLayout>
    <div class="product-detail">
      <!-- 产品基本信息 -->
      <section class="bg-white py-8 md:py-12">
        <div class="mx-auto px-4 container">
          <Button class="mb-4!" label="返回" icon="pi pi-arrow-left" @click="$router.back()" />
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            <!-- 产品图片 -->
            <div class="product-images">
              <div class="relative mb-4 overflow-hidden rounded-lg bg-gray-50">
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="aspect-square h-auto w-full object-contain"
                >
                <span
                  v-if="isNewProduct"
                  class="absolute left-4 top-4 rounded bg-green-500 px-2 py-1 text-xs text-white font-bold"
                >
                  新品
                </span>
              </div>
            </div>

            <!-- 产品信息 -->
            <div class="product-info">
              <h1 class="mb-4 text-2xl text-gray-800 font-bold md:text-3xl">
                {{ product.name }}
              </h1>

              <div class="mb-4 flex items-center gap-2">
                <span class="text-sm text-gray-500">品牌:</span>
                <span class="text-sm text-gray-700 font-medium">{{ product.brand }}</span>
                <Divider layout="vertical" class="mx-2" />
                <span class="text-sm text-gray-500">产地:</span>
                <span class="text-sm text-gray-700 font-medium">{{ product.origin }}</span>
              </div>

              <div class="mb-4">
                <p class="text-gray-600">
                  {{ product.description }}
                </p>
              </div>

              <div class="mb-4 flex flex-wrap gap-2">
                <Chip
                  v-for="tag in product.tags"
                  :key="tag"
                  :label="tag"
                  class="border-green-100 bg-green-50 text-green-600"
                />
              </div>

              <Divider />

              <div class="mb-4">
                <div class="text-sm text-gray-700">
                  <div class="mb-2 flex items-center gap-2">
                    <i class="pi pi-box text-green-600" />
                    <span>规格: {{ product.weight }} {{ product.weightUnit }}/{{ product.unit }}</span>
                  </div>
                  <div class="mb-2 flex items-center gap-2">
                    <i class="pi pi-calendar text-green-600" />
                    <span>保质期: {{ product.shelfLife }}</span>
                  </div>
                  <div class="mb-2 flex items-center gap-2">
                    <i class="pi pi-tag text-green-600" />
                    <span>商品编码: {{ product.sku }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <i class="pi pi-map-marker text-green-600" />
                    <span>原产地: {{ product.origin }}</span>
                  </div>
                </div>
              </div>

              <!-- 认证信息 -->
              <div class="mb-6">
                <h3 class="mb-3 text-lg text-gray-800 font-semibold">
                  产品认证
                </h3>
                <div class="flex flex-wrap gap-3">
                  <div
                    v-for="(cert, index) in product.certifications"
                    :key="index"
                    class="flex flex-col items-center border rounded-lg p-3"
                  >
                    <!-- <img
                    src="/certificate-placeholder.svg"
                    alt="认证图标"
                    class="mb-2 h-12 w-12"
                  > -->
                    <span class="text-sm text-gray-700 font-medium">{{ cert }}</span>
                  </div>
                </div>
              </div>

              <!-- 产品特点 -->
              <div class="rounded-lg bg-gray-50 p-4">
                <h3 class="mb-3 text-lg text-gray-800 font-semibold">
                  产品特点
                </h3>
                <ul class="space-y-2">
                  <li class="flex items-start gap-2">
                    <i class="pi pi-check-circle mt-0.5 text-green-500" />
                    <span class="text-sm text-gray-600">精选优质原材料，品质保证</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="pi pi-check-circle mt-0.5 text-green-500" />
                    <span class="text-sm text-gray-600">传统工艺结合现代技术，保留原有营养</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="pi pi-check-circle mt-0.5 text-green-500" />
                    <span class="text-sm text-gray-600">严格质量控制，安全可靠</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="pi pi-check-circle mt-0.5 text-green-500" />
                    <span class="text-sm text-gray-600">多种认证，符合国家食品安全标准</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 产品详情选项卡 -->
      <section class="bg-gray-50 py-8 md:py-12">
        <div class="mx-auto px-4 container">
          <TabView>
            <TabPanel header="产品详情">
              <div class="rounded-lg bg-white p-6 shadow-sm">
                <div class="rich-text space-y-6">
                  <h2 class="mb-4 text-xl text-gray-800 font-bold">
                    产品详情
                  </h2>

                  <div class="mb-6">
                    <h3 class="mb-3 text-lg text-gray-800 font-semibold">
                      产品介绍
                    </h3>
                    <p class="text-gray-700">
                      {{ product.description }}
                    </p>
                  </div>

                  <div class="mb-6">
                    <h3 class="mb-3 text-lg text-gray-800 font-semibold">
                      原料
                    </h3>
                    <p class="text-gray-700">
                      {{ product.rawMaterials.map(r => r.name).join('、') }}
                    </p>
                  </div>

                  <div class="mb-6">
                    <h3 class="mb-3 text-lg text-gray-800 font-semibold">
                      烹饪小贴士
                    </h3>
                    <ul class="list-disc pl-5 space-y-2">
                      <li v-for="(tip, index) in product.cookingTips" :key="index" class="text-gray-700">
                        {{ tip }}
                      </li>
                    </ul>
                  </div>

                  <!-- 产品图片展示 -->
                  <!-- <div class="grid grid-cols-1 my-8 gap-4 md:grid-cols-2">
                  <img
                    src="/placeholder.svg"
                    alt="产品展示图"
                    class="h-auto w-full rounded-lg"
                  >
                  <img
                    src="/placeholder.svg"
                    alt="产品展示图"
                    class="h-auto w-full rounded-lg"
                  >
                  </div> -->
                </div>
              </div>
            </TabPanel>

            <TabPanel header="材料信息">
              <div class="rounded-lg bg-white p-6 shadow-sm">
                <h2 class="mb-4 text-xl text-gray-800 font-bold">
                  材料信息
                </h2>

                <div class="mb-8">
                  <h3 class="mb-3 text-lg text-gray-800 font-semibold">
                    原材料来源
                  </h3>

                  <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div v-for="{ origin, description, name } of product.rawMaterials" :key="name" class="rounded-lg bg-gray-50 p-4">
                      <h4 class="mb-2 text-gray-800 font-medium">
                        {{ origin }}
                      </h4>
                      <p class="text-gray-600">
                        {{ description }}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="mb-8">
                  <h3 class="mb-3 text-lg text-gray-800 font-semibold">
                    原材料成分
                  </h3>
                  <div class="overflow-x-auto">
                    <table class="min-w-full border-collapse">
                      <thead>
                        <tr class="bg-gray-100">
                          <th class="px-4 py-3 text-left text-gray-700 font-semibold">
                            成分名称
                          </th>
                          <th class="px-4 py-3 text-left text-gray-700 font-semibold">
                            来源
                          </th>
                          <th class="px-4 py-3 text-left text-gray-700 font-semibold">
                            功能
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="{ name, origin, function: f } of product.rawMaterials.map(r => r.ingredient)" :key="name" class="border-b">
                          <td class="px-4 py-3 text-gray-700">
                            {{ name }}
                          </td>
                          <td class="px-4 py-3 text-gray-700">
                            {{ origin }}
                          </td>
                          <td class="px-4 py-3 text-gray-700">
                            {{ f }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 class="mb-3 text-lg text-gray-800 font-semibold">
                    不含成分
                  </h3>
                  <div class="grid grid-cols-2 gap-3 md:grid-cols-4 sm:grid-cols-3">
                    <div class="flex items-center gap-2 rounded-lg bg-red-50 p-2">
                      <i class="pi pi-times-circle text-red-500" />
                      <span class="text-sm text-gray-700">人工色素</span>
                    </div>
                    <div class="flex items-center gap-2 rounded-lg bg-red-50 p-2">
                      <i class="pi pi-times-circle text-red-500" />
                      <span class="text-sm text-gray-700">人工香精</span>
                    </div>
                    <div class="flex items-center gap-2 rounded-lg bg-red-50 p-2">
                      <i class="pi pi-times-circle text-red-500" />
                      <span class="text-sm text-gray-700">防腐剂</span>
                    </div>
                    <div class="flex items-center gap-2 rounded-lg bg-red-50 p-2">
                      <i class="pi pi-times-circle text-red-500" />
                      <span class="text-sm text-gray-700">转基因成分</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel header="生产过程">
              <div class="rounded-lg bg-white p-6 shadow-sm">
                <h2 class="mb-6 text-xl text-gray-800 font-bold">
                  生产过程
                </h2>

                <div class="mb-8">
                  <div class="relative">
                    <!-- 生产流程图 -->
                    <div class="production-flow">
                      <div class="flow-timeline">
                        <div class="flow-line" />
                        <div class="flow-steps">
                          <div v-for="{ name, description }, i of product.productionSteps" :key="i" class="flow-step">
                            <div class="flow-step-icon bg-green-500 text-white">
                              {{ i + 1 }}
                            </div>
                            <div class="flow-step-content">
                              <h4 class="text-gray-800 font-semibold">
                                {{ name }}
                              </h4>
                              <p class="text-gray-600">
                                {{ description }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mb-8">
                  <h3 class="mb-4 text-lg text-gray-800 font-semibold">
                    生产工艺特点
                  </h3>
                  <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div v-for="{ name, description } of product.processCharacteristics" :key="name" class="rounded-lg bg-gray-50 p-4">
                      <h4 class="mb-2 text-gray-800 font-medium">
                        {{ name }}
                      </h4>
                      <p class="text-gray-600">
                        {{ description }}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 class="mb-4 text-lg text-gray-800 font-semibold">
                    质量控制
                  </h3>
                  <div class="space-y-4">
                    <div class="flex items-start gap-3">
                      <div class="h-10 w-10 flex items-center justify-center rounded-full bg-green-100">
                        <i class="pi pi-shield text-green-600" />
                      </div>
                      <div>
                        <h4 class="mb-1 text-gray-800 font-medium">
                          原料质量控制
                        </h4>
                        <p class="text-gray-600">
                          每批原料入厂前进行农药残留、重金属、霉菌毒素等多项检测，确保原料安全。
                        </p>
                      </div>
                    </div>
                    <div class="flex items-start gap-3">
                      <div class="h-10 w-10 flex items-center justify-center rounded-full bg-green-100">
                        <i class="pi pi-cog text-green-600" />
                      </div>
                      <div>
                        <h4 class="mb-1 text-gray-800 font-medium">
                          生产过程控制
                        </h4>
                        <p class="text-gray-600">
                          生产全过程实施HACCP管理体系，关键控制点实时监控，确保生产过程安全可控。
                        </p>
                      </div>
                    </div>
                    <div class="flex items-start gap-3">
                      <div class="h-10 w-10 flex items-center justify-center rounded-full bg-green-100">
                        <i class="pi pi-check-square text-green-600" />
                      </div>
                      <div>
                        <h4 class="mb-1 text-gray-800 font-medium">
                          成品检验
                        </h4>
                        <p class="text-gray-600">
                          每批产品出厂前进行感官、理化、微生物等全面检测，确保产品符合国家食品安全标准。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel header="规格参数">
              <div class="rounded-lg bg-white p-6 shadow-sm">
                <h2 class="mb-4 text-xl text-gray-800 font-bold">
                  规格参数
                </h2>

                <div class="overflow-x-auto">
                  <table class="min-w-full border-collapse">
                    <tbody>
                      <tr class="border-b">
                        <td class="w-1/4 bg-gray-50 px-4 py-3 text-gray-700 font-medium">
                          品牌
                        </td>
                        <td class="px-4 py-3 text-gray-700">
                          {{ product.brand }}
                        </td>
                      </tr>
                      <tr class="border-b">
                        <td class="bg-gray-50 px-4 py-3 text-gray-700 font-medium">
                          产品名称
                        </td>
                        <td class="px-4 py-3 text-gray-700">
                          {{ product.name }}
                        </td>
                      </tr>
                      <tr class="border-b">
                        <td class="bg-gray-50 px-4 py-3 text-gray-700 font-medium">
                          产品分类
                        </td>
                        <td class="px-4 py-3 text-gray-700">
                          {{ product.category }}
                        </td>
                      </tr>
                      <tr class="border-b">
                        <td class="bg-gray-50 px-4 py-3 text-gray-700 font-medium">
                          产品规格
                        </td>
                        <td class="px-4 py-3 text-gray-700">
                          {{ product.weight }}{{ product.weightUnit }}/{{ product.unit }}
                        </td>
                      </tr>
                      <tr class="border-b">
                        <td class="bg-gray-50 px-4 py-3 text-gray-700 font-medium">
                          包装方式
                        </td>
                        <td class="px-4 py-3 text-gray-700">
                          {{ product.packagingType }}
                        </td>
                      </tr>
                      <tr class="border-b">
                        <td class="bg-gray-50 px-4 py-3 text-gray-700 font-medium">
                          产地
                        </td>
                        <td class="px-4 py-3 text-gray-700">
                          {{ product.origin }}
                        </td>
                      </tr>
                      <tr class="border-b">
                        <td class="bg-gray-50 px-4 py-3 text-gray-700 font-medium">
                          保质期
                        </td>
                        <td class="px-4 py-3 text-gray-700">
                          {{ product.shelfLife }}
                        </td>
                      </tr>
                      <tr class="border-b">
                        <td class="bg-gray-50 px-4 py-3 text-gray-700 font-medium">
                          存储方法
                        </td>
                        <td class="px-4 py-3 text-gray-700">
                          {{ product.storageMethod }}
                        </td>
                      </tr>
                      <tr>
                        <td class="bg-gray-50 px-4 py-3 text-gray-700 font-medium">
                          商品编码
                        </td>
                        <td class="px-4 py-3 text-gray-700">
                          {{ product.sku }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabPanel>

            <TabPanel header="营养信息">
              <div class="rounded-lg bg-white p-6 shadow-sm">
                <h2 class="mb-4 text-xl text-gray-800 font-bold">
                  营养信息
                </h2>

                <div class="mb-6">
                  <p class="whitespace-pre-line text-gray-700">
                    {{ product.nutritionalInfo.description }}
                  </p>
                </div>

                <!-- 营养成分表 -->
                <div class="overflow-hidden border rounded-lg">
                  <div class="border-b bg-gray-100 p-4">
                    <h3 class="text-lg text-gray-800 font-semibold">
                      营养成分表
                    </h3>
                    <p class="text-sm text-gray-600">
                      {{ product.nutritionalInfo.gContent }}
                    </p>
                  </div>
                  <div class="p-4">
                    <div class="grid grid-cols-2 gap-4">
                      <div v-for="{ name, weight, unit } of product.nutritionalInfo.ingredients" :key="name" class="border-b pb-2">
                        <span class="text-gray-600">{{ name }}</span>
                        <span class="float-right text-gray-800 font-medium">{{ weight }} {{ unit }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 营养价值 -->
                <div class="mt-8">
                  <h3 class="mb-3 text-lg text-gray-800 font-semibold">
                    营养价值
                  </h3>
                  <div class="space-y-4">
                    <div class="flex items-start gap-3">
                      <div class="h-10 w-10 flex items-center justify-center rounded-full bg-green-100">
                        <i class="pi pi-heart-fill text-green-600" />
                      </div>
                      <div>
                        <h4 class="mb-1 text-gray-800 font-medium">
                          均衡的营养成分
                        </h4>
                        <p class="text-gray-600">
                          提供蛋白质、脂肪和碳水化合物等多种营养素，助力维持身体健康与活力。
                        </p>
                      </div>
                    </div>
                    <div class="flex items-start gap-3">
                      <div class="h-10 w-10 flex items-center justify-center rounded-full bg-green-100">
                        <i class="pi pi-bolt text-green-600" />
                      </div>
                      <div>
                        <h4 class="mb-1 text-gray-800 font-medium">
                          丰富的维生素与矿物质
                        </h4>
                        <p class="text-gray-600">
                          含有钙、铁、维生素A、C等多种微量元素，支持骨骼健康、免疫力提升及整体代谢。
                        </p>
                      </div>
                    </div>
                    <div class="flex items-start gap-3">
                      <div class="h-10 w-10 flex items-center justify-center rounded-full bg-green-100">
                        <i class="pi pi-shield text-green-600" />
                      </div>
                      <div>
                        <h4 class="mb-1 text-gray-800 font-medium">
                          天然健康益处
                        </h4>
                        <p class="text-gray-600">
                          富含膳食纤维、抗氧化物质等成分，有助于促进消化、延缓衰老及增强身体防护力。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel header="认证信息">
              <div class="rounded-lg bg-white p-6 shadow-sm">
                <h2 class="mb-4 text-xl text-gray-800 font-bold">
                  认证信息
                </h2>

                <div class="mb-6">
                  <h3 class="mb-3 text-lg text-gray-800 font-semibold">
                    产品认证
                  </h3>
                  <div class="grid grid-cols-2 gap-4 lg:grid-cols-4 md:grid-cols-3">
                    <div
                      v-for="(cert, index) in product.certifications"
                      :key="index"
                      class="flex flex-col items-center border rounded-lg p-4"
                    >
                      <span class="text-sm text-gray-700 font-medium">{{ cert }}</span>
                    </div>
                  </div>
                </div>

                <div class="mb-6">
                  <h3 class="mb-3 text-lg text-gray-800 font-semibold">
                    生产许可
                  </h3>
                  <div class="border rounded-lg p-4">
                    <div class="flex items-center gap-4">
                      <i class="pi pi-file-pdf text-2xl text-red-500" />
                      <div>
                        <p class="text-gray-800 font-medium">
                          食品生产许可证
                        </p>
                        <p class="text-sm text-gray-600">
                          {{ product.productionLicense || 'SC929038278' }}
                        </p>
                      </div>
                      <Button
                        v-if="product.productionLicense"
                        icon="pi pi-eye"
                        class="p-button-outlined p-button-rounded ml-auto"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 class="mb-3 text-lg text-gray-800 font-semibold">
                    检测报告
                  </h3>
                  <div class="border rounded-lg p-4">
                    <div class="flex items-center gap-4">
                      <i class="pi pi-file-pdf text-2xl text-red-500" />
                      <div>
                        <p class="text-gray-800 font-medium">
                          产品检测报告
                        </p>
                        <p class="text-sm text-gray-600">
                          {{ `https://example.com/reports/jz_test.${Date.now()}.pdf` }}
                        </p>
                      </div>
                      <Button
                        v-if="product.testReport"
                        icon="pi pi-eye"
                        class="p-button-outlined p-button-rounded ml-auto"
                        @click="openTestReport(product)"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel header="产品反馈">
              <div class="rounded-lg bg-white p-6 shadow-sm">
                <h2 class="mb-6 text-xl text-gray-800 font-bold">
                  产品反馈
                </h2>

                <div class="w-full">
                  <p class="mb-6 text-gray-600">
                    感谢您对我们产品的关注！如果您有任何建议或问题，请填写以下表单，我们将尽快回复您。
                  </p>

                  <form class="space-y-6" @submit.prevent="submitFeedback">
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div class="form-group">
                        <label for="name" class="mb-1 block text-sm text-gray-700 font-medium">姓名</label>
                        <InputText
                          id="name"
                          v-model="feedbackForm.name"
                          class="w-full"
                          :class="{ 'p-invalid': v$.name.$invalid && v$.name.$dirty }"
                          aria-describedby="name-error"
                        />
                        <small v-if="v$.name.$invalid && v$.name.$dirty" id="name-error" class="p-error mt-1 block">
                          请输入您的姓名
                        </small>
                      </div>

                      <div class="form-group">
                        <label for="contact" class="mb-1 block text-sm text-gray-700 font-medium">联系方式（电话/邮箱）</label>
                        <InputText
                          id="contact"
                          v-model="feedbackForm.contact"
                          class="w-full"
                          :class="{ 'p-invalid': v$.contact.$invalid && v$.contact.$dirty }"
                          aria-describedby="contact-error"
                        />
                        <small v-if="v$.contact.$invalid && v$.contact.$dirty" id="contact-error" class="p-error mt-1 block">
                          请输入有效的联系方式
                        </small>
                      </div>
                    </div>

                    <div class="form-group">
                      <label for="feedbackType" class="mb-1 block text-sm text-gray-700 font-medium">反馈类型</label>
                      <Dropdown
                        id="feedbackType"
                        v-model="feedbackForm.type"
                        :options="feedbackTypes"
                        option-label="name"
                        placeholder="请选择反馈类型"
                        class="w-full"
                        :class="{ 'p-invalid': v$.type.$invalid && v$.type.$dirty }"
                        aria-describedby="type-error"
                      />
                      <small v-if="v$.type.$invalid && v$.type.$dirty" id="type-error" class="p-error mt-1 block">
                        请选择反馈类型
                      </small>
                    </div>

                    <div class="form-group">
                      <label for="message" class="mb-1 block text-sm text-gray-700 font-medium">反馈内容</label>
                      <Textarea
                        id="message"
                        v-model="feedbackForm.message"
                        rows="5"
                        class="w-full"
                        :class="{ 'p-invalid': v$.message.$invalid && v$.message.$dirty }"
                        aria-describedby="message-error"
                      />
                      <small v-if="v$.message.$invalid && v$.message.$dirty" id="message-error" class="p-error mt-1 block">
                        请输入反馈内容（至少10个字符）
                      </small>
                    </div>

                    <div class="flex items-center gap-2">
                      <Checkbox
                        id="privacy"
                        v-model="feedbackForm.privacy"
                        :binary="true"
                        :class="{ 'p-invalid': v$.privacy.$invalid && v$.privacy.$dirty }"
                      />
                      <label for="privacy" class="text-sm text-gray-600">我同意贵公司收集和处理我的个人信息用于回复我的反馈</label>
                    </div>
                    <small v-if="v$.privacy.$invalid && v$.privacy.$dirty" class="p-error mt-1 block">
                      请同意我们的隐私政策
                    </small>

                    <div class="flex justify-center pt-4">
                      <Button
                        type="submit"
                        label="提交反馈"
                        icon="pi pi-send"
                        class="p-button-success"
                        :loading="submitting"
                      />
                    </div>
                  </form>

                  <Dialog
                    v-model:visible="showSuccessDialog"
                    header="提交成功"
                    :modal="true"
                    :closable="true"
                    :style="{ width: '90%', maxWidth: '400px' }"
                  >
                    <div class="flex-column align-items-center flex">
                      <i class="pi pi-check-circle mb-4 text-5xl text-green-500" />
                      <p class="text-center">
                        感谢您的反馈！我们已收到您的信息，将尽快处理并回复。
                      </p>
                    </div>
                    <template #footer>
                      <Button label="确定" icon="pi pi-check" autofocus @click="showSuccessDialog = false" />
                    </template>
                  </Dialog>
                </div>
              </div>
            </TabPanel>
          </TabView>
        </div>
      </section>
    </div>
  </MainLayout>
</template>

<style scoped>
/* 生产流程样式 */
.production-flow {
  padding: 20px 0;
}

.flow-timeline {
  position: relative;
}

.flow-line {
  position: absolute;
  top: 24px;
  left: 24px;
  bottom: 24px;
  width: 2px;
  background-color: #10b981;
}

.flow-steps {
  position: relative;
}

.flow-step {
  display: flex;
  margin-bottom: 30px;
}

.flow-step:last-child {
  margin-bottom: 0;
}

.flow-step-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 16px;
  z-index: 1;
}

.flow-step-content {
  padding-top: 4px;
}
</style>
