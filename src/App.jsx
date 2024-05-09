import { Post } from "./Post"
import { Header } from "./components/Header"
import "./global.css"

export function App() {

  return (
    <>
      <Header/>
      <Post 
        author="Lucas vinicius"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ducimus provident id quo distinctio repellendus aliquid sequi nemo eum libero commodi aut mollitia porro totam aspernatur, quidem, quibusdam voluptates. Atque."
      />

    </>
  )
}

