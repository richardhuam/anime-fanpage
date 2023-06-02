import { SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800">
      <div className="main-container-nav-foot space-y-4 py-12 lg:py-14">
        <div className="flex items-center justify-center gap-4">
          <a
            aria-label="something"
            className="rounded-full border-2 border-white bg-semi-dark p-2 text-xl text-white transition delay-100 duration-300 ease-in-out hover:bg-primary-darker lg:hover:-translate-y-1"
            href="#"
          >
            <SiTailwindcss />
          </a>
          <a
            aria-label="something"
            className="rounded-full border-2 border-white bg-semi-dark p-2 text-xl text-white transition delay-100 duration-300 ease-in-out hover:bg-primary-darker lg:hover:-translate-y-1"
            href="#"
          >
            <SiTypescript />
          </a>
          <a
            aria-label="something"
            className="rounded-full border-2 border-white bg-semi-dark p-2 text-xl text-white transition delay-100 duration-300 ease-in-out hover:bg-primary-darker lg:hover:-translate-y-1"
            href="#"
          >
            <SiReact />
          </a>
        </div>
        <h2 className="text-center text-white text-14 md:text-15">
          Anime Fan Page made with Tailwind , NextJS and Typescript
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
