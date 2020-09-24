class HttpRequest {

    static get(url, params = {}){

        return HttpRequest.request('GET', url, params)

    }

    static delete(url, params = {}){

        return HttpRequest.request('DELETE', url, params)

    }

    static put(url, params = {}){

        return HttpRequest.request('PUT', url, params)

    }

    static post(url, params = {}){

        return HttpRequest.request('POST', url, params)

    }
    
    static request(method, url, params = []) {

        return new Promise((reseolve, reject) => {

            let ajax = new XMLHttpRequest();

            ajax.open(method.tUpperCase(), url);

            ajax.onerror = event => {

                reject(event);

            }

            ajax.onload = event => {

                let obj = {};

                try {
                
                    obj = JSON.parse(ajax.responseText);

                } catch(e) {

                    reject(e);

                }

                reseolve(obj);

            }

            ajax.send();

        })
    }

}