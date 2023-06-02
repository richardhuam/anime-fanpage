import cn from 'classnames';
import React, { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  variant?: 'normal' | 'outline' | 'custom';
  rounded?: boolean;
  active?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

const classes = {
  root: 'font-medium inline-flex items-center justify-center flex-shrink-0 leading-none outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow ',
  normal:
    'bg-red-600 hover:bg-red-500 border-transparent text-white focus:ring-1 focus:ring-red-600/80',
  outline:
    'border-red-600 bg-transparent border text-red-700 hover:text-red-500 hover:border-red-500',
  custom: 'border border-transparent',
  loading: 'h-4 w-4 ms-2 rounded-full border-2 border-transparent border-t-2 animate-spin',
  disabled: 'border border-red-500 bg-red-500 border-red-500 text-gray-100 cursor-not-allowed',
  disabledOutline: 'border bg-[#EEF1F4] border-[#D4D8DD] text-gray-400 cursor-not-allowed',
  small: 'px-3 py-0 h-[34px] text-13',
  medium: 'px-3.5 py-0 h-[38px] text-14',
  large: 'px-4 py-0 h-12 text-16',
  fullWidth: 'w-full',
  rounded: 'rounded-full',
  notRounded: 'rounded-[4px]',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    size = 'medium',
    children,
    variant = 'normal',
    active,
    rounded = false,
    disabled = false,
    loading = false,
    fullWidth,
    ...rest
  } = props;

  return (
    <button
      {...rest}
      aria-pressed={active}
      data-variant={variant}
      disabled={disabled}
      ref={ref}
      className={cn(
        classes.root,
        {
          [classes.normal]: !disabled && variant === 'normal',
          [classes.disabled]: disabled && variant === 'normal',
          [classes.outline]: !disabled && variant === 'outline',
          [classes.disabledOutline]: disabled && variant === 'outline',
          [classes.small]: size === 'small',
          [classes.medium]: size === 'medium',
          [classes.large]: size === 'large',
          [classes.fullWidth]: fullWidth,
          [classes.rounded]: rounded,
          [classes.notRounded]: !rounded,
        },
        className,
      )}
    >
      {children}
      {loading && (
        <span
          className={classes.loading}
          style={{
            borderTopColor: variant === 'outline' ? 'currentColor' : '#ffffff',
          }}
        />
      )}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
