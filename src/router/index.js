import { createRouter, createWebHistory } from 'vue-router';
import Employee from '../views/Employee.vue';
import Room from '../views/Room.vue';
import RoomType from '../views/RoomType.vue'; // <- thêm dòng này
import Customers from '../views/Customers.vue'; // <- thêm dòng này
import Booking_Detail from '../views/Booking_Detail.vue'; // <- thêm dòng này


const routes = [
  { path: '/', component: Room },
  { path: '/employees', component: Employee },
  { path: '/room-types', component: RoomType }, // <- thêm route này
  { path: '/booking-details', component: Booking_Detail }, // <- thêm route này
  { path: '/customers', component: Customers }, // <-
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
