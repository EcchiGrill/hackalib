import { ButtonProps } from './Button.props'
import '../../tailwind.css'
import { cn } from '../../helpers/cn'

export const Button = ({
  color,
  className,
  children,
  ...rest
}: ButtonProps) => {
  const colorStyles = {
    purple: 'bg-purple-500 text-white hover:bg-purple-700 !important',
    gray: 'bg-[#f5f5f5] text-[#333] hover:bg-[#f9f9f9f9]',
    red: 'bg-[#ff4d4d] text-white hover:bg-[#ff6666]',
  }

  return (
    <button
      className={cn(
        'p-3 px-4 flex items-center justify-center rounded-lg w-full font-semibold bg-red-600',
        color && colorStyles[color],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
