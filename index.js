const axios = require('axios');

class Luauth {
    constructor(KEY) {
        this.#API_KEY = KEY;


    }
    #BaseURL = "https://api.luauth.xyz/";
    request = (method = "GET", endpoint, data) => {

    }
}

Luauth.login = (KEY) => new Luauth(KEY);
module.exports = Luauth;

exports = module.exports;