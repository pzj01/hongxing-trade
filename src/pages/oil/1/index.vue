<script setup>
// 模拟西王油纯香压榨菜籽油数据
const oil = ref({
  name: '西王油纯香压榨菜籽油5L（中百、特渠）',
  category: '食用油',
  company: '山东西王食品有限公司',
  description: '采用优质菜籽，低温压榨工艺，保留原始营养，口感清香醇厚。',
  image: '/reports/西王纯香压榨菜籽油5L（中百、特渠）/西王纯香压榨菜籽油5L（中百、特渠）.jpg',
  origin: '山东省',
  productionDate: '2023-06-15',
  shelfLife: '18个月',
  volume: 5,
  unit: 'L',
  price: 130,
  nutrition: {
    能量: '900千卡/100ml',
    脂肪: '100g/100ml',
    饱和脂肪酸: '7g/100ml',
    不饱和脂肪酸: '93g/100ml',
    维生素E: '60mg/100ml',
  },
  rawMaterial: '100%纯正菜籽油',
  inspectionReports: [
    {
      title: '质量检测报告',
      description: '西王油纯香压榨菜籽油质量检测报告',
      image: '/reports/西王纯香压榨菜籽油5L（中百、特渠）/报告.png',
      fullReport: '/reports/西王纯香压榨菜籽油5L（中百、特渠）/产品检测报告.pdf',
    },
  ],
  storageMethod: '请将菜籽油存放在阴凉干燥处，避免阳光直射。开封后建议在3个月内食用完毕，以保证最佳品质。',
  usageTips: [
    '适合凉拌、煎炒、烹炸等多种烹饪方式。',
    '建议低温烹饪，以保留更多营养成分。',
    '开盖后请及时盖紧瓶盖，避免油品氧化。',
    '可用于制作沙拉酱、蒜蓉酱等调味品，增添美味。',
  ],
})

const router = useRouter()

function viewProductionProcess() {
  // 实现查看生产过程的逻辑，例如导航到生产过程页面
  router.push('/oil/1/process')
}

function openReport(reportUrl) {
  // 实现打开完整报告的逻辑
  window.open(reportUrl, '_blank')
}

provide('keyword', '西王油纯香压榨菜籽油5L（中百、特渠）')
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
            <img class="h-96 w-full object-cover md:w-96" :src="oil.image" :alt="oil.name">
          </div>
          <div class="p-8">
            <div class="text-sm text-indigo-500 font-semibold tracking-wide uppercase">
              {{ oil.category }}
            </div>
            <h1 class="mt-1 text-3xl text-gray-900 font-bold">
              {{ oil.name }}
            </h1>
            <p class="mt-2 text-gray-500">
              {{ oil.description }}
            </p>

            <div class="mt-4 flex flex-wrap">
              <div class="mb-2 mr-4">
                <span class="text-gray-500">公司：</span>
                <span class="font-medium">{{ oil.company }}</span>
              </div>
              <div class="mb-2 mr-4">
                <span class="text-gray-500">产地：</span>
                <span class="font-medium">{{ oil.origin }}</span>
              </div>
              <div class="mb-2 mr-4">
                <span class="text-gray-500">生产日期：</span>
                <span class="font-medium">{{ oil.productionDate }}</span>
              </div>
              <div class="mb-2 mr-4">
                <span class="text-gray-500">保质期：</span>
                <span class="font-medium">{{ oil.shelfLife }}</span>
              </div>
              <div class="mb-2 mr-4">
                <span class="text-gray-500">净含量：</span>
                <span class="font-medium">{{ oil.volume }}{{ oil.unit }}</span>
              </div>
            </div>

            <div class="mt-6">
              <h2 class="text-2xl text-gray-900 font-bold">
                营养成分
              </h2>
              <div class="grid grid-cols-2 mt-2 gap-4">
                <div v-for="(value, key) in oil.nutrition" :key="key" class="flex justify-between">
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
                {{ oil.rawMaterial }}
              </p>
            </div>

            <div class="mt-6 flex items-center justify-between">
              <span class="text-3xl text-gray-900 font-bold">¥{{ oil.price.toFixed(2) }}</span>
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
            <div v-for="(report, index) in oil.inspectionReports" :key="index" class="overflow-hidden border rounded-lg">
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
            {{ oil.storageMethod }}
          </p>
        </div>

        <div class="border-t border-gray-200 p-8">
          <h2 class="mb-4 text-2xl text-gray-900 font-bold">
            使用建议
          </h2>
          <ul class="list-disc pl-5 text-gray-600">
            <li v-for="(tip, index) in oil.usageTips" :key="index" class="mb-2">
              {{ tip }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
