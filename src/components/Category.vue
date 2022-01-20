<template>
    <div class="container h-80vh p-1">
        <div class="p-4">
            <h2 class="mt-2">{{$route.params.name}}</h2><hr>
            <div class="row row-cols-1 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 g-3">
                <div class="col" v-for="product in products" v-bind:key="product.id_product">    
                    <router-link :to="`/Product/${product.id_product}`" class="text-decoration-none text-dark">
                        <div class="card card-product h-100">
                            <img class="card-img-top" v-bind:src="`../images/products/${product.img}`" :alt="product.name">
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <b class="fw-bolder text-wrap">{{product.name}}</b>
                                    <p class="text-danger">฿{{product.price}}</p>
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
    name: "Home",
    data() {
        return {
            products: []
        }
    },
    mounted() {
        axios
            .post('https://jhgdfjkjkdfasdf.herokuapp.com/category',{
                name: this.$route.params.name
            })
            .then((res) => {
                this.products = res.data.data
            })
    },
}
</script>