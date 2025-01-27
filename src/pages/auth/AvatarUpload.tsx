import type React from "react"
import { useState, type ChangeEvent } from "react"

interface AvatarUploadProps {
  onFileSelect: (file: File) => void
}

const AvatarUpload: React.FC<AvatarUploadProps> = ({ onFileSelect }) => {
  const [preview, setPreview] = useState<string | null>(null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      onFileSelect(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-green-400 mb-2">Operative Avatar</label>
      <div className="flex items-center space-x-4">
        <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" id="avatar-upload" />
        <label
          htmlFor="avatar-upload"
          className="cursor-pointer bg-green-600 bg-opacity-20 hover:bg-opacity-30 text-green-400 font-bold py-2 px-4 rounded transition duration-300 ease-in-out backdrop-filter backdrop-blur-sm border border-green-500"
        >
          Upload Operative Avatar
        </label>
        {preview && (
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-green-500">
            <img src={preview || "/placeholder.svg"} alt="Avatar preview" className="w-full h-full object-cover" />
          </div>
        )}
      </div>
    </div>
  )
}

export default AvatarUpload

