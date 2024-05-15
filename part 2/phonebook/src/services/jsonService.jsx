import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const remove = id => {
    return axios.delete(baseUrl + `/${id}`)
}

const replace = newPerson => {
    return axios.put(baseUrl + `/${newPerson.id}`, newPerson)
}

export default {create, remove, replace}