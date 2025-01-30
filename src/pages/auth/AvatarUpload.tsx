import type React from "react"
import { useState, type ChangeEvent } from "react"
import { storage, databaseID, account, bucketID, databases } from "../../Appwrite/DbConn"

interface AvatarUploadProps {
  onFileSelect: (file: File) => void
}

const AvatarUpload: React.FC<AvatarUploadProps> = ({ onFileSelect }) => {
  const [preview, setPreview] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) {
      console.error("No file selected")
      return
    }

    // Check if the user is logged in
    let user
    try {
      user = await account.get()
    } catch (error) {
      console.error("User not logged in or session expired", error)
      return
    }

    // If user is logged in, proceed with file upload
    onFileSelect(file)
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreview(reader.result as string)
    }
    reader.readAsDataURL(file)

    try {
      setIsUploading(true)

      // Generate a unique file ID
      const fileID = `avatar_${Date.now()}`

      // ✅ Upload file to Appwrite Storage
      const uploadedFile = await storage.createFile(bucketID, fileID, file)

      // ✅ Get the file URL from Appwrite
      const fileURL = storage.getFilePreview(bucketID, uploadedFile.$id).href

      console.log("File uploaded:", uploadedFile)

      // ✅ Save the file URL to the user's profile in Appwrite Database
      await databases.updateDocument(databaseID, "users", user.$id, {
        avatar: fileURL,
      })

      console.log("Avatar updated successfully!")

      setIsUploading(false)
    } catch (error) {
      console.error("Error uploading file:", error)
      setIsUploading(false)
    }
  }

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-green-400 mb-2">Operative Avatar</label>
      <div className="flex items-center space-x-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id="avatar-upload"
        />
        <label
          htmlFor="avatar-upload"
          className="cursor-pointer bg-green-600 bg-opacity-20 hover:bg-opacity-30 text-green-400 font-bold py-2 px-4 rounded transition duration-300 ease-in-out backdrop-filter backdrop-blur-sm border border-green-500"
        >
          Upload Operative Avatar
        </label>
        {preview && (
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-green-500">
            <img
              src={preview || "/placeholder.svg"}
              alt="Avatar preview"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        {isUploading && <p className="text-green-500">Uploading...</p>}
      </div>
    </div>
  )
}

export default AvatarUpload
