const fs = require("fs");

const html = fs.readFileSync("wtfter.html", "utf8");

const debut = html.indexOf("const dictionary = [");
const fin = html.indexOf("];", debut) + 2;

const code = html.slice(debut, fin);

const dictionary = eval(
    code.replace("const dictionary =", "")
);

fs.writeFileSync(
    "mots.json",
    JSON.stringify(dictionary, null, 2),
    "utf8"
);

console.log(`✅ mots.json créé : ${dictionary.length} entrées`);
