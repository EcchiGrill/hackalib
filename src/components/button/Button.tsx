import { cn } from '../../helpers/cn'
import { ButtonProps } from './Button.props'

export const Button = ({
  color,
  className,
  children,
  ...rest
}: ButtonProps) => {
  const colorStyles = {
    purple: 'bg-purple text-white hover:bg-purple-dark',
    gray: 'bg-gray text-gray-dark hover:bg-gray-light',
    red: 'bg-red text-white hover:bg-red-light',
  }

  return (
    <button
      className={cn(
        'p-3 px-4 flex items-center justify-center rounded-lg w-full font-semibold ',
        color && colorStyles[color],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
