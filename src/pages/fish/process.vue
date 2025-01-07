<script setup>
const productionSteps = reactive([
  {
    name: '鱼苗培育',
    date: '2023-01-15',
    completed: true,
    showDetails: false,
    details: '选择优质鲈鱼亲本，在控温控氧的环境中进行人工繁育，培育健康鱼苗。',
    qualityChecks: ['亲本健康检查', '水质参数监测', '鱼苗成活率统计'],
  },
  {
    name: '池塘养殖',
    date: '2023-03-01',
    completed: true,
    showDetails: false,
    details: '将鱼苗放养到经过消毒处理的养殖池塘中，科学管理水质和投喂。',
    qualityChecks: ['水质日常检测', '饲料质量检查', '生长状况记录'],
  },
  {
    name: '疾病防控',
    date: '2023-05-15',
    completed: true,
    showDetails: false,
    details: '定期进行鱼病检查，采取预防措施，必要时进行治疗。',
    qualityChecks: ['定期抽样检查', '用药记录管理', '免疫接种情况'],
  },
  {
    name: '捕捞',
    date: '2023-07-10',
    completed: true,
    showDetails: false,
    details: '根据鲈鱼生长情况，选择最佳时机进行捕捞，确保鱼肉品质。',
    qualityChecks: ['鱼体大小均匀度', '肉质鲜度检测', '捕捞工具卫生检查'],
  },
  {
    name: '初加工与分级',
    date: '2023-07-11',
    completed: true,
    showDetails: false,
    details: '对捕获的鲈鱼进行清洗、去鳃鳍等初步处理，并按大小和品质进行分级。',
    qualityChecks: ['加工环境卫生检查', '分级标准执行情况', '鱼体外观质量检查'],
  },
  {
    name: '包装与配送',
    date: '2023-07-12',
    completed: true,
    showDetails: false,
    details: '使用食品级包装材料，采用保鲜技术进行包装，通过冷链物流系统配送。',
    qualityChecks: ['包装密封性检查', '保鲜剂使用记录', '运输温度监控'],
  },
])

const qualityControlChecks = reactive([
  { name: '重金属含量检测', passed: true },
  { name: '微生物指标检测', passed: true },
  { name: '药物残留检测', passed: true },
  { name: '感官品质评估', passed: true },
  { name: '冷链运输温度监控', passed: true },
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

provide('keyword', '鲈鱼')
</script>

<template>
  <MainLayout>
    <div class="min-h-screen bg-gray-100 px-4 py-8 lg:px-8 sm:px-6">
      <header class="mb-8">
        <h1 class="text-center text-3xl text-gray-900 font-bold">
          鲈鱼生产过程
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
