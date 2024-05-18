/* eslint-disable react/jsx-key */
import { Header } from "./components/Header";
import "./global.css";
import styles from './App.module.css';
import { Post } from './components/Post.jsx';
import { Sidebar } from "./components/Sidebar.jsx";


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://i.pinimg.com/736x/77/c4/3f/77c43f4548cc2ea76d0606fa77eaf45f.jpg',
      name: 'Chung Ha',
      role: 'Java Developer @ I.O.I'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum'},
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, perferee' },
      { type: 'link', content: 'lkvs.design/doctorcare' },
    ],
    publishedAt: new Date('2024-05-03 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://love4everkm.files.wordpress.com/2021/01/yeji-1-1.jpg',
      name: 'Yeji',
      role: 'Software Engineer @ Itzy'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum'},
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, perferee' },
      { type: 'link', content: 'lkvs.design/doctorcare' },
    ],
    publishedAt: new Date('2024-05-03 20:00:00'),
  }
];


export function App() {

  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
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

