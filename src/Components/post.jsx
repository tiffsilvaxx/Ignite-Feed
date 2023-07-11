import { Comment } from "./Comment"
import { Avatar } from "./Avatar";
import styles from "./post.module.css";

export function Post({author , publishedAt}) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar  src={author.avatarUrl} />
          <div className={styles.authorinfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title="26 de Junho às 09:09" dateTime="2023-06-26 09:09:30">
          Publicado há 1 hora
        </time>
      </header>
      <div className={styles.content}>
        
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário..." />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
  }
