/* This example requires Tailwind CSS v2.0+ */
// import { Fragment, useState } from "react";

// import { Disclosure, Menu, Transition, Switch } from "@headlessui/react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  // BriefcaseIcon,
  // BellIcon,
  MenuIcon,
  XIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
// import Image from "next/image";

const defaultNavigation = [
  // { name: "Residential", href: "/residential", current: false },
  // { name: "Business", href: "/", current: false },
  // { name: "Blog", href: "#", current: false },
  { name: "Home", href: "/", current: false },
  //   { name: "About^", href: "/portfolio", current: false },
  //   { name: "Projects^", href: "/contact", current: false },
  //   { name: "Organization^", href: "/partners", current: false },
  //   { name: "Clients^", href: "/partners", current: false },

  //   { name: "More", href: "#whyus", current: false },
  // { name: "F.A.Q", href: "/", current: false },
];

const dropdownNavigation = [
  { name: " History", href: "/history", current: false },
  { name: " Top Management", href: "/top-management", current: false },
  {
    name: " Field of Specialization",
    href: "/field-of-specialization",
    current: false,
  },
  { name: " Project Management", href: "/project-management", current: false },
  { name: " Completed Projects", href: "/completed-projects", current: false },
  { name: " Ongoing Projects", href: "/ongoing-projects", current: false },
  { name: " Organization Chart", href: "/organization-chart", current: false },
  { name: " Workforce", href: "/workforce", current: false },
  { name: "Sister Concerns", href: "/sister-concerns", current: false },
  { name: "Client List", href: "/client-list", current: false },
  { name: "Certification", href: "/certification", current: false },
  { name: "Equipment", href: "/equipment", current: false },
  { name: "Media", href: "/media", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function MyLink(props) {
  let { href, children, ...rest } = props;
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <Disclosure
      as='nav'
      className='sticky z-50 top-0 shadow-md px-4 backdrop-blur-lg bg-white/90'
    >
      {({ open }) => (
        <>
          <div className='max-w-8xl mx-auto md:px-14'>
            <div className='relative flex items-center justify-between h-24'>
              <div className='absolute inset-y-0 right-0 flex items-center lg:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex md:items-stretch md:justify-start'>
                <div className='flex-shrink-0 flex items-center'>
                  <Link
                    href='/'
                    className='bg-logo-default bg-no-repeat w-72 sm:w-96 h-14 sm:h-14'
                  ></Link>
                </div>
              </div>
              <div className='hidden lg:block sm:ml-6 select-none '>
                <div className='flex space-x-4 xl:space-x-10 py-4'>
                  {defaultNavigation.map((item) => (
                    <MyLink
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "focus:text-tatsuBTN2 xs:bg-gray-900"
                          : "hover:text-blue-600 focus:text-blue-500",
                        "rounded-md text-gray-700 text-base font-bold"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </MyLink>
                  ))}
                  {/* About */}
                  <Menu as='div'>
                    <div>
                      <Menu.Button className='relative inline-flex justify-center items-center w-full text-md font-bold text-gray-700 hover:text-blue-600'>
                        About
                        <ChevronDownIcon
                          className='w-4 h-4'
                          aria-hidden='true'
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      <Menu.Items className='absolute w-56 mt-2 origin-top-right backdrop-blur-sm bg-white/90 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <div className='px-4 py-8 flex flex-col space-y-2 text-gray-700 text-base font-bold'>
                          {/* <Menu.Item>
                            <MyLink href='/onm' className='hover:text-blue-600'>
                              O&amp;M Support
                            </MyLink>
                          </Menu.Item>
                          <hr /> */}
                          <Menu.Item>
                            <MyLink
                              href='/history'
                              className='hover:text-blue-600'
                            >
                              History
                            </MyLink>
                          </Menu.Item>
                          <hr />
                          <Menu.Item>
                            <MyLink
                              href='/top-management'
                              className='hover:text-blue-600'
                            >
                              Top Management
                            </MyLink>
                          </Menu.Item>
                          <hr />
                          <Menu.Item>
                            <MyLink
                              href='/field-of-specialization'
                              className='hover:text-blue-600'
                            >
                              Field of Specialization
                            </MyLink>
                          </Menu.Item>
                          <hr />
                          <Menu.Item>
                            <MyLink
                              href='/project-management'
                              className='hover:text-blue-600'
                            >
                              Project Management
                            </MyLink>
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  {/* Projects */}
                  <Menu as='div'>
                    <div>
                      <Menu.Button className='relative inline-flex justify-center items-center w-full text-md font-bold text-gray-700 hover:text-blue-600'>
                        Projects
                        <ChevronDownIcon
                          className='w-4 h-4'
                          aria-hidden='true'
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      <Menu.Items className='absolute w-56 mt-2 origin-top-right backdrop-blur-sm bg-white/90 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <div className='px-4 py-8 flex flex-col space-y-2 text-gray-700 text-base font-bold'>
                          {/* <Menu.Item>
                            <MyLink href='/onm' className='hover:text-blue-600'>
                              O&amp;M Support
                            </MyLink>
                          </Menu.Item>
                          <hr /> */}
                          <Menu.Item>
                            <MyLink
                              href='/completed-projects'
                              className='hover:text-blue-600'
                            >
                              Completed Projects
                            </MyLink>
                          </Menu.Item>
                          <hr />
                          <Menu.Item>
                            <MyLink
                              href='/ongoing-projects'
                              className='hover:text-blue-600'
                            >
                              Ongoing Projects
                            </MyLink>
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  {/* Organization */}
                  <Menu as='div'>
                    <div>
                      <Menu.Button className='relative inline-flex justify-center items-center w-full text-md font-bold text-gray-700 hover:text-blue-600'>
                        Organization
                        <ChevronDownIcon
                          className='w-4 h-4'
                          aria-hidden='true'
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      <Menu.Items className='absolute w-56 mt-2 origin-top-right backdrop-blur-sm bg-white/90 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <div className='px-4 py-8 flex flex-col space-y-2 text-gray-700 text-base font-bold'>
                          {/* <Menu.Item>
                            <MyLink href='/onm' className='hover:text-blue-600'>
                              O&amp;M Support
                            </MyLink>
                          </Menu.Item>
                          <hr /> */}
                          <Menu.Item>
                            <MyLink
                              href='/organization-chart'
                              className='hover:text-blue-600'
                            >
                              Organization Chart
                            </MyLink>
                          </Menu.Item>
                          <hr />
                          <Menu.Item>
                            <MyLink
                              href='/workforce'
                              className='hover:text-blue-600'
                            >
                              Workforce
                            </MyLink>
                          </Menu.Item>
                          <hr />
                          <Menu.Item>
                            <MyLink
                              href='/sister-concerns'
                              className='hover:text-blue-600'
                            >
                              Sister Concerns
                            </MyLink>
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  {/* Clients */}
                  <Menu as='div'>
                    <div>
                      <Menu.Button className='relative inline-flex justify-center items-center w-full text-md font-bold text-gray-700 hover:text-blue-600'>
                        Clients
                        <ChevronDownIcon
                          className='w-4 h-4'
                          aria-hidden='true'
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      <Menu.Items className='absolute right-0 w-56 mt-2 origin-top-right backdrop-blur-sm bg-white/90 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <div className='px-4 py-8 flex flex-col space-y-2 text-gray-700 text-base font-bold'>
                          {/* <Menu.Item>
                            <MyLink href='/onm' className='hover:text-blue-600'>
                              O&amp;M Support
                            </MyLink>
                          </Menu.Item>
                          <hr /> */}
                          <Menu.Item>
                            <MyLink
                              href='/client-list'
                              className='hover:text-blue-600'
                            >
                              Client List
                            </MyLink>
                          </Menu.Item>
                          <hr />
                          <Menu.Item>
                            <MyLink
                              href='/certification'
                              className='hover:text-blue-600'
                            >
                              Certification
                            </MyLink>
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  {/* More */}
                  <Menu as='div'>
                    <div>
                      <Menu.Button className='relative inline-flex justify-center items-center w-full text-md font-bold text-gray-700 hover:text-blue-600'>
                        More
                        <ChevronDownIcon
                          className='w-4 h-4'
                          aria-hidden='true'
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      <Menu.Items className='absolute right-0 w-56 mt-2 origin-top-right backdrop-blur-sm bg-white/90 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <div className='px-4 py-8 flex flex-col space-y-2 text-gray-700 text-base font-bold'>
                          {/* <Menu.Item>
                            <MyLink href='/onm' className='hover:text-blue-600'>
                              O&amp;M Support
                            </MyLink>
                          </Menu.Item>
                          <hr /> */}
                          <Menu.Item>
                            <MyLink
                              href='/equipment'
                              className='hover:text-blue-600'
                            >
                              Equipment
                            </MyLink>
                          </Menu.Item>
                          <hr />
                          <Menu.Item>
                            <MyLink
                              href='/media'
                              className='hover:text-blue-600'
                            >
                              Media
                            </MyLink>
                          </Menu.Item>
                          <hr />
                          <Menu.Item>
                            <MyLink
                              href='/contact'
                              className='hover:text-blue-600'
                            >
                              Contact
                            </MyLink>
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='lg:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {defaultNavigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='div'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              {/* otheritems */}
              {dropdownNavigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
