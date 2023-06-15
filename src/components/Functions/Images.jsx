export const Images = (img) => {
    return (
        <picture>
            <source src={img} />
            <img
                src={img}
                alt=""
            />
        </picture>
    )
}
