import { useState, useEffect } from 'react'

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('notes')
    return saved ? JSON.parse(saved) : []
  })
  const [input, setInput] = useState('')
  const [isOffline, setIsOffline] = useState(!navigator.onLine)

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  useEffect(() => {
    const handleOnline = () => setIsOffline(false)
    const handleOffline = () => setIsOffline(true)
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const addNote = () => {
    if (input.trim()) {
      setNotes([...notes, input.trim()])
      setInput('')
    }
  }

  const deleteNote = (idx) => {
    setNotes(notes.filter((_, i) => i !== idx))
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow text-black">
      {isOffline && (
        <div className="mb-2 p-2 bg-yellow-200 text-yellow-900 rounded text-center">
          Офлайн-режим
        </div>
      )}
      <h1 className="text-2xl font-bold mb-4">Заметки</h1>
      <div className="flex mb-4">
        <input
          className="flex-1 border rounded-l px-2 py-1"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Введите заметку..."
          onKeyDown={e => e.key === 'Enter' && addNote()}
        />
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded-r"
          onClick={addNote}
        >
          Добавить
        </button>
      </div>
      <ul>
        {notes.map((note, idx) => (
          <li key={idx} className="flex justify-between items-center mb-2 border-b pb-1">
            <span>{note}</span>
            <button
              className="text-red-500 hover:underline"
              onClick={() => deleteNote(idx)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
      {notes.length === 0 && (
        <div className="text-gray-400 text-center mt-4">Нет заметок</div>
      )}
    </div>
  )
}

export default App