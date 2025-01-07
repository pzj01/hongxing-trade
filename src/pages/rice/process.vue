<script setup>
const productionSteps = reactive([
  {
    name: '育种与选种',
    date: '2023-01-15',
    completed: true,
    showDetails: false,
    details: '选择适合本地气候的优质稻种，进行种子处理以提高发芽率。',
    qualityChecks: ['种子纯度检查', '发芽率测试', '抗病性评估'],
  },
  {
    name: '插秧与田间管理',
    date: '2023-03-01',
    completed: true,
    showDetails: false,
    details: '采用先进的机械化插秧技术，科学管理水肥，定期监测病虫害。',
    qualityChecks: ['插秧密度检查', '水肥管理记录', '病虫害监测报告'],
  },
  {
    name: '收割',
    date: '2023-07-15',
    completed: true,
    showDetails: false,
    details: '根据稻谷成熟度确定最佳收割时间，使用现代化收割机进行收割。',
    qualityChecks: ['稻谷成熟度检测', '含水量测定', '收割机清洁度检查'],
  },
  {
    name: '稻谷干燥与储存',
    date: '2023-07-20',
    completed: true,
    showDetails: false,
    details: '使用先进的干燥设备控制稻谷含水量，采用低温储存技术延长保质期。',
    qualityChecks: ['干燥后含水量检测', '储存环境温湿度监测', '害虫防控检查'],
  },
  {
    name: '碾米与分级',
    date: '2023-08-01',
    completed: true,
    showDetails: false,
    details: '使用现代化碾米设备，根据大米颗粒大小和完整度进行分级。',
    qualityChecks: ['碾米率检测', '大米外观质量检查', '不完整米粒比例测定'],
  },
  {
    name: '包装与配送',
    date: '2023-08-10',
    completed: true,
    showDetails: false,
    details: '采用真空包装技术，使用环保包装材料，建立完善的冷链物流系统。',
    qualityChecks: ['包装密封性检查', '标签信息核对', '运输车辆卫生状况检查'],
  },
])

const qualityControlChecks = reactive([
  { name: '农药残留检测', passed: true },
  { name: '重金属含量检测', passed: true },
  { name: '加工设备卫生检查', passed: true },
  { name: '包装材料安全性检测', passed: true },
  { name: '产品抽样感官评价', passed: true },
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

provide('keyword', '大米')
</script>

<template>
  <MainLayout>
    <div class="min-h-screen bg-gray-100 px-4 py-8 lg:px-8 sm:px-6">
      <header class="mb-8">
        <h1 class="text-center text-3xl text-gray-900 font-bold">
          大米生产过程
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
