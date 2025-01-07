<script setup>
// 模拟大米数据
const rice = ref({
  name: '大米',
  category: '米',
  company: '某某大米公司',
  description: '精选东北黑土地种植的优质大米，口感软糯，营养丰富。',
  image: '/reports/可靠的大米/可靠的大米.jpeg',
  origin: '黑龙江省',
  productionDate: '2023-05-15',
  shelfLife: '12个月',
  weight: 5,
  unit: 'kg',
  price: 39.9,
  nutrition: {
    能量: '130千卡/100g',
    蛋白质: '2.6g/100g',
    脂肪: '0.3g/100g',
    碳水化合物: '28.7g/100g',
    膳食纤维: '0.3g/100g',
  },
  rawMaterial: '100%纯正东北大米，无添加剂',
  inspectionReports: [
    {
      title: '出厂检测报告',
      description: '大米出厂检测报告',
      image: '/reports/可靠的大米/大米出厂检测报告.jpg',
      fullReport: '/reports/可靠的大米/大米出厂检测报告.jpg',
    },
  ],
  storageMethod: '请将大米存放在阴凉干燥处，避免阳光直射和潮湿环境。开封后建议在3个月内食用完毕，以保证最佳口感。',
  cookingTips: [
    '淘米时，水要适量，避免过度搓洗导致营养流失。',
    '煮饭时，水米比例建议为1.1:1，可根据个人喜好适当调整。',
    '煮好后，焖饭10-15分钟，口感更佳。',
    '可搭配各种蔬菜、肉类烹饪，制作美味可口的米饭料理。',
  ],
})
const router = useRouter()

function viewProductionProcess() {
  // 实现查看生产过程的逻辑，例如导航到生产过程页面
  router.push('/rice/process')
}

function openReport(reportUrl) {
  // 实现打开完整报告的逻辑
  window.open(reportUrl, '_blank')
}

provide('keyword', '大米')
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
            <img class="h-96 w-full object-cover md:w-96" :src="rice.image" :alt="rice.name">
          </div>
          <div class="p-8">
            <div class="text-sm text-indigo-500 font-semibold tracking-wide uppercase">
              {{ rice.category }}
            </div>
            <h1 class="mt-1 text-3xl text-gray-900 font-bold">
              {{ rice.name }}
            </h1>
            <p class="mt-2 text-gray-500">
              {{ rice.description }}
            </p>

            <div class="mt-4 flex flex-wrap">
              <div class="mb-2 mr-4">
                <span class="text-gray-500">公司：</span>
                <span class="font-medium">{{ rice.company }}</span>
              </div>
              <div class="mb-2 mr-4">
                <span class="text-gray-500">产地：</span>
                <span class="font-medium">{{ rice.origin }}</span>
              </div>
              <div class="mb-2 mr-4">
                <span class="text-gray-500">生产日期：</span>
                <span class="font-medium">{{ rice.productionDate }}</span>
              </div>
              <div class="mb-2 mr-4">
                <span class="text-gray-500">保质期：</span>
                <span class="font-medium">{{ rice.shelfLife }}</span>
              </div>
              <div class="mb-2 mr-4">
                <span class="text-gray-500">净含量：</span>
                <span class="font-medium">{{ rice.weight }}{{ rice.unit }}</span>
              </div>
            </div>

            <div class="mt-6">
              <h2 class="text-2xl text-gray-900 font-bold">
                营养成分
              </h2>
              <div class="grid grid-cols-2 mt-2 gap-4">
                <div v-for="(value, key) in rice.nutrition" :key="key" class="flex justify-between">
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
                {{ rice.rawMaterial }}
              </p>
            </div>

            <div class="mt-6 flex items-center justify-between">
              <span class="text-3xl text-gray-900 font-bold">¥{{ rice.price.toFixed(2) }}</span>
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
            <div v-for="(report, index) in rice.inspectionReports" :key="index" class="overflow-hidden border rounded-lg">
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
            {{ rice.storageMethod }}
          </p>
        </div>

        <div class="border-t border-gray-200 p-8">
          <h2 class="mb-4 text-2xl text-gray-900 font-bold">
            食用建议
          </h2>
          <ul class="list-disc pl-5 text-gray-600">
            <li v-for="(tip, index) in rice.cookingTips" :key="index" class="mb-2">
              {{ tip }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
