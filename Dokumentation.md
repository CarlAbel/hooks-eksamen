# Dokumentation for Trainer
Svendeprøve, Carl Abel  
Forår 2023

## Trainer Appen
bla bla bla, hvad er det for en app? bla bla bla

## Tech-Stack
- **React**, Hurtig beskrivelse af react
jeg har valgt react fordi - stor community, god documentation og der er stor efterspørgsmål på arbejdsmarkedet.
- **TailwindCSS**, Hvad er Tailwind?
Hurtigere end normal css, overskuelighed, kompatibilitet, standardisering, dokumentation, community.
- **osv**, Hurtig beskrivelse af react
- **osv**, Hurtig beskrivelse af react

## Perspektivering 
- **React**, Hurtig beskrivelse af react
- **TailwindCSS**, Hvad er Tailwind?
- **osv**, Hurtig beskrivelse af react

Veldokumenteret kode, codesplitting, lazy loading, testing, osv.
Skalerbarhed: deployment, cloudflare. 

## Kode-eksempler 
jeg har valgt xyz/ kode nedenstående er et stykke kode, der gør xyz.

```javascript
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function useAxios({ url, method = "GET", headers = {} }) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    

    useEffect(function() {
      (async function() {
          
        try {
         if (!url) throw new Error ("url is required")
          setLoading(true)
          const response = await axios({ url, method, headers })
          setData(response.data)
        } catch (error) {
            console.error(error) // evt. Sentry.io
            setError("something went wrong")
        } finally {
        setLoading(false)
        }
      })()
    /* eslint-disable-next-line*/
    }, [url])


    return { data, loading, error }
  
}
```

Forklaring af koden: 
