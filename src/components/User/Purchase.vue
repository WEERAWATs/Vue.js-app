<template>
    <div class="container p-5">   
        <h1>สินค้าของฉัน</h1><hr>
        <div class="card border-secondary mt-5">
            <div class="card-header bg-transparent border-secondary text-end">
                <b>หมายเลขคำสั่งซื้อ: 163271970 |</b>
                <b class="text-danger mx-1">ที่ต้องชำระ</b>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-12 col-lg-1">
                        <img src='' height='75px'>
                    </div>
                    <div class="col-sm-10 col-lg-9">
                        <a href="" class="text-decoration-none text-dark">
                            <b>CASE NZXT H510 FLOW (BLACK)</b>
                        </a><br>
                    </div>
                    <div class="col-sm-2 col-lg-2 text-end">
                        <p>
                            ฿4,770                                    </p>
                    </div><hr>
                </div>
                <div class="row text-end">
                        <div class="col-sm-10 col-lg-10">
                            <h6>
                                ยอดคำสั่งซื้อทั้งหมด:
                            </h6>
                        </div>
                        <div class="col-sm-2 col-lg-2">
                            <b class="text-danger">
                                ฿20,970                            </b>
                        </div>
                    </div>
                </div>
                <div class="card-footer bg-transparent border-secondary text-end">
                    <button class="btn btn-outline-success btn-sm mx-1" onclick="modal_order_pay(163271970,'pay',20970)" >ชำระเงิน</button>
                    <button class="btn btn-danger btn-sm" onclick="modal_order_cancel(163271970)" >ยกเลิกคำสั่งซื้อ</button>
                </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
