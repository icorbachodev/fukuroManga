import API_URL from "./api.config";
import axios from "axios"

async function apiGet(url) {
  const config = {
    method: 'get',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
  const urlCall = API_URL + url
  try {
    const response = await axios.get(urlCall, config)
    return response
  } catch (error) {
    console.log(error)
  }
}

async function apiPost(url, payload) {
  const config = {
    method: 'get',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: payload
  }
  const urlCall = API_URL + url
  try {
    const response = await axios.post(urlCall, config)
    return response
  } catch (error) {
    console.log(error)
  }
}

async function apiPut(url, payload) {
  const config = {
    method: 'get',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: payload
  }
  const urlCall = API_URL + url
  try {
    const response = await axios.put(urlCall, config)
    return response
  } catch (error) {
    console.log(error)
  }
}

const api = {}

api.getMangas = () => {
    return apiGet('mangas')
}

api.postSubcribeUser = payload => {
  return apiPost('usuarios', payload)
}

api.putSumMangaLikes = payload => {
  const mangaId = payload.id
  const url = `mangas/${mangaId}`
  return apiPut(url, payload.data)
}

export default api