<script setup>
// 模拟鲈鱼数据
const perch = ref({
  name: '(何氏)鲈鱼',
  category: '海鲜',
  company: '广东何氏水产有限公司',
  description: '精选优质鲈鱼，肉质鲜嫩，营养丰富，适合多种烹饪方式。',
  image: '/reports/鲈鱼/鲈鱼.jpg',
  origin: '江苏省太湖',
  productionDate: '2023-07-10',
  shelfLife: '冷藏5天',
  weight: 500,
  unit: 'g',
  price: 29.9,
  nutrition: {
    能量: '96千卡/100g',
    蛋白质: '19.3g/100g',
    脂肪: '2.3g/100g',
    碳水化合物: '0g/100g',
    钙: '10mg/100g',
  },
  rawMaterial: '100%新鲜鲈鱼，无添加剂',
  inspectionReports: [
    {
      title: '水产品质量检测报告',
      description: '鲈鱼新鲜度和安全性检测报告',
      image: '/reports/鲈鱼/报告.png',
      fullReport: '/reports/鲈鱼/鲈鱼.jpg',
    },
  ],
  storageMethod: '请将鲈鱼保存在0-4℃的冰箱中，避免冷冻。建议购买后2天内食用，以保证最佳新鲜度和口感。',
  cookingTips: [
    '清蒸：保留鲈鱼原汁原味，突出鲜美口感。',
    '红烧：可搭配豆瓣酱、葱姜蒜等调味，口感丰富。',
    '煎炸：外酥里嫩，搭配酱料风味更佳。',
    '鱼汤：可加入豆腐、蔬菜等，营养均衡又美味。',
  ],
})

const router = useRouter()

function viewProductionProcess() {
  // 实现查看生产过程的逻辑，例如导航到生产过程页面
  router.push('/fish/process')
}

function openReport(reportUrl) {
  // 实现打开完整报告的逻辑
  window.open(reportUrl, '_blank')
}

provide('keyword', '鲈鱼')
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
            <img class="h-96 w-full md:w-96" :src="perch.image" :alt="perch.name">
          </div>
          <div class="p-8">
            <div class="text-sm text-indigo-500 font-semibold tracking-wide uppercase">
              {{ perch.category }}
            </div>
            <h1 class="mt-1 text-3xl text-gray-900 font-bold">
              {{ perch.name }}
            </h1>
            <p class="mt-2 text-gray-500">
              {{ perch.description }}
            </p>

            <div class="mt-4 flex flex-wrap">
              <div class="mb-2 mr-4">
                <span class="text-gray-500">公司：</span>
                <span class="font-medium">{{ perch.company }}</span>
              </div>
              <div class="mb-2 mr-4">
                <span class="text-gray-500">产地：</span>
                <span class="font-medium">{{ perch.origin }}</span>
              </div>
              <div class="mb-2 mr-4">
                <span class="text-gray-500">生产日期：</span>
                <span class="font-medium">{{ perch.productionDate }}</span>
              </div>
              <div class="mb-2 mr-4">
                <span class="text-gray-500">保质期：</span>
                <span class="font-medium">{{ perch.shelfLife }}</span>
              </div>
              <div class="mb-2 mr-4">
                <span class="text-gray-500">净含量：</span>
                <span class="font-medium">{{ perch.weight }}{{ perch.unit }}</span>
              </div>
            </div>

            <div class="mt-6">
              <h2 class="text-2xl text-gray-900 font-bold">
                营养成分
              </h2>
              <div class="grid grid-cols-2 mt-2 gap-4">
                <div v-for="(value, key) in perch.nutrition" :key="key" class="flex justify-between">
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
                {{ perch.rawMaterial }}
              </p>
            </div>

            <div class="mt-6 flex items-center justify-between">
              <span class="text-3xl text-gray-900 font-bold">¥{{ perch.price.toFixed(2) }}</span>
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
            <div v-for="(report, index) in perch.inspectionReports" :key="index" class="overflow-hidden border rounded-lg">
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
            {{ perch.storageMethod }}
          </p>
        </div>

        <div class="border-t border-gray-200 p-8">
          <h2 class="mb-4 text-2xl text-gray-900 font-bold">
            食用建议
          </h2>
          <ul class="list-disc pl-5 text-gray-600">
            <li v-for="(tip, index) in perch.cookingTips" :key="index" class="mb-2">
              {{ tip }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
