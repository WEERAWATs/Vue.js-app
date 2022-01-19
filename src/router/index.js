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
import My_Products from '../components/User/My_Products.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    component: About
  },
  {
    path: '/Contact',
    component: Contact
  },
  {
    path: '/Product/:id',
    component: Product_Detail
  },
  {
    path: '/Category/:name',
    component: Category
  },
  {
    path: '/Login',
    component: Login
  },
  {
    path: '/Register',
    component: Register
  },
  {
    path: '/Cart',
    component: Cart
  },
  {
    path: '/User/Profile',
    component: Profile
  },
  {
    path: '/User/My_Products',
    component: My_Products,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
