// src/types/product.ts

export interface Product {
  id:            number
  name:          string
  slug:          string
  price:         string     // viene como string desde la API
  stock:         number
  is_active:     boolean
  url_image:     string
  category_name: string
  created_at:    string
  updated_at:    string
}

export interface PaginatedResponse<T> {
  count:    number
  next:     string | null
  previous: string | null
  results:  T[]
}