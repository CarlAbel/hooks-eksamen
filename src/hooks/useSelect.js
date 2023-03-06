

export default function useSelect(options) {
  return (
    <select>
        <option>Vælg noget</option> 
        {options.map((item, i) => <option key={i}>{item}</option>)}
    </select>
  )
}
