import { useState } from "react"
import { Button } from "../Button"
import { Visor } from "../Visor"

const NUMPAD_SYMBOLS = ["AC","+/-", "%","÷","7","8","9","X", "4","5","6","-","1","2","3","+","0",",","="]


export const Body = () => {
    const [visorValue, setVisorValue] = useState("")
    function writeOnVisor(value: string) {
        if(/\D/g.test(visorValue) && /\D/g.test(value)) return alert('Só podemos realizar uma operação por vez v.1')
       setVisorValue(prevState => `${prevState}${value}`)
    }
    return (
        <section className="body">
            <p>{visorValue}</p>
            <Visor />
            <div className="numpad">
            {NUMPAD_SYMBOLS.map((value,index) => (
                <Button label={value} value={value} 
                    data-aria-value={value} key={index}
                    onClick={() => writeOnVisor(value)} 
                />
            ))}
                
            </div>
        </section>
    )
}