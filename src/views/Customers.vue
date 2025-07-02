<template>
  <div class="p-6 bg-gray-100 min-h-screen font-inter">
    <h3 class="text-xl font-semibold mb-4">Danh sách khách hàng</h3>

    <div class="bg-white rounded-lg shadow-md p-6 w-full">
      <table class="w-full table-auto divide-y divide-gray-400">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
            <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Họ tên</th>
            <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
            <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Số điện thoại</th>
            <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Ngày đăng ký</th>
            <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Hoạt động</th>
            <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Hành động</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="customer in customers" :key="customer.id">
            <td class="px-4 py-2 text-sm text-gray-900">{{ customer.id }}</td>
            <td class="px-4 py-2 text-sm text-gray-900">{{ customer.fullName }}</td>
            <td class="px-4 py-2 text-sm text-gray-700">{{ customer.email }}</td>
            <td class="px-4 py-2 text-sm text-gray-700">{{ customer.phoneNumber }}</td>
            <td class="px-4 py-2 text-sm text-gray-700">{{ customer.registrationDate }}</td>
            <td class="px-4 py-2 text-sm">
              <span :class="getStatusClass(customer.isActive)">
                {{ customer.isActive ? 'Đang hoạt động' : 'Ngưng hoạt động' }}
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
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const customers = ref([
  {
    id: 101,
    fullName: 'Trần Khánh Linh',
    email: 'linhtran@gmail.com',
    phoneNumber: '0901234567',
    registrationDate: '2023-11-20',
    isActive: true
  },
  {
    id: 102,
    fullName: 'Ngô Văn Huy',
    email: 'huyngo@gmail.com',
    phoneNumber: '0912345678',
    registrationDate: '2024-01-10',
    isActive: false
  },
  {
    id: 103,
    fullName: 'Phạm Thị Cẩm Tú',
    email: 'camtu@gmail.com',
    phoneNumber: '0934567890',
    registrationDate: '2024-04-02',
    isActive: true
  }
])

function getStatusClass(isActive) {
  return isActive
    ? 'px-2 inline-flex text-xs font-semibold rounded-full bg-green-100 text-green-800'
    : 'px-2 inline-flex text-xs font-semibold rounded-full bg-gray-200 text-gray-800'
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
