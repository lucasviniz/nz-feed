import styles from './Post.module.css';
import ProfileImg from '../assets/goddesss.png'

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src={ProfileImg} />
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
        </article>
    )
}