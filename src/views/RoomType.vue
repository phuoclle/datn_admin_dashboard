<template>
  <div class="p-6 bg-gray-100 min-h-screen font-inter">
    <h3 class="text-xl font-semibold mb-4">Danh sách loại phòng</h3>

    <div class="bg-white rounded-lg shadow-md p-6 w-full">
      <table class="w-full table-auto divide-y divide-gray-400">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
            <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Tên loại</th>
            <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Giá mặc định</th>
            <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Mô tả</th>
            <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Hành động</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="roomType in roomTypes" :key="roomType.id">
            <td class="px-4 py-2 text-sm text-gray-900">{{ roomType.id }}</td>
            <td class="px-4 py-2 text-sm text-gray-900">{{ roomType.typeName }}</td>
            <td class="px-4 py-2 text-sm text-gray-700">{{ formatPrice(roomType.defaultPrice) }}</td>
            <td class="px-4 py-2 text-sm text-gray-700">{{ roomType.description }}</td>
            <td class="px-4 py-2 text-sm text-right">
              <a href="#" class="text-blue-600 hover:text-blue-900 mr-3">
                <i class="fa-solid fa-pen-to-square"></i>
              </a>
              <a href="#" class="text-red-600 hover:text-red-900">
                <i class="fa-solid fa-trash"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const roomTypes = ref([
  {
    id: 1,
    typeName: 'Deluxe',
    defaultPrice: 1200000,
    description: 'Phòng cao cấp với tiện nghi đầy đủ.',
  },
  {
    id: 2,
    typeName: 'Superior',
    defaultPrice: 950000,
    description: 'Phòng tiêu chuẩn với view đẹp.',
  },
  {
    id: 3,
    typeName: 'Suite',
    defaultPrice: 1800000,
    description: 'Phòng hạng sang với không gian rộng rãi.',
  },
]);

function formatPrice(value) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

.font-inter {
  font-family: 'Inter', sans-serif;
}

th, td {
  padding: 12px;
  word-wrap: break-word;
  white-space: normal;
}
</style>
