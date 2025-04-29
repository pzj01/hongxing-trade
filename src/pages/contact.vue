<script setup>
import { useVuelidate } from '@vuelidate/core'
import { email, helpers, required } from '@vuelidate/validators'
import { useToast } from 'primevue/usetoast'

// 表单数据
const formData = ref({
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
  agreement: false,
})

// 表单验证规则
const rules = computed(() => {
  return {
    name: { required: helpers.withMessage('请输入您的姓名', required) },
    phone: { required: helpers.withMessage('请输入您的电话号码', required) },
    email: {
      required: helpers.withMessage('请输入您的邮箱地址', required),
      email: helpers.withMessage('请输入有效的邮箱地址', email),
    },
    subject: { required: helpers.withMessage('请选择主题', required) },
    message: { required: helpers.withMessage('请输入消息内容', required) },
    agreement: {
      sameAs: helpers.withMessage('请同意隐私政策', value => value === true),
    },
  }
})

const v$ = useVuelidate(rules, formData)

// 主题选项
const subjectOptions = ref([
  { name: '产品咨询', value: 'product' },
  { name: '售后服务', value: 'service' },
  { name: '商务合作', value: 'business' },
  { name: '投诉建议', value: 'complaint' },
  { name: '其他', value: 'other' },
])

// 社交媒体链接
const socialMedia = ref([
  { name: '微信', icon: 'pi pi-comments', link: '#' },
  { name: '微博', icon: 'pi pi-twitter', link: '#' },
  { name: '抖音', icon: 'pi pi-video', link: '#' },
  { name: '小红书', icon: 'pi pi-book', link: '#' },
])

// 常见问题
const faqs = ref([
  {
    question: '你们的产品有没有提供样品？',
    answer: '是的，我们为有意向的客户提供产品样品。您可以通过联系我们的客服或者在线填写样品申请表来获取样品。根据产品类型和数量，我们可能会收取少量样品费用，这些费用在后续大批量采购时可以抵扣。',
  },
  {
    question: '你们的配送范围是哪些地区？',
    answer: '我们的配送服务覆盖全国大部分地区，包括直辖市、省会城市和大部分地级市。偏远地区可能需要额外的配送时间和费用。具体配送时间和费用，请在下单时查看系统提示或联系客服咨询。',
  },
  {
    question: '如何申请成为你们的经销商？',
    answer: '成为我们的经销商，您需要填写经销商申请表，提供相关营业执照和资质证明。我们的市场部门会对您的申请进行评估，并在7个工作日内给予回复。成为经销商后，您将享受专业的培训支持和优惠的批发价格。',
  },
  {
    question: '产品有质量问题如何处理？',
    answer: '如果您收到的产品有任何质量问题，请在收到产品后7天内联系我们的客服部门。请提供产品批次号、购买凭证和问题描述（最好附上照片或视频）。我们会根据情况为您提供退换货或其他解决方案。',
  },
  {
    question: '你们接受哪些支付方式？',
    answer: '我们接受多种支付方式，包括银行转账、支付宝、微信支付、信用卡等。对于大额订单，我们也支持分期付款，具体付款方式和条件可与我们的销售人员协商。',
  },
])

// 状态变量
const loading = ref(false)
const showSuccessDialog = ref(false)
const mapLoaded = ref(false)
const mapContainer = ref(null)
const toast = useToast()

// 提交表单
async function submitForm() {
  const isValid = await v$.value.$validate()
  if (!isValid)
    return

  loading.value = true

  try {
    // 模拟API请求
    await new Promise(resolve => setTimeout(resolve, 1500))

    // 显示成功对话框
    showSuccessDialog.value = true

    // 重置表单
    formData.value = {
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
      agreement: false,
    }
    v$.value.$reset()
  }
  catch (error) {
    console.error(error)
    // 显示错误提示
    toast.add({
      severity: 'error',
      summary: '提交失败',
      detail: '发送消息时出现错误，请稍后再试',
      life: 3000,
    })
  }
  finally {
    loading.value = false
  }
}

// 关闭成功对话框
function closeSuccessDialog() {
  showSuccessDialog.value = false
}

// 打开导航
// function openNavigation() {
//   // 这里可以实现打开地图导航的功能
//   // 例如打开百度地图或高德地图的导航链接
//   window.open('https://map.baidu.com/search/萍乡市某某区某某街道123号', '_blank')
// }

// 拨打客服热线
function callCustomerService() {
  window.location.href = 'tel:0799-1234567'
}

// 打开在线客服
function openOnlineChat() {
  // 这里可以实现打开在线客服系统的功能
  toast.add({
    severity: 'info',
    summary: '在线客服',
    detail: '在线客服功能即将上线，敬请期待',
    life: 3000,
  })
}

// 加载地图
onMounted(() => {
  let mapPlaceholder
  // 模拟地图加载
  setTimeout(() => {
    if (mapContainer.value) {
      // 这里可以实现实际的地图加载逻辑
      // 例如使用百度地图、高德地图或腾讯地图的API

      // 创建一个简单的地图占位符
      mapPlaceholder = document.createElement('div')
      mapPlaceholder.className = 'h-full w-full flex items-center justify-center bg-gray-100'
      mapPlaceholder.innerHTML = `
        <div class="text-center">
          <i class="pi pi-map-marker text-green-500 text-5xl mb-2"></i>
          <h3 class="text-lg font-semibold text-gray-800">萍乡洪星商贸有限公司</h3>
          <p class="text-gray-600">江西省萍乡市某某区某某街道123号</p>
        </div>
      `

      mapContainer.value.innerHTML = ''
      mapContainer.value.appendChild(mapPlaceholder)
      mapLoaded.value = true
    }
  }, 1000)
  onUnmounted(() => {
    mapPlaceholder = null
  })
})
</script>

<template>
  <MainLayout>
    <div class="contact-content">
      <!-- 页面标题 -->
      <section class="from-green-50 to-green-100 bg-gradient-to-r py-12">
        <div class="mx-auto px-4 text-center container">
          <h1 class="mb-4 text-4xl text-green-800 font-bold">
            联系我们
          </h1>
          <p class="mx-auto max-w-2xl text-gray-700">
            如有任何问题或建议，欢迎随时与我们联系，我们将竭诚为您服务
          </p>
        </div>
      </section>

      <!-- 联系信息和表单 -->
      <section class="bg-white py-16">
        <div class="mx-auto px-4 container">
          <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <!-- 联系信息 -->
            <div>
              <h2 class="mb-6 text-2xl text-gray-800 font-bold">
                联系方式
              </h2>

              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="mr-4 h-12 w-12 flex items-center justify-center rounded-full bg-green-100">
                    <i class="pi pi-map-marker text-xl text-green-600" />
                  </div>
                  <div>
                    <h3 class="mb-1 text-lg text-gray-800 font-semibold">
                      公司地址
                    </h3>
                    <p class="text-gray-600">
                      江西省萍乡市安源区城南农副产品批发大市场
                    </p>
                    <p class="text-gray-600">
                      邮编: 337000
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="mr-4 h-12 w-12 flex items-center justify-center rounded-full bg-green-100">
                    <i class="pi pi-phone text-xl text-green-600" />
                  </div>
                  <div>
                    <h3 class="mb-1 text-lg text-gray-800 font-semibold">
                      联系电话
                    </h3>
                    <p class="text-gray-600">
                      客服热线: 0799-1234567
                    </p>
                    <p class="text-gray-600">
                      售后服务: 0799-7654321
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="mr-4 h-12 w-12 flex items-center justify-center rounded-full bg-green-100">
                    <i class="pi pi-envelope text-xl text-green-600" />
                  </div>
                  <div>
                    <h3 class="mb-1 text-lg text-gray-800 font-semibold">
                      电子邮箱
                    </h3>
                    <p class="text-gray-600">
                      客户服务: service@hongxing.com
                    </p>
                    <p class="text-gray-600">
                      商务合作: business@hongxing.com
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="mr-4 h-12 w-12 flex items-center justify-center rounded-full bg-green-100">
                    <i class="pi pi-clock text-xl text-green-600" />
                  </div>
                  <div>
                    <h3 class="mb-1 text-lg text-gray-800 font-semibold">
                      营业时间
                    </h3>
                    <p class="text-gray-600">
                      周一至周五: 9:00 - 18:00
                    </p>
                    <p class="text-gray-600">
                      周六至周日: 10:00 - 16:00
                    </p>
                  </div>
                </div>
              </div>

              <!-- 社交媒体链接 -->
              <div class="mt-8">
                <h3 class="mb-3 text-lg text-gray-800 font-semibold">
                  关注我们
                </h3>
                <div class="flex space-x-4">
                  <a
                    v-for="(social, index) in socialMedia"
                    :key="index"
                    :href="social.link"
                    class="h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 transition-colors duration-300 hover:bg-green-100"
                  >
                    <i class="text-gray-600 hover:text-green-600" :class="[social.icon]" />
                  </a>
                </div>
              </div>
            </div>

            <!-- 联系表单 -->
            <div>
              <h2 class="mb-6 text-2xl text-gray-800 font-bold">
                发送消息
              </h2>

              <form class="space-y-4" @submit.prevent="submitForm">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label for="name" class="mb-1 block text-sm text-gray-700 font-medium">姓名</label>
                    <InputText
                      id="name"
                      v-model="formData.name"
                      class="w-full"
                      :class="{ 'p-invalid': v$.name.$invalid && v$.name.$dirty }"
                      aria-describedby="name-error"
                    />
                    <small
                      v-if="v$.name.$invalid && v$.name.$dirty"
                      id="name-error"
                      class="p-error mt-1 block"
                    >
                      {{ v$.name.$errors[0].$message }}
                    </small>
                  </div>
                  <div>
                    <label for="phone" class="mb-1 block text-sm text-gray-700 font-medium">电话</label>
                    <InputText
                      id="phone"
                      v-model="formData.phone"
                      class="w-full"
                      :class="{ 'p-invalid': v$.phone.$invalid && v$.phone.$dirty }"
                      aria-describedby="phone-error"
                    />
                    <small
                      v-if="v$.phone.$invalid && v$.phone.$dirty"
                      id="phone-error"
                      class="p-error mt-1 block"
                    >
                      {{ v$.phone.$errors[0].$message }}
                    </small>
                  </div>
                </div>

                <div>
                  <label for="email" class="mb-1 block text-sm text-gray-700 font-medium">邮箱</label>
                  <InputText
                    id="email"
                    v-model="formData.email"
                    class="w-full"
                    :class="{ 'p-invalid': v$.email.$invalid && v$.email.$dirty }"
                    aria-describedby="email-error"
                  />
                  <small
                    v-if="v$.email.$invalid && v$.email.$dirty"
                    id="email-error"
                    class="p-error mt-1 block"
                  >
                    {{ v$.email.$errors[0].$message }}
                  </small>
                </div>

                <div>
                  <label for="subject" class="mb-1 block text-sm text-gray-700 font-medium">主题</label>
                  <Dropdown
                    id="subject"
                    v-model="formData.subject"
                    :options="subjectOptions"
                    option-label="name"
                    option-value="value"
                    placeholder="请选择主题"
                    class="w-full"
                    :class="{ 'p-invalid': v$.subject.$invalid && v$.subject.$dirty }"
                    aria-describedby="subject-error"
                  />
                  <small
                    v-if="v$.subject.$invalid && v$.subject.$dirty"
                    id="subject-error"
                    class="p-error mt-1 block"
                  >
                    {{ v$.subject.$errors[0].$message }}
                  </small>
                </div>

                <div>
                  <label for="message" class="mb-1 block text-sm text-gray-700 font-medium">消息内容</label>
                  <Textarea
                    id="message"
                    v-model="formData.message"
                    rows="5"
                    class="w-full"
                    :class="{ 'p-invalid': v$.message.$invalid && v$.message.$dirty }"
                    aria-describedby="message-error"
                  />
                  <small
                    v-if="v$.message.$invalid && v$.message.$dirty"
                    id="message-error"
                    class="p-error mt-1 block"
                  >
                    {{ v$.message.$errors[0].$message }}
                  </small>
                </div>

                <div class="flex items-center">
                  <Checkbox
                    id="agreement"
                    v-model="formData.agreement"
                    :binary="true"
                    :class="{ 'p-invalid': v$.agreement.$invalid && v$.agreement.$dirty }"
                    aria-describedby="agreement-error"
                  />
                  <label for="agreement" class="ml-2 text-sm text-gray-700">
                    我同意根据<a href="#" class="text-green-600 hover:underline">隐私政策</a>处理我的个人数据
                  </label>
                </div>
                <small
                  v-if="v$.agreement.$invalid && v$.agreement.$dirty"
                  id="agreement-error"
                  class="p-error mt-1 block"
                >
                  {{ v$.agreement.$errors[0].$message }}
                </small>

                <Button
                  type="submit"
                  label="发送消息"
                  icon="pi pi-send"
                  class="p-button-success w-full"
                  :loading="loading"
                />
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- 地图 -->
      <section class="bg-gray-50 py-16">
        <div class="mx-auto px-4 container">
          <div class="mb-12 text-center">
            <h2 class="mb-4 text-3xl text-gray-800 font-bold">
              我们的位置
            </h2>
            <p class="mx-auto max-w-2xl text-gray-600">
              欢迎前来参观我们的公司，以下是详细的位置信息
            </p>
          </div>

          <div class="overflow-hidden rounded-lg bg-white shadow-md">
            <!-- 地图容器 -->
            <div class="h-96 w-full bg-gray-200">
              <LeafletMap />
            </div>
            <div class="bg-white p-6">
              <div class="flex flex-col justify-between md:flex-row md:items-center">
                <div>
                  <h3 class="mb-1 text-lg text-gray-800 font-semibold">
                    萍乡洪星商贸有限公司
                  </h3>
                  <p class="text-gray-600">
                    江西省萍乡市安源区城南农副产品批发大市场南门旁
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 常见问题 -->
      <section class="bg-white py-16">
        <div class="mx-auto px-4 container">
          <div class="mb-12 text-center">
            <h2 class="mb-4 text-3xl text-gray-800 font-bold">
              常见问题
            </h2>
            <p class="mx-auto max-w-2xl text-gray-600">
              以下是我们的客户经常咨询的问题，希望能帮助到您
            </p>
          </div>

          <div class="mx-auto max-w-3xl">
            <Accordion value="0">
              <AccordionPanel v-for="(faq, index) in faqs" :key="index" :value="index">
                <AccordionHeader>{{ faq.question }}</AccordionHeader>
                <AccordionContent>
                  <p class="text-gray-700">
                    {{ faq.answer }}
                  </p>
                </AccordionContent>
              </AccordionPanel>
            </Accordion>
          </div>
        </div>
      </section>

      <!-- 联系我们CTA -->
      <section class="from-green-600 to-green-200 bg-gradient-to-r py-16 text-white">
        <div class="mx-auto px-4 text-center container">
          <h2 class="mb-6 text-3xl font-bold">
            还有其他问题？
          </h2>
          <p class="mx-auto mb-8 max-w-2xl text-xl">
            如果您有任何其他问题或需求，请随时与我们联系，我们的客服团队将竭诚为您服务
          </p>
          <div class="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              label="拨打客服热线"
              icon="pi pi-phone"
              class="p-button-rounded p-button-lg"
              @click="callCustomerService"
            />
            <Button
              label="在线客服"
              icon="pi pi-comments"
              class="p-button-rounded p-button-lg p-button-outlined text-white! hover:text-green-500!"
              @click="openOnlineChat"
            />
          </div>
        </div>
      </section>

      <!-- 提交成功对话框 -->
      <Dialog
        v-model:visible="showSuccessDialog"
        :modal="true"
        :closable="false"
        :dismissable-mask="false"
        header="提交成功"
        :style="{ width: '90%', maxWidth: '400px' }"
      >
        <div class="flex flex-col items-center p-4">
          <i class="pi pi-check-circle mb-4 text-5xl text-green-500" />
          <h3 class="mb-2 text-xl text-gray-800 font-semibold">
            消息已发送
          </h3>
          <p class="mb-4 text-center text-gray-600">
            感谢您的留言，我们会尽快与您联系。
          </p>
          <Button
            label="确定"
            class="p-button-success"
            @click="closeSuccessDialog"
          />
        </div>
      </Dialog>

      <!-- Toast消息 -->
      <Toast position="bottom-right" />
    </div>
  </MainLayout>
</template>
