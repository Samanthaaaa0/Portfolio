import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'
import { getAnswer, SUGGESTED_QUESTIONS } from '../data/askEngine'
import { profile } from '../data/resumeData'

type Message = { id: number; sender: 'sam' | 'you'; text: string }

let idCounter = 0
const nextId = () => idCounter++

export default function AskMe() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: nextId(), sender: 'sam', text: `hey! I'm ${profile.name.split(' ')[0]}'s auto-reply bot 🤖 ask me anything about her skills, projects or what she's looking for.` },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, isTyping])

  function sendMessage(text: string) {
    const trimmed = text.trim()
    if (!trimmed) return

    setMessages((prev) => [...prev, { id: nextId(), sender: 'you', text: trimmed }])
    setInput('')
    setIsTyping(true)

    const delay = 500 + Math.random() * 500
    window.setTimeout(() => {
      setIsTyping(false)
      setMessages((prev) => [...prev, { id: nextId(), sender: 'sam', text: getAnswer(trimmed) }])
    }, delay)
  }

  return (
    <>
      {/* toggle button */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? 'Close chat' : 'Open chat with Sam'}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-pink px-5 py-3 font-body text-sm font-semibold text-ink shadow-[0_0_0_4px_rgba(255,111,176,0.2)]"
      >
        {isOpen ? <X size={18} /> : <MessageCircle size={18} />}
        {isOpen ? 'Close' : 'Ask Sam'}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-24 right-5 z-50 flex w-[90vw] max-w-sm flex-col overflow-hidden rounded-lg border-2 border-ink bg-panel shadow-2xl"
            role="dialog"
            aria-label="Chat with Sam's auto-reply bot"
          >
            {/* title bar, AIM/MSN style */}
            <div className="flex items-center justify-between bg-gradient-to-r from-pink to-turq px-3 py-2">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-ink/70" />
                <span className="font-pixel text-lg text-ink">samantha_oh — auto reply</span>
              </div>
              <button onClick={() => setIsOpen(false)} aria-label="Close chat" className="text-ink/70 hover:text-ink">
                <X size={16} />
              </button>
            </div>

            <div className="flex items-center gap-1.5 border-b border-grey-dim/30 bg-panel2 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-turq animate-pulse" />
              <span className="font-body text-xs text-grey">online now</span>
            </div>

            {/* messages */}
            <div ref={scrollRef} className="flex h-80 flex-col gap-2.5 overflow-y-auto px-3 py-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`max-w-[85%] rounded-xl px-3.5 py-2 font-body text-sm leading-relaxed ${
                    m.sender === 'you'
                      ? 'self-end bg-turq/20 text-grey-light'
                      : 'self-start bg-panel2 text-grey-light'
                  }`}
                >
                  {m.text}
                </div>
              ))}
              {isTyping && (
                <div className="self-start rounded-xl bg-panel2 px-3.5 py-2.5 font-body text-sm text-grey-dim">
                  <span className="inline-flex gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-grey-dim [animation-delay:-0.2s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-grey-dim [animation-delay:-0.1s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-grey-dim" />
                  </span>
                </div>
              )}
            </div>

            {/* suggested questions */}
            {messages.length < 3 && (
              <div className="flex flex-wrap gap-1.5 border-t border-grey-dim/30 px-3 py-2">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="rounded-full border border-grey-dim/40 px-2.5 py-1 font-body text-[11px] text-grey hover:border-turq hover:text-turq"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* input */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                sendMessage(input)
              }}
              className="flex items-center gap-2 border-t border-grey-dim/30 bg-panel2 p-2.5"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type a message..."
                aria-label="Type your question"
                className="flex-1 rounded-full bg-ink px-3.5 py-2 font-body text-sm text-grey-light placeholder:text-grey-dim focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink text-ink transition-transform hover:scale-105"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
