import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './comment.module.css'
import { Avatar } from '../avatar/Avatar'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/EnzoRibeiro0731.png" hasBorder={false} />

      <div className={styles.contentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rodrigo Bighetti</strong>

              <time title="14 de maio de 2024" dateTime="2024-05-14 08:00:00">
                Cerca de 2hrs
              </time>
            </div>

            <button title="Excluir Comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Thales, parabéns !!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={18} />
            Aplaudir <span>28</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
