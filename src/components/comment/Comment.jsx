import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './comment.module.css'
import { Avatar } from '../avatar/Avatar'

export function Comment(props) {
  const { comment, deleteComment } = props

  return (
    <div className={styles.comment}>
      <Avatar src={comment.avatarUrl} hasBorder={false} />

      <div className={styles.contentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{comment.name}</strong>

              <time title="14 de maio de 2024" dateTime={comment.createdAt}>
                Cerca de 2hrs
              </time>
            </div>

            <button
              title="Excluir Comentário"
              onClick={() => deleteComment(comment)}
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{comment.text}</p>
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
