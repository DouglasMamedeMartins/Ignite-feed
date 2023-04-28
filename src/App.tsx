import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'
import styles from './App.module.css'
import './global.css'

const posts =  [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/douglasmamedemartins.png',
      name: 'Douglas Mamede',
      role: 'Web Developer'
    },
    content: [
       { type: "paragraph", content: "Fala galeraa 👋"},
       { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date("2023-04-22 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/guilherme-mamede.png',
      name: 'Guilherme Mamede',
      role: 'Fullstack Developer'
    },
    content: [
       { type: "paragraph", content: "Fala galeraa 👋"},
       { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link",content: "jane.design/doctorcare"},
    ] ,
    publishedAt: new Date("2023-04-26 20:00:00"),
  },
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return (<Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />)
        })}
      </main>
      </div>
    </div>
    )
}

export default App
