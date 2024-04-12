/* This example requires Tailwind CSS v2.0+ */
export default function CTA() {
    return (
      <div className="">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-gilroy-black tracking-tight text-gray-900 sm:text-4xl">
            <span className="gradient__text block dark:text-white">Impulsa tu empresa con el poder de los datos</span>
            <span className="heading-highlight grblock text-blue-600">Empieza Hoy Mismo.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex">
              <a
                href="#"
                className="header__button inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-gilroy-medium rounded-full text-white bg-blue-600 hover:bg-blue-700"
              >
                Contactar
              </a>
            </div>
            <div className="ml-3 inline-flex">
            </div>
          </div>
        </div>
      </div>
    )
  }
  