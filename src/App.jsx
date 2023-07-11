import { Header } from "./Components/Header";
import { Post } from "./Components/post";
import { Sidebar } from "./Components/Sidebar";
import styles from "./app.module.css";
import './global.css';


const posts = [
  {
    id: 1 ,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat',
    },
    content:[

  {type: 'paragraph' ,content: 'Fala galeraa 👋'},
  {type: 'paragraph' ,content: ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
  {type: 'link' ,content: ' 👉 jane.design/doctorcare'},   
   
    ],
    publishedAt: new Date('2023-07-10 16:34:02')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name:' Mayk Brito',
      role: 'Educator @Rocketseat',
    },
    content:[

  {type: 'paragraph' ,content: 'Fala galeraa 👋'},
  {type: 'paragraph' ,content: ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
  {type: 'link' ,content: ' 👉 jane.design/doctorcare'},   
   
    ],
    publishedAt: new Date('2023-07-07 16:40:02')
  
}
];
export function App() {
    return (
      <div> 
        <Header />

        <div className={styles.wrapper}>

            <Sidebar />
         
          <main>
            {posts.map(posts => {
              return (
              <Post
              author={posts.author}
              content={posts.content}
              publishedAt={posts.publishedAt}
              
              />
              )
            })}

          </main>

        </div>
       
      </div>
  )
}

