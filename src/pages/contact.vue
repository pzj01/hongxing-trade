<script setup>
import { ref } from 'vue'

const contactInfo = ref({
  address: '江西省萍乡市安源区东大街张家大屋社区宝塔坡6号城南客运站综合市场A栋',
  phone: '400-888-9999',
  email: 'contact@pxfooddelivery.com',
  workingHours: '周一至周五: 9:00 - 18:00',
})

const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const isSubmitted = ref(false)

function handleSubmit() {
  // 这里应该是发送表单数据到服务器的逻辑
  // 为了演示，我们只是设置 isSubmitted 为 true
  isSubmitted.value = true
  // 重置表单
  formData.value = {
    name: '',
    email: '',
    phone: '',
    message: '',
  }
}
</script>

<template>
  <MainLayout>
    <main class="mx-auto max-w-5xl py-6 lg:px-8 sm:px-6">
      <div class="overflow-hidden bg-white shadow sm:rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <!-- 联系表单 -->
            <div>
              <h2 class="mb-4 text-2xl text-gray-900 font-semibold">
                给我们留言
              </h2>
              <form class="space-y-4" @submit.prevent="handleSubmit">
                <div>
                  <label for="name" class="block text-sm text-gray-700 font-medium">姓名</label>
                  <input
                    id="name" v-model="formData.name" type="text" required
                    class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-blue-500 sm:text-sm focus:outline-none focus:ring-blue-500"
                  >
                </div>
                <div>
                  <label for="email" class="block text-sm text-gray-700 font-medium">电子邮箱</label>
                  <input
                    id="email" v-model="formData.email" type="email" required
                    class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-blue-500 sm:text-sm focus:outline-none focus:ring-blue-500"
                  >
                </div>
                <div>
                  <label for="phone" class="block text-sm text-gray-700 font-medium">电话</label>
                  <input
                    id="phone" v-model="formData.phone" type="tel"
                    class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-blue-500 sm:text-sm focus:outline-none focus:ring-blue-500"
                  >
                </div>
                <div>
                  <label for="message" class="block text-sm text-gray-700 font-medium">留言</label>
                  <textarea
                    id="message" v-model="formData.message" rows="4" required
                    class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-blue-500 sm:text-sm focus:outline-none focus:ring-blue-500"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    class="w-full flex justify-center border border-transparent rounded-md bg-blue-600 px-4 py-2 text-sm text-white font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    提交
                  </button>
                </div>
              </form>
              <div v-if="isSubmitted" class="mt-4 rounded-md bg-green-100 p-4">
                <p class="text-green-700">
                  感谢您的留言，我们会尽快回复您！
                </p>
              </div>
            </div>

            <!-- 联系信息和地图 -->
            <div>
              <h2 class="mb-4 text-2xl text-gray-900 font-semibold">
                联系方式
              </h2>
              <div class="space-y-4">
                <p><strong>地址：</strong>{{ contactInfo.address }}</p>
                <p><strong>电话：</strong>{{ contactInfo.phone }}</p>
                <p><strong>邮箱：</strong>{{ contactInfo.email }}</p>
                <p><strong>工作时间：</strong>{{ contactInfo.workingHours }}</p>
              </div>

              <!-- 模拟地图 -->
              <div class="mt-6">
                <h3 class="mb-2 text-lg text-gray-900 font-medium">
                  我们的位置
                </h3>
                <LeafletMap />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </MainLayout>
</template>
