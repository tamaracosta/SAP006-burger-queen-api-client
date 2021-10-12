import img from  '../assets/gif-404.gif';

const NotFound = () => {
    return (
        <main className="page-not-found">
            <p>Erro 404: página não encontrada</p>
            <img src={img} alt="Gif Página Não Encontrada" />

        </main>
    )
}

export default NotFound
