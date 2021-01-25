import axios from 'axios'

const api = axios.create({
   baseURL: process.env.GATSBY_API_URL
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