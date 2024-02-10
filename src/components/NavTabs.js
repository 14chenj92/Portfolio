import React from "react";
import { Disclosure } from '@headlessui/react';
import Diamond from "../images/diamond.svg";

const navigation = [
  { name: 'About', id: 'about', current: false, },
  { name: 'Project', id: 'project', current: false },
  { name: 'Contact', id: 'contact', current: false },
  { name: 'Resume', id: 'resume', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NavTabs = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }}
  return (    <Disclosure as="nav" className="bg-gray-800">
    <>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8" id="header">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <button onClick={() => scrollToSection(item.id)}
                    key={item.name}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
</Disclosure>
)
}

export default NavTabs;

