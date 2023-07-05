import { Header } from "./Components/Header";
import { Post } from "./Components/post";
import { Sidebar } from "./Components/Sidebar";
import styles from "./app.module.css";
import './global.css';



export function App() {
    return (
      <div> 
        <Header />

        <div className={styles.wrapper}>

            <Sidebar />
         
          <main>

            <Post
            author="Tiffany Silva"
            Content=" Nossa que legal, fico bem feliz"
            />

            <Post
            author="Diego Fernandes"
            Content="Um post bem legal"
            />

          </main>

        </div>
       
      </div>
  )
}

