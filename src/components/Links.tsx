
export function Links({
    links,
}: {
    links: {name: string, href: string}[]
}){

    return(
        <div className="font-header flex gap-20 text-3xl font-bold">
            <h3>FILMS</h3>
            <h3>MEMBERS</h3>
            <h3>CARTOON</h3>
            <h3>TV SHOW</h3>
        </div>

    )   
}