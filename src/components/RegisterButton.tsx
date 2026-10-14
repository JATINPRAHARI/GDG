import { REGISTRATION_URL } from '../config/event'
import { cx } from '../lib/cx'
import { Icon } from './Icon'

type RegisterButtonProps = {
  className?: string
  label?: string
}

/** Every registration entry point renders this one component, so the URL lives in a single place. */
export function RegisterButton({ className, label = 'Register Now' }: RegisterButtonProps) {
  return (
    <a
      className={cx('btn btn--primary', className)}
      href={REGISTRATION_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{label}</span>
      <Icon name="arrow" size={20} className="btn__icon" />
    </a>
  )
}