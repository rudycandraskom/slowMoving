function getBarangSlowMoving(master, listBM) {
    master.map(value => {
        let kodeBatch = [];
        for (let i = 0; i < listBM.length; i++) {
            if (value.kodeBarang == listBM[i].kodeBarang) {
                kodeBatch.push({
                    nomorBM: listBM[i].nomorBM,
                    tanggalBM: listBM[i].tanggalBM,
                    rollBM: listBM[i].rollBM
                });
            }
        }
        kodeBatch.filter(nilai => {
            return nilai.tanggalBM < new Date("2022-10-30")
        })
        // console.table(kodeBatch);
        value.batch = kodeBatch;
        return value;
    })
    // return master;
}

module.exports = { getBarangSlowMoving };