function monthDiff(dateFrom, dateTo) {
    return dateTo.getMonth() - dateFrom.getMonth() +
        (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
}

function sekarang() {
    return new Date(new Date().toJSON().slice(0, 10).replace(/-/g, '/'));
}

function formatTanggal(date) {
    var tahun = date.getFullYear();
    var bulan = date.getMonth();
    var tanggal = date.getDate();
    var harik = date.getSeconds();
    switch (bulan) {
        case 0: bulan = "JAN"; break;
        case 1: bulan = "FEB"; break;
        case 2: bulan = "MAR"; break;
        case 3: bulan = "APR"; break;
        case 4: bulan = "MEI"; break;
        case 5: bulan = "JUN"; break;
        case 6: bulan = "JUL"; break;
        case 7: bulan = "AGS"; break;
        case 8: bulan = "SEP"; break;
        case 9: bulan = "OKT"; break;
        case 10: bulan = "NOV"; break;
        case 11: bulan = "DES"; break;
    }
    return tanggal.toString().padStart(2, "0") + "-" + bulan + "-" + tahun;
}

module.exports = { monthDiff, sekarang, formatTanggal };