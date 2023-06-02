import React from 'react';

interface InfoAlertProps {
  text: string;
}

const InfoAlert: React.FC<InfoAlertProps> = ({ text }) => {
  return (
    <div className="bg-white w-full border-teal-600 rounded-md p-3 text-center text-14 md:text-15 text-teal-600 border-1">
      {text}
    </div>
  );
};

export default InfoAlert;
