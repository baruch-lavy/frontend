import { httpService } from "./http.service";

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getUsers,
    getById,
    remove,
    update,
    getLoggedinUser,
    saveLoggedinUser
}

function getUsers() {
    return httpService.get(`user`)
}

function getById(userId) {
    return httpService.get(`user/${userId}`)
}

function remove(userId) {
    return httpService.delete(`user/${userId}`)
}

async function update(userId, updatedUser) {
    const user = await httpService.put(`user/${userId}`, updatedUser)
    const loggeinUser = getLoggedinUser()
    if (loggeinUser._id === user._id) saveLoggedinUser(user)
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

function saveLoggedinUser(user) {
    user = {
        _id: user._id,
        fullname: user.fullname,
        isAdmin: user.isAdmin
    }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

async function login(userCred) {
    const user = await httpService.post('auth/login', userCred)
    if (user) return saveLoggedinUser(user)
}

async function signup(userCred) {
    const user = await httpService.post('auth/signup', userCred)
    if (user) return saveLoggedinUser(user)
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    return await httpService.post('auth/logout')
}

