import { useToast } from 'primevue/usetoast'

export interface Item {
  id: number
  [key: string]: unknown
}

export interface useManagementOptions<T extends Item> {
  items?: T[]
  detailKey: keyof T
}

export function useManagement<T extends Item>(options: useManagementOptions<T>) {
  const {
    items: _items = [],
    detailKey,
  } = options
  const items = reactive<T[]>(_items)
  const toast = useToast()

  function addItem(item: T) {
    items.push({
      ...item,
      id: Date.now(),
    } as any)

    toast.add({
      severity: 'success',
      summary: '添加成功',
      detail: `添加 ${item[detailKey]} 成功`,
      life: 3000,
    })
  }

  function updateItem(item: T) {
    const p = items.find(p => p.id === item.id)
    if (p) {
      Object.assign(p, item)
      toast.add({
        severity: 'success',
        summary: '更新成功',
        detail: `更新 ${item[detailKey]} 成功`,
        life: 3000,
      })
    }
  }

  function deleteItem(ids: T['id'][]) {
    if (ids.length) {
      const removed = ids.map((id) => {
        const index = items.findIndex(p => p.id === id)
        if (index !== -1) {
          return items.splice(index, 1)[0]
        }
        return null
      }).filter(Boolean) as T[]

      toast.add({
        severity: 'success',
        summary: '删除成功',
        detail: `删除 ${removed.map(p => p[detailKey]).join()} 成功`,
        life: 3000,
      })
    }
  }

  return {
    items,
    addItem,
    updateItem,
    deleteItem,
  }
}
