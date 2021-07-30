var fs = require('fs')

// Sends file from $path and sends it as response
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

// Export the function
module.exports = sendFile