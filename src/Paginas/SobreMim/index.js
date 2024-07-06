import styles from './sobreMim.module.css';
import PostModelo from "Componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/pp.png"

export default function SobreMim() {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Marcel!
            </h3>
            <img
                src={fotoSobreMim}
                alt='Foto do Marcel'
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou Desenvolvedor de Front-end Jr. e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Tenho 27 anos, sou e moro em Guarulhos/SP, Desenvolvedor Front-End há alguns meses (ainda ganhando experiência nessa vida). Amo café, gatos, games e adoro programação.
            </p>
            <p className={styles.paragrafo}>
                Todos os meus projetos e porfólios desenvolvidos por estudos ou pessoais estão detalhados no Github, sejam livres para olhá-los !
            </p>
            <p className={styles.paragrafo}>
                Sou formado em Engenharia Química desde 2021 pelas Faculdades Oswaldo Cruz, tenho um MBA em Gestão de processos pela Universidade Anhembi-Morumbi.
            </p>
            <p className={styles.paragrafo}>
                De 2023 pra cá tive meu primeiro contato com programação através de *lives*, blogs, vídeos e indicações de área e decidi migrar de carreira e começar aos poucos construir a minha nova carreira em uma área que sempre tive interesse em explorar e aprender.
            </p>
            <p className={styles.paragrafo}>
                Desde então, tem sido aprenas aprendizados atrás de aprendizados. Me apaixonei pela área de Front-End, e busco aos poucos ganhar experiência nesse novo mundo que é a programação para mim.
            </p>
        </PostModelo>
    )
}