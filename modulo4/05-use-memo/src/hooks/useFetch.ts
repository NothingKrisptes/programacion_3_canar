// src/hooks/useFetch.ts

import { useState, useEffect } from 'react'

interface FetchState<T> {
  data:    T | null
  loading: boolean
  error:   string | null
}

export function useFetch<T>(url: string) {
  const [state, setState] = useState<FetchState<T>>({
    data: null, loading: true, error: null,
  })

  useEffect(() => {
    let cancelled = false

    async function fetchData() {
      setState((prev) => ({ ...prev, loading: true, error: null }))
      try {
        const res = await fetch(url)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data: T = await res.json()
        if (!cancelled) setState({ data, loading: false, error: null })
      } catch (err) {
        if (!cancelled) setState({
          data:    null,
          loading: false,
          error:   err instanceof Error ? err.message : 'Error desconocido',
        })
      }
    }

    fetchData()
    return () => { cancelled = true }
  }, [url])

  return state
}