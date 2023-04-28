import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import { PencilLine } from '@phosphor-icons/react'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
      className={styles.cover} 
      src="https://images.unsplash.com/photo-1529071753386-dfb44ff59f69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRlY25vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="" />
      <div className={styles.profile}>
        <Avatar src="https://github.com/guilherme-mamede.png"/>
        <strong>Guilherme Mamede</strong>
        <span>Web Developer</span>
      </div>

      <footer>

        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}