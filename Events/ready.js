module.exports = async(client) => {

    client.user.setPresence({
        activity: {
            name: "Comment ça va ?"
        }
    })
};