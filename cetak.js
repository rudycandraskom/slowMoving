const fs = require("fs");
const { formatTanggal } = require("./date");

function cetak(barangSM) {
    const dokumen = header().concat(isi(barangSM));
    fs.writeFileSync("./output/hasil.txt", dokumen.join("\n"));
}

function header() {
    const lebar = 90;
    let baris = [];
    baris[0] = rataTengah("DAFTAR BARANG SLOW MOVING", lebar);
    baris[1] = rataTengah("CABANG : PONTIANAK", lebar);
    baris[2] = rataTengah("TANGGAL : " + formatTanggal(new Date()), lebar);
    return baris;
}

function isi(barangSM) {
    let baris = [];
    let nomorBaris = 0
    for (let i = 0; i < barangSM.length; i++) {
        baris[nomorBaris] = "┌" + "─".repeat(88) + "┐";
        nomorBaris++;
        baris[nomorBaris] = "│" +
            rataTengah(barangSM[i].kodeBarang, 30) +
            rataKiri(barangSM[i].namaBarang, 42) +
            stokBoxRoll(barangSM[i].sisaStok, barangSM[i].isiPerBox) +
            "│";
        nomorBaris++;
        baris[nomorBaris] = "├" + "─".repeat(88) + "┤";
        nomorBaris++;
        for (let j = 0; j < barangSM[i].batch.length; j++) {
            baris[nomorBaris] = "│" +
                " ".repeat(30) +
                rataKiri(barangSM[i].batch[j].nomorBM, 20) +
                rataKiri(formatTanggal(barangSM[i].batch[j].tanggalBM), 22) +
                stokBoxRoll(barangSM[i].batch[j].rollBM, barangSM[i].isiPerBox) +
                "│";
            nomorBaris++;
        }
        baris[nomorBaris] = "└" + "─".repeat(88) + "┘";
        nomorBaris++;
    }
    return baris;
}

function stokBoxRoll(stok, isiPerBox) {
    let box = Math.floor(stok / isiPerBox);
    let roll = stok % isiPerBox;
    return rataKanan(box, 3) + " BOX" + rataKanan(roll, 4) + " ROLL";
}

function rataKanan(text, length) {
    return text.toString().padStart(length, " ");
}

function rataKiri(text, length) {
    return text.toString().padEnd(length, " ");
}

function rataTengah(text, length) {
    const spasi = " ";
    let jlhSpasi = length - text.length;
    let spasiBefore = jlhSpasi / 2;
    let spasiAfter = jlhSpasi - spasiBefore;
    if (jlhSpasi % 2 == 1) {
        spasiBefore++;
    }
    return spasi.repeat(spasiBefore) + text + spasi.repeat(spasiAfter)
}

module.exports = { cetak };