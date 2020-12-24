module.exports = (client, guild) => {
    client.channels.cache.get('791539220006830081').send
    (`__Joined a New Server!!__
    Server name : ${guild.name}
    Server ID : ${guild.id}
    Server owner ${guild.ownerID}
    Server membercount : ${guild.memberCount}`);
};