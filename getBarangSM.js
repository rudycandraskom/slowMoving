function getBarangSlowMoving(listBarang) {
    let listBarangSM = listBarang.map(filterBatch).filter(value => value.batch.length > 0)
    return listBarangSM;
}

function filterBatch(itemBarang) {
    let batch = itemBarang.batch.filter(a => {
        return a.umurBMinBln > itemBarang.maxAge;
    })
    itemBarang.batch = batch;
    return itemBarang;
}

module.exports = { getBarangSlowMoving };