import React from 'react';
import PasswordForm from './components/PasswordForm';

const App = () => {
  return (
    <div className="mx-auto flex h-screen w-screen items-center justify-center">
      <div className="flex w-90 flex-col px-4 sm:w-100">
        <h1 className="mb-2 text-center text-2xl font-semibold text-gray2">
          Password Generator
        </h1>
        <PasswordForm />
      </div>
    </div>
  );
};

export default App;
