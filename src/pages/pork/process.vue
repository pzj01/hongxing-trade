<script setup>
const productionSteps = reactive([
  {
    name: '养殖',
    date: '2023-01-15',
    completed: true,
    showDetails: false,
    details: '选择优质品种猪，采用科学的饲养方法，确保猪只健康成长。',
    qualityChecks: ['品种纯度检查', '生长状况评估', '饲料质量检测'],
  },
  {
    name: '屠宰',
    date: '2023-06-01',
    completed: true,
    showDetails: false,
    details: '采用人道屠宰方法，确保肉质新鲜卫生。',
    qualityChecks: ['屠宰前健康检查', '卫生条件检查', '屠宰过程监控'],
  },
  {
    name: '初步加工',
    date: '2023-06-02',
    completed: true,
    showDetails: false,
    details: '对猪肉进行分割、去骨等初步加工，为后续处理做准备。',
    qualityChecks: ['分割精度检查', '肉质新鲜度检测', '加工环境卫生检查'],
  },
  {
    name: '冷却与储存',
    date: '2023-06-03',
    completed: true,
    showDetails: false,
    details: '使用先进的冷却设备迅速降低猪肉温度，采用低温储存技术延长保质期。',
    qualityChecks: ['冷却速度监测', '储存温度记录', '微生物含量检测'],
  },
  {
    name: '分级与包装',
    date: '2023-06-04',
    completed: true,
    showDetails: false,
    details: '根据猪肉部位和品质进行分级，采用食品级包装材料进行真空包装。',
    qualityChecks: ['分级标准执行检查', '包装材料安全性检测', '真空度检测'],
  },
  {
    name: '配送',
    date: '2023-06-05',
    completed: true,
    showDetails: false,
    details: '使用冷链物流系统，确保猪肉在运输过程中保持新鲜。',
    qualityChecks: ['运输车辆温度监控', '配送时效性检查', '到货质量抽检'],
  },
])

const qualityControlChecks = reactive([
  { name: '抗生素残留检测', passed: true },
  { name: '瘦肉精含量检测', passed: true },
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

provide('keyword', '猪肉')
</script>

<template>
  <MainLayout>
    <div class="min-h-screen bg-gray-100 px-4 py-8 lg:px-8 sm:px-6">
      <header class="mb-8">
        <h1 class="text-center text-3xl text-gray-900 font-bold">
          猪肉生产过程
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
