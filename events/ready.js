module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("Beta V2.0 Build version", {type: "WATCHING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
