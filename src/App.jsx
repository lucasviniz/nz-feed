import { Header } from "./components/Header";
import "./global.css";
import styles from './App.module.css';
import { Post } from './components/Post.jsx';
import { Sidebar } from "./components/Sidebar.jsx";

export function App() {

  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author="Lucas vinicius"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ducimus provident id quo distinctio repellendus aliquid sequi nemo eum libero commodi aut mollitia porro totam aspernatur, quidem, quibusdam voluptates. Atque."
          />
          <Post 
            author="Lucas vinicius"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ducimus provident id quo distinctio repellendus aliquid sequi nemo eum libero commodi aut mollitia porro totam aspernatur, quidem, quibusdam voluptates. Atque."
          />
        </main>
      </div>
    </div>
  )
}

