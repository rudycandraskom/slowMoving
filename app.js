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
cetak(barangSlowMoving);