import useSelect from "../hooks/useSelect"

export default function Home() {
    const Select = useSelect(["Fisk", "Feta", "vingummibamser"])
  return (
    <>
        <h1>Home</h1>
        {Select}
    </>
  )
}
