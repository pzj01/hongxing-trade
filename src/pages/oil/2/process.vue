<script setup>
const productionSteps = reactive([
  {
    name: '原料采购',
    date: '2023-06-01',
    completed: true,
    showDetails: false,
    details: '从优质低芥酸菜籽供应商处采购新鲜菜籽，严格把控原料质量。',
    qualityChecks: ['供应商资质审核', '原料抽样检测', '含油量评估', '芥酸含量检测'],
  },
  {
    name: '清洗与烘干',
    date: '2023-06-10',
    completed: true,
    showDetails: false,
    details: '使用专业设备对菜籽进行清洗，去除杂质，然后进行低温烘干处理。',
    qualityChecks: ['清洗效果检查', '水分含量测定', '杂质去除率评估'],
  },
  {
    name: '压榨',
    date: '2023-06-15',
    completed: true,
    showDetails: false,
    details: '采用先进的浓香压榨技术，最大程度保留菜籽油的营养成分和浓郁风味。',
    qualityChecks: ['压榨温度监控', '出油率检测', '初榨油品质评估'],
  },
  {
    name: '过滤与精炼',
    date: '2023-06-20',
    completed: true,
    showDetails: false,
    details: '使用精密过滤设备去除杂质，进行轻度精炼以确保油品澄清透亮。',
    qualityChecks: ['过滤效果检查', '酸值测定', '过氧化值检测', '芥酸含量复检'],
  },
  {
    name: '灌装',
    date: '2023-06-25',
    completed: true,
    showDetails: false,
    details: '使用全自动灌装线，确保每瓶容量精准，采用无菌灌装技术。',
    qualityChecks: ['灌装量精度检查', '瓶盖密封性测试', '标签信息核对'],
  },
  {
    name: '包装与仓储',
    date: '2023-06-30',
    completed: true,
    showDetails: false,
    details: '使用环保包装材料，采用先进的仓储管理系统，确保产品新鲜度。',
    qualityChecks: ['包装完整性检查', '仓储环境温湿度监测', '产品追溯系统测试'],
  },
])

const qualityControlChecks = reactive([
  { name: '脂肪酸组成分析', passed: true },
  { name: '芥酸含量测定', passed: true },
  { name: '重金属含量检测', passed: true },
  { name: '过氧化值测定', passed: true },
  { name: '酸值测定', passed: true },
  { name: '感官评价', passed: true },
])

const problemReport = reactive({
  type: '',
  description: '',
})

function toggleDetails(index) {
  productionSteps[index].showDetails = !productionSteps[index].showDetails
}

function submitProblemReport() {
  alert('问题报告已提交')
  // 这里应该实现提交问题报告的逻辑
  // 提交后重置表单
  problemReport.type = ''
  problemReport.description = ''
}

provide('keyword', '西王油低芥酸浓香菜籽油5L')
</script>

<template>
  <MainLayout>
    <div class="min-h-screen bg-gray-100 px-4 py-8 lg:px-8 sm:px-6">
      <header class="mb-8">
        <h1 class="text-center text-3xl text-gray-900 font-bold">
          西王油低芥酸浓香菜籽油生产过程
        </h1>
        <p class="mt-2 text-center text-gray-600">
          实时监控、快速响应、质量保证
        </p>
      </header>

      <main class="mx-auto max-w-4xl">
        <!-- 生产过程时间线 -->
        <section class="mb-8 rounded-lg bg-white p-6 shadow">
          <h2 class="mb-4 text-2xl font-semibold">
            生产过程时间线
          </h2>
          <div class="space-y-4">
            <div
              v-for="(step, index) in productionSteps"
              :key="index"
              class="flex items-start"
            >
              <div class="mr-4 flex flex-col items-center">
                <div class="h-8 w-8 flex items-center justify-center rounded-full" :class="step.completed ? 'bg-green-500 text-white' : 'bg-gray-300'">
                  {{ index + 1 }}
                </div>
                <div v-if="index < productionSteps.length - 1" class="h-full w-0.5 bg-gray-300" />
              </div>
              <div class="flex-grow">
                <h3 class="text-lg font-medium" :class="step.completed ? 'text-green-600' : 'text-gray-600'">
                  {{ step.name }}
                </h3>
                <p class="text-sm text-gray-500">
                  {{ step.date }}
                </p>
                <button
                  class="mt-2 text-blue-500 hover:text-blue-600"
                  @click="toggleDetails(index)"
                >
                  {{ step.showDetails ? '隐藏详情' : '显示详情' }}
                </button>
                <div v-if="step.showDetails" class="mt-2 text-sm text-gray-600">
                  <p>{{ step.details }}</p>
                  <ul class="mt-2 list-disc list-inside">
                    <li v-for="(check, checkIndex) in step.qualityChecks" :key="checkIndex">
                      {{ check }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 质量控制检查点 -->
        <section class="mb-8 rounded-lg bg-white p-6 shadow">
          <h2 class="mb-4 text-2xl font-semibold">
            质量控制检查点
          </h2>
          <ul class="space-y-2">
            <li
              v-for="(check, index) in qualityControlChecks"
              :key="index"
              class="flex items-center"
            >
              <span
                class="mr-2 inline-block h-4 w-4 rounded-full"
                :class="check.passed ? 'bg-green-500' : 'bg-red-500'"
              />
              <span>{{ check.name }}</span>
            </li>
          </ul>
        </section>

        <!-- 问题报告和快速响应机制 -->
        <section class="mb-8 rounded-lg bg-white p-6 shadow">
          <h2 class="mb-4 text-2xl font-semibold">
            问题报告
          </h2>
          <form class="space-y-4" @submit.prevent="submitProblemReport">
            <div>
              <label for="problem-type" class="block text-sm text-gray-700 font-medium">问题类型</label>
              <select
                id="problem-type"
                v-model="problemReport.type"
                class="mt-1 block w-full border-gray-300 rounded-md py-2 pl-3 pr-10 text-base focus:border-blue-500 sm:text-sm focus:outline-none focus:ring-blue-500"
              >
                <option value="">
                  选择问题类型
                </option>
                <option value="quality">
                  质量问题
                </option>
                <option value="packaging">
                  包装问题
                </option>
                <option value="delivery">
                  配送问题
                </option>
                <option value="other">
                  其他
                </option>
              </select>
            </div>
            <div>
              <label for="problem-description" class="block text-sm text-gray-700 font-medium">问题描述</label>
              <textarea
                id="problem-description"
                v-model="problemReport.description"
                rows="3"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 sm:text-sm focus:ring-blue-500"
              />
            </div>
            <div>
              <Button type="submit" fluid>
                提交报告
              </Button>
            </div>
          </form>
        </section>
      </main>
    </div>
  </MainLayout>
</template>
