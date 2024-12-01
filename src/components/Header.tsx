

export function Header(){
    return(
        <div>
            <header className="bg-gray-900 flex pt-4 pb-4 ">
                <div className="text-gray-100 flex">
                    <h1 className="text-4xl font-black font-logo italic pr-16 px-3">STAR MOVIES</h1>
                    <div className="font-header flex gap-20 text-3xl font-bold">
                        <h3>FILMS</h3>
                        <h3>MEMBERS</h3>
                        <h3>CARTOON</h3>
                        <h3>TV SHOW</h3>
                    </div>

                </div>

                <div className="flex ml-16 bg-white/50 rounded-2xl">
                    <input type="text" className="h-14 w-80 rounded-2xl bg-white/0 "/> 
                    {/* <img src="../assets/search.jpg" alt="" /> */}
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-16 w-8 pr-0.5">
                        <path d="M11 19.5C15.4183 19.5 19 15.9183 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21 21.4999L16.65 17.1499" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </div>
            </header>
        </div>
        
    )
}