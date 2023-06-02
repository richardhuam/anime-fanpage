import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href="/" className="font-bold text-20 md:text-24">
      <span className="text-red-600">ANIME</span> <span className="text-gray-800">FANPAGE</span>
    </Link>
  );
};

export default Logo;
