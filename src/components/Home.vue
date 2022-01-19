<template>
    <div class="container h-80vh p-1">
        <div class="p-4">
            <h2 class="mt-2">สินค้าทั้งหมด</h2><hr>
            <div class="row row-cols-1 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 g-3">
                <div class="col" v-for="product in products" :key="product.id_product">    
                    <router-link :to="`/Product/${product.id_product}`" class="text-decoration-none text-dark">
                        <div class="card card-product h-100">
                            <img class="card-img-top" :src="`images/products/${product.img}`" :alt="product.name">
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <b class="fw-bolder text-wrap">{{product.name}}</b>
                                    <p class="text-danger">฿{{formatPrice(product.price)}}</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "Home",
    // beforeCreate() {
    //     if(!this.$store.state.user.uid){
    //         this.$router.replace("/Login")
    //         alert("u dont have a permisstion")
    //     }
    // },
    data() {
        return {
            products: [],
        }
    },
    mounted() {
        axios
            .get('http://localhost:3000/products')
            .then((res) => {
                this.products = res.data.data
            })
    },
    methods: {
        formatPrice(value) {
            return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        },
    }
}
</script>
