<template>
    <div class="container">
        <div class="row justify-content-center mt-5">
            <div class="col-lg-6 col-md-10">
                <div class="card p-5">
                    <div class="card-header bg-white">
                        <h2>การสมัครสมาชิก</h2>
                    </div>
                    <div class="card-body">
                        <div :class="`alert alert-${alert.color}`" v-if="isRegister">
                            <b>{{alert.msg}}</b>
                        </div>
                        <form @submit="submit">
                            <div class="row mb-2">
                                <div class="col-12">
                                    <label class="form-label"><b>ชื่อผู้ใช้งาน</b></label>
                                    <input 
                                        type="text"
                                        v-model="form.username"
                                        class="form-control"
                                        maxlength="50"
                                        placeholder="กรอกชื่อผู้ใช้งาน"
                                        required
                                    >
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-md-6">
                                    <label class="form-label"><b>รหัสผ่าน</b></label>
                                    <input 
                                        type="password"
                                        v-model="form.password"
                                        class="form-control"
                                        maxlength="50"
                                        placeholder="กรอกรหัสผ่าน"
                                        required
                                    />
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label"><b>รหัสผ่านอีกครั้ง</b></label>
                                    <input 
                                        type="password"
                                        v-model="form.confirm_password"
                                        class="form-control"
                                        maxlength="50"
                                        placeholder="กรอกรหัสผ่านอีกครั้ง"
                                        required
                                    />
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-12">
                                    <label class="form-label"><b>เบอร์โทร</b></label>
                                    <input
                                        type="tel"
                                        v-model="form.tel"
                                        class="form-control"
                                        maxlength="10"
                                        placeholder="กรอกเบอร์โทรศัพท์"
                                        required 
                                    />
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-12">
                                    <label class="form-label"><b>อีเมล</b></label>
                                    <input
                                        type="email"
                                        v-model="form.email"
                                        class="form-control"
                                        maxlength="50"
                                        placeholder="กรอกอีเมล"
                                        required
                                    />
                                </div>
                            </div>
                            <div class="d-grid gap-2">
                                <button
                                    type="submit"
                                    class="btn btn-success"
                                >
                                สมัครมาชิก
                                </button>
                            </div>
                        </form>
                        <div class="mt-3">
                            <span>ถ้าคุณมีบัญชีแล้ว <router-link to="/Login">เข้าสู่ระบบ</router-link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            form: {
                username:'',
                password:'',
                confirm_password:'',
                tel:'',
                email:''
            },
            isRegister:false,
            alert: {
                color:'',
                msg:''
            }
        }
    },
    methods: {
        submit(e){
            e.preventDefault();
            this.isRegister = true
            this.alert.color = 'info'
            this.alert.msg = 'กำลังสมัครสมาชิก...'

            axios.post('https://jhgdfjkjkdfasdf.herokuapp.com/check_username',{
                username: this.form.username
            })
                .then((res) => {
                    if(res.data.error == true){
                        this.alert.color = 'danger'
                        this.alert.msg = 'มีชื่อผู้ใช้งานนี้ในระบบแล้ว TT'
                    }else{
                        if(this.form.confirm_password == this.form.password){
                        axios.post('https://jhgdfjkjkdfasdf.herokuapp.com/register',{
                            username:this.form.username,
                            password:this.form.password,
                            tel:this.form.tel,
                            email:this.form.email
                            }).then(() => {
                                this.alert.color = 'success'
                                this.alert.msg = 'สมัครสมาชิกสำเร็จ :)'

                                this.form = ""
                            }).catch(() => {
                                this.alert.color = 'danger'
                                this.alert.msg = 'สมัครสมาชิกไม่สำเร็จ :('
                            })
                        }else{
                            this.alert.color = 'warning'
                            this.alert.msg = 'รหัสผ่านไม่ตรงกัน !!!'
                        }
                    }
                })

            setTimeout(() => {
                this.isRegister = false
            }, 5000);
        }
    }
}
</script>