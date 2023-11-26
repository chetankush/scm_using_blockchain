import {Fot1, Fot2} from "../Components/index";


const Footer = () => {
  const footerNavs = [
    {
      href: "#",
      name: "Terms",
    },
    {
      href: "#",
      name: "License",
    },
    {
      href: "#",
      name: "Privacy",
    },
    {
      href: "#",
      name: "About us",
    },
    {
      href: "#",
      name: "Contact",
    },
  ];

  return (
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 flex justify-around">
        <div>
          Supply chain management
          <p className="max-w-md">
            {/* ... (existing text) */}
          </p>
          <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
            {footerNavs.map((item, idx) => (
              <li key={idx} className="text-gray-800 hover:text-gray-500 duration-150">
                <a href={item.href}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <p className="text-gray-700 font-semibold"> Blockchain supply chain management</p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
