import { useState, useEffect } from 'react'

import styles from './app.module.css'

import { Header } from './components/header/Header'
import { Post } from './components/post/Post'

import './global.css'
import { Sidebar } from './components/sibebar/Sidebar'
import { api } from './services/axios'

export function App() {
  const [posts, setPosts] = useState([])

  const getPostsFromApi = async () => {
    const { data } = await api.get('/posts')

    setPosts(data)
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
          <div className={styles.postContent}>
            <div className={styles.createPost}>
              <textarea name="post" id="post" />             
            </div>
              <button>#</button>
          </div>

          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
