import { Disclosure } from "@headlessui/react";
import { useLocation, Link } from "react-router-dom";

const navigation = [
  { name: "About", href: "/" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

// Map route paths to titles
const routeTitles = {
  "/": "About Shedrack Ntandu",
  "/resume": "Resume",
  "/contact": "Get In Touch",
  "/award-create": "Add Reward",
  "/education-create": "Add Education",
  "/experience-create": "Add Experience",
  "/interest-create": "Add Interest",
  "/language-create": "Add Language",
  "/objective-create": "Add Objective",
  "/personalDetail-create": "Add Personal Details",
  "/project-create": "Add Project",
  "/publication-create": "Add Publication",
  "/reference-create": "Add Reference",
  "/service-create": "Add Service",
  "/skill-create": "Add Skill",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Main({ children }) {
  const location = useLocation();

  // Get the page title based on the current route
  const pageTitle = routeTitles[location.pathname] || "Default Title";

  return (
    <div className="min-h-full">
      {/* Navigation */}
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                {/* Logo */}
                <div className="shrink-0">
                  <img
                    alt="Logo"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                    className="h-8 w-8 rounded-full object-cover border-1 border-gray-200"
                  />
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:block ml-auto">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          location.pathname === item.href
                            ? "bg-indigo-600 text-white"
                            : "text-gray-800 hover:bg-gray-100 hover:text-gray-900",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={
                          location.pathname === item.href ? "page" : undefined
                        }
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Navigation Toggle Button */}
                <div className="-mr-2 flex md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    to={item.href}
                    className={classNames(
                      location.pathname === item.href
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={
                      location.pathname === item.href ? "page" : undefined
                    }
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Header */}
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-2xl font-bold tracking-tight text-gray-900">
            {pageTitle}
          </p>
        </div>
      </header>

      {/* Dynamic Page Content */}
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white text-gray-800 shadow-md rounded-t-lg">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Social Media Links */}
            <div className="flex space-x-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/tzc_him/profilecard/?igsh=ZzR6NTE3YngxZHAx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/shedrack-ntandu-1ab209327"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/Ntandu-Shedrack"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>

            {/* Copyright Info */}
            <div className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Ntandu Shedrack J. All rights
              reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
