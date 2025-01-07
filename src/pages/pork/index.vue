<script setup>
// 模拟猪肉数据
const pork = ref({
  name: '优质猪肉',
  category: '肉类',
  company: '江西省金鹏食品有限公司',
  description: '精选本地养殖的优质猪肉，肉质鲜嫩，营养丰富。',
  image: '/reports/可靠的猪产品来源/可靠的猪产品来源.webp',
  origin: '四川省',
  productionDate: '2023-06-01',
  shelfLife: '7天（冷藏）',
  weight: 1,
  unit: 'kg',
  price: 59.9,
  nutrition: {
    能量: '242千卡/100g',
    蛋白质: '16.9g/100g',
    脂肪: '21.5g/100g',
    碳水化合物: '0g/100g',
    钠: '63mg/100g',
  },
  rawMaterial: '100%纯正本地猪肉，无添加剂',
  inspectionReports: [
    {
      title: '动物防疫条件合格证',
      description: '猪肉出厂防疫检测报告',
      image: '/reports/可靠的猪产品来源/可靠的猪产品来源.jpg',
      fullReport: '/reports/可靠的猪产品来源/可靠的猪产品来源.jpg',
    },
  ],
  storageMethod: '请将猪肉存放在0-4℃的冰箱中，避免与其他食品直接接触。建议在购买后3天内食用完毕，以保证最佳口感和新鲜度。',
  cookingTips: [
    '烹饪前，将猪肉取出室温放置15-20分钟，有助于更均匀的烹饪。',
    '煎炒时，中高温快速烹饪可以锁住肉汁，保持肉质鲜嫩。',
    '炖煮时，可以加入少量料酒去腥增香。',
    '可搭配各种蔬菜、调味料烹饪，制作美味可口的猪肉料理。',
  ],
})
const router = useRouter()

function viewProductionProcess() {
  // 实现查看生产过程的逻辑，例如导航到生产过程页面
  router.push('/pork/process')
}

function openReport(reportUrl) {
  // 实现打开完整报告的逻辑
  window.open(reportUrl, '_blank')
}

provide('keyword', '猪肉')
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
            <img class="h-96 w-full object-cover md:w-96" :src="pork.image" :alt="pork.name">
          </div>
          <div class="p-8">
            <div class="text-sm text-indigo-500 font-semibold tracking-wide uppercase">
              {{ pork.category }}
            </div>
            <h1 class="mt-1 text-3xl text-gray-900 font-bold">
              {{ pork.name }}
            </h1>
            <p class="mt-2 text-gray-500">
              {{ pork.description }}
            </p>

            <div class="mt-4 flex flex-wrap">
              <div class="mb-2 mr-4">
                <span class="text-gray-500">公司：</span>
                <span class="font-medium">{{ pork.company }}</span>
              </div>
              <div class="mb-2 mr-4">
                <span class="text-gray-500">产地：</span>
                <span class="font-medium">{{ pork.origin }}</span>
              </div>
              <div class="mb-2 mr-4">
                <span class="text-gray-500">生产日期：</span>
                <span class="font-medium">{{ pork.productionDate }}</span>
              </div>
              <div class="mb-2 mr-4">
                <span class="text-gray-500">保质期：</span>
                <span class="font-medium">{{ pork.shelfLife }}</span>
              </div>
              <div class="mb-2 mr-4">
                <span class="text-gray-500">净含量：</span>
                <span class="font-medium">{{ pork.weight }}{{ pork.unit }}</span>
              </div>
            </div>

            <div class="mt-6">
              <h2 class="text-2xl text-gray-900 font-bold">
                营养成分
              </h2>
              <div class="grid grid-cols-2 mt-2 gap-4">
                <div v-for="(value, key) in pork.nutrition" :key="key" class="flex justify-between">
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
                {{ pork.rawMaterial }}
              </p>
            </div>

            <div class="mt-6 flex items-center justify-between">
              <span class="text-3xl text-gray-900 font-bold">¥{{ pork.price.toFixed(2) }}</span>
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
            <div v-for="(report, index) in pork.inspectionReports" :key="index" class="overflow-hidden border rounded-lg">
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
            {{ pork.storageMethod }}
          </p>
        </div>

        <div class="border-t border-gray-200 p-8">
          <h2 class="mb-4 text-2xl text-gray-900 font-bold">
            食用建议
          </h2>
          <ul class="list-disc pl-5 text-gray-600">
            <li v-for="(tip, index) in pork.cookingTips" :key="index" class="mb-2">
              {{ tip }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
