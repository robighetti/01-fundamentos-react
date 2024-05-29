import styles from './app.module.css'

import { Header } from './components/header/Header'
import { Post } from './components/post/Post'

import './global.css'
import { Sidebar } from './components/sibebar/Sidebar'

export function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/gu-Moura.png',
        name: 'Gustavo Moura',
        role: 'Head IA and Machine Learning',
      },
      publishedAt: new Date('2024-05-10 20:00:00'),
      content: [
        {
          type: 'paragraph',
          content: 'Fala galeraa 👋',
        },
        {
          type: 'paragraph',
          content:
            'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
        },
        {
          type: 'link',
          content: '👉 jane.design/doctorcare',
        },
      ],
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/EnzoRibeiro0731.png',
        name: 'Enzo Ribeiro',
        role: 'Fullstack developer',
      },
      publishedAt: new Date(),
      content: [
        {
          type: 'paragraph',
          content: 'Fala galeraa 👋',
        },
        {
          type: 'paragraph',
          content:
            'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
        },
        {
          type: 'link',
          content: '👉 jane.design/doctorcare',
        },
      ],
    },
  ]

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
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
