import React, { useState } from 'react';
import AddShow from './AddShow';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface FormData {
  showName: string;
  Categories: string;
  coverImage: FileList;
  city: string;
  Actor: string;
  language: string;
  date: string;
  time: string;
}

interface Article {
  id: number;
  NameOfShow: string;
  date: string;
  time: string;
  category: string;
  actor: string;
  coverImage: string;
  city: string;
  language: string;
}

const Admin: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Function to handle adding a new article to the list
  const handleAddArticle = (data: FormData) => {
    // Convert file input to URL or handle it as needed
    const coverImageURL =
      data.coverImage.length > 0 ? URL.createObjectURL(data.coverImage[0]) : '';

    setArticles([
      ...articles,
      {
        id: articles.length + 1,
        NameOfShow: data.showName,
        date: data.date,
        time: data.time,
        category: data.Categories,
        actor: data.Actor,
        coverImage: coverImageURL,
        city: data.city,
        language: data.language,
      },
    ]);
    setIsDialogOpen(false); // Close the dialog after submission
  };

  // Function to handle deleting an article
  const handleDelete = (id: number) => {
    setArticles(articles.filter((a) => a.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 relative">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-700">Admin Panel</h1>
          <button
            className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
            onClick={() => setIsDialogOpen(true)}
          >
            + Add article
          </button>
        </div>

        <div className="flex justify-end items-center mt-4">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-gray-600 text-left text-sm leading-normal">
                <th className="py-3 px-3 font-medium border border-gray-300 text-left">
                  Name Of Show
                </th>
                <th className="py-3 px-3 font-medium border border-gray-300 text-left">
                  Date
                </th>
                <th className="py-3 px-3 font-medium border border-gray-300 text-left">
                  Time
                </th>
                <th className="py-3 px-3 font-medium border border-gray-300 text-left">
                  Category
                </th>
                <th className="py-3 px-3 font-medium border border-gray-300 text-left">
                  Actor
                </th>
                <th className="py-3 px-3 font-medium border border-gray-300 text-left">
                  Cover Image
                </th>
                <th className="py-3 px-3 font-medium border border-gray-300 text-left">
                  City
                </th>
                <th className="py-3 px-3 font-medium border border-gray-300 text-left">
                  Language
                </th>
                <th className="py-3 px-3 font-medium border border-gray-300 text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {articles.map((article) => (
                <tr key={article.id} className="hover:bg-gray-100">
                  <td className="py-3 px-3 border border-gray-300 text-left">
                    {article.NameOfShow}
                  </td>
                  <td className="py-3 px-3 border border-gray-300 text-left">
                    {article.date}
                  </td>
                  <td className="py-3 px-3 border border-gray-300 text-left">
                    {article.time}
                  </td>
                  <td className="py-3 px-3 border border-gray-300 text-left">
                    {article.category}
                  </td>
                  <td className="py-3 px-3 border border-gray-300 text-left">
                    {article.actor}
                  </td>
                  <td className="py-3 px-3 border border-gray-300 text-left">
                    <img
                      src={article.coverImage}
                      alt="Cover"
                      className=" items-center w-16 h-10 object-cover"
                    />
                  </td>
                  <td className="py-3 px-3 border border-gray-300 text-left">
                    {article.city}
                  </td>
                  <td className="py-3 px-3 border border-gray-300 text-left">
                    {article.language}
                  </td>
                  <td className="py-3 px-3 border border-gray-300 text-left">
                    <div className="flex items-center space-x-4">
                      <button
                        className="text-red-600 hover:underline"
                        onClick={() => handleDelete(article.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Dialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        fullWidth
        maxWidth="md"
      >
        <DialogContent>
          <div className="relative">
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setIsDialogOpen(false)}
              aria-label="close"
              className="absolute top-2 right-2"
            >
              <CloseIcon />
            </IconButton>
            <AddShow onSubmit={handleAddArticle} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;
