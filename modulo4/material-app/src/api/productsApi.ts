// src/api/productsApi.ts

import { http } from './http'
import type { PaginatedResponse, Product } from '../types/product'

interface GetProductsParams {
  page:     number
  pageSize: number
  search?:  string
}

export async function getProducts(params: GetProductsParams) {
  const { page, pageSize, search } = params
  const res = await http.get<PaginatedResponse<Product>>('/products/', {
    params: {
      page,
      page_size: pageSize,
      ...(search ? { search } : {}),
    },
  })
  return res.data
}