function getBarangLengkap(master, listBM) {
    master.map(value => {
        let kodeBatch = [];
        let stokCounter = value.sisaStok;
        for (let i = 0; i < listBM.length; i++) {
            if (value.kodeBarang == listBM[i].kodeBarang) {
                stokCounter -= listBM[i].rollBM;
                if (stokCounter > 0) {
                    kodeBatch.push({
                        nomorBM: listBM[i].nomorBM,
                        tanggalBM: listBM[i].tanggalBM,
                        rollBM: listBM[i].rollBM
                    });
                }
                if (stokCounter < 0) {
                    kodeBatch.push({
                        nomorBM: listBM[i].nomorBM,
                        tanggalBM: listBM[i].tanggalBM,
                        rollBM: -stokCounter
                    });
                    stokCounter = 0;
                    break;
                }
            }
        }

        // for (let i = kodeBatch.length; i > 0; i--) {
        //     if (stokCounter > 0) {
        //         stokCounter = stokCounter - kodeBatch[i].rollBM;
        //     } else {

        //     }

        // }
        value.batch = kodeBatch;
        return value;
    })
    return master;
}

module.exports = { getBarangLengkap };