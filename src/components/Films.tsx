interface IFilmsProps{
    name: string,
    img_url: string
}

export function Films({images} : { images: IFilmsProps[]}){
    return(
        <div>
            <div className="flex ml-3">
                <div className="h-64 w-10 bg-white/50 rounded-2xl self-center">
                    <button>
                        <img className="rotate-180 mt-24" src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="" />
                    </button>
                </div>
                <div className="flex h-72 gap-5 mx-5">
                    {images.map((image) => {
                        return <img className="rounded-2xl" src={image.img_url} alt="" />
                    })}
                </div>
                <div className="h-64 w-10 bg-white/50 rounded-2xl self-center">
                    <button><img className="mt-24" src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="" /></button>
                </div>

            </div>
        </div>
    )
}