export interface RawMaterial {
  id: number
  name: string
  category: string
  description: string
  origin: string
  supplier: string
  stock: number
  unit: 'kg'
  price: number
  image?: string
}

export const rawMaterials: RawMaterial[] = [
  {
    id: 1,
    name: '有机小麦粉',
    category: '面粉',
    description: '优质有机小麦制成，不含添加剂',
    origin: '山东',
    supplier: '绿色农场有限公司',
    stock: 1000,
    unit: 'kg',
    price: 8.5,
  },
  {
    id: 2,
    name: '纯牛奶',
    category: '乳制品',
    description: '新鲜纯牛奶，高钙高蛋白',
    origin: '内蒙古',
    supplier: '草原牧场',
    stock: 500,
    unit: 'kg',
    price: 6.8,
  },
]
