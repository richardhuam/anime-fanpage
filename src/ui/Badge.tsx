import React from 'react';

interface BadgeProps {
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <span className="rounded-2xl bg-gray-200/80 px-2 py-0.5 text-12 text-gray-600">{text}</span>
  );
};

export default Badge;
