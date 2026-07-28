// src/api/http.ts

import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://dummyjson.com/products',
  timeout: 15000,
})