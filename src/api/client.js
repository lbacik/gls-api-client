
const Client = require('node-rest-client').Client

class GlsApiClient
{
  constructor(client, url) {
    this.client = client
    this.url = url
  }

  list() {
    return new Promise((resolve, reject) => {
      const req = this.client.get(this.url + '/list', (data) => {
        resolve(data)
      })
      req.on('error', err => reject(err))
    })
  }

  get(name) {
    return new Promise((resolve, reject) => {
      const args = {
        path: { 'name': name }
      }
      const req = this.client.get(this.url + '/get/${name}', args, (data) => {
        resolve(data)
      })
      req.on('error', err => reject(err))
    })
  }

  add(password, key, data) {

  }

  static create(url) {
    const restClient = new Client()
    return new GlsApiClient(restClient, url)
  }
}

module.exports = GlsApiClient
