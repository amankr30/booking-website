import React, { useState } from "react";

interface AddActorProps {
    onClose: () => void;
    onSubmit: (article: { date: string; time: string; category: string; actor: string }) => void;
}

const AddActor: React.FC<AddActorProps> = ({ onClose, onSubmit }) => {
    const [article, setArticle] = useState({
        date: "",
        time: "",
        category: "",
        actor: ""
    });

    const handleSubmit = () => {
        onSubmit(article);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
                <h2 className="text-xl font-semibold mb-4">Add New Article</h2>
                <div className="space-y-4">
                    <div className="cursor-pointer">
                        <input
                            type="date"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            value={article.date}
                            onChange={(e) => setArticle({ ...article, date: e.target.value })}
                        />
                    </div>
                    <div className="cursor-pointer">
                        <input
                            type="time"
                            name="appt-time"
                            min="12:00"
                            max="18:00"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            value={article.time}
                            onChange={(e) => setArticle({ ...article, time: e.target.value })}
                        />
                    </div>
                    <div className="cursor-pointer">
                        <input
                            type="text"
                            placeholder="category"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            value={article.category}
                            onChange={(e) => setArticle({ ...article, category: e.target.value })}
                        />
                    </div>
                    <div className="cursor-pointer">
                        <input
                            type="text"
                            placeholder="actor"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            value={article.actor}
                            onChange={(e) => setArticle({ ...article, actor: e.target.value })}
                        />
                    </div>
                </div>
                <div className="flex justify-end mt-6 space-x-4 cursor-pointer">
                    <button
                        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddActor;
