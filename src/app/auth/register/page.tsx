import RootLayout from "@/app/layout";

export default function Register(){
    return(
        <RootLayout showTopMenu={false}>
            <div className={"fixed top-0 left-0 right-0 bg-white h-24 z-30 flex flex-row items-center justify-between"}>
                <img className="w-fit h-[80%] object-cover ml-16" src="/img/logoReverse.png" alt="logo"/>
                <p className="font-mono text-emerald-500 mr-16 text-3xl font-bold uppercase">register</p>
            </div>
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-custom-green flex">
                <div className="w-1/2 flex flex-col items-center justify-center">
                    <img src="/img/weblogo.png" alt="Descriptive text" className="w-[30vw] h-fit"/>
                    <p className="text-2xl font-inter font-bold tracking-wide line-clamp-2 text-white">ช้อปได้ทุกที่ ช้อปดีเท่านั้น</p>
                </div>
                <div className="w-1/2 flex items-center justify-center">
                    <div className="bg-white p-4 w-[75%] h-fit">
                        <p className="font-mono text-emerald-500 ml-8 text-3xl font-bold uppercase">register</p>
                        <form className="flex flex-col space-y-4 mt-8 items-center">
                            <input className="border-2 border-gray-300 p-2 w-[90%]" type="text" placeholder="Username" />
                            <input className="border-2 border-gray-300 p-2 w-[90%]" type="password" placeholder="Password" />
                            <input className="border-2 border-gray-300 p-2 w-[90%]" type="tel" placeholder="Telephone" />
                            <textarea className="border-2 border-gray-300 p-2 w-[90%]" placeholder="Address"></textarea>
                            <button className="bg-custom-green text-white p-2 text-xl uppercase w-[30%]">register</button>
                        </form>
                    </div>
                </div>
            </div>
        </RootLayout>
    )
}
