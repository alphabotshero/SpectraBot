module.exports = (client, guild) => {
    client.channels.cache.get('791539257063374868').send
    (`__Left a server__ :(
    Server name : ${guild.name}
    Server ID : ${guild.id}
    Server owner ${guild.ownerID}
    Server membercount : ${guild.memberCount}`);
};