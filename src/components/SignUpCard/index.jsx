const SignUpCard = ({ onSubmit, onEmailChange, onUsernameChange, onNameChange, onPasswordChange, isLoading }) => {
  return (
    <form className="bg-neutral-900 w-80 mx-auto mt-40 p-5 rounded-lg border border-gray-800 bg-gray-800 shadow-2xl" onSubmit={onSubmit}>
      <h1 className="text-2xl font-semibold text-white text-center mb-2">Sign Up</h1>
      <hr className="mb-5 w-1/2 mx-auto" />

      <div>
        <h3 className="text-white text-sm mb-1">Email</h3>
        <input type="email" className="py-2 px-3 text-sm text-black rounded-lg w-full border border-gray-500" placeholder="Email" required onChange={onEmailChange} />
      </div>
      <div className="mt-3">
        <h3 className="text-white text-sm mb-1">Username</h3>
        <input type="text" className="py-2 px-3 text-sm text-black rounded-lg w-full border border-gray-500" placeholder="Username" required onChange={onUsernameChange} />
      </div>
      <div className="mt-3">
        <h3 className="text-white text-sm mb-1">Full Name</h3>
        <input type="text" className="py-2 px-3 text-sm text-black rounded-lg w-full border border-gray-500" placeholder="Full Name" required onChange={onNameChange} />
      </div>
      <div className="mt-3">
        <h3 className="text-white text-sm mb-1">Password</h3>
        <input type="password" className="py-2 px-3 text-sm text-black rounded-lg w-full border border-gray-500" placeholder="Password" required onChange={onPasswordChange} />
      </div>
      <button className="bg-green-700 hover:bg-green-600 text-center mt-5 p-2 rounded-lg w-full border-gray-300 text-sm font-semibold text-white" disabled={isLoading}>
        {isLoading ? 'Logging In...' : 'Login'}
      </button>
    </form>
  );
};

export default SignUpCard;
