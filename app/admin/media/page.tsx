'use client'

import { useEffect, useState, useRef } from 'react'

interface Media {
  id: string
  filename: string
  url: string
  mimeType: string
  size: number
  alt: string | null
  createdAt: string
}

export default function AdminMediaPage() {
  const [media, setMedia] = useState<Media[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    fetchMedia()
  }, [])

  async function fetchMedia() {
    try {
      const res = await fetch('/api/upload')
      const data = await res.json()
      setMedia(data.media || [])
    } catch (error) {
      console.error('Error fetching media:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files
    if (!files || files.length === 0) return

    setUploading(true)

    try {
      for (const file of Array.from(files)) {
        const formData = new FormData()
        formData.append('file', file)

        await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        })
      }

      fetchMedia()
    } catch (error) {
      console.error('Error uploading files:', error)
    } finally {
      setUploading(false)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  function formatFileSize(bytes: number): string {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  }

  function copyToClipboard(url: string) {
    navigator.clipboard.writeText(url)
    alert('URL copied to clipboard!')
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Media Library</h1>
        <label className="px-4 py-2 bg-[#AD1927] text-white rounded-md font-medium hover:bg-[#8B1420] transition-colors cursor-pointer">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleUpload}
            className="hidden"
          />
          {uploading ? 'Uploading...' : 'Upload Files'}
        </label>
      </div>

      {/* Media Grid */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#AD1927] border-t-transparent"></div>
          </div>
        ) : media.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {media.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square bg-gray-100 rounded-lg overflow-hidden"
              >
                <img
                  src={item.url}
                  alt={item.alt || item.filename}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-2">
                  <p className="text-white text-xs text-center truncate w-full">
                    {item.filename}
                  </p>
                  <p className="text-white/70 text-xs">
                    {formatFileSize(item.size)}
                  </p>
                  <button
                    onClick={() => copyToClipboard(item.url)}
                    className="px-2 py-1 bg-white text-gray-900 text-xs rounded hover:bg-gray-100 transition-colors"
                  >
                    Copy URL
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-5xl mb-4">🖼️</div>
            <p className="text-gray-500 mb-4">No media files yet.</p>
            <label className="text-[#AD1927] hover:underline cursor-pointer">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleUpload}
                className="hidden"
              />
              Upload your first file
            </label>
          </div>
        )}
      </div>
    </div>
  )
}
