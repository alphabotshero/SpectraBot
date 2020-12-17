module.exports = (client, guild) => {
    client.channels.cache.get('787708430760542250').send
    (`__Left a server__ :(
    Server name : ${guild.name}
    Server ID : ${guild.id}
    Serveur owner ${guild.ownerID}
    Server membercount : ${guild.memberCount}`);
};