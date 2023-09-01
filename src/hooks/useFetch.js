import { useState, useEffect } from 'react'

function useFetch(url, category) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url)

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json()
        const filteredData = category
          ? data.filter(item => item.category === category)
          : data
        setData(filteredData)

      } catch (error) {
        console.error('Fetch error:', error)

      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, isLoading }
}

export default useFetch