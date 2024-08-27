
import { Link } from 'react-router-dom'

const VerifiedSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light-primary dark:bg-dark-primary text-dark dark:text-light">
      <div className="max-w-lg w-full p-6 bg-light-secondary dark:bg-dark-secondary rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">
          Email Verified Successfully!
        </h1>
        <p className="text-lg mb-6">
          Your email has been verified. You can now log in and start using your
          account.
        </p>
        <Link
          to="/login"
          className="bg-light-accent dark:bg-dark-accent text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-light-accent-hover dark:hover:bg-dark-accent-dark transition-colors"
        >
          Go to Login
        </Link>
      </div>
    </div>
  )
}

export default VerifiedSuccess
