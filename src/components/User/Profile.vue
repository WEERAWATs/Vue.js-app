<template>
    <div class='container p-5 bg-white'>
        <div class="row justify-content-center">
            <div class="col-md-6 col-sm">
                <h1>ข้อมูลส่วนตัว</h1><hr>
                <div class="col-md-12">
                    <label class="form-label"><b>ชื่อผู้ใช้งาน</b></label>
                    <input type="text" class="form-control" v-model="user.username" disabled>
                </div>
                <div class="col-md-12">
                    <label class="form-label"><b>รหัสผ่าน</b></label>
                    <input type="text" class="form-control" value="**********" disabled>
                    <a class="link" style="cursor:pointer" data-bs-toggle='modal' data-bs-target='#ChangePasswordModal'>เปลี่ยนรหัสผ่าน</a>
                </div>
                <form class="row g-2">
                    <div class="col-md-12">
                        <label class="form-label"><b>ชื่อ-สกุล</b></label>
                        <input type="text" v-model="user.fullname" class="form-control" maxlength="50">
                    </div>
                    <div class="col-md-12">
                        <label class="form-label"><b>หมายเลขโทรศัพท์</b></label>
                        <input type="tel" v-model="user.tel" class="form-control" maxlength="10" />
                    </div>
                    <div class="col-md-12">
                        <label class="form-label"><b>อีเมล</b></label>
                        <input type="email" v-model="user.email" class="form-control" maxlength="50">
                    </div>
                    <div class="col-md-12">
                        <label class="form-label"><b>ที่อยู่</b></label>
                        <textarea class="form-control" v-model="user.address" rows="3"></textarea>
                    </div>
                    <div class="col-md-12">
                        <div class="d-grid gap-2 my-3">
                            <button type='submit' class='btn btn-success'>บันทึก</button>
                            <a class="btn btn-outline-dark">ย้อนกลับ</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            user:{
                username:this.$store.state.user.username,
                fullname:'',
                tel:'',
                email:'',
                address:''
            },
        }
    },
    mounted() {
        axios
            .get(`http://localhost:3000/user/${this.$store.state.user.uid}`)
            .then((res) => {
                this.user.fullname = res.data.data.fullname
                this.user.tel = res.data.data.tel
                this.user.email = res.data.data.email
                this.user.address = res.data.data.address
            })
    }
}
</script>