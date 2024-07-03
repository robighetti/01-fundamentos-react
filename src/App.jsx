/* eslint-disable array-callback-return */
import { useState, useEffect } from 'react'

import styles from './app.module.css'

import { Header } from './components/header/Header'
import { Post } from './components/post/Post'

import './global.css'
import { Sidebar } from './components/sibebar/Sidebar'
import { api } from './services/axios'

export function App() {
  const [posts, setPosts] = useState([])
  const [inputValue, setInputValue] = useState('')

  const getPostsFromApi = async () => {
    const { data } = await api.get('/posts?_sort=publishedAt&_order=desc')

    setPosts(data)
  }

  const getInputValue = (event) => {
    setInputValue(event.target.value)
  }

  // Função para extrair hashtags de uma string
  function extrairHashtags(texto) {
    // Expressão regular para encontrar hashtags
    const regexHashtag = /#[a-zA-Z0-9_]+/g

    // Encontrar todas as hashtags
    const hashtags = texto.match(regexHashtag)
    return hashtags || [] // Retorna um array vazio se não houver hashtags
  }

  // Função para extrair partes sem hashtags de uma string
  function extrairSemHashtags(texto) {
    // Expressão regular para encontrar hashtags
    const regexHashtag = /#[a-zA-Z0-9_]+/g

    // Dividir a string nas partes sem hashtags
    const partesSemHashtags = texto.split(regexHashtag)
    return partesSemHashtags.map((txt) => {
      if (txt) return txt
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const hashtags = extrairHashtags(inputValue)
    const whithoutHash = extrairSemHashtags(inputValue)

    const links = hashtags.map((item) => {
      return {
        type: 'link',
        content: item,
      }
    })

    const paragraphs = whithoutHash.map((item) => {
      return {
        type: 'paragraph',
        content: item,
      }
    })

    const payload = {
      author: {
        avatarUrl: 'https://github.com/robighetti.png',
        name: 'Rodrigo Bighetti',
        role: 'Fullstack Developer',
      },
      publishedAt: new Date(),
      content: [...paragraphs, ...links],
    }

    await api.post('/posts', payload)

    setInputValue('')
    getPostsFromApi()
  }

  useEffect(() => {
    getPostsFromApi()
  }, [])

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <form className={styles.commentForm} onSubmit={handleSubmit}>
            <strong>Crie um post</strong>

            <textarea
              name="post"
              placeholder="O que você esta pensando ?"
              value={inputValue}
              onChange={getInputValue}
            />

            <footer>
              <button type="submit">Publicar</button>
            </footer>
          </form>

          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                postId={post.id}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
