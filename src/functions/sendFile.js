var fs = require('fs')

let sendFile = (res, path) =>
{
    fs.readFile(path, (err, data) =>
    {
        if(err)
        {
            console.error(err)
            return res.status(500).end()
        }
        res.status(200).end(data)
    })
}

module.exports = sendFile