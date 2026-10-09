const { createProxy } = require('eaglerproxy');

createProxy({
    port: process.env.PORT || 3000,
    target: "Xyther1.aternos.me:22656", 
    motd: "§bChromebook Server Running on Render!",
    maxPlayers: 20
});

console.log("Proxy successfully deployed!");
