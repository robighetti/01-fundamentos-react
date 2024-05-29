import styles from './avatar.module.css'

export function Avatar({ src, hasBorder = false }) {
  return (
    <img
      className={hasBorder ? styles.avatar : styles.avatarWithoutBorder}
      src={src}
      alt=""
    />
  )
}
