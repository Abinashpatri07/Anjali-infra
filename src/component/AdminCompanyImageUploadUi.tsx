import React, { useState, useRef, useEffect } from 'react';
import { Upload, X, Eye, FileImage } from 'lucide-react';
import FileTable from './FileTable';

interface ImageFile {
  id: string;
  file: File;
  preview: string;
  name: string;
  size: number;
  type: string;
}


const AdminCompanyImageUploadUi: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<ImageFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [uploadedImages, setUploadedImages] = useState<Array<FileItem>>([]);
  const [isDelete,setIsDelete] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);


  useEffect(() => {
  const fetchUploadedImages = async () => {
    try {
      const response = await fetch('https://anjaliinfraservice.onrender.com/api/admin/company-images');
      if (response.ok) {
        const result = await response.json();
        if (result.data && result.data.files) {
          setUploadedImages(result.data.files);
        }
        console.log(uploadedImages)
      }
    } catch (error) {
      console.error('Error fetching uploaded images:', error);
    }
  };

  fetchUploadedImages();
  }, [isDelete]);

 const handleDelete = async (filename: string) => {
    try {
      const res = await fetch(
        `https://anjaliinfraservice.onrender.com/api/admin/company-images/${encodeURIComponent(
          filename
        )}`,
        {
          method: "DELETE",
        }
      );

      await res.json();

      setIsDelete(!isDelete);
    } catch (error) {
      console.error("Error deleting:", error);
      alert("Server error: " + error);
    }
  };

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  const MAX_FILES = 10;
  const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];

  const validateFile = (file: File): string | null => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      return `${file.name}: Only JPEG, PNG, WebP, and GIF files are allowed`;
    }
    if (file.size > MAX_FILE_SIZE) {
      return `${file.name}: File size must be less than 5MB`;
    }
    return null;
  };

  const handleFileSelect = (files: FileList) => {
    const newImages: ImageFile[] = [];
    const errors: string[] = [];

    Array.from(files).forEach((file) => {
      // Check if file already exists
      const exists = selectedImages.some(img => 
        img.name === file.name && img.size === file.size
      );
      
      if (exists) {
        errors.push(`${file.name}: File already selected`);
        return;
      }

      const error = validateFile(file);
      if (error) {
        errors.push(error);
        return;
      }

      if (selectedImages.length + newImages.length >= MAX_FILES) {
        errors.push(`Maximum ${MAX_FILES} files allowed`);
        return;
      }

      const imageFile: ImageFile = {
        id: `${Date.now()}-${Math.random()}`,
        file,
        preview: URL.createObjectURL(file),
        name: file.name,
        size: file.size,
        type: file.type
      };

      newImages.push(imageFile);
    });

    if (errors.length > 0) {
      alert(errors.join('\n'));
    }

    if (newImages.length > 0) {
      setSelectedImages(prev => [...prev, ...newImages]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      handleFileSelect(files);
    }
    // Reset input value to allow selecting the same file again
    e.target.value = '';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files) {
      handleFileSelect(files);
    }
  };

  const removeImage = (id: string) => {
    setSelectedImages(prev => {
      const updated = prev.filter(img => img.id !== id);
      // Revoke object URL to prevent memory leaks
      const imageToRemove = prev.find(img => img.id === id);
      if (imageToRemove) {
        URL.revokeObjectURL(imageToRemove.preview);
      }
      return updated;
    });
  };

  const clearAll = () => {
    selectedImages.forEach(img => URL.revokeObjectURL(img.preview));
    setSelectedImages([]);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getTotalSize = (): number => {
    return selectedImages.reduce((total, img) => total + img.size, 0);
  };

  const handleUpload = async () => {
    if (selectedImages.length === 0) {
      alert('Please select at least one image');
      return;
    }

    setIsUploading(true);
    
    try {
      // Create FormData for backend
      const formData = new FormData();
      
      // Add all images to FormData - each file will be accessible as 'images' array in backend
      selectedImages.forEach((imageFile) => {
        formData.append('images', imageFile.file);
      });
      
      // Add additional metadata if needed
      formData.append('totalCount', selectedImages.length.toString());
      formData.append('totalSize', getTotalSize().toString());
      formData.append('uploadTimestamp', new Date().toISOString());
      
      // Add individual file metadata as JSON string
      formData.append('fileMetadata', JSON.stringify(
        selectedImages.map(img => ({
          originalName: img.name,
          size: img.size,
          type: img.type,
          lastModified: img.file.lastModified
        }))
      ));

      // DIRECT BACKEND CALL - Replace with your actual endpoint
      const response = await fetch('https://anjaliinfraservice.onrender.com/api/admin/company-images/upload', {
        method: 'POST',
        body: formData,
        // Note: Don't set Content-Type header - browser will set it automatically with boundary for FormData
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log('Upload successful:', result);
        alert('Images uploaded successfully!');
        clearAll();
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Upload failed with status ${response.status}`);
      }
      
    } catch (error) {
      console.error('Upload error:', error);
    //   alert(`Upload failed: ${error.message}`);
    } finally {
      setIsUploading(false);
      setIsDelete(!isDelete);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Company Image Upload</h2>
        <p className="text-gray-600">
          Upload multiple images for your company. Max {MAX_FILES} files, 5MB each.
        </p>
      </div>

      {/* Upload Area */}
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          isDragOver 
            ? 'border-blue-500 bg-blue-50' 
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Drop images here or click to browse
        </h3>
        <p className="text-gray-500 mb-4">
          Supports: JPEG, PNG, WebP, GIF (max 5MB each)
        </p>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <FileImage className="w-4 h-4 mr-2" />
          Select Images
        </button>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={handleInputChange}
          className="hidden"
        />
      </div>

      {/* Selected Images Info */}
      {selectedImages.length > 0 && (
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">
                {selectedImages.length} image{selectedImages.length !== 1 ? 's' : ''} selected
              </span>
              <span className="text-sm text-gray-500">
                Total size: {formatFileSize(getTotalSize())}
              </span>
            </div>
            <button
              onClick={clearAll}
              className="text-sm text-red-600 hover:text-red-700"
            >
              Clear All
            </button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            {selectedImages.map((image) => (
              <div key={image.id} className="relative group">
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={image.preview}
                    alt={image.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setPreviewImage(image.preview)}
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Eye className="w-4 h-4 text-gray-700" />
                    </button>
                    <button
                      onClick={() => removeImage(image.id)}
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <X className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </div>
                <div className="mt-2 text-xs text-gray-600 truncate">
                  <div className="font-medium truncate">{image.name}</div>
                  <div className="text-gray-500">{formatFileSize(image.size)}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Upload Button */}
          <div className="flex justify-center">
            <button
              onClick={handleUpload}
              disabled={isUploading || selectedImages.length === 0}
              className={`inline-flex items-center px-6 py-3 rounded-md font-medium transition-colors ${
                isUploading || selectedImages.length === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {isUploading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 mr-2" />
                  Upload {selectedImages.length} Image{selectedImages.length !== 1 ? 's' : ''}
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Image Preview Modal */}
      {previewImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setPreviewImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={previewImage}
              alt="Preview"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-4 h-4 text-gray-700" />
            </button>
          </div>
        </div>
      )}

      {/* Usage Info */}
      <FileTable files={uploadedImages} onDelete={handleDelete}/>
    </div>
  );
};

export default AdminCompanyImageUploadUi;