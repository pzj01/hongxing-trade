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

export interface Product {
  id: number
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
