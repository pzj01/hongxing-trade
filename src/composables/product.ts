import type { Product } from '~/types'
import { defineStore } from 'pinia'
import { useToast } from 'primevue/usetoast'

const DEFAULT_PRODUCTS: Product[] = [
  {
    id: 1,
    name: '统一桶装方便面',
    document_number: '01',
    date: new Date('2023-12-01'),
    raw_materials: '小麦面条',
    additives: '食用盐及相关香料',
    related_name: '统一桶装方便面',
    specification: '450g/桶',
    unit: '桶',
    responsible_person: '李学碧',
    shelf_life: '12个月',
    entry_time: new Date('2021-12-01'),
    exit_time: new Date('2021-12-02'),
    production_date: new Date('2023-12-01'),
    quantity: 20,
  },
  {
    id: 2,
    name: '面条',
    document_number: '02',
    date: new Date('2023-12-01'),
    raw_materials: '面条',
    additives: '无',
    related_name: '滑面挂面',
    specification: '1kg/袋',
    unit: '袋',
    responsible_person: '李学碧',
    shelf_life: '12个月',
    entry_time: new Date('2021-12-01'),
    exit_time: new Date('2021-12-02'),
    production_date: new Date('2023-12-01'),
    quantity: 5,
  },
  {
    id: 3,
    name: '菜籽油',
    document_number: '03',
    date: new Date('2023-12-01'),
    raw_materials: '菜籽油',
    additives: '无',
    related_name: '福林门菜籽油',
    specification: '5L/桶',
    unit: '桶',
    responsible_person: '李学碧',
    shelf_life: '18个月',
    entry_time: new Date('2021-12-01'),
    exit_time: new Date('2021-12-02'),
    production_date: new Date('2023-12-01'),
    quantity: 2,
  },
]

export const useProductStore = defineStore('product', () => {
  const products = reactive<Product[]>(DEFAULT_PRODUCTS)
  const toast = useToast()

  function addProduct(product: Omit<Product, 'id'>) {
    products.push({
      ...product,
      id: Date.now(),
    })

    toast.add({
      severity: 'success',
      summary: '添加成功',
      detail: `添加 ${product.name} 成功`,
      life: 3000,
    })
  }

  function updateProduct(product: Product) {
    const p = products.find(p => p.id === product.id)
    if (p) {
      Object.assign(p, product)
      toast.add({
        severity: 'success',
        summary: '更新成功',
        detail: `更新 ${product.name} 成功`,
        life: 3000,
      })
    }
  }

  function deleteProduct(ids: Product['id'][]) {
    if (ids.length) {
      const removed = ids.map((id) => {
        const index = products.findIndex(p => p.id === id)
        if (index !== -1) {
          return products.splice(index, 1)[0]
        }
        return null
      }).filter(Boolean)
      toast.add({
        severity: 'success',
        summary: '删除成功',
        detail: `删除 ${removed.map(p => p?.name).join()} 成功`,
        life: 3000,
      })
    }
  }

  return {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
  }
})
