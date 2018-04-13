export default class API {
  constructor() {
    if (API.instance) {
      return API.instance
    }

    this.baseUrl = 'http://localhost:8081/api';
  }

  static getInstance() {
    if (!API.instance) {
      this.instance = new API();
    }

    return API.instance;
  }

  //Api

  searchHotels(filters) {
    const query = JSON.stringify(filters)
    return this._get(`/search?filters=${query}`);
  }


  //Methods

  _post(path, body) {
    return this.request('POST', path, body);
  }

  _get(path) {
    return this.request('GET', path)
  }

  _put(path, params) {
    return this.request('PUT', path, params)
  }

  _delete(path) {
    return this.request('DELETE', path)
  }

  _patch(path, body) {
    return this.request('PATCH', path, body)
  }

  //Fetch

  request(method, path, body) {

    const headers = {
      "Accept": "application/json",
    };

    let params= {
      method: method,
      headers
    };

    if (body) {
      if (body instanceof FormData) {
        params.body = body;
      } else {
        params.body = JSON.stringify(body);
        params.headers['content-type'] = 'application/json'
      }
    }

    const url = `${this.baseUrl}${path}`;

    return fetch(url, params)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          return response.json()
            .then((responseBody) => {
              const error = new Error(`${responseBody.code} - ${responseBody.message}`);
              error.statusCode = response.status;
              error.details = responseBody;
              error.code = responseBody.code;
              error.date = new Date();

              throw error;
            });
        }

        return response.json();
      });
  }
}