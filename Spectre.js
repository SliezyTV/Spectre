const { white, green, yellow } = require('chalk');
const Mitm = require("mitm");

const Spectre = class {
    constructor(path) {
        this.path = path;
        
        const mitm = Mitm();
        mitm.on("request", function (req, res) {
            console.log(white(`[${green('+')}] [${yellow(req.method)}] [${yellow(req.url)}]`));
            req.destroy();
        });
    };

    PrintLogo() {
        console.log(green(`
        ▄▄▄▄▄   █ ▄▄  ▄███▄   ▄█▄      ▄▄▄▄▀ █▄▄▄▄ ▄███▄   
       █     ▀▄ █   █ █▀   ▀  █▀ ▀▄ ▀▀▀ █    █  ▄▀ █▀   ▀  
     ▄  ▀▀▀▀▄   █▀▀▀  ██▄▄    █   ▀     █    █▀▀▌  ██▄▄    
      ▀▄▄▄▄▀    █     █▄   ▄▀ █▄  ▄▀   █     █  █  █▄   ▄▀ 
                 █    ▀███▀   ▀███▀   ▀        █   ▀███▀   
                  ▀                           ▀
        https://github.com/Its-Vichy/Spectre`));
    };

    StartMalware() {
        console.log(white(`[${yellow('#')}] Starting ${this.path}.\n`));
        require(this.path);
    };
};

const Ghost = new Spectre('./payload.js');
Ghost.PrintLogo();
Ghost.StartMalware();
