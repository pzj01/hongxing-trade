<script setup>
const router = useRouter()

// 导航方法
function navigateToContact() {
  router.push('/contact')
}

function navigateToProducts() {
  router.push('/products')
}

// 公司图片
const companyImage = ref('/company-building.png')

// 企业文化数据
const companyCulture = ref([
  {
    title: '诚信经营',
    description: '诚实守信是我们的立业之本，我们始终坚持诚信经营，与客户、供应商和员工建立长期互信关系。',
    icon: 'pi pi-check-circle',
  },
  {
    title: '品质至上',
    description: '我们对产品质量精益求精，严格把控每一个环节，确保为消费者提供安全、健康、美味的食品。',
    icon: 'pi pi-star',
  },
  {
    title: '创新发展',
    description: '我们不断创新，紧跟市场趋势，开发新产品，优化服务流程，为客户创造更多价值。',
    icon: 'pi pi-bolt',
  },
])

// 发展历程数据
const milestones = ref([
  {
    year: '2021',
    title: '公司成立',
    description: '萍乡洪星商贸有限公司正式成立，开始从事食品批发业务。',
    image: '/milestone-2010.svg',
  },
  {
    year: '2023',
    title: '业务扩展',
    description: '业务范围扩展至江西全省，建立了第一个现代化仓储中心。',
    image: '/milestone-2013.svg',
  },
  {
    year: '2024',
    title: '电商平台上线',
    description: '公司电子商务平台正式上线，开始线上销售业务。',
    image: '/milestone-2016.svg',
  },
  {
    year: '2025',
    title: '品牌升级',
    description: '完成品牌升级，推出自有品牌产品系列，获得市场广泛认可。',
    image: '/milestone-2019.svg',
  },
])

// 团队成员数据
const teamMembers = ref([
  {
    name: '张美霞',
    position: '创始人兼总经理',
    description: '拥有20年食品行业经验，负责公司整体战略规划和业务发展。',
    photo: '/team-ceo.svg',
    social: [
      { icon: 'pi pi-facebook', link: '#' },
      { icon: 'pi pi-twitter', link: '#' },
      { icon: 'pi pi-linkedin', link: '#' },
    ],
  },
  {
    name: '李明',
    position: '运营总监',
    description: '负责公司日常运营管理，确保各部门高效协作。',
    photo: '/team-coo.svg',
    social: [
      { icon: 'pi pi-facebook', link: '#' },
      { icon: 'pi pi-linkedin', link: '#' },
    ],
  },
  {
    name: '王丽',
    position: '市场总监',
    description: '负责品牌推广和市场营销策略，拥有丰富的市场营销经验。',
    photo: '/team-marketing.svg',
    social: [
      { icon: 'pi pi-twitter', link: '#' },
      { icon: 'pi pi-instagram', link: '#' },
    ],
  },
  {
    name: '陈伟',
    position: '采购经理',
    description: '负责产品采购和供应链管理，确保产品质量和供应稳定。',
    photo: '/team-procurement.svg',
    social: [
      { icon: 'pi pi-linkedin', link: '#' },
    ],
  },
])

// 企业荣誉数据
const awards = ref([
  {
    title: '江西省优秀民营企业',
    description: '因在促进地方经济发展和创造就业机会方面的突出贡献而获得此荣誉。',
    year: '2022年',
    icon: 'pi pi-trophy',
  },
  {
    title: '食品安全示范单位',
    description: '在食品安全管理方面表现突出，被评为市级食品安全示范单位。',
    year: '2021年',
    icon: 'pi pi-shield',
  },
  {
    title: '消费者信赖品牌',
    description: '通过消费者投票评选，获得"消费者最信赖品牌"称号。',
    year: '2023年',
    icon: 'pi pi-heart',
  },
  {
    title: '电子商务示范企业',
    description: '在电子商务应用和创新方面表现突出，被评为示范企业。',
    year: '2024年',
    icon: 'pi pi-desktop',
  },
  {
    title: '年度纳税先进单位',
    description: '因依法诚信纳税，被评为年度纳税先进单位。',
    year: '2021年',
    icon: 'pi pi-chart-bar',
  },
  {
    title: '质量管理先进企业',
    description: '在质量管理体系建设和实施方面表现突出，获得此荣誉。',
    year: '2022年',
    icon: 'pi pi-check-square',
  },
])

// 证书类型
const certificateTypes = ref([
  { label: '全部', value: 'all' },
  { label: '食品安全', value: 'safety' },
  { label: '质量管理', value: 'quality' },
  { label: '环境管理', value: 'environment' },
  { label: '其他', value: 'other' },
])

// 当前选中的证书类型
const selectedType = ref('all')

// 证书数据
const certificates = ref([
  {
    name: '食品安全管理体系认证证书',
    type: 'safety',
    image: '/certificates/food-safety-management-certificate.png',
    issuedBy: '华中国际认证检验集团有限公司',
    issuedDate: '2025-01-26',
    validUntil: '2028-01-25',
    description: '本证书证明持证组织已建立并实施符合 ISO 22000:2018 标准的食品安全管理体系，涵盖食品生产、加工及供应链管理的全过程。通过系统化的危害分析与关键控制点（HACCP）方法，组织能够有效识别、评估和控制食品安全风险，确保食品符合安全和质量要求。本认证由华中国际认证检验集团有限公司颁发，验证了组织在食品安全管理方面的卓越能力，适用于国内外食品相关行业，提升市场竞争力和消费者信任。',
  },
  {
    name: '环境管理体系认证证书',
    type: 'environment',
    image: '/certificates/environmental-management-certificate.png',
    issuedBy: '北京通贯验证有限公司',
    issuedDate: '2025-01-03',
    validUntil: '2028-01-02',
    description: '本证书证明持证组织已建立并实施符合 ISO 14001:2015 标准的环境管理体系，覆盖组织运营中的环境影响管理全过程。通过系统化的环境目标设定、风险评估和持续改进，组织能够有效降低环境负荷，遵守相关法律法规，并提升环境绩效。本认证由华中国际认证检验集团有限公司颁发，验证了组织在环境管理与可持续发展方面的卓越能力，适用于各类行业，增强市场竞争力和社会责任形象。',
  },
  {
    name: '质量管理体系认证证书',
    type: 'quality',
    image: '/certificates/quality-management-certificate.png',
    issuedBy: '北京通贯验证有限公司',
    issuedDate: '2025-01-03',
    validUntil: '2028-01-02',
    description: '本证书证明持证组织已建立并实施符合 ISO 9001:2015 标准的质量管理体系，覆盖产品和服务交付的全过程。通过系统化的流程管理、客户满意度提升和持续改进，组织能够确保产品质量稳定，满足客户期望并符合相关法规要求。本认证由华中国际认证检验集团有限公司颁发，验证了组织在质量管理方面的卓越能力，适用于各类行业，提升市场竞争力和品牌信誉。',
  },
  {
    name: '职业健康安全管理体系认证证书',
    type: 'safety',
    image: '/certificates/occupational-health-safety-certificate.png',
    issuedBy: '北京通贯验证有限公司',
    issuedDate: '2025-01-03',
    validUntil: '2028-01-02',
    description: '本证书证明持证组织已建立并实施符合 ISO 45001:2018 标准的职业健康安全管理体系，覆盖工作场所的健康与安全管理全过程。通过系统化的风险评估、危害控制和持续改进，组织能够有效预防职业伤害和疾病，保障员工及相关方的健康与安全，并符合相关法律法规要求。本认证由华中国际认证检验集团有限公司颁发，验证了组织在职业健康安全管理方面的卓越能力，适用于各类行业，提升员工福祉和企业社会责任形象。',
  },
  {
    name: '营业执照',
    type: 'other',
    image: '/certificates/business-license.png',
    issuedBy: '国家市场监督管理总局',
    issuedDate: '2021-08-27',
    validUntil: '长期有效',
    description: '本营业执照证明持证组织已依法在国家市场监督管理部门注册登记，具备合法经营资格。证书涵盖企业的基本信息，包括法定名称、注册资本、经营范围和住所等，确认其在法律法规框架内开展商业活动的权利。本执照由国家市场监督管理总局或其授权机构颁发，是企业合法运营的核心凭证，适用于各类商业活动，保障市场交易的合规性和透明度。',
  },
])

// 对话框控制
const dialogVisible = ref(false)
const selectedCertificate = ref(null)

// 筛选后的证书
const filteredCertificates = computed(() => {
  if (selectedType.value === 'all') {
    return certificates.value
  }
  else {
    return certificates.value.filter(cert => cert.type === selectedType.value)
  }
})

// 筛选证书
function filterCertificates(type) {
  selectedType.value = type
}

// 打开证书详情
function openCertificate(certificate) {
  selectedCertificate.value = certificate
  dialogVisible.value = true
}

// 获取证书类型名称
function getCertificateTypeName(type) {
  const found = certificateTypes.value.find(t => t.value === type)
  return found ? found.label : type
}

// 获取徽章样式
function getBadgeSeverity(type) {
  switch (type) {
    case 'safety':
      return 'success'
    case 'quality':
      return 'info'
    case 'environment':
      return 'secondary'
    default:
      return 'info'
  }
}
</script>

<template>
  <MainLayout>
    <div class="about-content">
      <!-- 页面标题 -->
      <section class="from-green-50 to-green-100 bg-gradient-to-r py-12">
        <div class="mx-auto px-4 text-center container">
          <h1 class="mb-4 text-4xl text-green-800 font-bold">
            关于我们
          </h1>
          <p class="mx-auto max-w-2xl text-gray-700">
            了解萍乡洪星商贸有限公司的发展历程、企业文化和团队风采
          </p>
        </div>
      </section>

      <!-- 公司简介 -->
      <section class="bg-white py-16">
        <div class="mx-auto px-4 container">
          <div class="flex flex-col items-center gap-12 md:flex-row">
            <div class="md:w-1/2">
              <img
                :src="companyImage"
                alt="萍乡洪星商贸有限公司"
                class="h-96 w-full rounded-lg object-cover shadow-lg"
              >
            </div>
            <div class="md:w-1/2">
              <h2 class="mb-6 text-3xl text-gray-800 font-bold">
                公司简介
              </h2>
              <div class="text-gray-700 space-y-4">
                <p>
                  萍乡洪星商贸有限公司成立于2021年，是一家专注于食品销售的企业。多年来，我们始终坚持"质量第一，客户至上"的经营理念，致力于为消费者提供安全、健康、美味的食品。
                </p>
                <p>
                  公司总部位于江西省萍乡市，拥有现代化的仓储物流中心和完善的销售网络，业务覆盖江西全省及周边地区。我们与国内多家知名食品生产企业建立了长期稳定的合作关系，确保产品质量和供应稳定。
                </p>
                <p>
                  我们的产品种类丰富，包括休闲食品、坚果炒货、饮品冲调、地方特产等多个品类，满足不同消费者的需求。无论是日常食用还是节日送礼，都能在洪星商贸找到合适的选择。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 企业文化 -->
      <section class="bg-gray-50 py-16">
        <div class="mx-auto px-4 container">
          <div class="mb-12 text-center">
            <h2 class="mb-4 text-3xl text-gray-800 font-bold">
              企业文化
            </h2>
            <p class="mx-auto max-w-2xl text-gray-600">
              我们的价值观和使命引领着公司的每一步发展
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div
              v-for="(culture, index) in companyCulture"
              :key="index"
              class="rounded-lg bg-white p-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div class="mx-auto mb-4 h-16 w-16 flex items-center justify-center rounded-full bg-green-100">
                <i :class="culture.icon" style="font-size: 1.5rem;" class="text-2xl text-green-600" />
              </div>
              <h3 class="mb-3 text-xl text-gray-800 font-semibold">
                {{ culture.title }}
              </h3>
              <p class="text-gray-600">
                {{ culture.description }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 发展历程 -->
      <section class="bg-white py-16">
        <div class="mx-auto px-4 container">
          <div class="mb-12 text-center">
            <h2 class="mb-4 text-3xl text-gray-800 font-bold">
              发展历程
            </h2>
            <p class="mx-auto max-w-2xl text-gray-600">
              见证萍乡洪星商贸有限公司的成长与发展
            </p>
          </div>

          <div class="relative">
            <!-- 时间线 -->
            <div class="absolute bottom-0 left-1/2 top-0 hidden w-0.5 transform bg-green-200 md:block -translate-x-1/2" />

            <div class="space-y-12">
              <div
                v-for="(milestone, index) in milestones"
                :key="index"
                class="relative"
              >
                <div
                  class="flex flex-col items-center md:flex-row" :class="[
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
                  ]"
                >
                  <!-- 时间点 -->
                  <div class="absolute left-1/2 top-0 z-10 hidden h-12 w-12 transform items-center justify-center rounded-full bg-green-500 text-white font-bold md:flex -translate-x-1/2">
                    {{ milestone.year }}
                  </div>

                  <!-- 内容 -->
                  <div
                    class="md:w-5/12" :class="[
                      index % 2 === 0 ? 'md:pr-16' : 'md:pl-16',
                    ]"
                  >
                    <div class="rounded-lg bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
                      <div class="mb-2 text-green-600 font-bold md:hidden">
                        {{ milestone.year }}
                      </div>
                      <h3 class="mb-3 text-xl text-gray-800 font-semibold">
                        {{ milestone.title }}
                      </h3>
                      <p class="text-gray-600">
                        {{ milestone.description }}
                      </p>
                    </div>
                  </div>

                  <!-- 占位 -->
                  <div class="md:w-2/12" />

                  <!-- 图片 -->
                  <div
                    class="mt-4 md:mt-0 md:w-5/12" :class="[
                      index % 2 === 0 ? 'md:pl-16' : 'md:pr-16',
                    ]"
                  >
                    <!-- <img
                      :src="milestone.image"
                      :alt="milestone.title"
                      class="h-auto w-full rounded-lg shadow-sm"
                    > -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 团队介绍 -->
      <section class="bg-gray-50 py-16">
        <div class="mx-auto px-4 container">
          <div class="mb-12 text-center">
            <h2 class="mb-4 text-3xl text-gray-800 font-bold">
              我们的团队
            </h2>
            <p class="mx-auto max-w-2xl text-gray-600">
              专业的团队是我们最宝贵的财富
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 lg:grid-cols-4 sm:grid-cols-2">
            <div
              v-for="(member, index) in teamMembers"
              :key="index"
              class="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <!-- <img
                :src="member.photo"
                :alt="member.name"
                class="h-64 w-full object-cover object-center"
              > -->
              <div class="p-6">
                <h3 class="mb-1 text-xl text-gray-800 font-semibold">
                  {{ member.name }}
                </h3>
                <p class="mb-3 text-green-600">
                  {{ member.position }}
                </p>
                <p class="mb-4 text-gray-600">
                  {{ member.description }}
                </p>
                <div class="flex space-x-3">
                  <a
                    v-for="(social, socialIndex) in member.social"
                    :key="socialIndex"
                    :href="social.link"
                    class="text-gray-400 transition-colors duration-300 hover:text-green-600"
                  >
                    <i :class="social.icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 企业荣誉 -->
      <section class="bg-white py-16">
        <div class="mx-auto px-4 container">
          <div class="mb-12 text-center">
            <h2 class="mb-4 text-3xl text-gray-800 font-bold">
              企业荣誉
            </h2>
            <p class="mx-auto max-w-2xl text-gray-600">
              多年来，我们获得了众多荣誉和认可
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
            <div
              v-for="(award, index) in awards"
              :key="index"
              class="rounded-lg bg-gray-50 p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div class="mb-4 flex items-center">
                <div class="mr-4 h-12 w-12 flex items-center justify-center rounded-full bg-green-100">
                  <i :class="award.icon" class="text-xl text-green-600" />
                </div>
                <h3 class="text-lg text-gray-800 font-semibold">
                  {{ award.title }}
                </h3>
              </div>
              <p class="mb-3 text-gray-600">
                {{ award.description }}
              </p>
              <p class="text-sm text-gray-500">
                {{ award.year }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-gray-50 py-16">
        <div class="mx-auto px-4 container">
          <div class="mb-12 text-center">
            <h2 class="mb-4 text-3xl text-gray-800 font-bold">
              资质证书
            </h2>
            <p class="mx-auto max-w-2xl text-gray-600">
              我们严格遵守食品安全标准，获得了多项权威认证
            </p>
          </div>

          <!-- 证书类型筛选 -->
          <div class="mb-8 flex flex-wrap justify-center gap-2">
            <Button
              v-for="type in certificateTypes"
              :key="type.value"
              :label="type.label"
              class="p-button-rounded" :class="[
                selectedType === type.value ? 'p-button-success' : 'p-button-outlined p-button-success',
              ]"
              @click="filterCertificates(type.value)"
            />
          </div>

          <!-- 证书展示 -->
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
            <div
              v-for="(certificate, index) in filteredCertificates"
              :key="index"
              class="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div class="relative cursor-pointer" @click="openCertificate(certificate)">
                <img
                  :src="certificate.image"
                  :alt="certificate.name"
                  class="h-48 w-full object-cover"
                >
                <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-all duration-300 hover:bg-opacity-20">
                  <i class="pi pi-search text-2xl text-white opacity-0 hover:opacity-100" />
                </div>
              </div>
              <div class="p-4">
                <h3 class="mb-2 text-lg text-gray-800 font-semibold">
                  {{ certificate.name }}
                </h3>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">有效期至: {{ certificate.validUntil }}</span>
                  <Badge :value="certificate.type" :severity="getBadgeSeverity(certificate.type)" />
                </div>
              </div>
            </div>
          </div>

          <!-- 无结果提示 -->
          <div v-if="filteredCertificates.length === 0" class="py-8 text-center">
            <i class="pi pi-search mb-4 text-4xl text-gray-400" />
            <p class="text-gray-500">
              没有找到相关证书
            </p>
          </div>
        </div>

        <!-- 证书大图对话框 -->
        <Dialog
          v-model:visible="dialogVisible"
          :header="selectedCertificate?.name"
          :modal="true"
          :dismissable-mask="true"
          :style="{ width: '90vw', maxWidth: '800px' }"
        >
          <div class="flex flex-col">
            <img
              :src="selectedCertificate?.image"
              :alt="selectedCertificate?.name"
              class="mb-4 h-auto max-h-[70vh] w-full object-contain"
            >
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h4 class="mb-1 text-sm text-gray-500 font-medium">
                  证书类型
                </h4>
                <p class="text-gray-800">
                  {{ getCertificateTypeName(selectedCertificate?.type) }}
                </p>
              </div>
              <div>
                <h4 class="mb-1 text-sm text-gray-500 font-medium">
                  发证机构
                </h4>
                <p class="text-gray-800">
                  {{ selectedCertificate?.issuedBy }}
                </p>
              </div>
              <div>
                <h4 class="mb-1 text-sm text-gray-500 font-medium">
                  发证日期
                </h4>
                <p class="text-gray-800">
                  {{ selectedCertificate?.issuedDate }}
                </p>
              </div>
              <div>
                <h4 class="mb-1 text-sm text-gray-500 font-medium">
                  有效期至
                </h4>
                <p class="text-gray-800">
                  {{ selectedCertificate?.validUntil }}
                </p>
              </div>
            </div>
            <div class="mt-4">
              <h4 class="mb-1 text-sm text-gray-500 font-medium">
                证书说明
              </h4>
              <p class="text-gray-800">
                {{ selectedCertificate?.description }}
              </p>
            </div>
          </div>
        </Dialog>
      </section>

      <!-- 联系我们 CTA -->
      <section class="from-green-600 to-green-200 bg-gradient-to-r py-100 py-16 text-white">
        <div class="mx-auto px-4 text-center container">
          <h2 class="mb-6 text-3xl font-bold">
            想了解更多信息？
          </h2>
          <p class="mx-auto mb-8 max-w-2xl text-xl">
            如果您对我们的产品或服务有任何疑问，欢迎随时与我们联系
          </p>
          <div class="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              label="联系我们"
              icon="pi pi-envelope"
              class="p-button-rounded p-button-lg"
              @click="navigateToContact"
            />
            <Button
              label="查看产品"
              icon="pi pi-shopping-bag"
              class="p-button-rounded p-button-outlined p-button-lg text-white! hover:text-green-500!"
              @click="navigateToProducts"
            />
          </div>
        </div>
      </section>
    </div>
  </MainLayout>
</template>
