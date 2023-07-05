import styles from "./Comment.module.css";
import { Trash, ThumbsUp } from 'phosphor-react'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/tiffsilvaxx.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Tiffany Silva</strong>
              <time title="26 de Junho às 09:09" dateTime="2023-06-26 09:09:30"> Cerca de 1h atrás</time>
            </div>
            <button title=" Deletar comentário">
             <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Diego parabéns!! 👏👏</p>
        </div>
   
        <footer>
          <button>
            <ThumbsUp />

            Aplaudir <span>28</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
