import useSelect from "../hooks/useSelect"

export default function Home() {
    const { select, selected } = useSelect(["Fisk", "Feta", "vingummibamser"])

console.log(selected);

  return (
    <>
        <h1>Home</h1>
        {select}
    </>
  )
}
