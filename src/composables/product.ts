import type { Product as _Product } from '~/types'
import { defineStore } from 'pinia'
import { products } from '~/data/products'
import { useManagement } from './useManagement'

export type Product = Omit<_Product, 'nutritionalInfo' | 'certifications' | 'tags' | 'rawMaterials' | 'cookingTips' | 'productionSteps' | 'processCharacteristics' | 'image' | 'testReport' | 'productionLicense'>

const DEFAULT_PRODUCTS: Product[] = [...products]

export const useProductStore = defineStore('product', () => {
  const { items, addItem, updateItem, deleteItem } = useManagement<Product>({
    items: DEFAULT_PRODUCTS,
    detailKey: 'name',
  })

  const productsMap = computed(() => {
    return items.reduce<Record<Product['id'], Product>>((acc, product) => {
      acc[product.id] = product
      return acc
    }, {})
  })

  return {
    productsMap,
    products: items,
    addProduct: addItem,
    updateProduct: updateItem,
    deleteProduct: deleteItem,
  }
})
