<template>
  <header class="main-header">
    <!-- Top Row: Greeting and User Info -->
    <div class="header-top-row">
      <!-- Left Section: Greeting and Date -->
      <div class="greeting-section">
        <h1 class="greeting-text">Xin chào, Lê Lê</h1>
        <p class="greeting-date">Ngày mới tốt lành</p>
      </div>

      <!-- Right Section: Notifications and User Profile -->
      <div class="user-info-section">
        <button class="notification-button">
          <i class="fa-solid fa-bell notification-icon"></i>
          <span class="notification-count">3</span>
        </button>
        <div class="user-profile">
          <img
            src="https://placehold.co/40x40/c0d9ef/2292a7?text=L%C3%8A%20L%C3%8A"
            alt="User Avatar"
            class="user-avatar"
          >
          <div class="user-details">
            <span class="user-name">LÊ LÊ</span>
            <span class="user-role">Admin</span>
          </div>
          <i class="fa-solid fa-chevron-down user-dropdown-icon"></i>
        </div>
      </div>
    </div>

    <!-- Middle Row: Page Title -->
   

    <!-- Bottom Row: Search and Sort Section -->
    <div class="search-sort-section">
      <!-- Search Input -->
      <div class="search-input-wrapper">
        <input
          type="text"
          placeholder="Tìm kiếm"
          class="search-input"
        >
        <span class="search-icon">
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
      <!-- Search Button -->
      <button class="search-button">
        Tìm kiếm
      </button>
      <!-- Sort Dropdown/Button -->
      <button class="sort-button">
        Sắp xếp <i class="fa-solid fa-chevron-down sort-icon"></i>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped>
/* Import Inter font from Google Fonts for better aesthetics */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

.main-header {
  background-color: #f3f4f6; /* bg-gray-100 */
  padding: 24px; /* p-6 */
  font-family: 'Inter', sans-serif; /* font-inter */
}

.header-top-row {
  display: flex;
  align-items: flex-start; /* items-start */
  justify-content: space-between; /* justify-between */
  margin-bottom: 24px; /* mb-6 */
}

.greeting-section {
  display: flex;
  flex-direction: column;
}

.greeting-text {
  font-size: 1.5rem; /* text-2xl */
  font-weight: 600; /* font-semibold */
  color: #1f2937; /* text-gray-800 */
}

.greeting-date {
  font-size: 0.875rem; /* text-sm */
  color: #6b7280; /* text-gray-500 */
  margin-top: 4px; /* Khoảng cách nhỏ giữa tiêu đề và ngày */
}

.user-info-section {
  display: flex;
  align-items: center;
  gap: 24px; /* gap-6 */
}

.notification-button {
  position: relative;
  padding: 8px; /* p-2 */
  color: #4b5563; /* text-gray-600 */
  border-radius: 9999px; /* rounded-full */
  transition: background-color 0.2s, color 0.2s;
  background: none; /* Đảm bảo không có nền mặc định của button */
  border: none;
  cursor: pointer;
}

.notification-button:hover {
  color: #2563eb; /* hover:text-blue-600 */
  background-color: #e5e7eb; /* hover:bg-gray-200 */
}

.notification-icon {
  font-size: 1.25rem; /* text-xl */
}

.notification-count {
  position: absolute;
  top: -4px; /* -mt-1 */
  right: -4px; /* -mr-1 */
  background-color: #ef4444; /* bg-red-500 */
  color: #fff; /* text-white */
  font-size: 0.75rem; /* text-xs */
  font-weight: 700; /* font-bold */
  border-radius: 9999px; /* rounded-full */
  height: 20px; /* h-5 */
  width: 20px; /* w-5 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 8px; /* gap-2 */
  cursor: pointer;
}

.user-avatar {
  width: 40px; /* w-10 */
  height: 40px; /* h-10 */
  border-radius: 9999px; /* rounded-full */
  border: 2px solid #60a5fa; /* border-2 border-blue-400 */
  object-fit: cover; /* object-cover */
}

.user-details {
  display: flex;
  flex-direction: column;
  font-size: 0.875rem; /* text-sm */
}

.user-name {
  font-weight: 500; /* font-medium */
  color: #374151; /* text-gray-700 */
}

.user-role {
  color: #6b7280; /* text-gray-500 */
}

.user-dropdown-icon {
  color: #6b7280; /* text-gray-500 */
  font-size: 0.75rem; /* text-xs */
}

.page-title {
  font-size: 1.875rem; /* text-3xl */
  font-weight: 700; /* font-bold */
  color: #0d9488; /* text-teal-600 (từ code cũ của bạn) */
  margin-bottom: 24px; /* mb-6 */
}

.search-sort-section {
  display: flex;
  align-items: center;
  gap: 16px; /* gap-4 */
}

.search-input-wrapper {
  position: relative;
  flex: 1; /* flex-1 */
}

.search-input {
  width: 100%; /* w-full */
  padding-left: 40px; /* pl-10 */
  padding-right: 16px; /* pr-4 */
  padding-top: 12px; /* py-3 */
  padding-bottom: 12px; /* py-3 */
  border: 1px solid #d1d5db; /* border border-gray-300 */
  border-radius: 8px; /* rounded-lg */
  outline: none; /* focus:outline-none */
  color: #374151; /* text-gray-700 */
  transition: border-color 0.2s, box-shadow 0.2s;
}

.search-input:focus {
  border-color: #3b82f6; /* focus:ring-blue-500 */
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5); /* focus:ring-2 */
}

.search-icon {
  position: absolute;
  left: 12px; /* left-3 */
  top: 50%;
  transform: translateY(-50%); /* top-1/2 -translate-y-1/2 */
  color: #9ca3af; /* text-gray-400 */
}

.search-button {
  background-color: #2292A7; /* bg-teal-600 */
  color: #fff; /* text-white */
  padding: 12px 24px; /* px-6 py-3 */
  border-radius: 8px; /* rounded-lg */
  border: none;
  cursor: pointer;
  font-weight: 500; /* font-medium */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
  transition: background-color 0.2s;
}

.search-button:hover {
  background-color: #134e4a; /* hover:bg-teal-700 */
}

.sort-button {
  background-color: #fff; /* bg-white */
  border: 1px solid #d1d5db; /* border border-gray-300 */
  color: #374151; /* text-gray-700 */
  padding: 12px 24px; /* px-6 py-3 */
  border-radius: 8px; /* rounded-lg */
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px; /* gap-2 */
  font-weight: 500; /* font-medium */
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
  transition: background-color 0.2s;
}

.sort-button:hover {
  background-color: #f3f4f6; /* hover:bg-gray-100 */
}

.sort-icon {
  font-size: 0.75rem; /* text-xs */
  margin-left: 4px; /* ml-1 */
}
</style>
