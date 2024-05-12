/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/OOosB5vqxEY
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"
import { JSX, SVGProps } from "react"

export function Mainhero() {
  return (
    <div key="1" className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <BookIcon className="h-6 w-6" />
          <span className="sr-only">Study Mate</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/syllabus">
            Syllabi
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/materials">
            Study Materials
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_500px] lg:gap-16 xl:grid-cols-[1fr_600px] h-62">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Cyber Notes
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    A platform to access study materials and syllabi for students of b tech computer science engineering (syber security) in KTU university.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/materials"
                  >
                    Explore Materials
                  </Link>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Telegram Channel
                  </Link>
                  </div>
              </div>
              
              
              <script type="module" src="https://unpkg.com/@splinetool/viewer@1.3.1/build/spline-viewer.js"></script>
<spline-viewer url="https://prod.spline.design/UhcwGnoyfV3lHKgr/scene.splinecode"
></spline-viewer>
               
              
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Study Materials</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore our curated collection of study materials to enhance your learning experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <BookIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                  <h3 className="mt-4 text-xl font-bold">Syllabus S1 to S8</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Comprehensive syllabus for subject 1.</p>
                  <Link
                    className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/syllabus"
                  >
                    View
                  </Link>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <BookIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                  <h3 className="mt-4 text-xl font-bold">Study Materials</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Explore our study materials.</p>
                  <Link
                    className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/materials"
                  >
                    View
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <BookIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                  <h3 className="mt-4 text-xl font-bold">Lab Materials</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Explore our lab materials.</p>
                  <Link
                    className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    View
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <BookIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                  <h3 className="mt-4 text-xl font-bold">Previous Year Question Papers</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Explore previous year question papers.
                  </p>
                  <Link
                    className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/qp"
                  >
                    View
                  </Link>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-4 px-4 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Unlock Your Academic Potential</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our platform provides you with the tools and resources to help you excel in your academic journey.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Explore Materials
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-800">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Study Mate</h3>
            <Link href="#">About Us</Link>
            <Link href="#">Our Mission</Link>
            <Link href="#">Contact</Link>
          </div>
          
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookie Policy</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Connect</h3>
            <Link href="#">Twitter</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">Instagram</Link>
            <Link href="#">LinkedIn</Link>
          </div>
        </div>
        
      </footer>
    </div>
  )
}

function BookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
