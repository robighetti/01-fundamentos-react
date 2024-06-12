import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './comment.module.css'
import { Avatar } from '../avatar/Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Comment(props) {
  const { comment, deleteComment } = props

  const publishedAtFormated = format(
    comment.createdAt,
    "d 'de' LLLL 'de' yyyy",
    {
      locale: ptBR,
    },
  )

  const distanceFromNowFormated = formatDistanceToNow(comment.createdAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <div className={styles.comment}>
      <Avatar src={comment.avatarUrl} hasBorder={false} />

      <div className={styles.contentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{comment.name}</strong>

              <time title={publishedAtFormated} dateTime="2024-05-14 08:00:00">
                {distanceFromNowFormated}
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
