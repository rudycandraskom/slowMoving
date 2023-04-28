/**
 * 1. Read data master barang + syarat Slow Moving ==> ObjMaster
 * 2. Read data stok ==> ObjStok
 * 3. buat data barang dengan stok ==> ObjBarang
 * 4. read data BM ==> ObjAllBM
 * 5. filter data BM > 6 bln ==> ObjFilteredBM
 * 6. cek tiap barang dengan ObjFilteredBM ==> ObjSlowMoving
 * 7. rekap ObjSlowMoving ==> ObjListSlowMoving
 */

const fs = require("fs");
const { getMasterBarang } = require("./modules/getMasterBarang");
const { getListBM } = require("./modules/getListBM");
const { getBarangLengkap } = require("./modules/getBarangLengkap");
const { getBarangSlowMoving } = require("./modules/getBarangSM");

const masterBarang = getMasterBarang("./input/masterBarang.csv");
const listBM = getListBM("./input/listBM.csv");

const barangLengkap = getBarangLengkap(masterBarang, listBM);
// const barangSlowMoving = getBarangSlowMoving(masterBarang, listBM)
console.log("Total Stok = " + barangLengkap[0].sisaStok)
console.table(barangLengkap[0].batch);