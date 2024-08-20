import React, { useState } from 'react';

interface AddActorProps {
	onClose: () => void;
	onSubmit: (article: {
		name: string;
		date: string;

		categoryId: string;
		performer: string;
		coverImage: string;
		cityId: string;
		languageId: string;
	}) => void;
}

const AddActor: React.FC<AddActorProps> = ({ onClose, onSubmit }) => {
	const [show, setShow] = useState({
		name: '',
		date: '',
		categoryId: '',
		performer: '',
		coverImage: '',
		cityId: '',
		languageId: '',
	});

	const handleSubmit = () => {
		onSubmit(show);
		onClose();
	};

	return (
		<div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50">
			<div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
				<h2 className="text-xl font-semibold mb-4">Add New Show</h2>
				<div className="space-y-4">
					<div className="cursor-pointer">
						<input
							type="text"
							className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
							value={show.name}
							onChange={(e) => setShow({ ...show, name: e.target.value })}
						/>
					</div>
					<div className="cursor-pointer">
						<input
							type="datetime-local"
							className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
							value={show.date}
							onChange={(e) => setShow({ ...show, date: e.target.value })}
						/>
					</div>
					<div className="cursor-pointer">
						<input
							type="text"
							placeholder="category"
							className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
							value={show.categoryId}
							onChange={(e) => setShow({ ...show, categoryId: e.target.value })}
						/>
					</div>
					<div className="cursor-pointer">
						<input
							type="text"
							placeholder="Add performer"
							className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
							value={show.performer}
							onChange={(e) => setShow({ ...show, performer: e.target.value })}
						/>
					</div>
					<div className="cursor-pointer">
						<input
							type="text"
							placeholder="coverImage"
							className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
							value={show.coverImage}
							onChange={(e) => setShow({ ...show, coverImage: e.target.value })}
						/>
					</div>
					<div className="cursor-pointer">
						<input
							type="text"
							placeholder="city"
							className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
							value={show.cityId}
							onChange={(e) => setShow({ ...show, cityId: e.target.value })}
						/>
					</div>
					<div className="cursor-pointer">
						<input
							type="text"
							placeholder="language"
							className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
							value={show.languageId}
							onChange={(e) => setShow({ ...show, languageId: e.target.value })}
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
