<template>
     <div class='container p-5 bg-white'>
        <h3>ตะกร้าสินค้า</h3>
        <table class='table table-hover table-bordered mt-3 align-middle'>
            <thead bgcolor='#CACACA'>
                <tr>
                    <th class='text-center'>สินค้า</th>
                    <th class='text-end'>รายละเอียด</th>
                    <th class='text-center'>ลบ</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="data in cart" :key="data.pid">
                    <td class='text-center'>
                        <router-link :to="`/Product/${data.pid}`" class='text-decoration-none text-dark'>
                            <img :src="`images/products/${data.img}`" :alt="data.pname" style="height: 75px">
                            <p>{{ data.pname }}</p>
                        </router-link>
                    </td>
                    <td class='text-end'>
                        <h6>ราคา: ฿{{ formatPrice(data.price) }}</h6>
                        <h6>
                            จำนวน: {{ formatPrice(data.qty) }} ชิ้น
                        </h6>
                        <h6>รวม: ฿{{ formatPrice(data.price*data.qty) }}</h6>
                    </td>
                    <td class='text-center'>
                        <button class="btn btn-danger btn-sm" @click="delCart(data.cid)" :disabled="btnLoading.id == data.cid">
                            <span v-show="btnLoading.id == data.cid" class="spinner-border spinner-border-sm"></span>
                            ลบ
                        </button>
                    </td>
                </tr>                
                <tr bgcolor='#CACACA'>
                    <td colspan='2' class='text-end'>
                        <b>รวม ({{ formatPrice(sumQTY) }} ชิ้น)</b><br>
                        <b>รวมทั้งหมด: ฿{{ formatPrice(sumTotal) }}</b>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td colspan='4' class='text-end'>
                        <button class="btn btn-warning me-2">ลบทั้งหมด</button>
                        <router-link to="checkout" class="btn btn-primary">สั่งสินค้า</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            cart: [],
            sumQTY:0,
            sumTotal:0,
            btnLoading:{
                id:'',
            }
        }
    },
    methods: {
        formatPrice(value) {
            return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        },

        async getData() {
            await axios
                .post('https://jhgdfjkjkdfasdf.herokuapp.com/user/cart',{
                    uid:this.$store.state.user.uid
                })
                .then((res) => {
                    this.cart = res.data.data
                    this.cart.forEach(element => {
                        this.sumQTY += parseInt(element.qty)
                        this.sumTotal += parseInt(element.price)*parseInt(element.qty)
                    });
                    this.$store.commit('setCartQTY', this.sumQTY)
                })
        },

        delCart(id) {
            this.btnLoading.id = id
            axios
                .delete('https://jhgdfjkjkdfasdf.herokuapp.com/cart/'+id)
                .then(async() => {
                    await this.getData()
                    this.btnLoading.id = ""
                })
        }
    },
    beforeMount() {
        this.getData()
    }
}
</script>
