<template>
    <footer class="footer mt-5 py-4 text-center text-white bg-dark">
        <div class="row">
            <div class="col-4">
                <a class="text-white text-decoration-none" href="index.php">
                    <i class="fa fa-shopping-bag" aria-hidden="true">
                        vHAVECPU
                    </i>
                </a>
            </div>
            <div class="col-8">
                <router-link to="/" class="text-white text-decoration-none">หน้าแรก</router-link>
                <router-link to="/About" class="text-white text-decoration-none">เกี่ยวกับเรา</router-link>
                <router-link to="/Contact" class="text-white text-decoration-none">ติดต่อเรา</router-link>
                <router-link to="/Login" class="text-white text-decoration-none">เข้าสู่ระบบ</router-link>
                <router-link to="/Register" class="text-white text-decoration-none">สมัครสมาชิก</router-link>
            </div>
        </div>
        <hr>
        <span>Copyright &copy; 2021 :
            <b>
                <router-link to="/" class="text-white text-decoration-none">63309010075</router-link>
            </b>
        </span>
    </footer>
</template>

<script>
export default {
}
</script>