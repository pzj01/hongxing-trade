<script setup lang="ts">
import type { Product } from '~/types'
import { FilterMatchMode } from '@primevue/core/api'
import { format } from 'date-fns'
import { useConfirm } from 'primevue/useconfirm'
import { useToast } from 'primevue/usetoast'
import { useProductStore } from '~/composables/product'
import { Role } from '~/types'

const { products, addProduct, updateProduct, deleteProduct } = useProductStore()
const { user } = useUserStore()
const toast = useToast()
const confirm = useConfirm()

const filters = ref({
  name: { value: null, matchMode: FilterMatchMode.CONTAINS },
})

const defaultForm = {
  id: 0,
  name: '',
  date: new Date(),
  document_number: '',
  raw_materials: '',
  additives: '',
  related_name: '',
  specification: '',
  unit: '',
  responsible_person: '',
  shelf_life: '',
  entry_time: new Date(),
  exit_time: new Date(),
  production_date: new Date(),
  quantity: 0,
}

const header = ref('')
const form = reactive<Product>({
  ...defaultForm,
})
const [isVisible, toggle] = useToggle()
const selectedProduct = ref<Product[]>([])

function clickAdd() {
  resetForm()
  toggle(true)
  header.value = '添加产品'
}

function clickEdit() {
  if (selectedProduct.value.length === 0) {
    toast.add({
      severity: 'warn',
      summary: '警告',
      detail: '请选择要修改的产品',
      life: 3000,
    })
    return
  }

  if (selectedProduct.value.length > 1) {
    toast.add({
      severity: 'warn',
      summary: '警告',
      detail: '一次只能选择一个产品进行修改',
      life: 3000,
    })
    return
  }

  const selected = selectedProduct.value[0]

  Object.assign(form, selected)
  header.value = '修改产品'
  toggle(true)
}

function resetForm() {
  Object.assign(form, defaultForm)
}

function handleSubmit() {
  if (Object.values({ ...form, id: 1 }).some(v => !v)) {
    toast.add({
      severity: 'warn',
      summary: '警告',
      detail: '请填写完整信息',
      life: 3000,
    })
    return
  }

  if (form.id) {
    updateProduct(form)
  }
  else {
    addProduct(form)
  }
  toggle(false)
  resetForm()
}

function clickDelete() {
  const ids = selectedProduct.value.map(v => v.id)

  if (ids.length === 0) {
    toast.add({
      severity: 'warn',
      summary: '警告',
      detail: '请选择要删除的产品',
      life: 3000,
    })
    return
  }

  confirm.require({
    header: '确认删除',
    message: `确认删除${ids.length > 1 ? '这些产品' : '这个产品'}吗?`,
    icon: 'i-carbon-warning',
    rejectProps: {
      label: '取消',
      severity: 'secondary',
      outlined: true,
    },
    acceptProps: {
      label: '删除',
      severity: 'danger',
    },
    accept: () => {
      deleteProduct(ids)
    },
  })
}
</script>

<template>
  <div>
    <DataTable v-model:selection="selectedProduct" v-model:filters="filters" style="width: calc(100vw - 232px)" scroll-height="600px" data-key="id" filter-display="menu" :value="products" scrollable striped-rows paginator :rows="5" :rows-per-page-options="[5, 10, 20, 50]">
      <template #header>
        <div v-if="user?.role !== Role.VIEWER" class="flex gap-x-2">
          <Button label="添加产品" @click="clickAdd">
            <template #icon>
              <i i-carbon-add />
            </template>
          </Button>
          <Button severity="danger" label="删除产品" @click="clickDelete">
            <template #icon>
              <i i-carbon-trash-can />
            </template>
          </Button>
          <Button severity="warn" label="修改产品" @click="clickEdit">
            <template #icon>
              <i i-carbon-edit />
            </template>
          </Button>
        </div>
      </template>
      <template #empty>
        <p text="center gray-500">
          暂无产品
        </p>
      </template>
      <template #loading>
        <p text-center>
          产品数据加载中，请稍等
        </p>
      </template>
      <Column selection-mode="multiple" header-style="width: 3rem" />
      <Column field="document_number" header="仓储单据编号" style="min-width: 8em;" />
      <Column field="name" header="名称" style="min-width: 10em;">
        <template #body="{ data }">
          {{ data.name }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <InputText v-model="filterModel.value" type="text" placeholder="按名称搜索" @input="filterCallback()" />
        </template>
      </Column>
      <Column field="date" data-type="date" header="日期" style="min-width: 10em;">
        <template #body="{ data, field }">
          {{ format(data[field], 'yyyy-MM-dd') }}
        </template>
      </Column>
      <Column field="raw_materials" header="食品原料" style="min-width: 10em;" />
      <Column field="additives" header="食品添加剂" style="min-width: 10em;" />
      <Column field="related_name" header="食品相关产品名称" style="min-width: 10em;" />
      <Column field="specification" header="规格" style="min-width: 8em;" />
      <Column field="production_date" data-type="date" header="生产日期" style="min-width: 8em;">
        <template #body="{ data, field }">
          {{ format(data[field], 'yyyy-MM-dd') }}
        </template>
      </Column>
      <Column field="shelf_life" header="保质期" style="min-width: 6em;" />
      <Column field="entry_time" data-type="date" header="入库日期" style="min-width: 8em;">
        <template #body="{ data, field }">
          {{ format(data[field], 'yyyy-MM-dd') }}
        </template>
      </Column>
      <Column field="exit_time" data-type="date" header="出库日期" style="min-width: 8em;">
        <template #body="{ data, field }">
          {{ format(data[field], 'yyyy-MM-dd') }}
        </template>
      </Column>
      <Column field="unit" header="计量单位" style="min-width: 6em;" />
      <Column field="quantity" header="库存" style="min-width: 4em;" />
      <Column field="responsible_person" header="负责人" style="min-width: 6em;" />
    </DataTable>
  </div>
  <Dialog v-model:visible="isVisible" modal :header :style="{ width: '25rem' }">
    <form mt-8 space-y-10>
      <FloatLabel>
        <InputText id="document_number" v-model="form.document_number" fluid />
        <label for="document_number">仓储单据编号</label>
      </FloatLabel>
      <FloatLabel>
        <InputText id="name" v-model="form.name" fluid />
        <label for="name">名称</label>
      </FloatLabel>
      <div>
        <label for="date" style="color: var(--p-form-field-color)" class="mb-2 block font-bold">日期</label>
        <DatePicker v-model="form.date" fluid placeholder="日期" date-format="yy/mm/dd" />
      </div>
      <FloatLabel>
        <InputText id="raw_materials" v-model="form.raw_materials" fluid />
        <label for="raw_materials">食品原料</label>
      </FloatLabel>
      <FloatLabel>
        <InputText id="additives" v-model="form.additives" fluid />
        <label for="additives">食品添加剂</label>
      </FloatLabel>
      <FloatLabel>
        <InputText id="related_name" v-model="form.related_name" fluid />
        <label for="related_name">食品相关产品名称</label>
      </FloatLabel>
      <FloatLabel>
        <InputText id="specification" v-model="form.specification" fluid />
        <label for="specification">规格</label>
      </FloatLabel>
      <div>
        <label for="quantity" style="color: var(--p-form-field-color)" class="mb-2 block font-bold">生产日期</label>
        <DatePicker v-model="form.production_date" fluid placeholder="生产日期" date-format="yy/mm/dd" />
      </div>
      <FloatLabel>
        <InputText id="shelf_life" v-model="form.shelf_life" fluid />
        <label for="shelf_life">保质期</label>
      </FloatLabel>
      <DatePicker v-model="form.entry_time" fluid placeholder="入库日期" date-format="yy/mm/dd" />
      <DatePicker v-model="form.exit_time" fluid placeholder="出库日期" date-format="yy/mm/dd" />
      <FloatLabel>
        <InputText id="unit" v-model="form.unit" fluid />
        <label for="unit">计量单位</label>
      </FloatLabel>
      <div>
        <label for="quantity" style="color: var(--p-form-field-color)" class="mb-2 block font-bold">库存</label>
        <InputNumber v-model="form.quantity" show-buttons button-layout="horizontal" style="width: 3rem" :min="0">
          <template #incrementicon>
            <i i-carbon-add />
          </template>
          <template #decrementicon>
            <i i-carbon-subtract />
          </template>
        </InputNumber>
      </div>
      <FloatLabel>
        <InputText id="responsible_person" v-model="form.responsible_person" fluid />
        <label for="responsible_person">负责人</label>
      </FloatLabel>
      <Button fluid @click="handleSubmit">
        提交
      </Button>
      <Button fluid variant="outlined" severity="secondary" @click="toggle(false)">
        取消
      </Button>
    </form>
  </Dialog>
</template>
