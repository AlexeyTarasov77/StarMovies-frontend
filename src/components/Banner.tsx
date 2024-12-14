
interface IBannerProps{
    name: string,
    img_url: string,
    id: number

}

export function Banner({images} : { images: IBannerProps[]}){
    return (
        <div>
            <div className="flex w-full">
                <div className="flex w-full m-2 p-2 bg-film rounded-xl border-2 border-slate-100 drop-shadow-banner">
                    <div className="flex flex-col text-gray-100 self-end p-3">
                        <h1 className=" flex text-3xl font-bold"> Your favourite movies</h1>
                        <p className=" flex text-xl">Choose your favourite films and serials</p>
                    </div>
                    <div className="flex gap-3 ml-2 justify-between">
                        {images.map((image) => {
                            return <img className="rounded-2xl w-64 h-80 " src={image.img_url}alt="" />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}