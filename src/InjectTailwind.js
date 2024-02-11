import { StyledEngineProvider } from '@mui/material/styles'
import React from 'react'



export default function InjectTailwind({ children }) {
  return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
}
