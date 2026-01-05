import { httpService } from "./http.service";

const BASE_URL = 'toy/'

export const toyService = {
    query,
    getById,
    save,
    remove,
    getDefaultfilter,
    getEmptyToy
}

function query(filterBy = {}) {
    return httpService.get(BASE_URL, filterBy)
}

function getById(toyId) {
    return httpService.get(BASE_URL + toyId)
}

function save(toy) {
    const method = toy._id ? 'put' : 'post'
    return httpService[method](BASE_URL, toy)
}

function remove(toyId) {
    return httpService.delete(BASE_URL + toyId)
}

function getDefaultfilter(){
    return {
        txt: '',
        price : 0,
        inStock: null,
        labels: [],
        pageIdx: 0,
        sortBy: {type : '', sortDir: 1}
    }
}

function getEmptyToy() {
    return {
        name : '',
        price: 100,
        inStock: true
    }
}

