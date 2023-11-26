
import { useEffect, useState, useContext } from 'react';
import { TrackingContext } from '../Context/TrackingContext';
import { Nav1, Nav2, Nav3 } from '../Components/index';


function NavBar() {
  const [state, setState] = useState();
  const { currentUser, connectWallet } = useContext(TrackingContext);
  const navigation = [

    { title: "Home", path: "#" },
    { title: "Services", path: "#" },
    { title: "Contact Us", path: "#" },
    { title: "Erc20", path: "#" },

  ]


  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };


  }, []);




  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const [reload, setReload] = useState(false);

  function handleClick() {
    setReload(true);
  }

  useEffect(() => {
    if (reload) {
      window.location.reload();
    }
  }, [reload]);


  return (


    <div className="p-8">

      <nav className={`bg-white pb-5 md:text-sm ${state
        ? "shadow-lg rounded-xl border mx-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
        : ""
        }`}
      >
        <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
          <div className="flex items-center justify-between py-5 md:block">
            <a href="javascript:void(0)">
              <img src="https://cdn-icons-png.flaticon.com/512/8757/8757988.png"
                width={120}
                height={50}
                alt="Float UI logo"
              />
            </a>
            <div className="md:hidden">
              <button
                className='menu-btn text-gray-500 hover:text-gray-800'
                onClick={() => setState(!state)}
              >
                {state ? <Nav1 /> : <Nav2 />}
              </button>
            </div>
          </div>
          <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? "block" : "hidden"
            }`}
          >

            <ul className='justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0'>
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className='text-gray-700 hover:text-gray-900'>
                    <a href={item.path} className='block'>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:spcae-y-0 md:mt-0  ">


            {
              currentUser ? (
                <p 

                className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                  {currentUser.slice(0, 15)}.. 
                </p>
              ) : (
            
            


              <div className="relative inline-block text-left">
                <button
                  id="dropdownHoverButton"
                  onClick={toggleDropdown}
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
                  type="button"
                >
                  Connect wallet {' '} 
                  <svg
                    className={`w-2.5 h-2.5 ms-3 transition-transform transform ${isDropdownOpen ? 'rotate-180' : ''
                      }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <div
                    id="dropdownHover"
                    className="z-10 absolute top-full left-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownHoverButton"
                    >
                      <li>
                        {
                          currentUser ? (
                            <p className="w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                              {currentUser.slice(0, 15)}..
                            </p>
                          ) : (


                            <button
                              onClick={() => connectWallet()}
                              className='w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                              Manager

                            </button>
                          )
                        }
                      </li>
                      <li>
                        {
                          currentUser ? (
                            <p className="w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                              {currentUser.slice(0, 15)}..
                            </p>
                          ) : (


                            <button
                              onClick={() => connectWallet()}
                              className='w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                              Sender
                            </button>
                          )
                        }
                      </li>
                      <li>
                        {
                          currentUser ? (
                            <p className="w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                              {currentUser.slice(0, 15)}..
                            </p>
                          ) : (


                            <button
                              onClick={() => connectWallet()}
                              className='w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                              Receiver
                            </button>
                          )
                        }
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              )
            }
            </div>

          </div>
        </div>
      </nav>

    </div>
  );
}

export default NavBar;








// {
//   currentUser ? (
//     <p className="w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
//       {currentUser.slice(0, 15)}..
//     </p>
//   ) : (


//     <button
//       onClick={() => connectWallet()}
//       className='w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
//     >
//       Manager

//     </button>
//   )
// }