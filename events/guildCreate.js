module.exports = (client, guild) => {
    client.channels.cache.get('787708409678921749').send
    (`__Joined a New Server!!__
    Server name : ${guild.name}
    Server ID : ${guild.id}
    Serveur owner ${guild.ownerID}
    Server membercount : ${guild.memberCount}`);
};