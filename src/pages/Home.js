import useAxios from "../hooks/useAxios";
import useSelect from "../hooks/useSelect"

export default function Home() {
  const { data, loading, error } = useAxios(
    {
     url: "http://localhost:4000/api/v1/classes"
    }
)
  
    const { select, selected } = useSelect(data?.map(item => item.className) ?? [])
  return (
    <>
        <h1>Home</h1>
        <pre>{error}</pre>
          {loading ? <p>Loading...</p> : select}
    </>
  )
}
