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
  // 采购员
  PURCHASER,
  // 系统管理员
  ADMIN,
}

// 原材料成分
export interface MaterialIngredient {
  name: string // 成分名称
  origin: string // 来源
  function: string // 功能
}

export interface Material {
  name: string
  description: string
  origin: string
  ingredient: MaterialIngredient
}

export interface ProductionStep {
  name: string
  description: string
}

// 工艺特点
export interface ProcessCharacteristic {
  name: string
  description: string
}

export interface NutritionalIngredient {
  name: string
  weight: number
  unit: WeightUnit
}

export interface Nutritional {
  description: string
  gContent: string // 比如 '每100克含量'
  ingredients: NutritionalIngredient[]
}

export interface Product extends Item {
  name: string
  description: string
  category: Category
  price: number
  unit: Unit
  weight: number
  weightUnit: WeightUnit
  stockQuantity: number
  nutritionalInfo: Nutritional
  certifications: string[]
  brand: string
  origin: string
  packagingType: PackagingType
  sku: string
  tags: string[]
  date: Date
  shelfLife: string
  storageMethod: string
  rawMaterials: Material[]
  cookingTips: string[]
  productionSteps: ProductionStep[]
  processCharacteristics: ProcessCharacteristic[]
  image?: string
  testReport?: string
  productionLicense?: string
}

export enum Category {
  Meatballs = '禽类制品',
  MeatProducts = '肉类制品',
  Oil = '稂油调味',
  SeafoodProducts = '海鲜与鱼类制品',
  DumplingsAndBuns = '早餐及其他',
}

export const CategoryList: Category[] = [
  Category.Meatballs,
  Category.MeatProducts,
  Category.SeafoodProducts,
  Category.Oil,
  Category.DumplingsAndBuns,
]

export enum PackagingType {
  Bottle = '瓶装',
  Vacuum = '真空包装',
  Compressed = '压缩包装',
  PlasticBag = '塑料袋装',
  PaperBag = '纸袋装',
  Other = '其他',
}

export enum Unit {
  PACKAGE = '包',
  BOTTLE = '瓶',
  BAG = '袋',
  BOX = '盒',
}

export enum WeightUnit {
  KCAL = '千卡',
  TON = '吨',
  KG = '千克',
  G = '克',
  MG = '毫克',
  L = '升',
  ML = '毫升',
}

export const PackagingTypeList = [
  PackagingType.Bottle,
  PackagingType.Compressed,
  PackagingType.PaperBag,
  PackagingType.PlasticBag,
  PackagingType.Vacuum,
  PackagingType.Other,
]

export const UnitList = [
  Unit.BAG,
  Unit.BOTTLE,
  Unit.BOX,
  Unit.PACKAGE,
]

export const WeightUnitList = [
  WeightUnit.G,
  WeightUnit.KG,
  WeightUnit.L,
  WeightUnit.MG,
  WeightUnit.ML,
]
