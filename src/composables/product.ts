import type { Product } from '~/types'
import { defineStore } from 'pinia'
import { useManagement } from './useManagement'

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
  const { items, addItem, updateItem, deleteItem } = useManagement<Product>({
    items: DEFAULT_PRODUCTS,
    detailKey: 'name',
  })

  return {
    products: items,
    addProduct: addItem,
    updateProduct: updateItem,
    deleteProduct: deleteItem,
  }
})
