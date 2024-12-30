<script setup lang="ts">
const router = useRouter()
const items = ref([
  {
    label: '首页',
    icon: 'i-carbon-home',
    command() {
      router.push('/sys')
    },
  },
  {
    label: '产品管理',
    icon: 'i-carbon-cloud-service-management',
    command() {
      router.push('/sys/product')
    },
  },
])

const { user, logout } = useUserStore()
const operator = useTemplateRef('op')

const popoverItems = reactive([
  {
    label: '退出登录',
    icon: 'i-carbon-logout',
    command: () => logout(),
  },
])
</script>

<template>
  <div flex>
    <Menu
      :pt="{ root: { style: 'border-radius: 0px;' } }" h-screen w-12 :model="items"
    >
      <template #start>
        <h1 p-4 text-center font-bold>
          食品安全管理系统
        </h1>
      </template>
    </Menu>
    <div flex-1>
      <nav text="2xl" border-b p-2>
        <div flex="~ items-center gap-x-2 justify-end">
          <span text-base>欢迎你，{{ user?.username }}</span>
          <Avatar cursor-pointer :label="user?.username.at(0) || 'P'" class="mr-2" size="large" shape="circle" @click="operator?.toggle($event)" />
          <Menu ref="op" :model="popoverItems" popup />
        </div>
      </nav>
      <div overflow-auto p-4 style="background-color: var(--p-content-background);height: calc(100vh - 64px);">
        <RouterView />
      </div>
    </div>
  </div>
</template>
