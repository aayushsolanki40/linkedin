import { configureStore } from '@reduxjs/toolkit'
import MenuTabIndex from '../features/header/MenuTabIndex'

export const store = configureStore({
  reducer: {
    MenuTabIndex: MenuTabIndex
  },
})