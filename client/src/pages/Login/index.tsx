import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Input from '../../components/form/Input';
import Button from '../../components/form/Button';
import { useState } from 'react';
import { loggednInUserState, login } from '../../redux/authSlice';
import { useAppDispatch } from '../../hooks/redux';

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const [error, setError] = useState<unknown>('');
  const dispatch = useAppDispatch();

  const handleLogin = async (data: LoginFormInputs) => {
    setError('');
    const backendUri: string = import.meta.env.VITE_BACKEND_URI as string;
    try {
      const session = await fetch(`${backendUri}/api/v1/user/login`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      if (!session.ok) {
        const data = await session.json();
        const message = data.message;
        return setError(message);
      }
      const response = await session.json();

      const userData: loggednInUserState = response.data.user;
      if (userData) {
        dispatch(login(userData));
      }
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div className="flex items-center justify-center w-full">
      {`${error}`}
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center"></div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>

        <form className="mt-5" onSubmit={handleSubmit(handleLogin)}>
          <div className="space-y-5">
            <Input
              placeholder="Enter your email"
              type="email"
              {...register('email', {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    'Email address must be a valid address',
                },
              })}
            />
            <Input
              type="password"
              placeholder="Enter your password"
              {...register('password', {
                required: true,
              })}
            />
            <Button type="submit">Sign in</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
