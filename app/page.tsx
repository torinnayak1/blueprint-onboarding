import { FiHeart as HeartIcon } from 'react-icons/fi';
import { GoPaperAirplane as ShareIcon } from 'react-icons/go';
import { LuCircle as ProfileIcon } from 'react-icons/lu';
import styles from './styles.module.css';
import '../assets/global.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        
      </div>
      <div className={styles.content}>
        <div className={styles.profile}>
          <div className={styles.picName}>
            <div className={styles.avatar}/>
            <span className={styles.name}>rbeggs</span>
          </div>
          <span className={styles.date}>September 19</span>
        </div>
        <div className={styles.words}>
          In response to the growing homelessness crisis in San Francisco, a
          local nonprofit organization, Code Tenderloin, has launched a
          comprehensive initiative aimed at providing long-term solutions for
          individuals experiencing homelessness. The organization, founded in
          2015, is dedicated to addressing both immediate needs and underlying
          causes of homelessness through a combination of shelter services, job
          training programs, and mental health support. Read more online:
          https://   www.codetenderloin.org/
        </div>
        <div className={styles.pic}></div>
        <span className = {styles.withLine}>
          <span className={styles.picName}>
            <HeartIcon size={24}/>
            <span className={styles.name}>256 Likes</span>
          </span>
          <ShareIcon size={24} />
        </span>


        <div className={styles.profile}>
          <div className={styles.picName}>
            <div className={styles.avatar}/>
            <span className={styles.name}>daviddd</span>
          </div>
          <span className={styles.date}>September 20</span>
        </div>
        <div className={styles.comments}>
          This organization is doing amazing work tackling the complex root
          causes of the issue.
        </div>

        <div className={styles.profile}>
          <div className={styles.picName}>
            <div className={styles.avatar}/>
            <span className={styles.name}>vppraggie</span>
          </div>
          <span className={styles.date}>September 21</span>
        </div>
        <div className={styles.comments}>Thanks for sharing!</div>

      </div>
    </main>
  );
}
