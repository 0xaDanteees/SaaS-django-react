import FullWidthLayout from "HOCS/layouts/FullWidthLayout"
import { connect } from "react-redux"
import { Fragment, useEffect } from 'react'
import { Tab } from '@headlessui/react'
import { Link } from "react-router-dom"

const tabs = [
  {
    name: '[redacted]',
    features: [
      {
        name: '[redacted]',
        description:
          '[redacted] es una empresa dedicada a la venta de [redacted]. Gracias a nuestos servicios [redacted] ha logrado conectar con 30+ clientes nuevos.',
            imageSrc: 'https://www.thesprucepets.com/thmb/gbdfoyMRJcDrFgDiizqUYFLbro4=/2198x0/filters:no_upscale():strip_icc()/reasons-to-socialize-kittens-553890-hero-c8a1a9bcf2cf47cf921d64d2cb840202.jpg',
        imageAlt: '',
            url: 'https://www.youtube.com/watch?v=Jz3_xAVxy5g&t=34s',
        tech_stack: [
            {
                name:  'Data mining',
                imageSrc: '',
            },
            {
                name:  'Data cleaning',
                imageSrc: '',
            },
            {
                name:  'Dataset with top 300 potential clients from all Mexico',
                imageSrc: '',
            },
        ]
      },
    ],
  },
  {
    name: '[redacted] Agencia de Seguros',
    features: [
      {
        name: '[redacted] Agencia de seguros',
        description:
          '[redacted] es una Agencia de seguros enfocada a la venta de seguros de vida. Gracias a nuestos servicios, VidE Seguros ha triplicado sus ventas',
            imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5GtivDlPKeVXGemciXF34Cq-ekuzuRDCdsvrcoUbk0Q&s',
        imageAlt:
          '',
        url: 'https://x.com/FiscalFanatic/status/1767477371332960680?s=20',
        tech_stack: [
            {
                name:  'Data mining',
                imageSrc: '',
            },
            {
                name:  'Data cleaning',
                imageSrc: '',
            },
            {
                name:  'Data Analysis',
                imageSrc: '',
            },
        ]
      },
    ],
  },
  {
    name: 'YOU!',
    features: [
      {
        name: 'Tú puedes ser nuestro siguiente caso de exito, no esperes más y contacta con nosotros!',
        description:
            'No ESPERES MAS',
            imageSrc: 'https://www.missionridgevet.com/wp-content/uploads/sites/230/2022/03/kitten.jpg',
        imageAlt: '',
        url: 'https://twitter.com/Refundnow_',
        
      },
    ],
  },
]



const people = [
    {
        name: 'aD',
        role: 'Co-Founder / COO',
        imageUrl:
            'https://64.media.tumblr.com/744331669f9d077b08247b4b21c74904/30d981e499c0bd60-02/s1280x1920/cb4609158ebbcdbafbe9c4795781b9fa089d3c6e.jpg',
        bio: 'bio',
        twitterUrl: 'https://twitter.com/Refundnow_',
        githubUrl: 'https://github.com/0xaDanteees',
    },
  ]


function classNames(...classes) {
return classes.filter(Boolean).join(' ')
}

function Nosotros(){

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return(
        <FullWidthLayout>
            <div className="mx-auto pt-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:pt-24">
                <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                <div className="space-y-5 sm:space-y-4">
                    <h2 className="gradient__text text-3xl font-gilroy-black tracking-tight sm:text-4xl dark:text-white">Sobre Nosotros</h2>
                    <p className="heading__text text-xl text-gray-500">
                    Teos Labs (Beta) attempts to bring efficient insight for small business.
                    We know more data is just more lottery tickets, it all lays in the quality and Teos aims for it. 
                    </p>
                </div>
                <div className="gradient__bg lg:col-span-2">
                    <ul
                    role="list"
                    className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
                    >
                    {people.map((person) => (
                        <li key={person.name} className="sm:py-8">
                        <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                            <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                            <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
                            </div>
                            <div className="sm:col-span-2">
                            <div className="space-y-4">
                                <div className="text-lg leading-6 font-gilroy-medium space-y-1">
                                <h3 className="heading__subtext dark:text-dark-txt">{person.name}</h3>
                                <p className="gradient__text text-blue-600">{person.role}</p>
                                </div>
                                <div className="text-lg">
                                <p className="heading__text text-gray-500">{person.bio}</p>
                                </div>
                                <ul role="list" className="flex space-x-5">
                                <li>
                                    <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">Twitter</span>
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href={person.githubUrl} className="text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">Github</span>
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                                    </svg>
                                    </a>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </li>
                    ))}
                    </ul>
                </div>
                </div>
            </div>

            <section aria-labelledby="features-heading" className="max-w-7xl mx-auto py-16 sm:px-2 lg:px-8">
                <div className="max-w-2xl mx-auto px-4 lg:px-0 lg:max-w-none">
                <div className="max-w-3xl">
                    <h2 id="features-heading" className="gradient__text text-3xl font-gilroy-black tracking-tight text-gray-900 sm:text-4xl">
                    Portafolio
                    </h2>
                    <p className="heading__text mt-4 text-gray-500 font-gilroy-medium">
                    Nuestro portafolio de clientes
                    </p>
                </div>

                <Tab.Group as="div" className="">
                    <div className="-mx-4 flex overflow-x-auto sm:mx-0">
                    <div className="flex-auto px-4 border-b border-gray-200 sm:px-0">
                        <Tab.List className="-mb-px flex space-x-10">
                        {tabs.map((tab) => (
                            <Tab
                            key={tab.name}
                            className={({ selected }) =>
                                classNames(
                                selected
                                    ? 'heading__subtext heading__subtext-border border-blue-500 text-blue-600'
                                    : 'border-transparent text-white hover:text-gray-700 hover:border-gray-300',
                                'whitespace-nowrap py-6 border-b-2 font-gilroy-medium text-sm'
                                )
                            }
                            >
                            {tab.name}
                            </Tab>
                        ))}
                        </Tab.List>
                    </div>
                    </div>

                    <Tab.Panels as={Fragment}>
                    {tabs.map((tab) => (
                        <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                        {tab.features.map((feature) => (
                            <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                            <div className="mt-6 lg:mt-0 lg:col-span-5">
                                <h3 className="heading__subtext text-lg font-gilroy-medium text-gray-900">{feature.name}</h3>
                                <p className="heading__text mt-2 text-sm text-gray-500">{feature.description}</p>
                                <a
                                    href={feature.url} target="_blank"
                                    className="teos__button heading__text-dark mt-4 inline-flex justify-center items-center px-5 py-2 dark:text-dark-txt border-gray-300 hover:border-gray-700 border text-base font-gilroy-medium rounded-full shadow-sm text-black  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
                                >
                                    Ver Sitio
                                </a>
                                <ul role="list" className="heading__text mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
                                    <span className="heading__subtext text-gray-700 font-gilroy-semibold">Tech Stack</span>
                                    {feature && feature.tech_stack && feature.tech_stack.map(stack=>(
                                        <><li>• {stack.name}</li></>
                                    ))}
                                </ul>
                            </div>
                            <div className="lg:col-span-7">
                                <div className="aspect-w-2 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden sm:aspect-w-5 sm:aspect-h-2">
                                <img src={feature.imageSrc} alt={feature.imageAlt} className="object-center object-cover" />
                                </div>
                            </div>
                            </div>
                        ))}
                        </Tab.Panel>
                    ))}
                    </Tab.Panels>
                </Tab.Group>
                </div>
            </section>

            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div>
                    <h2 className="gradient__text text-3xl font-gilroy-black text-gray-900 sm:text-4xl">
                    Soluciones de datos
                    </h2>
                    <p className="heading__text mt-3 max-w-3xl text-lg text-gray-500 font-gilroy-regular">
                    Ofrecemos soluciones de datos adaptadas a tu presupuesto, con la garantía de brindar el mejor servicio en la industria a nivel latinoamerica
                    </p>
                    <div className="mt-8 sm:flex">
                    <div className="">
                        <Link
                        to="/servicios"
                        className="teos__button flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700"
                        >
                        Servicios
                        </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                        <Link
                        to="/contacto"
                        className="teos__button-ghost flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-blue-700 bg-blue-100 hover:bg-blue-200"
                        >
                        Contáctanos
                        </Link>
                    </div>
                    </div>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                    <img
                        className="max-h-12"
                        src="https://www.vectorlogo.zone/logos/djangoproject/djangoproject-ar21.svg"
                        alt="Django"
                    />
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                    <img className="max-h-12" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" alt="React" />
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                    <img className="max-h-12" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.svg" alt="Taildwind" />
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                    <img
                        className="max-h-12"
                        src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-ar21.svg"
                        alt="TensorFlow"
                    />
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                    <img
                        className="max-h-12"
                        src="https://www.vectorlogo.zone/logos/python/python-ar21.svg"
                        alt="Python"
                    />
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                    <img
                        className="max-h-12"
                        src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.svg"
                        alt="Typescript"
                    />
                    </div>
                </div>
                </div>
            </div>
        </FullWidthLayout>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps,{

})(Nosotros)