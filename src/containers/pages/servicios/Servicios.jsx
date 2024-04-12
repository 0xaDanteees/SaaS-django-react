import FullWidthLayout from "HOCS/layouts/FullWidthLayout"
import { connect } from "react-redux"
import { CheckCircleIcon } from '@heroicons/react/solid'

const includedFeatures = [
  'Depuración de datos',
  'Minería de datos',
  'Visualización de datos',
  'Análisis de datos',
]

function Servicios(){
    return(
        <FullWidthLayout>
            <div className="pt-12 sm:pt-16 lg:pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="gradient__text text-3xl font-gilroy-black text-gray-900 sm:text-4xl lg:text-5xl">Nuestros Servicios</h2>
                    <p className="heading__text mt-4 text-xl text-gray-600 font-gilroy-medium">
                   Conoce Nuestros servicios
                    </p>
                </div>
                </div>

                <div className="mt-8 pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
                    <div className="relative">
                    <div className="absolute inset-0 h-1/2" />
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                        <div className="gradient__bg-2 flex-1 bg-white px-6 py-8 lg:p-12">
                            <h3 className="gradient__text text-2xl font-extrabold text-gray-900 sm:text-3xl">???</h3>
                            <p className="heading__text mt-6 text-base text-gray-500">
                            Teos Analytics se especializa en las siguientes soluciones, contactanos para saber más.
                            </p>
                            <div className="mt-8">
                            <div className="flex items-center">
                                <h4 className="teos__button flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
                                 Soluciones
                                </h4>
                                <div className="section-rule flex-1 border-t-2 border-gray-200" />
                            </div>
                            <ul role="list" className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                                {includedFeatures.map((feature) => (
                                <li key={feature} className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                    <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                                    </div>
                                    <p className="ml-3 text-sm text-white">{feature}</p>
                                </li>
                                ))}
                            </ul>
                            </div>
                        </div>
                        <div className="py-8 px-6 text-center bg-dark lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                            <p className="heading__subtext text-lg leading-6 font-medium text-gray-900">soluciones acorde a tus necesidades y presupuesto </p>
                            <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                            <span className="heading__subtext">Cotiza ya!</span>
                            <span className="heading__subtext-2 ml-3 text-xl font-medium text-gray-500">*</span>
                            </div>
                            <p className="mt-4 text-sm">
                            <a href="/terminos" className="heading__text font-medium text-gray-500 underline">
                                *Costo sujeto a políticas, conócelas aquí.
                            </a>
                            </p>
                            <div className="mt-6">
                            <div className="rounded-md shadow">
                                <a
                                href="/contacto"
                                className="teos__button flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                                >
                                Obtén un demo
                                </a>
                            </div>
                            </div>
                            <div className="mt-4 text-sm">
                            <a href="/blog" className="font-medium text-gray-900">
                                Conoce nuestros casos de estudio <span className="font-normal text-gray-500"></span>
                            </a>
                            </div>
                        </div>
                        </div>
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

})(Servicios)