import "./post.css";
import styles from "./post.module.css";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import posts from "preparando-ambiente/video-3.1/json/posts.json";
import PostModelo from "Componentes/PostModelo";
import NaoEncontrada from "Paginas/NaoEncontrada";
import PaginaPadrao from "Componentes/PaginaPadrao";
import PostCard from "Componentes/PostCard";

export default function Post() {
    const parametros = useParams();
    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    if (!post) {
        return <NaoEncontrada />
    }

    const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);

    return (
        // <Routes>
        //     <Route path="*" element={<PaginaPadrao />}>
        //         <Route index element={
        //             <PostModelo
        //                 fotoCapa={`/assets/posts/${post.id}/capa.png`}
        //                 titulo={post.titulo}
        //             >
        //                 <div className="post-markdown-container">
        //                     <ReactMarkdown>
        //                         {post.texto}
        //                     </ReactMarkdown>
        //                 </div>
        //             </PostModelo>
        //         } />
        //     </Route>
        // </Routes>

        <PaginaPadrao>
            <PostModelo
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>

                <h2 className={styles.tituloOutrosPosts}>
                    Outros posts que você pode gostar:
                </h2>

                <ul className={styles.postsRecomendados}>
                    {postsRecomendados.map((post) => (
                        <li key={post.id}>
                            <PostCard post={post} />
                        </li>
                    ))}
                </ul>

            </PostModelo>
        </PaginaPadrao>

    )
}