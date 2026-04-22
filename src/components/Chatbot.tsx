'use client'

import { useState, useEffect, useRef } from "react"
import axios from "axios"
import Image from "next/image"
import { Bot, Phone, Rocket, Briefcase, Wrench } from "lucide-react"
import { v4 as uuidv4 } from 'uuid'
import ReactMarkdown from "react-markdown"
import { X } from "lucide-react"
import remarkGfm from "remark-gfm"

type Message = {
  role: "user" | "bot"
  content: string
}
const getUserId = () => {
  if (typeof window === 'undefined') return null

  let userId = localStorage.getItem('chat_user_id')

  if (!userId) {
    userId = uuidv4()
    localStorage.setItem('chat_user_id', userId)
  }

  return userId
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "How may I help you today!" }
  ])
  const [input, setInput] = useState("")
  const bottomRef = useRef<HTMLDivElement | null>(null)

  // Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

 const sendMessage = async (customText?: string) => {
  const messageToSend = customText || input
  if (!messageToSend.trim()) return

  const userMessage: Message = { role: "user", content: messageToSend }
  setMessages((prev) => [...prev, userMessage])
  setInput("")
  setLoading(true) // 👈 start thinking

  try {
    let userID = getUserId()
    const res = await axios.post("/api/chatbot", {
      userId: userID,
      message: messageToSend,
    })

    const botMessage: Message = {
      role: "bot",
      content: res.data.reply,
    }

    setMessages((prev) => [...prev, botMessage])
  } catch (err) {
    setMessages((prev) => [
      ...prev,
      { role: "bot", content: "Something went wrong 😓" },
    ])
  } finally {
    setLoading(false) // 👈 stop thinking
  }
}

  const quickActions = [
    { label: "Tech Stack", icon: <Wrench size={14} />, value: "tech stack" },
    { label: "Connect", icon: <Phone size={14} />, value: "contact" },
    { label: "Projects", icon: <Rocket size={14} />, value: "projects" },
    { label: "Experience", icon: <Briefcase size={14} />, value: "experience" },
  ]

  return (
    <>
      {/* Floating Button */}
     

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 z-[9999] bg-white p-3 rounded-full shadow-lg flex items-center justify-center"
      >
        {open ? (
          <X className="w-9 h-9 text-red-600" />
        ) : (
          <Image alt="chatbot" src={"/chatbot.png"} height={35} width={35} />
        )}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-5 z-[9999] w-[350px] h-[500px] bg-[#0f1117] border border-gray-800 rounded-2xl shadow-2xl flex flex-col">

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
            <div className="flex items-center gap-2 text-white">
              <Bot className="text-blue-500" />
              <h2 className="font-semibold">Ask Sanket 2.0</h2>
            </div>

            <div className="flex items-center gap-1 text-green-400 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Online
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
            {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-3 py-2 rounded-xl text-sm max-w-[80%] break-words overflow-hidden ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-white"
                }`}
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    p: ({ children }) => <p className="mb-2 break-words">{children}</p>,

                    a: ({ href, children }) => (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline break-all"
                      >
                        {children}
                      </a>
                    ),

                    strong: ({ children }) => (
                      <span className="font-semibold text-white">
                        {children}
                      </span>
                    ),

                    ul: ({ children }) => (
                      <ul className="list-disc ml-5 space-y-1 break-words">
                        {children}
                      </ul>
                    ),

                    li: ({ children }) => <li>{children}</li>,
                  }}
                >
                  {msg.content}
                </ReactMarkdown>

              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="px-3 py-2 rounded-xl text-sm bg-gray-800 text-white flex items-center gap-1">
                <span className="animate-bounce">.</span>
                <span className="animate-bounce delay-100">.</span>
                <span className="animate-bounce delay-200">.</span>
              </div>
            </div>
          )}
            <div ref={bottomRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-3 py-2 border-t border-gray-800">
            <p className="text-xs text-gray-400 mb-2">💡 Quick actions:</p>
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action, idx) => (
                <button
                  key={idx}
                  onClick={() => sendMessage(action.value)}
                  className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-800 text-sm text-white hover:bg-gray-700 transition"
                >
                  {action.icon}
                  {action.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-800 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask me anything..."
              className="flex-1 bg-transparent border border-gray-700 rounded-md px-3 py-2 text-sm text-white outline-none"
            />

            <button
              onClick={() => sendMessage()}
              className="bg-white text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  )
}

