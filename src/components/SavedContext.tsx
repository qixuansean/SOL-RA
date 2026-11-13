import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import type { ReactNode } from 'react'

const STORAGE_KEY = 'solera.saved.v1'

type SavedContextValue = {
  saved: string[]
  count: number
  isSaved: (slug: string) => boolean
  toggle: (slug: string, name: string) => void
  clear: () => void
  notify: (message: string) => void
}

const SavedContext = createContext<SavedContextValue | null>(null)

function readSaved(): string[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter((item): item is string => typeof item === 'string')
  } catch {
    return []
  }
}

export function SavedProvider({ children }: { children: ReactNode }) {
  const [saved, setSaved] = useState<string[]>(readSaved)
  const [toast, setToast] = useState<{ message: string; key: number } | null>(null)
  const [toastVisible, setToastVisible] = useState(false)
  const toastTimer = useRef<number | undefined>(undefined)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(saved))
    } catch {
      // Storage can be disabled; the in-memory session still works.
    }
  }, [saved])

  const notify = useCallback((message: string) => {
    setToast({ message, key: Date.now() })
    setToastVisible(true)
    window.clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => setToastVisible(false), 2800)
  }, [])

  useEffect(() => () => window.clearTimeout(toastTimer.current), [])

  const toggle = useCallback(
    (slug: string, name: string) => {
      const exists = saved.includes(slug)
      setSaved(exists ? saved.filter((item) => item !== slug) : [...saved, slug])
      notify(exists ? `${name} removed from saved trips` : `${name} saved to your trips`)
    },
    [saved, notify],
  )

  const clear = useCallback(() => {
    setSaved([])
    notify('Saved trips cleared')
  }, [notify])

  const value = useMemo<SavedContextValue>(
    () => ({
      saved,
      count: saved.length,
      isSaved: (slug) => saved.includes(slug),
      toggle,
      clear,
      notify,
    }),
    [saved, toggle, clear, notify],
  )

  return (
    <SavedContext.Provider value={value}>
      {children}
      <div
        className={`toast ${toastVisible ? 'is-visible' : ''}`}
        role="status"
        aria-live="polite"
      >
        {toast?.message}
      </div>
    </SavedContext.Provider>
  )
}

export function useSaved() {
  const context = useContext(SavedContext)
  if (!context) throw new Error('useSaved must be used within SavedProvider')
  return context
}
