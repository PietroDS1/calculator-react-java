import { Button } from "../Button"
import { Visor } from "../Visor"

const NUMPAD_SYMBOLS = ["AC","+/-", "%","÷","7","8","9","X", "4","5","6","-","1","2","3","+","0",",","="]


export const Body = () => {
    return (
        <section className="body">
            <Visor />
            <div className="numpad">
            {NUMPAD_SYMBOLS.map((value,index) => (
                <Button label={value} value={value} data-aria-value={value} key={index} />
            ))}
                
            </div>
        </section>
    )
}