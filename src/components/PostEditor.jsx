// src/components/PostEditor.jsx
import { useState, useEffect, useRef, useMemo } from 'react'
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import axios from 'axios'
import ImageResize from 'quill-image-resize-module-react'

Quill.register('modules/imageResize', ImageResize) // Register the image resize module

const PostEditor = ({
  onSave,
  initialTitle = '',
  initialContent = '',
  initialMetaTitle = '',
  initialMetaDescription = '',
  initialMetaKeywords = '',
  initialStatus = 'Draft',
}) => {
  const [title, setTitle] = useState(initialTitle)
  const [content, setContent] = useState(initialContent)
  const [metaTitle, setMetaTitle] = useState(initialMetaTitle)
  const [metaDescription, setMetaDescription] = useState(initialMetaDescription)
  const [metaKeywords, setMetaKeywords] = useState(initialMetaKeywords)
  const [status, setStatus] = useState(initialStatus)
  const [mediaFiles, setMediaFiles] = useState([]) // State to store media files
  const [uploading, setUploading] = useState(false) // Track file upload status
  const [previewMode, setPreviewMode] = useState(false) // Preview mode
  const quillRef = useRef(null) // Reference for Quill instance

  // Update editor state when initial data changes
  useEffect(() => {
    setTitle(initialTitle)
    setContent(initialContent)
    setMetaTitle(initialMetaTitle)
    setMetaDescription(initialMetaDescription)
    setMetaKeywords(initialMetaKeywords)
    setStatus(initialStatus)
  }, [
    initialTitle,
    initialContent,
    initialMetaTitle,
    initialMetaDescription,
    initialMetaKeywords,
    initialStatus,
  ])

  // Function to handle image upload
  const handleImageUpload = () => {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*,video/*')
    input.click()

    input.onchange = async () => {
      const file = input.files[0]
      if (file) {
        const editor = quillRef.current.getEditor()
        const range = editor.getSelection()
        const placeholder = 'Uploading...'
        editor.insertText(range.index, placeholder)
        setUploading(true)

        try {
          const formData = new FormData()
          formData.append('file', file)
          const tenantId = '66cf01edfc069c867b6fbca9'
          const response = await axios.post(
            `https://skynetrix.tech/api/v1/media/${tenantId}/upload`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'x-tenant-id': tenantId,
                'Content-Type': 'multipart/form-data',
              },
            },
          )
          const url = response.data.url
          editor.deleteText(range.index, placeholder.length)
          editor.insertEmbed(
            range.index,
            file.type.startsWith('video') ? 'video' : 'image',
            url,
          )
        } catch (err) {
          console.error('Error uploading file:', err)
          alert('Failed to upload the image.')
        } finally {
          setUploading(false)
        }
      }
    }
  }

  // Save post content and metadata
  const handleSave = async () => {
    if (onSave) {
      const editor = quillRef.current.getEditor()
      onSave({
        title,
        content: editor.root.innerHTML, // Extract innerHTML as the post content
        metaTitle,
        metaDescription,
        metaKeywords,
        status,
      })
    }
  }

  // Configuration for Quill editor
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: '1' }, { header: '2' }, { font: [] }],
          [{ size: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image', 'video'],
          [{ align: [] }],
          ['clean'],
        ],
        handlers: { image: handleImageUpload },
      },
      imageResize: {
        modules: ['Resize', 'DisplaySize', 'Toolbar'],
      },
    }),
    [],
  )

  // Formats allowed for Quill editor
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'video',
    'align',
  ]

  return (
    <div className="post-editor bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text p-6 rounded-lg shadow-md max-w-screen-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create or Edit a Blog Post</h2>

      {/* Title and Meta Title Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1">Post Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
            className="w-full p-2 border rounded dark:bg-dark-secondary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Meta Title</label>
          <input
            type="text"
            value={metaTitle}
            onChange={(e) => setMetaTitle(e.target.value)}
            placeholder="Enter meta title"
            className="w-full p-2 border rounded dark:bg-dark-secondary"
          />
        </div>
      </div>

      {/* Meta Description */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Meta Description
        </label>
        <textarea
          value={metaDescription}
          onChange={(e) => setMetaDescription(e.target.value)}
          placeholder="Enter meta description"
          className="w-full p-2 border rounded dark:bg-dark-secondary"
        />
      </div>

      {/* Meta Keywords */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Meta Keywords</label>
        <input
          type="text"
          value={metaKeywords}
          onChange={(e) => setMetaKeywords(e.target.value)}
          placeholder="Enter meta keywords, separated by commas"
          className="w-full p-2 border rounded dark:bg-dark-secondary"
        />
      </div>

      {/* Post Status */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Post Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 border rounded dark:bg-dark-secondary"
        >
          <option value="Draft">Draft</option>
          <option value="Published">Published</option>
        </select>
      </div>

      {/* Quill Editor */}
      <ReactQuill
        ref={quillRef}
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
        placeholder="Write your blog content here..."
        className="mb-4 text-dark dark:text-light"
      />

      {/* Preview and Save Buttons */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => setPreviewMode(!previewMode)}
          className="bg-light-accent dark:bg-dark-secondary text-white dark:text-light font-bold py-3 px-6 rounded-lg transition-colors hover:bg-light-accent-hover dark:hover:bg-dark-accent"
        >
          {previewMode ? 'Edit Post' : 'Preview Post'}
        </button>
        <button
          onClick={handleSave}
          className="bg-light-accent dark:bg-dark-secondary text-white dark:text-light font-bold py-3 px-6 rounded-lg transition-colors hover:bg-light-accent-hover dark:hover:bg-dark-accent"
        >
          Save Post
        </button>
        {uploading && <span className="ml-2 text-blue-500">Uploading...</span>}
      </div>

      {/* Preview Mode */}
      {previewMode && (
        <div className="preview bg-light dark:bg-dark text-light dark:text-dark p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      )}
    </div>
  )
}

export default PostEditor
