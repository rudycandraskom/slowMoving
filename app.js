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

const masterBarang = getMasterBarang("./input/masterBarang.csv");

console.log(masterBarang);