import { defineStore } from 'pinia'
import { useToast } from 'primevue/usetoast'
import { Role, type User } from '~/types'

const DEFAULT_USER: User = {
  id: 1,
  username: '查询人',
  password: '',
  role: Role.VIEWER,
}

const DEFAULT_PURCHASER: User = {
  id: 2,
  username: 'purchaser',
  password: '123456',
  role: Role.PURCHASER,
}

const DEFAULT_ADMIN: User = {
  id: 3,
  username: 'admin',
  password: '123456',
  role: Role.ADMIN,
}

const DEFAULT_USERS: User[] = [
  DEFAULT_USER,
  DEFAULT_PURCHASER,
  DEFAULT_ADMIN,
]

export const useUserStore = defineStore('user', () => {
  const currentLoginUserId = useLocalStorage<number>('user', -1)
  const users = useLocalStorage<User[]>('users', DEFAULT_USERS)
  const user = ref<User | null | undefined>(users.value.find(u => u.id === currentLoginUserId.value))
  const toast = useToast()
  const isLogin = computed(() => !!user.value)
  const router = useRouter()

  function register(user: User) {
    const _user = users.value.find(_u => _u.username === user.username)

    if (_user) {
      toast.add({
        severity: 'error',
        summary: '注册失败',
        detail: '用户已存在',
        life: 3000,
      })
      return false
    }

    users.value.push(user)
    return true
  }

  function login(u: User) {
    if (u.role === Role.VIEWER) {
      user.value = DEFAULT_USER
      return true
    }

    const _user = users.value.find(_u => _u.username === u.username && _u.password === u.password)

    if (!_user) {
      toast.add({
        severity: 'error',
        summary: '登录失败',
        detail: '用户不存在或者密码错误',
        life: 3000,
      })
      return false
    }

    user.value = _user
    return true
  }

  function logout() {
    user.value = null
    router.push('/login')
  }

  watch(user, (user) => {
    currentLoginUserId.value = user?.id
  })

  return {
    isLogin,
    user,
    login,
    register,
    logout,
  }
})
