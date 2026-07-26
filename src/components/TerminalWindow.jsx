// A macOS-style terminal window chrome used to frame terminal-flavoured content.
export default function TerminalWindow({ title = 'spookiui', children, className = '' }) {
  return (
    <div className={`term ${className}`}>
      <div className="term__bar">
        <span className="term__dot term__dot--red" />
        <span className="term__dot term__dot--yellow" />
        <span className="term__dot term__dot--green" />
        <span className="term__title">📁 {title}</span>
      </div>
      <div className="term__body">{children}</div>
    </div>
  )
}
