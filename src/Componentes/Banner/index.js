import styles from './banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'preparando-ambiente/video-2.3/assets/1703874346570.jpg'

export default function Banner() {
    return (
       <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Marcel Barbosa, Desenvolvedor Front-End Jr. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>
            </div>

            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} alt='Circulo colorido'/>
                <img className={styles.minhaFoto} src={minhaFoto} alt='Foto do Marcel de óculo de sol' />
            </div>
       </div> 
    )
}