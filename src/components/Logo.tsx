import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href="/" className="font-bold text-20 md:text-24">
      <span className="text-teal-500">ANIME</span> <span className="text-teal-900">FANPAGE</span>
    </Link>
  );
};

export default Logo;
