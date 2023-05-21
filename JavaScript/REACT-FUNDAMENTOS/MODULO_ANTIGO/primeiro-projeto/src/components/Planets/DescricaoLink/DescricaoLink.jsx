export default function DescricaoLink ({descricao, link}) {
    if(!descricao) {
        return null
    }

    if(link) {
        return (
            <>
                <p>{descricao}</p>
                <p>
                    <a href={link}>
                        Fonte Wikipédia
                    </a>
                </p>
            </>
        )
    } else {
        return (
        <>
            <p>{descricao}</p>
        </>

        )
    }
}