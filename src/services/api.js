import axios from 'axios'

const api = axios.create({
   // baseURL: process.env.G
   baseURL: 'http://testapp.axreng.com:4567/'
})

var headers = {
   "Access-Control-Allow-Origin": "*",
   "content-type": "application/json",
}

const apis = {

   postRequest: (data) => api.post(`crawl`, data, headers),
   getRequest: (data) => api.get(`crawl/${data}`, headers)

}


export default apis