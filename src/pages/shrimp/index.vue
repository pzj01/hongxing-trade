<script setup>
// 模拟基围虾数据
const shrimp = ref({
  name: '基围虾',
  category: '海鲜',
  company: '某某海鲜公司',
  description: '新鲜捕捞的优质基围虾，肉质鲜嫩，营养丰富。',
  image: '/reports/基围虾/基围虾.jpg',
  origin: '广东省',
  productionDate: '2023-06-10',
  shelfLife: '冷冻12个月',
  weight: 500,
  unit: 'g',
  price: 59.9,
  nutrition: {
    能量: '85千卡/100g',
    蛋白质: '18.1g/100g',
    脂肪: '1.1g/100g',
    碳水化合物: '0.9g/100g',
    钙: '63mg/100g',
  },
  rawMaterial: '100%新鲜基围虾，无添加剂',
  inspectionReports: [
    {
      title: '质量检测报告',
      description: '基围虾品质检测报告',
      image: '/reports/基围虾/基围虾.png',
      fullReport: '/reports/基围虾/基围虾.pdf',
    },
  ],
  storageMethod: '请将基围虾保存在-18℃以下的冷冻环境中。解冻后请尽快食用，不要再次冷冻。',
  cookingTips: [
    '清洗时轻轻去除虾线，保持虾体完整。',
    '烹饪前可用盐水浸泡10分钟，去除腥味。',
    '煮虾时加入少许料酒，可增加鲜味。',
    '避免过度烹饪，以保持虾肉的鲜嫩口感。',
  ],
})
const router = useRouter()

function viewProductionProcess() {
  // 实现查看生产过程的逻辑，例如导航到生产过程页面
  router.push('/shrimp/process')
}

function openReport(reportUrl) {
  // 实现打开完整报告的逻辑
  window.open(reportUrl, '_blank')
}

provide('keyword', '基围虾')
</script>

<template>
  <MainLayout>
    <div class="min-h-screen bg-gray-100 px-4 py-8 lg:px-8 sm:px-6">
      <h1 mb-5 text-center text-4xl font-bold>
        采购产品原材料信息
      </h1>
      <div class="mx-auto max-w-4xl overflow-hidden rounded-xl bg-white shadow-md">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img class="h-96 w-full object-cover md:w-96" :src="shrimp.image" :alt="shrimp.name">
          </div>
          <div class="p-8">
            <div class="text-sm text-indigo-500 font-semibold tracking-wide uppercase">
              {{ shrimp.category }}
            </div>
            <h1 class="mt-1 text-3xl text-gray-900 font-bold">
              {{ shrimp.name }}
            </h1>
            <p class="mt-2 text-gray-500">
              {{ shrimp.description }}
            </p>

            <div class="mt-4 flex flex-wrap">
              <div class="mb-2 mr-4">
                <span class="text-gray-500">公司：</span>
                <span class="font-medium">{{ shrimp.company }}</span>
              </div>
              <div class="mb-2 mr-4">
                <span class="text-gray-500">产地：</span>
                <span class="font-medium">{{ shrimp.origin }}</span>
              </div>
              <div class="mb-2 mr-4">
                <span class="text-gray-500">生产日期：</span>
                <span class="font-medium">{{ shrimp.productionDate }}</span>
              </div>
              <div class="mb-2 mr-4">
                <span class="text-gray-500">保质期：</span>
                <span class="font-medium">{{ shrimp.shelfLife }}</span>
              </div>
              <div class="mb-2 mr-4">
                <span class="text-gray-500">净含量：</span>
                <span class="font-medium">{{ shrimp.weight }}{{ shrimp.unit }}</span>
              </div>
            </div>

            <div class="mt-6">
              <h2 class="text-2xl text-gray-900 font-bold">
                营养成分
              </h2>
              <div class="grid grid-cols-2 mt-2 gap-4">
                <div v-for="(value, key) in shrimp.nutrition" :key="key" class="flex justify-between">
                  <span class="text-gray-500">{{ key }}:</span>
                  <span class="font-medium">{{ value }}</span>
                </div>
              </div>
            </div>

            <div class="mt-6">
              <h2 class="text-2xl text-gray-900 font-bold">
                原材料信息
              </h2>
              <p class="mt-2 text-gray-600">
                {{ shrimp.rawMaterial }}
              </p>
            </div>

            <div class="mt-6 flex items-center justify-between">
              <span class="text-3xl text-gray-900 font-bold">¥{{ shrimp.price.toFixed(2) }}</span>
              <Button @click="viewProductionProcess">
                查看生产过程
              </Button>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-200 p-8">
          <h2 class="mb-4 text-2xl text-gray-900 font-bold">
            检测报告
          </h2>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div v-for="(report, index) in shrimp.inspectionReports" :key="index" class="overflow-hidden border rounded-lg">
              <img :src="report.image" :alt="`检测报告 ${index + 1}`" class="h-48 w-full object-cover">
              <div class="p-4">
                <h3 class="text-lg font-semibold">
                  {{ report.title }}
                </h3>
                <p class="text-gray-600">
                  {{ report.description }}
                </p>
                <button class="mt-2 text-indigo-600 hover:text-indigo-800" @click="openReport(report.fullReport)">
                  查看完整报告
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-200 p-8">
          <h2 class="mb-4 text-2xl text-gray-900 font-bold">
            储存方法
          </h2>
          <p class="text-gray-600">
            {{ shrimp.storageMethod }}
          </p>
        </div>

        <div class="border-t border-gray-200 p-8">
          <h2 class="mb-4 text-2xl text-gray-900 font-bold">
            食用建议
          </h2>
          <ul class="list-disc pl-5 text-gray-600">
            <li v-for="(tip, index) in shrimp.cookingTips" :key="index" class="mb-2">
              {{ tip }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
