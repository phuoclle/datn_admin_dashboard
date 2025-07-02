<template>
  <div class="p-6 bg-gray-100 min-h-screen font-inter">
    <h3 class="text-xl font-semibold mb-4">Danh sách phòng</h3>

    <div class="bg-white rounded-lg shadow-md p-6 w-full">
      <table class="w-full table-auto divide-y divide-gray-400">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Tên phòng</th>
            <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Số phòng</th>
            <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Loại phòng</th>
            <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Giá/đêm</th>
            <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Sức chứa</th>
            <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Mô tả</th>
            <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Trạng thái</th>
            <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Hành động</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="room in rooms" :key="room.id">
            <td class="px-4 py-2 text-sm text-gray-900">{{ room.name }}</td>
            <td class="px-4 py-2 text-sm text-gray-700">{{ room.number }}</td>
            <td class="px-4 py-2 text-sm text-gray-700">{{ room.type }}</td>
            <td class="px-4 py-2 text-sm text-gray-700">{{ room.price }}</td>
            <td class="px-4 py-2 text-sm text-gray-700">{{ room.capacity }}</td>
            <td class="px-4 py-2 text-sm text-gray-700">{{ room.description }}</td>
            <td class="px-4 py-2 text-sm">
              <span :class="getStatusClass(room.status)">
                {{ room.status }}
              </span>
            </td>
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

      <!-- Pagination -->
      <div class="mt-6 flex items-center justify-between text-sm text-gray-600">
        <div class="flex items-center">
          <span>Hiển thị mỗi trang</span>
          <select class="ml-2 p-2 border border-gray-300 rounded-md bg-white text-gray-700">
            <option>6</option>
            <option>10</option>
            <option>20</option>
          </select>
        </div>
        <div><span>1-4 của 10</span></div>
        <div class="flex items-center space-x-2">
          <button class="p-2 rounded-md hover:bg-gray-200 disabled:opacity-50" disabled>
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <button class="p-2 rounded-md hover:bg-gray-200">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const rooms = ref([
  {
    id: 1,
    name: 'Phòng khách vua',
    number: '001',
    type: 'Deluxe',
    price: '1.200.000đ',
    capacity: 2,
    description: 'Phòng đơn tiêu chuẩn với sức chứa 2 người, trang bị giường đôi, máy lạnh và phòng tắm riêng.',
    status: 'Đang có sẵn',
  },
  {
    id: 2,
    name: 'Phòng khách vua',
    number: '002',
    type: 'Deluxe',
    price: '1.200.000đ',
    capacity: 2,
    description: 'Phòng đơn tiêu chuẩn với sức chứa 2 người, trang bị giường đôi, máy lạnh và phòng tắm riêng.',
    status: 'Hết phòng',
  },
  {
    id: 3,
    name: 'Phòng khách vua',
    number: '003',
    type: 'Deluxe',
    price: '1.200.000đ',
    capacity: 2,
    description: 'Phòng đơn tiêu chuẩn với sức chứa 2 người, trang bị giường đôi, máy lạnh và phòng tắm riêng.',
    status: 'Đã đặt trước',
  },
  {
    id: 4,
    name: 'Phòng khách vua',
    number: '004',
    type: 'Deluxe',
    price: '1.200.000đ',
    capacity: 2,
    description: 'Phòng đơn tiêu chuẩn với sức chứa 2 người, trang bị giường đôi, máy lạnh và phòng tắm riêng.',
    status: 'Hết phòng',
  },
  {
    id: 5,
    name: 'Phòng khách vua',
    number: '005',
    type: 'Deluxe',
    price: '1.200.000đ',
    capacity: 2,
    description: 'Phòng đơn tiêu chuẩn với sức chứa 2 người, trang bị giường đôi, máy lạnh và phòng tắm riêng.',
    status: 'Đang có sẵn',
  },
  {
    id: 6,
    name: 'Phòng khách vua',
    number: '006',
    type: 'Deluxe',
    price: '1.200.000đ',
    capacity: 2,
    description: 'Phòng đơn tiêu chuẩn với sức chứa 2 người, trang bị giường đôi, máy lạnh và phòng tắm riêng.',
    status: 'Đang có sẵn',
  },
  {
    id: 7,
    name: 'Phòng khách vua',
    number: '007',
    type: 'Deluxe',
    price: '1.200.000đ',
    capacity: 2,
    description: 'Phòng đơn tiêu chuẩn với sức chứa 2 người, trang bị giường đôi, máy lạnh và phòng tắm riêng.',
    status: 'Đang có sẵn',
  },
])

function getStatusClass(status) {
  switch (status) {
    case 'Đang có sẵn':
      return 'px-2 inline-flex text-xs font-semibold rounded-full bg-green-100 text-green-800'
    case 'Hết phòng':
      return 'px-2 inline-flex text-xs font-semibold rounded-full bg-red-100 text-red-800'
    case 'Đã đặt trước':
      return 'px-2 inline-flex text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800'
    default:
      return 'px-2 inline-flex text-xs font-semibold rounded-full bg-gray-100 text-gray-800'
  }
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
