import styles from './Post.module.css';
import ProfileImg from '../assets/goddesss.png'
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={ProfileImg} />
                    <div className={styles.authorInfo}>
                        <strong>Lucas Vinicius</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de Maio ás 08:13h" dateTime="2024/05/12 08:13:00">Publicado há 1h</time>

            </header>

            <div className={styles.content}>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, perferee</p>
                <p>
                    <a href="">#Test</a>{' '}
                    <a href="">#NewProject</a>{' '}
                    <a href="">#Rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe seu comentário'
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
                
            </form>


            <div className={styles.commentList}>
                <Comment/>
            </div>
        </article>
    )
}