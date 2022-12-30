import { Header } from "./components/Header"
import { Post, PostData } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"
import "./global.css"

const posts: PostData[] = [
  {
    id: '1',
    author: {
      avatarUrl: 'https://github.com/lhmoreno.png',
      name: 'Luiz Henrique',
      role: 'JS Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de finalizar um projeto muito especial onde aprendi diversos fundamento do ReactJS. 🚀' },
      { type: 'link', content: 'https://github.com/lhmoreno/ignite-react-projeto-01' }
    ],
    publishedAt: new Date('2022-12-29 20:00:00'),
    comments: []
  },
  {
    id: '2',
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Salveeee' },
      { type: 'paragraph', content: 'Hoje saiu conteúdo novo lá no canal da Rockeseat, corre lá pois falamos de assuntos fundamentais para quem quer trabalhar com ReactJS' },
      { type: 'link', content: 'https://www.youtube.com/@rocketseat/videos' },
    ],
    publishedAt: new Date('2022-12-25 13:00:00'),
    comments: [{
      id: '1',
      content: 'Uhuuuuuuuu bora 👨🏻‍💻',
      likesAmount: 23,
      commentedAt: new Date('2022-12-25 13:30:00')
    }]
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
