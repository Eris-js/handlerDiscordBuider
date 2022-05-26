const fs = require("node:fs")
module.exports = async (client) => {
    await fs.readdirSync("./events/").forEach((dir) => {
        const events = fs.readdirSync(`./events/${dir}/`).filter(file => file.endsWith(".js"));
        for (let file of events) {
            let event = require(`../events/${dir}/${file}`);
            if (event.once) {
                client.once(event.name, (...args) => event.execute(...args, client));
            } else {
                client.on(event.name, (...args) => event.execute(...args, client));
            }
            // else return;
        }
    });
}