import { useState } from "react"


export default function useSelect(options) {
    const [selected, setSelected] = useState("vælg noget")
    function selectHandler(e) {
        setSelected(e.target.value)
    }


   const select = (
    <select onChange={selectHandler}>
        <option defaultValue>Vælg noget</option> 
        {options.map((item, i) => <option key={i}>{item}</option>)}
    </select>
)
    return { selected, select }
}
