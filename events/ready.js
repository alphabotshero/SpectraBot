module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity(",help | V2.0.0", {type: "WATCHING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
