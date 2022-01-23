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
                <router-link to="/" class="text-white text-decoration-none mx-1">หน้าแรก</router-link>
                <router-link to="/about" class="text-white text-decoration-none mx-1">เกี่ยวกับเรา</router-link>
                <router-link to="/contact" class="text-white text-decoration-none mx-1">ติดต่อเรา</router-link>
                <router-link to="/login" class="text-white text-decoration-none mx-1">เข้าสู่ระบบ</router-link>
                <router-link to="/register" class="text-white text-decoration-none mx-1">สมัครสมาชิก</router-link>
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