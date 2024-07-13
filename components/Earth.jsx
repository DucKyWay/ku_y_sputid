'use client'

import Image from "next/image";
import { useState } from "react";

export const Earth = () => {
    const [trans, setTrans] = useState(false)
    const [result, setResult] = useState(false)

    const handler = () => {
        setTimeout(() => {
            setResult(true)
        }, 200)
    }
    console.log(result);
    return (
        <>
            <button className="mt-10 bg-slate-300" onClick={(e) => { console.log("hello"); setTrans(true); handler() }}>
                <p>Test Animation</p>
            </button>
            <div></div>
            <div hidden={trans} className={`flex justify-center items-center transition-all mt-10`} style={{ transform: trans ? 'translateX(-100%)' : "" }}>
                <Image
                    src="/IMG_2037.gif"
                    width={500}
                    height={500}
                    alt="earth" />
            </div>

            <div hidden={!trans} className="ml-60 transition-all" style={{ transform: result ? 'translateY(-275px)' : "" }}>
                <Image
                    className="hidden"
                    src="/result.png"
                    width={400}
                    height={400}
                    alt="earth2" />
            </div>
        </>
    );
};
