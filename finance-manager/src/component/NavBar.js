import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function Navbar() {
    return (
        <div className="bg-blue-600 p-4 text-white">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-xl font-bold">Finance Manager</h1>
                <Menu as="div" className="relative">
                    <Menu.Button className="bg-blue-700 px-4 py-2 rounded-md">
                        Menu
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white text-black rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="/dashboard"
                                        className={`${
                                            active ? "bg-gray-100" : ""
                                        } block px-4 py-2`}
                                    >
                                        Dashboard
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="/settings"
                                        className={`${
                                            active ? "bg-gray-100" : ""
                                        } block px-4 py-2`}
                                    >
                                        Settings
                                    </a>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    );
}

export default Navbar;
