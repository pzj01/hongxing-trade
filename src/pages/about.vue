<script setup lang="ts">
import { ref } from 'vue'

const companyInfo = ref({
  name: '萍乡优达食品配送有限公司',
  foundedYear: 2023,
  mission: '为客户提供安全、优质、快捷的食品配送服务，让健康食材快速到家。',
  vision: '成为江西省领先的食品配送服务提供商，为更多的家庭和企业带来便利与健康。',
})

const milestones = ref([
  { year: 2023, event: '公司成立，开始为萍乡市提供食品配送服务' },
  { year: 2024, event: '服务范围覆盖整个江西省，日均订单量突破10000' },
])

const teamMembers = ref([
  { name: '张伟', position: '创始人兼CEO', bio: '拥有15年食品行业经验，致力于推动企业创新与发展。' },
  { name: '李娜', position: '运营总监', bio: '专注于优化配送流程，提升客户满意度。' },
  { name: '王强', position: '采购经理', bio: '与多家优质供应商建立长期合作关系，确保食材品质。' },
  { name: '刘芳', position: '客户服务主管', bio: '带领团队为客户提供专业、贴心的服务。' },
])

const values = ref([
  { title: '质量至上', desc: '严格把控每一个环节，确保食品安全与新鲜。' },
  { title: '客户为先', desc: '以客户需求为导向，不断优化服务体验。' },
  { title: '创新驱动', desc: '拥抱新技术，持续改进配送效率与服务质量。' },
  { title: '诚信经营', desc: '坚持透明定价，诚实守信，赢得客户信赖。' },
])
</script>

<template>
  <MainLayout>
    <main>
      <!-- 公司简介 -->
      <section class="mx-auto max-w-7xl px-4 py-12 lg:px-8 sm:px-6">
        <div class="overflow-hidden bg-white shadow sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6">
            <h2 class="text-2xl text-gray-900 font-semibold">
              {{ companyInfo.name }}
            </h2>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">
              成立于 {{ companyInfo.foundedYear }} 年
            </p>
          </div>
          <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl class="sm:divide-y sm:divide-gray-200">
              <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                <dt class="text-sm text-gray-500 font-medium">
                  使命
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {{ companyInfo.mission }}
                </dd>
              </div>
              <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                <dt class="text-sm text-gray-500 font-medium">
                  愿景
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {{ companyInfo.vision }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <!-- 公司价值观 -->
      <section class="mx-auto max-w-7xl px-4 py-12 lg:px-8 sm:px-6">
        <h2 class="mb-6 text-2xl text-gray-900 font-semibold">
          我们的价值观
        </h2>
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-4 sm:grid-cols-2">
          <div v-for="value in values" :key="value.title" class="overflow-hidden rounded-lg bg-white shadow">
            <div class="px-4 py-5 sm:p-6">
              <h3 class="text-lg text-gray-900 font-medium">
                {{ value.title }}
              </h3>
              <p class="mt-2 text-sm text-gray-500">
                {{ value.desc }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 公司发展历程 -->
      <section class="mx-auto max-w-7xl px-4 py-12 lg:px-8 sm:px-6">
        <h2 class="mb-6 text-2xl text-gray-900 font-semibold">
          公司发展历程
        </h2>
        <div class="flow-root">
          <ul class="-mb-8">
            <li v-for="(milestone, index) in milestones" :key="milestone.year">
              <div class="relative pb-8">
                <span v-if="index !== milestones.length - 1" class="absolute left-4 top-4 h-full w-0.5 bg-gray-200 -ml-px" aria-hidden="true" />
                <div class="relative flex space-x-3">
                  <div>
                    <span class="h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 ring-8 ring-white">
                      <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                      </svg>
                    </span>
                  </div>
                  <div class="min-w-0 flex flex-1 justify-between pt-1.5 space-x-4">
                    <div>
                      <p class="text-sm text-gray-500">
                        {{ milestone.event }}
                      </p>
                    </div>
                    <div class="whitespace-nowrap text-right text-sm text-gray-500">
                      <time>{{ milestone.year }}</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <!-- 管理团队 -->
      <section class="mx-auto max-w-7xl px-4 py-12 lg:px-8 sm:px-6">
        <h2 class="mb-6 text-2xl text-gray-900 font-semibold">
          我们的团队
        </h2>
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-4 sm:grid-cols-2">
          <div v-for="member in teamMembers" :key="member.name" class="text-center">
            <div class="space-y-4">
              <img class="mx-auto h-40 w-40 rounded-full" src="https://g-b5z0x2cbbqj.vusercontent.net/placeholder.svg?height=160&width=160" alt="">
              <div class="space-y-2">
                <div class="text-lg font-medium leading-6 space-y-1">
                  <h3>{{ member.name }}</h3>
                  <p class="text-blue-600">
                    {{ member.position }}
                  </p>
                </div>
                <p class="text-sm text-gray-500">
                  {{ member.bio }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </MainLayout>
</template>
