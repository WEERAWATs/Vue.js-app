import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Product_Detail from '../components/Product_Detail.vue'
import Category from '../components/Category.vue'
import Login from '../components/Auth/Login.vue'
import Register from '../components/Auth/Register.vue'
import Cart from '../components/Cart.vue'
import Profile from '../components/User/Profile.vue'
import Purchase from '../components/User/Purchase.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/product/:id',
    component: Product_Detail
  },
  {
    path: '/category/:name',
    component: Category
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/user/profile',
    component: Profile
  },
  {
    path: '/user/purchase',
    component: Purchase,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
