import create from 'zustand'
import { ProfileType } from './profile.type'

export const ProfileStore = create<ProfileType>((set, get) => ({
  user: null,
  setUser: (data) => set({ user: data }),
}))
