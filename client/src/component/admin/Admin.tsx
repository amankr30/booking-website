import React, { useState } from "react";
import AddActor from "./AddActor";

interface Article {
    id: number;
    date: string;
    time: string;
    category: string;
    actor: string;
}

const Admin: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([
        { id: 1, date: "24 July 2016", time: "10:00 AM", category: "Comedy", actor: "Aman" },
        { id: 2, date: "24 July 2016", time: "11:00 AM", category: "Bakchodi 2", actor: "Anas" },
        // Add more articles as needed
    ]);

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleAddArticle = (article: { date: string; time: string; category: string; actor: string }) => {
        setArticles([...articles, { ...article, id: articles.length + 1 }]);
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
                    {/* <select className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
                        <option>10 records per page</option>
                        <option>20 records per page</option>
                        <option>30 records per page</option>
                    </select> */}
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
                                <th className="py-3 px-6 font-medium border border-gray-300 text-left">Date</th>
                                <th className="py-3 px-6 font-medium border border-gray-300 text-left">Time</th>
                                <th className="py-3 px-6 font-medium border border-gray-300 text-left">Category</th>
                                <th className="py-3 px-6 font-medium border border-gray-300 text-left">Actor</th>
                                <th className="py-3 px-6 font-medium border border-gray-300 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700 text-sm">
                            {articles.map((article) => (
                                <tr key={article.id} className="hover:bg-gray-100">
                                    <td className="py-3 px-6 border border-gray-300 text-left">{article.date}</td>
                                    <td className="py-3 px-6 border border-gray-300 text-left">{article.time}</td>
                                    <td className="py-3 px-6 border border-gray-300 text-left">{article.category}</td>
                                    <td className="py-3 px-6 border border-gray-300 text-left">{article.actor}</td>
                                    <td className="py-3 px-6 border border-gray-300 text-left">
                                        <div className="flex items-center space-x-4">
                                            <button className="text-blue-600 hover:underline">Edit</button>
                                            <button
                                                className="text-red-600 hover:underline"
                                                onClick={() => setArticles(articles.filter(a => a.id !== article.id))}
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

            {isDialogOpen && (
                <AddActor
                    onClose={() => setIsDialogOpen(false)}
                    onSubmit={handleAddArticle}
                />
            )}
        </div>
    );
};

export default Admin;
