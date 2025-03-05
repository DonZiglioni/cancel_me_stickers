import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Dropdown({ variants, selectedVariant, setSelectedSize, visible }) {
    return (
        <Menu as="div" className={`relative inline-block text-left font-bold group ${visible ? "-z-10" : "z-0"}`}>
            <div>
                <MenuButton className="inline-flex min-w-45 justify-center gap-x-3 rounded-md bg-white px-6 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset group-hover:text-black group-hover:bg-slate-300">
                    SIZE: {variants[selectedVariant].size}
                    <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-700 group-hover:text-black" />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-slate-800 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
                <div className="py-1">
                    <MenuItem>
                        <a
                            onClick={() => setSelectedSize(0)}
                            className="block px-4 py-2 text-sm text-gray-100 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                        >
                            {variants[0].size}
                        </a>
                    </MenuItem>
                </div>
                <div className="py-1">
                    <MenuItem>
                        <a
                            onClick={() => setSelectedSize(1)}
                            className="block px-4 py-2 text-sm text-gray-100 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                        >
                            {variants[1].size}
                        </a>
                    </MenuItem>
                </div>
                <div className="py-1">
                    <MenuItem>
                        <a
                            onClick={() => setSelectedSize(2)}
                            className="block px-4 py-2 text-sm text-gray-100 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                        >
                            {variants[2].size}
                        </a>
                    </MenuItem>
                </div>
                <div className="py-1">
                    <MenuItem>
                        <a
                            onClick={() => setSelectedSize(3)}
                            className="block px-4 py-2 text-sm text-gray-100 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                        >
                            {variants[3].size}
                        </a>
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
    )
}
