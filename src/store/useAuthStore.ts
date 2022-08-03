import create from 'zustand'
import { persist } from 'zustand/middleware'

type BearStore = {
  bears: number
  increasePopulation: () => void
  removeAllBears: () => void
}

export const useAuthStore = create<BearStore>()(
  persist(set => ({
    bears: 0,
    increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
  })),
)
