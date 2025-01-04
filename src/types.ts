import type { Item } from './composables/useManagement'

export interface User {
  id: number
  role: Role
  username: string
  password: string
}

export enum Role {
  // 查询人
  VIEWER,
  // 管理员
  ADMIN,
  // 超级管理员
  SUPER_ADMIN,
}

export interface Product extends Item {
  name: string
  date: Date
  document_number: string
  raw_materials: string
  additives: string
  related_name: string
  specification: string
  production_date: Date
  shelf_life: string
  entry_time: Date
  exit_time: Date
  quantity: number
  unit: string
  responsible_person: string
}

export enum Category {
  FRUITS = '新鲜蔬果',
  MEAT = '肉禽蛋品',
  SEAFOOD = '海鲜水产',
  OIL = '稂油调味',
  MILK = '乳制品',
  OTHER = '其他干货及杂物',
}
