

export function Header(){
    return(
        <div>
            <header className="bg-gray-900 p-5 flex">
                <div className="text-gray-100 flex gap-20 ">
                    <h1 className="gap-5">STAR MOVIES</h1>
                    <h3 className="">FILMS</h3>
                    <h3 className="">MEMBERS</h3>
                    <h3 className="">CARTOON</h3>
                    <h3 className="">TV SHOW</h3>
                </div>

                <div className="absolute right-5 mx-auto w-100">
                    <input type="text" className=""/> 
                    <img src="" alt="" className=""/>
                </div>
            </header>
        </div>
        
    )
}