const fs = require('fs')
const templateDir = `${__dirname}/../data/templates`
const dataDir = `${__dirname}/../data/generated`
const R = require('ramda')

const readFiles = (dirname, onError) => {
    // fetching file names from template dir
    const files = fs.readdirSync(dirname, function (err, filenames) {
        if (err) {
            onError(err)
            return
        }
        return filenames
    })
    // fetching generated content by templates
    const content = files.map(file => require(`${dirname}/${file}`))
    return [files, content]
}

// saving generated data to use in test run
const fakerData2File = async () => {
    const data = readFiles(templateDir)
    R.transpose(data).map(([filename, content]) => {
        fs.writeFileSync(`${dataDir}/${filename}.json`, JSON.stringify(content))
    })
}

fakerData2File()
