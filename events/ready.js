module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("s!help and s!play", {type: "PLAYING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
