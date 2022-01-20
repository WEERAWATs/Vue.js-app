<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid px-4 px-lg-5">
            <router-link class="navbar-brand" to="/">
                <i class="fa fa-shopping-bag" aria-hidden="true">
                    vHAVECPU
                </i>
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li class="nav-item">
                        <router-link to="/" active-class="active" class="nav-link">หน้าหลัก</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            หมวดหมู่สินค้า
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li v-for="data in category" v-bind:key="data.id_category">
                                <router-link :to="`/Category/${data.name}`" class='dropdown-item'>{{data.name}}</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link to="/About" active-class="active" class="nav-link">เกี่ยวกับเรา</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Contact" active-class="active" class="nav-link">ติดต่อเรา</router-link>
                    </li>
                    <form class="d-flex me-5" action="index.php">
                        <input class="form-control rounded-0 rounded-start shadow-none border border-secondary" type="search" id="search" name="search" placeholder="ค้นหาสินค้า" aria-label="Search" value=''>
                        <button class="btn btn-outline-secondary rounded-0 rounded-end shadow-none text-dark" type="submit">
                            ค้นหา
                        </button>
                    </form>
                </ul>
                    <template v-if="isLogin == false">
                        <router-link to="/Login" active-class="btn-dark text-white" class="btn btn-outline-dark width-100 me-1">
                            เข้าสู่ระบบ
                        </router-link>
                        <router-link to="/Register" active-class="btn-dark text-white" class="btn btn-outline-dark width-100">
                            สมัครสมาชิก
                        </router-link>
                    </template>
                    <template v-else>
                        <router-link to="/Cart" class="btn btn-outline-dark me-1">
                                ตะกร้า
                            <span class="badge bg-dark text-white ms-1 rounded-pill">
                                {{ cartQTY }}
                            </span>
                        </router-link>      
                        <div class="dropdown">
                            <button class="btn btn-dark navbar-btn width-100 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <b>
                                    {{username}}
                                </b>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li>
                                    <router-link to='/User/Profile' class='dropdown-item'>
                                        ข้อมูลส่วนตัว
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to='/Cart' class='dropdown-item'>
                                        ตะกร้าสินค้า
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to='/User/My_Products' class='dropdown-item'>
                                        สินค้าของฉัน
                                    </router-link>
                                </li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li>
                                    <a class='dropdown-item' @click="Logout">
                                        ออกจากระบบ
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </template>
            </div>
        </div>
    </nav>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            category: []
        }
    },
    async mounted() {
        await axios
            .get('https://jhgdfjkjkdfasdf.herokuapp.com/category')
            .then((res) => {
                this.category = res.data.data
            })
    },
    computed: {
        isLogin() {
            return this.$store.state.user.isLogin
        },
        uid() {
            return this.$store.state.user.uid
        },
        username() {
            return this.$store.state.user.username
        },
        cartQTY() {
            return this.$store.state.user.cartQTY
        }
    },
    methods: {
        async Logout() {
            this.$store.commit('setLogin', false)
            this.$store.commit('setUID', '')
            this.$store.commit('setUsername', '')
            this.$store.commit('setCartQTY', 0)
    
            localStorage.removeItem('isLogin')
            localStorage.removeItem('blog_token')

            this.$router.push('/')
        }
    }
}
</script>
