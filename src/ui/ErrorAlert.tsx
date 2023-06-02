import React from 'react';

interface ErrorAlertProps {
  error: any;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ error }) => {
  return (
    <div className="bg-white w-full border-red-600 rounded-md p-3 text-center text-14 md:text-15 text-red-600 border-1">
      Error: {error}
    </div>
  );
};

export default ErrorAlert;
