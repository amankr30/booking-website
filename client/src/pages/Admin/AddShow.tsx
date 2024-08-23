import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface AddShowProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  name: string;
  categoryId: string;
  coverImage: FileList;
  cityId: string;
  performer: string;
  languageId: string;
  date: string;
}

const AddShow: React.FC<AddShowProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onFormSubmit: SubmitHandler<FormData> = (data) => {
    // Handle file upload separately if needed
    onSubmit(data);
    reset();
  };

  return (
    <div className="App mt-10 w-[75%] mx-auto flex justify-center items-center flex-col">
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="Showname form-control w-full mb-4">
          <input
            className="border-2 p-2 w-full"
            placeholder="Name of the show"
            type="text"
            {...register('showName', {
              required: 'Showname is required.',
              validate: {
                checkLength: (value) =>
                  value.length <= 50 || 'Name should be at most 50 characters.',
              },
            })}
          />
          {errors.showName && (
            <p className="errorMsg text-left text-red-500">
              {errors.showName.message as string}
            </p>
          )}
        </div>
        <div className="category form-control w-full mb-4">
          <input
            className="border-2 p-2 w-full"
            placeholder="Categories"
            type="text"
            {...register('Categories', {
              required: 'Category is required.',
            })}
          />
          {errors.Categories && (
            <p className="errorMsg text-left text-red-500">
              {errors.Categories.message as string}
            </p>
          )}
        </div>
        <div className="file-upload form-control w-full mb-4">
          <input
            className="border-2 p-2 w-full"
            id="coverImage"
            type="file"
            {...register('coverImage', {
              required: 'Cover image is required.',
            })}
          />
          {errors.coverImage && (
            <p className="errorMsg text-left text-red-500">
              {errors.coverImage.message as string}
            </p>
          )}
        </div>
        <div className="city form-control w-full mb-4">
          <input
            className="border-2 p-2 w-full"
            placeholder="City"
            type="text"
            {...register('city', {
              required: 'City name is required.',
            })}
          />
          {errors.city && (
            <p className="errorMsg text-left text-red-500">
              {errors.city.message as string}
            </p>
          )}
        </div>
        <div className="actor form-control w-full mb-4">
          <input
            className="border-2 p-2 w-full"
            placeholder="Name of the actor"
            type="text"
            {...register('Actor', {
              required: 'Actor name is required.',
            })}
          />
          {errors.Actor && (
            <p className="errorMsg text-left text-red-500">
              {errors.Actor.message as string}
            </p>
          )}
        </div>
        <div className="language form-control w-full mb-4">
          <input
            className="border-2 p-2 w-full"
            placeholder="Language"
            type="text"
            {...register('language', {
              required: 'Language is required.',
            })}
          />
          {errors.language && (
            <p className="errorMsg text-left text-red-500">
              {errors.language.message as string}
            </p>
          )}
        </div>
        <div className="date form-control w-full mb-4">
          <input
            className="border-2 p-2 w-full"
            id="date"
            type="date"
            {...register('date', {
              required: 'Date is required.',
              validate: {
                futureDate: (value) =>
                  new Date(value) > new Date() || 'Date must be in the future.',
              },
            })}
          />
          {errors.date && (
            <p className="errorMsg text-left text-red-500">
              {errors.date.message as string}
            </p>
          )}
        </div>
        <div className="time form-control w-full mb-4">
          <input
            className="border-2 p-2 w-full"
            id="time"
            type="time"
            {...register('time', {
              required: 'Time is required.',
            })}
          />
          {errors.time && (
            <p className="errorMsg text-left text-red-500">
              {errors.time.message as string}
            </p>
          )}
        </div>
        <div className="form-control">
          <button
            type="submit"
            className="border-2 bg-purple-500 text-white px-3 py-2 w-full rounded-md outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddShow;
