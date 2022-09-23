const axios = (...args) => import('axios').then(({default: axios}) => axios(...args));

class Luauth {
    constructor(KEY) {
        this.#Key = KEY;

        let data = this.#baseRequest('get', 'status');
        if (!data.active) throw new Error(data.message);

        

        this.#Version = data.gateway_version;
        return this
    }
    #BaseURL = "https://api.luauth.xyz/";
    #Key;
    #Version;
    #baseRequest = async (method = "get", endpoint, data) => {
        return new Promise((resolve, reject) => {
            axios({
                method: method,
                url: this.#BaseURL + endpoint,
                data: (method == "post" ? data && JSON.stringify(data) : null),
                headers: {
                    "Authorization": this.#Key,
                    "Content-Type": "application/json"
                },
            }).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            });
        });
    }
    #request = (method, endpoint, data) => this.#baseRequest(method, `${this.#Version}/${endpoint}`, data);
}

Luauth.login = (KEY) => new Luauth(KEY);
export default Luauth;

exports = module.exports;