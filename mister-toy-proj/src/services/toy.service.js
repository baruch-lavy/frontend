import { httpService } from "./http.service";

const BASE_URL = 'toy/'

export const toyService = {
    query,
    getDefaultfilter
}

function query(filterBy = {}) {
    return httpService.get(BASE_URL, filterBy)
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

