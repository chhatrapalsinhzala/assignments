const privateKey = "private key"

function generateUniqueId(){
    const uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(2,5)

    return uniqueId
}

module.exports = {generateUniqueId, privateKey}