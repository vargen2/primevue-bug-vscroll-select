<template>
  <div>
    <div style="height: 500px">
      <DataTable
        v-model:selection="selectedItem"
        :value="items"
        responsiveLayout="scroll"
        dataKey="id"
        selectionMode="single"
        rowHover
        scrollable
        scrollHeight="flex"
        :virtualScrollerOptions="{ itemSize: 40 }"
      >
        <Column field="name" />
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref(new Array(100).fill(0).map((_, index) => ({ id: index, name: `item ${index}` })))
const selectedItem = ref()
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 4rem;
}
</style>
