import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const create = newObject => {
    axios.post(baseUrl, newObject)
}

export default {create}