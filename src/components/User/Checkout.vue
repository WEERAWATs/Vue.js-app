<template>
   <div class="container p-5 bg-white">
            <div class="row mb-2 p-2 bg-light">
                <div class="col-12">
                    <h3>
                        รายละเอียดรายการสั่งซื้อ
                    </h3>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-6">
                    ชื่อผู้สั่งซื้อ
                </div>
                <div class="col-5">
                    tanyalnw123                
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-6">
                    วันที่สั่งซื้อ
                </div>
                <div class="col-5">
                    2022-01-25 12:52
                </div>
            </div>
            <div class="row mt-2 p-2 bg-light">
                <div class="col-12">
                    <h6 class="text-danger">
                        ***กรุณาตรวจสอบรายละเอียดการสั่งซื้อสินค้าให้ครบถ้วน
                    </h6>
                </div>
            </div>
            <div class="table-responsive">
                <table class='table table-striped table-hover box'>
                    <thead bgcolor='#f5b041'>
                        <tr>
                            <th class='text-center'>สินค้า</th>
                            <th class='text-end'>ราคา</th>
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
                        </tr>                
                        <tr bgcolor='#CACACA'>
                            <td colspan='2' class='text-end'>
                                <b>รวม ({{ formatPrice(sumQTY) }} ชิ้น)</b><br>
                                <b>รวมทั้งหมด: ฿{{ formatPrice(sumTotal) }}</b>
                            </td>
                        </tr>
                        <tr>
                            <td colspan='2' class='text-end'>
                                <a @click="back" class="btn btn-outline-dark mx-1">ย้อนกลับ</a>
                                <a href="/save_order" class="btn btn-primary">บันทึกการสั่งสินค้า</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="row">
                <div class="col-12">
                </div>
            </div>
            <div class="row justify-content-around mb-2">
                <div class="col-sm-6 col-md-5 col-lg-5 border border-1 p-5">
                    <p><b>ชื่อลูกค้า:</b> ธันยาเทพ นักรน</p>
                    <p><b>หมายเลขโทรศัพท์:</b> 0852432168</p>
                    <p><b>ที่อยู่ในการจัดส่ง:</b> 417/27 ถ.ยอสนยา ต.ในเมือง อ.เมือง จ.นครราชสีมา 998565
                    <router-link to="/user/profile" 
                        class="btn btn-outline-success btn-sm">
                        แก้ไข
                    </router-link>
                    </p>
                </div>
                <div class="col-sm-6 col-md-5 col-lg-6 border border-1 p-5">
                    <p class="bg-light p-1">ราคารวม: ฿49,900</p>
                    <p class="bg-light p-1">ค่าจัดส่ง: ฟรี</p>
                    <p class="bg-danger text-white p-1 ้ข/">รวมเป็นเงิน: ฿49,900</p>
                </div>
            </div>
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

        back() {
            this.$router.go(-1)
        }

    },
    beforeMount() {
        this.getData()
    }
}
</script>
