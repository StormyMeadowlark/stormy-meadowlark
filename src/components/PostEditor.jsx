import { useState, useEffect, useRef, useMemo } from 'react'
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css' // Import Quill styles
import axios from 'axios'
import ImageResize from 'quill-image-resize-module-react' // Import image resize module

Quill.register('modules/imageResize', ImageResize) // Register the image resize module

const PostEditor = ({
  onSave,
  initialTitle,
  initialContent,
  initialMetaTitle,
  initialMetaDescription,
  initialMetaKeywords,
  initialStatus,
}) => {
  const [title, setTitle] = useState(initialTitle || '') // State for post title
  const [content, setContent] = useState(initialContent || '') // Initialize with existing content if available
  const [metaTitle, setMetaTitle] = useState(initialMetaTitle || '') // State for meta title
  const [metaDescription, setMetaDescription] = useState(
    initialMetaDescription || '',
  ) // State for meta description
  const [metaKeywords, setMetaKeywords] = useState(initialMetaKeywords || '') // State for meta keywords
  const [status, setStatus] = useState(initialStatus || 'Draft') // State for publish status
  const [mediaFiles, setMediaFiles] = useState([]) // State to store media files
  const [resizeTimeout, setResizeTimeout] = useState(null)
  const quillRef = useRef(null) // Reference for Quill instance

  useEffect(() => {
    setTitle(initialTitle || '') // Update title when initialTitle changes
    setContent(initialContent || '') // Update content when initialContent changes
    setMetaTitle(initialMetaTitle || '') // Update meta title when initialMetaTitle changes
    setMetaDescription(initialMetaDescription || '') // Update meta description when initialMetaDescription changes
    setMetaKeywords(initialMetaKeywords || '') // Update meta keywords when initialMetaKeywords changes
    setStatus(initialStatus || 'Draft') // Update status when initialStatus changes
  }, [
    initialTitle,
    initialContent,
    initialMetaTitle,
    initialMetaDescription,
    initialMetaKeywords,
    initialStatus,
  ])

  const handleImageUpload = () => {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*,video/*') // Accept images and videos
    input.click()

    input.onchange = () => {
      const file = input.files[0]
      if (file) {
        const editor = quillRef.current.getEditor()
        const range = editor.getSelection()

        // Insert a placeholder text until the file is uploaded
        const placeholder = 'Uploading...'
        editor.insertText(range.index, placeholder)

        setMediaFiles((prevFiles) => [
          ...prevFiles,
          { file, range, placeholderIndex: range.index },
        ])
      }
    }
  }

  const handleContentChange = (value) => {
    setContent(value)
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value) // Update title state on input change
  }

  const handleMetaTitleChange = (e) => {
    setMetaTitle(e.target.value) // Update meta title state on input change
  }

  const handleMetaDescriptionChange = (e) => {
    setMetaDescription(e.target.value) // Update meta description state on input change
  }

  const handleMetaKeywordsChange = (e) => {
    setMetaKeywords(e.target.value) // Update meta keywords state on input change
  }

  const handleStatusChange = (e) => {
    setStatus(e.target.value) // Update status state on input change
  }

  const handleSave = async () => {
    try {
      // First, upload all media files
      const uploadedUrls = await Promise.all(
        mediaFiles.map(async ({ file, placeholderIndex }) => {
          const formData = new FormData()
          formData.append('file', file)

          const tenantId = '66cf01edfc069c867b6fbca9' // Replace with your tenant ID
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

          return { url: response.data.url, type: file.type, placeholderIndex }
        }),
      )

      // Replace placeholders with actual URLs
      const editor = quillRef.current.getEditor()
      uploadedUrls.forEach(({ url, type, placeholderIndex }) => {
        editor.deleteText(placeholderIndex, 11)
        editor.insertEmbed(
          placeholderIndex,
          type.startsWith('video') ? 'video' : 'image',
          url,
        )
      })

      setMediaFiles([])

      if (onSave) {
        onSave({
          title,
          content: editor.root.innerHTML,
          metaTitle,
          metaDescription,
          metaKeywords,
          status,
        }) // Trigger the save function with all updated data
      }
    } catch (error) {
      console.error('Error uploading media or saving post:', error)
    }
  }

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
        handlers: {
          image: handleImageUpload,
        },
      },
      imageResize: {
        modules: ['Resize', 'DisplaySize', 'Toolbar'],
        handleImageResize: (dataUrl, dimensions) => {
          clearTimeout(resizeTimeout)
          const { width, height } = dimensions
          setResizeTimeout(
            setTimeout(() => {
              handleResizeImage(dataUrl, width, height)
            }, 500),
          )
        },
      },
    }),
    [resizeTimeout],
  )

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
    <div className="post-editor bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create or Edit a Blog Post</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Post Title</label>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter post title"
          className="w-full p-2 border rounded dark:bg-dark-secondary"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Meta Title</label>
        <input
          type="text"
          value={metaTitle}
          onChange={handleMetaTitleChange}
          placeholder="Enter meta title"
          className="w-full p-2 border rounded dark:bg-dark-secondary"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Meta Description
        </label>
        <textarea
          value={metaDescription}
          onChange={handleMetaDescriptionChange}
          placeholder="Enter meta description"
          className="w-full p-2 border rounded dark:bg-dark-secondary"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Meta Keywords</label>
        <input
          type="text"
          value={metaKeywords}
          onChange={handleMetaKeywordsChange}
          placeholder="Enter meta keywords, separated by commas"
          className="w-full p-2 border rounded dark:bg-dark-secondary"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Post Status</label>
        <select
          value={status}
          onChange={handleStatusChange}
          className="w-full p-2 border rounded dark:bg-dark-secondary"
        >
          <option value="Draft">Draft</option>
          <option value="Published">Published</option>
        </select>
      </div>
      <ReactQuill
        ref={quillRef}
        value={content}
        onChange={handleContentChange}
        modules={modules}
        formats={formats}
        placeholder="Write your blog content here..."
        className="mb-4 text-dark-text"
      />
      <button
        onClick={handleSave}
        className="bg-light-accent dark:bg-dark-secondary text-white dark:text-light font-bold py-3 px-6 rounded-lg transition-colors hover:bg-light-accent-hover dark:hover:bg-dark-accent"
      >
        Save Post
      </button>
    </div>
  )
}

export default PostEditor
