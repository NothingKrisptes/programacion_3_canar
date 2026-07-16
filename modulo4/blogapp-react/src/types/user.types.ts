// src/types/user.types.ts
export interface User {
  googleId: any
  id: string
  username: string
  email: string
  isActive: boolean
  profile?: string
  avatarUrl?: string
}
// src/types/user.types.ts (agregar)
export interface CreateUserPayload {
  username: string
  email: string
  password: string
}