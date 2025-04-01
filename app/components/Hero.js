import React from 'react'
// const links = [
//   { name: 'Open roles', href: '#' },
//   { name: 'Internship program', href: '#' },
//   { name: 'Our values', href: '#' },
//   { name: 'Meet our leadership', href: '#' },
// ]
const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Skilled Professionals', value: '300+' },
  { name: 'Countries Export', value: '40+' },
  { name: 'Metric Tons Per Month Capacity', value: '45,000+' },
]
export default function Hero() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-14 sm:py-22 flex items-center justify-between text-center">
        {/* <img
        alt="/"
        src="assets/img1.jpg"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      /> */}



        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center flex-col">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Buy Fasteners Cheap</h2>
            {/* <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat.
            </p> */}
            <span className='mt-16 sm:pt-14 font-medium text-gray-300 flex justify-center'>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
              </svg>

            </span>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            {/* <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div> */}
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-28 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse gap-1">
                  <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                  <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}
