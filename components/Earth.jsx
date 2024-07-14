'use client'

import Image from "next/image";
import { useState ,useEffect} from "react";
import { useRouter } from 'next/navigation';
import useSound from "use-sound";

export const Earth = () => {
    let distance
    useEffect(()=>{
        localStorage.setItem("random",40075 - (Math.floor(Math.random() * (1620 - 1) + 1)))
        
        console.log(localStorage);
    },[])
    distance = localStorage.getItem("random")
    const [play] = useSound("/tada.mp3");
    const router = useRouter();
    const [trans, setTrans] = useState(false)
    const [result, setResult] = useState(false)
    const [value, setValue] = useState('')
    const [disable, setDisable] = useState(true)
    const [display, setDisplay] = useState(false)
    const handler = () => {
        if(display){
            console.log("refree");
            setTrans(false);
            window.location.reload()
            return
        }
        setTimeout(() => {
            setResult(true)
        }, 200)
        setDisplay(true)
        play()

    }
    const handle_change = (e)=>{
        setValue(e.target.value)
        if (e.target.value){
            setDisable(false)
        }else{
            setDisable(true)
        }
    }

    return (
        <>
            <div className="flex flex-col mt-8 gap-8 justify-center items-center">
                <input className="rounded-md h-8 w-80 px-4 focus:outline-none text-black focus:h-9 transition-all"  placeholder="Search"
                onChange={handle_change}
                value = {value}
                disabled={display}
                onKeyDown={(e) => {
                    if(e.key == 'Enter'){
                        setTrans(true);
                        handler()
                  }}}>
                </input>
                <button disabled={disable} className=" bg-blue-700 px-5 py-2 rounded-md disabled:bg-blue-900 disabled:text-gray-400 hover:disabled:scale-100 hover:scale-110 transition-all" onClick={(e) => { console.log("hello"); setTrans(true); handler() }}>
                    <p>{display? "refresh":"Navigate"}</p>
                </button>
            </div>
            <div hidden={trans} className={`flex justify-center items-center transition-all mt-10`} style={{ transform: trans ? 'translateX(-100%)' : "" }}>
                <Image
                    src="/IMG_2037.gif"
                    width={700}
                    height={700}
                    alt="earth" />
            </div>

            <div hidden={!trans}  className="flex flex-row h-fit  ml-60 translate-y-full transition-all" style={{ transform: result ? 'translateY(-375px)' : "" }}>
                <div hidden={!trans} >
                    <Image
                        src="/result.png"
                        width={400}
                        height={400}
                        alt="earth2" />
                </div>
                {value!="ใจเธอ" && value !="บ้านเธอ" && value !="บ้านพ่อแม่เธอ" && value !="เธอ" && value != "[hkogTv"?<>
                    <div className="flex flex-col pl-7">
                    <p hidden={!trans} className="text-3xl font-bold pl-" >To {value}</p>
                    <div hidden={!trans} className="flex mt-5">
                        <h1 hidden={!trans} className="text-3xl">Approximate Distances: {distance} Km</h1>
                    </div>
                    <div hidden={!trans} className="flex mt-5">
                        <a hidden={!trans} className="tex-2xl font-semibold" href="https://www.youtube.com/watch?v=ZZvIVRQ4E7I">Click to Goo pai ma too.com</a>
                    </div>
                    </div>
                </>    :
                <>
                    <div className="flex flex-col pl-7">
                    <p hidden={!trans} className="text-3xl font-bold pl-" >To {value}</p>
                    <div className="flex mt-5">
                        <h1 hidden={!trans} className="text-3xl">ต่อให้เราค้นหาทางไปใจเธอเท่าไหร่ ก็ยังยากกว่าการมางาน Stupid hackathon ครับ</h1>
                    </div>
                    <div hidden={!trans} className="flex mt-5">
                        <hi hidden={!trans} className="text-2xl">ปล่อยวางเถอะ</hi> 
                    </div>
                    <div className="flex mt-5">
                        <iframe hidden={!trans} width="560" height="315" src="https://www.youtube.com/embed/2fP6OLhBCSQ?si=1OhKOKrbu9c6LIlp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    </div>
                </>}
                
            </div>
        </>
    );
};
