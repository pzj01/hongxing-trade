<script setup>
const chartData = ref()
const chartOptions = ref()
onMounted(() => {
  chartData.value = setChartData()
  chartOptions.value = setChartOptions()
})
function setChartData() {
  const documentStyle = getComputedStyle(document.documentElement)

  return {
    labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    datasets: [
      {
        label: '面包',
        data: [65, 59, 80, 81, 56, 55, 40, 12, 60, 59, 80, 81],
        fill: false,
        borderColor: documentStyle.getPropertyValue('--p-cyan-300'),
        tension: 0.4,
      },
      {
        label: '苹果',
        data: [28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86],
        fill: false,
        borderColor: documentStyle.getPropertyValue('--p-red-300'),
        tension: 0.4,
      },
      {
        label: '蔬菜',
        data: [29, 30, 25, 12, 40, 32, 44, 29, 30, 25, 12, 40],
        fill: false,
        borderColor: documentStyle.getPropertyValue('--p-green-300'),
        tension: 0.4,
      },
      {
        label: '香蕉',
        data: [10, 3, 13, 9, 33, 25, 52, 10, 3, 13, 9, 33],
        fill: false,
        borderColor: documentStyle.getPropertyValue('--p-yellow-300'),
        tension: 0.4,
      },
      {
        label: '鸡蛋',
        data: [23, 42, 35, 27, 43, 22, 17, 23, 42, 35, 27, 43],
        fill: false,
        borderColor: documentStyle.getPropertyValue('--p-sky-300'),
        tension: 0.4,
      },
      {
        label: '牛奶',
        data: [90, 28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19],
        fill: false,
        borderColor: documentStyle.getPropertyValue('--p-indigo-300'),
        tension: 0.4,
      },
    ],
  }
}
function setChartOptions() {
  const documentStyle = getComputedStyle(document.documentElement)
  const textColor = documentStyle.getPropertyValue('--p-text-color')
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color')
  const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color')

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
    },
  }
}
</script>

<template>
  <div class="card">
    <Chart type="line" :data="chartData" :options="chartOptions" class="h-[30rem]" />
  </div>
</template>
