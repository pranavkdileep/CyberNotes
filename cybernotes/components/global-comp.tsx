/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/inXL0JGjRJn
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"

export function GlobalComp(Datas : any) {
  return (
    <>
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <Link className="mr-6" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">PKD Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-8 px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow dark:border-gray-800">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Semester 1</h3>
                <p className="text-gray-500 dark:text-gray-400">This is a brief description of Semester 1.</p>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  View
                </Link>
              </div>
            </div> */}
            {
              Datas.Datas.map((data: any, index: number) => {
                return (
                  <div key={index} className="rounded-lg border border-gray-200 p-6 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow dark:border-gray-800">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">{data.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400">{data.description}</p>
                      <Link
                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        href={data.url}
                      >
                        View
                      </Link>
                    </div>
                  </div>
                )
              })
            }
            
            
            {/* <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow dark:border-gray-800">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Semester 2</h3>
                <p className="text-gray-500 dark:text-gray-400">This is a brief description of Semester 2.</p>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  View
                </Link>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow dark:border-gray-800">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Semester 3</h3>
                <p className="text-gray-500 dark:text-gray-400">This is a brief description of Semester 3.</p>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  View
                </Link>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow dark:border-gray-800">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Semester 4</h3>
                <p className="text-gray-500 dark:text-gray-400">This is a brief description of Semester 4.</p>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  View
                </Link>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow dark:border-gray-800">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Semester 5</h3>
                <p className="text-gray-500 dark:text-gray-400">This is a brief description of Semester 5.</p>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  View
                </Link>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow dark:border-gray-800">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Semester 6</h3>
                <p className="text-gray-500 dark:text-gray-400">This is a brief description of Semester 6.</p>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  View
                </Link>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow dark:border-gray-800">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Semester 7</h3>
                <p className="text-gray-500 dark:text-gray-400">This is a brief description of Semester 7.</p>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  View
                </Link>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow dark:border-gray-800">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Semester 8</h3>
                <p className="text-gray-500 dark:text-gray-400">This is a brief description of Semester 8.</p>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  View
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 PKD Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </>
  )
}

function MountainIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}
