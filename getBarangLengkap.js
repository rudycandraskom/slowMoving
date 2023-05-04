const { monthDiff, sekarang } = require("./date");

function getBarangLengkap(master, listBM) {
    master.map(value => {
        let kodeBatch = [];
        let stokCounter = value.sisaStok;
        for (let i = 0; i < listBM.length; i++) {
            if (value.kodeBarang == listBM[i].kodeBarang) {
                if (stokCounter == 0) break;
                if (stokCounter <= listBM[i].rollBM) {
                    kodeBatch.push({
                        nomorBM: listBM[i].nomorBM,
                        tanggalBM: listBM[i].tanggalBM,
                        rollBM: stokCounter,
                        umurBMinBln: monthDiff(listBM[i].tanggalBM, sekarang())
                    });
                    stokCounter = 0;
                    break;
                } else {
                    stokCounter -= listBM[i].rollBM;
                    kodeBatch.push({
                        nomorBM: listBM[i].nomorBM,
                        tanggalBM: listBM[i].tanggalBM,
                        rollBM: listBM[i].rollBM,
                        umurBMinBln: monthDiff(listBM[i].tanggalBM, sekarang())
                    });
                }
            }
        }
        value.batch = kodeBatch;
        return value;
    })
    return master;
}

module.exports = { getBarangLengkap };