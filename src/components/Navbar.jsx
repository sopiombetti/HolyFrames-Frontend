
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import { Link, useNavigate } from 'react-router-dom'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigate = useNavigate()


  return (
    <header className=" bg-white items-center sticky top-0 z-40 lg:h-16 shadow-2xl border-t-2 border-gray">
      <nav className="flex items-center justify-between py-2.5 px-4 lg:px-20 md:px-8 h-full" aria-label="Global">
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-cyan-900" aria-hidden="true" />
          </button>
        </div>
        
          <div className="hidden lg:items-center lg:flex lg:grow lg:justify-end lg:gap-x-20 text-white lg:mr-16">
            <Link to={"/"} className="text-base text-cyan-900 font-semibold leading-6 no-underline hover:font-bold">
              Inicio
            </Link>
            <Link to={"/recomendations"} className="no-underline text-base text-cyan-900 font-semibold leading-6 hover:font-bold">
              Recomendaciones
            </Link>
            <Link to={"/admin"} className="no-underline text-base text-cyan-900 font-semibold leading-6 hover:font-bold">
              Admin
            </Link>
            
          </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white text-cyan-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end">

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              
                <div className="py-6">
                  <Link
                    to={"/"}
                    className="no-underline text-cyan-900 -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Inicio
                  </Link>
                  <Link
                    to={"/recomendations"}
                    className="no-underline text-cyan-900 -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Recomendaciones
                  </Link>
                  <Link
                    to={"/admin"}
                    className="no-underline text-cyan-900 -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Admin
                  </Link>
                </div>
                
                
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>

    </header>
  )
}