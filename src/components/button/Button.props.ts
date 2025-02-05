import { ReactNode } from 'react'

export interface ButtonProps extends React.ComponentProps<'button'> {
  children?: ReactNode
  color: 'purple' | 'gray' | 'red'
}
