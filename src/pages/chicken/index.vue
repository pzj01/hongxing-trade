<script setup>
// 模拟鸡肉数据
const chicken = ref({
  name: '鸡肉',
  category: '肉类',
  company: '健康农场有限公司',
  description: '精选散养鸡，肉质鲜嫩，富含优质蛋白，低脂肪高营养。',
  image: '/reports/肉鸡/肉鸡.jpg',
  origin: '山东省',
  productionDate: '2023-07-01',
  shelfLife: '7天（冷藏）',
  weight: 500,
  unit: 'g',
  price: 29.9,
  nutrition: {
    能量: '165千卡/100g',
    蛋白质: '31g/100g',
    脂肪: '3.6g/100g',
    碳水化合物: '0g/100g',
    钠: '74mg/100g',
  },
  rawMaterial: '100%新鲜鸡胸肉，无添加剂',
  inspectionReports: [
    {
      title: '鸡检疫证明',
      description: '鸡肉品质与安全检测报告',
      image: '/reports/肉鸡/报告.png',
      fullReport: '/reports/肉鸡/肉鸡.pdf',
    },
  ],
  storageMethod: '请将鸡肉保存在0-4℃的冰箱中，避免反复冷冻解冻。建议在购买后3天内食用完毕，以保证最佳口感和新鲜度。',
  cookingTips: [
    '煎炒时可先用盐、胡椒等调味料腌制15-30分钟，增加口感。',
    '为保持鸡肉的嫩滑口感，建议采用中火快炒或烤制。',
    '内部温度需要达到74℃以上，确保充分熟透。',
    '可搭配各种蔬菜、沙拉或谷物，制作营养均衡的健康餐。',
  ],
})

const router = useRouter()

function viewProductionProcess() {
  // 实现查看生产过程的逻辑，例如导航到生产过程页面
  router.push('/chicken/process')
}

function openReport(reportUrl) {
  // 实现打开完整报告的逻辑
  window.open(reportUrl, '_blank')
}

provide('keyword', '鸡肉')
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
            <img class="h-96 w-full object-cover md:w-96" :src="chicken.image" :alt="chicken.name">
          </div>
          <div class="p-8">
            <div class="text-sm text-indigo-500 font-semibold tracking-wide uppercase">
              {{ chicken.category }}
            </div>
            <h1 class="mt-1 text-3xl text-gray-900 font-bold">
              {{ chicken.name }}
            </h1>
            <p class="mt-2 text-gray-500">
              {{ chicken.description }}
            </p>

            <div class="mt-4 flex flex-wrap">
              <div class="mb-2 mr-4">
                <span class="text-gray-500">公司：</span>
                <span class="font-medium">{{ chicken.company }}</span>
              </div>
              <div class="mb-2 mr-4">
                <span class="text-gray-500">产地：</span>
                <span class="font-medium">{{ chicken.origin }}</span>
              </div>
              <div class="mb-2 mr-4">
                <span class="text-gray-500">生产日期：</span>
                <span class="font-medium">{{ chicken.productionDate }}</span>
              </div>
              <div class="mb-2 mr-4">
                <span class="text-gray-500">保质期：</span>
                <span class="font-medium">{{ chicken.shelfLife }}</span>
              </div>
              <div class="mb-2 mr-4">
                <span class="text-gray-500">净含量：</span>
                <span class="font-medium">{{ chicken.weight }}{{ chicken.unit }}</span>
              </div>
            </div>

            <div class="mt-6">
              <h2 class="text-2xl text-gray-900 font-bold">
                营养成分
              </h2>
              <div class="grid grid-cols-2 mt-2 gap-4">
                <div v-for="(value, key) in chicken.nutrition" :key="key" class="flex justify-between">
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
                {{ chicken.rawMaterial }}
              </p>
            </div>

            <div class="mt-6 flex items-center justify-between">
              <span class="text-3xl text-gray-900 font-bold">¥{{ chicken.price.toFixed(2) }}</span>
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
            <div v-for="(report, index) in chicken.inspectionReports" :key="index" class="overflow-hidden border rounded-lg">
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
            {{ chicken.storageMethod }}
          </p>
        </div>

        <div class="border-t border-gray-200 p-8">
          <h2 class="mb-4 text-2xl text-gray-900 font-bold">
            食用建议
          </h2>
          <ul class="list-disc pl-5 text-gray-600">
            <li v-for="(tip, index) in chicken.cookingTips" :key="index" class="mb-2">
              {{ tip }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
