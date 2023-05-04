<<<<<<< HEAD
const fs = require("fs");
const { getMasterBarang } = require("./modules/getMasterBarang");
const { getListBM } = require("./modules/getListBM");
const { getBarangLengkap } = require("./modules/getBarangLengkap");
const { getBarangSlowMoving } = require("./modules/getBarangSM");
const { cetak } = require("./modules/cetak");

const masterBarang = getMasterBarang("./input/masterBarang.csv");
const listBM = getListBM("./input/listBM.csv");

const barangLengkap = getBarangLengkap(masterBarang, listBM);
const barangSlowMoving = getBarangSlowMoving(barangLengkap)
=======
const fs = require("fs");
const { getMasterBarang } = require("./modules/getMasterBarang");
const { getListBM } = require("./modules/getListBM");
const { getBarangLengkap } = require("./modules/getBarangLengkap");
const { getBarangSlowMoving } = require("./modules/getBarangSM");
const { cetak } = require("./modules/cetak");

const masterBarang = getMasterBarang("./input/masterBarang.csv");
const listBM = getListBM("./input/listBM.csv");

const barangLengkap = getBarangLengkap(masterBarang, listBM);
const barangSlowMoving = getBarangSlowMoving(barangLengkap)
>>>>>>> 1fbb33350ad1daf3c7678b8fa18b76f5ac8a17c9
cetak(barangSlowMoving);