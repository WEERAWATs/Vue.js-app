<template>
    <div class="container h-80vh p-1">
        <div class="p-4">
            <h2 class="mt-2">{{$route.params.name}}</h2><hr>
            <div class="row row-cols-1 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 g-3" v-if="products.length == 0">
                <div class="col" v-for="i in 5" :key="i">    
                    <div class="card">
                        <div class="card-body p-4" style="height: 400px">
                            <div class="text-center">
                                <div class="spinner-grow spinner-grow-sm mx-1"></div>
                                <div class="spinner-grow spinner-grow-sm"></div>
                                <div class="spinner-grow spinner-grow-sm mx-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 g-3" v-else>
                <div class="col" v-for="product in products" v-bind:key="product.id_product">    
                    <router-link :to="`/Product/${product.id_product}`" class="text-decoration-none text-dark">
                        <div class="card card-product h-100">
                            <img class="card-img-top" v-bind:src="`../images/products/${product.img}`" :alt="product.name">
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <b class="fw-bolder text-wrap">{{product.name}}</b>
                                    <p class="text-danger mt-2">฿{{ formatPrice(product.price) }}</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <router-view/>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            products: []
        }
    },
    methods:  {
        formatPrice(value) {
            return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        },

        async getProducts() {
             await axios
                .post('https://jhgdfjkjkdfasdf.herokuapp.com/products/category',{
                    name: this.$route.params.name
                })
                .then((res) => {
                    this.products = res.data.data
                })
        }
    },
    mounted() {
        this.getProducts()
    },
    updated() {
        this.getProducts()
    }
}
</script>