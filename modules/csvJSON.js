function csvJSON(csv, spliter) {
    const lines = csv.split('\r\n')
    const result = []
    const headers = lines[0].split(spliter)

    for (let i = 1; i < lines.length; i++) {
        if (!lines[i])
            continue
        const obj = {}
        const currentline = lines[i].split(spliter)
        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j]
        }
        result.push(obj)
    }
    return result
}

module.exports = { csvJSON }