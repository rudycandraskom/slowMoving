const fs = require("fs");
const { csvJSON } = require("./csvJSON")

function getListBM(namaFile) {
    const buffer = csvJSON(fs.readFileSync(namaFile, "utf-8"), ",");
    return castingListBM(buffer);
}

function castingListBM(jsonMentah) {
    var element = jsonMentah;
    for (let i = 0; i < jsonMentah.length; i++) {
        element[i].tanggalBM = new Date(element[i].tanggalBM);
        element[i].rollBM = parseInt(element[i].rollBM);
    }
    return element.reverse();
}

module.exports = { getListBM };