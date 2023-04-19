const fs = require("fs");
const { csvJSON } = require("./csvJSON")

function getMasterBarang(namaFile) {
    const buffer = csvJSON(fs.readFileSync(namaFile, "utf-8"), ",");
    return castingMasterBarang(buffer);
}

function castingMasterBarang(jsonMentah) {
    for (let i = 0; i < jsonMentah.length; i++) {
        let element = array[i];
        
    }
    return 
}


module.exports = { getMasterBarang };