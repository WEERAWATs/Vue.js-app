<template>
    <div class="container">   
        <div class="row justify-content-center mt-5">
            <div class="col-lg-6 col-md-8 col-sm-10">
                <div class="card p-5">
                    <div class="card-header bg-white">
                        <h2>การเข้าสู่ระบบ</h2>
                    </div>
                    <div class="card-body">
                        <div :class="`alert alert-${alert.color}`" v-if="alert.msg != ''">
                            <b>{{alert.msg}}</b>
                        </div>
                        <form @submit="submit">
                            <div class="mb-3">
                                <label for="username" class="form-label"><b>ชื่อผู้ใช้งาน</b></label>
                                <input type="text" v-model="form.username" class="form-control" maxlength="50" placeholder="กรอกชื่อผู้ใช้งานของคุณ" required>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label"><b>รหัสผ่าน</b></label>
                                <input type="password"  v-model="form.password" class="form-control" maxlength="50" placeholder="กรอกรหัสผ่านของคุณ" required>
                            </div>
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary" type="submit" :disabled="isLogin">
                                    <span v-show="isLogin" class="spinner-border spinner-border-sm"></span>
                                    เข้าสู่ระบบ
                                </button>
                            </div>
                        </form>
                        <div class="mt-3 float-end">
                            <span>ถ้าคุณยังไม่มีบัญชี <router-link to="/register">สมัครมาชิก</router-link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios';
// import { ref, computed} from 'vue'
// import { useState } from 'vuex'

export default {
    data() {
        return {
            form: {
                username:'',
                password:'',
                
            },
            isLogin:false,
            alert: {
                color:'',
                msg:''
            },
        }
    },
    methods: {
        async submit(e){
            e.preventDefault();
            this.isLogin = true;

            await axios.post('https://jhgdfjkjkdfasdf.herokuapp.com/login',{
                username:this.form.username,
                password:this.form.password,
            }).then((res) => {
                if (!res.data.data.error) {
                    this.$store.commit('setLogin', true);
                    this.$store.commit('setUID', res.data.data.id_user);
                    this.$store.commit('setUsername', res.data.data.username);

                    localStorage.setItem('isLogin', true);
                    // localStorage.setItem('access_token', res.data.access_token)

                    this.$router.go(-1);
                }
            }).catch(() => {
                    this.isLogin = false;
                    this.alert.color = 'warning';
                    this.alert.msg = 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง :(';
            })
            // .catch(() => {
            //     this.isLogin = false;
            //     this.$store.commit('setLogin', false);
            //     this.alert.color = 'danger';
            //     this.alert.msg = 'เข้าสู่ระบบไม่สำเร็จ TT';
            // })
        }
    }
}
</script>