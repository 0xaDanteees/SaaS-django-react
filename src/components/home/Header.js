import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from 'react-toastify'
import './index.css'

function Header(){

  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
      name: '',
      email: '',
    });
    const { name,
      email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
      e.preventDefault();

      const config = {
        headers: {
            'Content-Type': 'application/json'
        }
      }

      const formData = new FormData()
      formData.append('name', name)
      formData.append('email', email)

      const fetchData = async () => {
        axios.post(`${process.env.REACT_APP_API_URL}/api/contacts/demo`, formData, config)
        .then(res => {
          
          setTimeout(navigate('/demo'),1000)
        })
        .catch(err => {
          
          setLoading(false);
          toast.error("Error al enviar mensaje")
        }) 
      }

      fetchData()
      
    }
    return(
        <main className="gradient__bg">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="teos__header-content sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="gradient__text xl font-gilroy-black dark:text-white">Impulsando el crecimiento de su empresa con el poder de los datos</h1>
              <p className="text-base font-gilroy-medium text-gray-500 mt-2 sm:mt-4 sm:text-xl lg:text-lg xl:text-xl">
              Convertimos información en conocimiento accionable. Trabajamos en estrecha colaboración con nuestros clientes para ofrecer soluciones personalizadas que impulsen el éxito empresarial.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <p className="header__privacy-text text-base font-gilroy-medium text-gray-900 dark:text-dark-txt">Solicita un demo. ¡Empieza hoy!</p>
                <form onSubmit={e=>onSubmit(e)} className="mt-3 sm:flex">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={e=>onChange(e)}
                    required
                    className="header__input mx-0.5 block w-full py-3 text-base rounded-md dark:bg-dark-main dark:border-dark-second dark:text-dark-txt placeholder-gray-500 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:flex-1 border-gray-300"
                    placeholder="Correo Electrónico"
                  />
                  <label htmlFor="email" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={e=>onChange(e)}
                    required
                    className="header__input mx-0.5 block w-full py-3 text-base rounded-md dark:bg-dark-main dark:border-dark-second dark:text-dark-txt placeholder-gray-500 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:flex-1 border-gray-300"
                    placeholder="Nombre"
                  />
                  <button
                    type="submit"
                    className="header__button mt-3 w-full px-6 py-3 border border-transparent text-base font-gilroy-medium rounded-full text-white bg-blue-800 shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                  >
                    Comience Ahora
                  </button>
                </form>
                <p className="mt-3 text-sm text-gray-500">
                  Nos preocupamos por tu privacidad. Lee nuestra
                  <Link to="/privacidad" className="header__privacy-text font-gilroy-medium text-gray-900 underline dark:text-dark-txt ml-1">
                    Politica de Privacidad
                  </Link>
                  .
                </p>
              </div>
            </div>
          <div className="header__img mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="header__img-container relative mx-auto w-full rounded-lg lg:max-w-md">
              <img
                className="w-full"
                src="https://res.cloudinary.com/dejepmxba/image/upload/v1682237932/teos/wangsina_333_03_2022_2_hvrmx5.png"
                alt=""
              />
            </div>
          </div>
          </div>
        </main>
    )
}

export default Header