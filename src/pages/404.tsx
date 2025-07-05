import { FaceFrownIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-blue-50 to-pink-50 animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center border border-gray-100">
        <FaceFrownIcon className="h-32 w-32 text-pink-400 animate-bounce mb-4" />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">
          Oops! Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          The page you are looking for is under maintenance or does not exist.
        </p>
        <Link to="/">
          <button className="btn btn-primary px-10 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 hover:bg-pink-500 transition-all duration-200">
            Go back home
          </button>
        </Link>
      </div>
      <div className="mt-10 text-gray-400 text-sm animate-pulse">
        If you think this is a mistake, please contact support.
      </div>
    </div>
  );
}