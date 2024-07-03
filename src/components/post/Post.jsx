/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { useState, useEffect } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Comment } from '../comment/Comment'
import styles from './post.module.css'
import { Avatar } from '../avatar/Avatar'
import { api } from '../../services/axios'

import { Author } from './styles'

export function Post(props) {
  const { author, content, publishedAt, postId } = props

  const [inputValue, setInputValue] = useState('')
  const [comments, setComments] = useState([])

  const publishedAtFormated = format(publishedAt, "d 'de' LLLL 'de' yyyy", {
    locale: ptBR,
  })

  const distanceFromNowFormated = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const handleSubmit = async (event) => {
    event.preventDefault()

    const comment = {
      postId,
      name: 'Rodrigo Bighetti',
      avatarUrl: 'https://github.com/robighetti.png',
      text: inputValue,
      createdAt: new Date(),
    }

    await api.post('/comments', comment)

    setComments([comment, ...comments])
    setInputValue('')
  }

  function deleteComment(commentToBeDeleted) {
    const filteredComments = comments.filter((comment) => {
      if (comment !== commentToBeDeleted) return comment
    })

    setComments(filteredComments)
  }

  const getInputValue = (event) => {
    setInputValue(event.target.value)
  }

  const getComments = async () => {
    const { data } = await api.get(
      `/comments?postId=${postId}&_sort=createdAt&_order=desc`,
    )
    setComments(data)
  }

  useEffect(() => {
    getComments()
  }, [])

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <Author test={true}>
          <Avatar hasBorder={true} src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </Author>

        <time title={publishedAtFormated} dateTime="2024-05-14 08:00:00">
          {distanceFromNowFormated}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={Math.random()}>{line.content}</p>
          } else if (line.type === 'link') {
            return (
              <p key={Math.random()}>
                <a href="#">{line.content}</a>
              </p>
            )
          }
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleSubmit}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={inputValue}
          onChange={getInputValue}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, index) => (
          <Comment
            key={index}
            comment={comment}
            deleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  )
}
