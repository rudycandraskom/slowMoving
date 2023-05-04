const fs = require("fs");
const { csvJSON } = require("./csvJSON")

function getMasterBarang(namaFile) {
    const buffer = csvJSON(fs.readFileSync(namaFile, "utf-8"), ",");
    return castingMasterBarang(buffer);
}

function castingMasterBarang(jsonMentah) {
    var element = getStok(jsonMentah);
    for (let i = 0; i < jsonMentah.length; i++) {
        element[i].isiPerBox = parseInt(element[i].isiPerBox);
        element[i].maxAge = parseInt(element[i].maxAge);
        element[i].sisaStok = parseInt(element[i].sisaStok);
    }
    return element;
}

function getStok(masterBarang) {
    const dataStok = csvJSON(fs.readFileSync("./input/stokMentah.csv", "utf-8"), ",");
    masterBarang.map(value => {
        for (let i = 0; i < dataStok.length; i++) {
            if (value.kodeBarang == dataStok[i].kodeItem) {
                value.sisaStok = dataStok[i].stokSAP;
            }
        }
    })
    return masterBarang;
}

module.exports = { getMasterBarang };