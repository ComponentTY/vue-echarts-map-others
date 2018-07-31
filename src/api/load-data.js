import Vue from 'vue'

export const getList = () => Vue.http.get('/apis/getList').then((res) => res.body)
export const login = (parmas) => Vue.http.post('/apis/login', parmas).then(res => res.body)
export const register = (params) => Vue.http.post('/apis/register', params).then(res => res.body)