import React from "react";
import { Trash2 } from "lucide-react";



interface FileTableProps {
  files: FileItem[];
  onDelete: (filename: string) => Promise<void>;
}

const FileTable: React.FC<FileTableProps> = ({ files, onDelete }) => {
  const formatSize = (size: number) =>
    `${(size / (1024 * 1024)).toFixed(2)} MB`;

  const formatDate = (date: string) =>
    new Date(date).toLocaleString();



  return (
    <div className="overflow-x-auto rounded-xl border shadow">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Preview</th>
            <th className="p-3">Filename</th>
            <th className="p-3">Size</th>
            <th className="p-3">Created</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file) => (
            <tr key={file.id} className="border-t hover:bg-gray-50">
              <td className="p-3">
                <img
                  src={file.url}
                  alt={file.filename}
                  className="h-12 w-12 object-cover rounded"
                />
              </td>
              <td className="p-3">{file.filename}</td>
              <td className="p-3">{formatSize(file.size)}</td>
              <td className="p-3">{formatDate(file.created)}</td>
              <td className="p-3">
                <button
                  onClick={async() => await onDelete(file.filename)}
                  className="flex items-center gap-1 rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileTable;
