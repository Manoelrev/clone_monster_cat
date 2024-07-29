import axios from 'axios'

const api = axios.create({
    baseURL: 'https://www.monstercat.com'
})

export default api