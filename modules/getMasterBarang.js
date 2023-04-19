const fs = require("fs");
const { csvJSON } = require("./csvJSON")

function getMasterBarang(namaFile) {
    const buffer = csvJSON(fs.readFileSync(namaFile, "utf-8"), ",");
    return castingMasterBarang(buffer);
}

function castingMasterBarang(jsonMentah) {
    var element = jsonMentah;
    for (let i = 0; i < jsonMentah.length; i++) {
        element[i].isiPerBox = parseInt(element[i].isiPerBox);
        element[i].sisaStok = parseInt(element[i].sisaStok);
    }
    return element;
}


module.exports = { getMasterBarang };