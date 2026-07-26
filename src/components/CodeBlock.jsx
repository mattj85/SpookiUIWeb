import { useState } from 'react'
import { Button } from 'reactstrap'

// A copyable code block. `lines` may be a single string or an array of
// { text, comment } entries so we can dim inline comments.
export default function CodeBlock({ children, label = 'shell' }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      /* clipboard unavailable — no-op */
    }
  }

  return (
    <div className="codeblock">
      <div className="codeblock__bar">
        <span className="codeblock__label">{label}</span>
        <Button
          size="sm"
          color="link"
          className="codeblock__copy"
          onClick={copy}
          aria-label="Copy to clipboard"
        >
          {copied ? '✓ copied' : 'copy'}
        </Button>
      </div>
      <pre className="codeblock__pre">
        <code>{children}</code>
      </pre>
    </div>
  )
}
