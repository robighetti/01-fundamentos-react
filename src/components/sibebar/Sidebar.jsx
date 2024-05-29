import { PencilLine } from 'phosphor-react'

import styles from './sidebar.module.css'
import { Avatar } from '../avatar/Avatar'

export function Sidebar() {
  return (
    <aside className={styles.container}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      <div className={styles.profile}>
        <Avatar hasBorder src="https://github.com/robighetti.png" />

        <strong>Rodrigo Bighetti</strong>
        <span>Fullstack Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  )
}
