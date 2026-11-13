import { Component } from 'react'
import type { ErrorInfo, ReactNode } from 'react'
import { RefreshIcon } from './Icons'

type Props = { children: ReactNode }
type State = { hasError: boolean }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error('SOLÉRA render error', error, info)
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-screen">
          <div>
            <h1>The light went out for a moment.</h1>
            <p>
              Something unexpected interrupted the page. Reloading usually puts it right. If
              it does not, write to hello@solera.travel and we will look into it.
            </p>
            <button type="button" className="btn" onClick={() => window.location.reload()}>
              Reload the page
              <RefreshIcon width={16} height={16} />
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
