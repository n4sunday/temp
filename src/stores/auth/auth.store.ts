import create from 'zustand'
import { AuthType } from './auth.type'

export const AuthStore = create<AuthType>((set, get) => ({}))
