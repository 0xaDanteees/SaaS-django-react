import FullWidthLayout from "HOCS/layouts/FullWidthLayout"
import { connect } from "react-redux"
import axios from "axios"
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import { useEffect, useState } from "react"
import { toast } from 'react-toastify'
import { Switch } from '@headlessui/react'
import { Link } from "react-router-dom"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Contacto(){

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    const [agreed, setAgreed] = useState(false)
    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
      name: '',
      company: '',
      email: '',
      phone: '',
      size: '',
      country: '',
      subject: '',
      message: '',
      budget: '',
      
    });

    const {
      name,
      company,
      email,
      phone,
      size,
      country,
      subject,
      message,
      budget, } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
      e.preventDefault();

      if(agreed){
        setLoading(true);

        const config = {
          headers: {
              'Content-Type': 'application/json'
          }
        };

        const formData = new FormData()
        formData.append('name', name)
        formData.append('company', company)
        formData.append('email', email)
        formData.append('phone', phone)
        formData.append('size', size)
        formData.append('country', country)
        formData.append('subject', subject)
        formData.append('message', message)
        formData.append('budget', budget)
        

        const fetchData = async () => {
          axios.post(`${process.env.REACT_APP_API_URL}/api/contacts/`, formData, config)
          .then(res => {
            
            setLoading(false);
            toast.success("Mensaje enviado correctamente, estaremos en contacto muy pronto")
            
          })
          .catch(err => {
            
            setLoading(false);
            toast.error("Error al enviar mensaje")
          }) 
        }

        fetchData()


      }else {
        toast.error("Debes aceptar los terminos y politica de privacidad")
      }
    }
  


    return(
        <FullWidthLayout>
            <div className="gradient__bg relative ">
              <div className="gradient__bg absolute inset-0">
                <div className="gradient__bg absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
              </div>
              <div className="gradient__bg relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
                <div className="gradient__bg py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                  <div className="max-w-lg mx-auto">
                    <h2 className="gradient__text text-2xl font-gilroy-black tracking-tight text-gray-900 sm:text-3xl">Siempre es un placer atenderte</h2>
                    <p className="heading__text mt-3 text-lg leading-6 text-gray-500">
                      Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
                      arcu.
                    </p>
                    <dl className="heading__text mt-8 text-base text-gray-500">
                      <div>
                        <dt className="sr-only">Postal address</dt>
                        <dd>
                          <p>742 Evergreen Terrace</p>
                          <p>Springfield, OR 12345</p>
                        </dd>
                      </div>
                      <div className="mt-6">
                        <dt className="sr-only">Phone number</dt>
                        <dd className="flex">
                          <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                          <span className="ml-3">+1 (555) 123-4567</span>
                        </dd>
                      </div>
                      <div className="mt-3">
                        <dt className="sr-only">Email</dt>
                        <dd className="flex">
                          <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                          <span className="ml-3">teos@example.com</span>
                        </dd>
                      </div>
                    </dl>
                    <p className="heading__text mt-6 text-base text-gray-500">
                      Looking for careers?{' '}
                      <a href="#" className="heading__subtext font-gilroy-medium text-gray-700 underline">
                        View all job openings
                      </a>
                      .
                    </p>
                  </div>
                </div>
                <div className=" py-16 px-4 sm:px-6 lg:col-span-3 lg:py-22 lg:px-10 xl:pl-6">
                  <div className="max-w-lg mx-auto lg:max-w-none">

                    <form onSubmit={e=>onSubmit(e)} className="grid grid-cols-1 gap-y-6">
                      <div>
                        <label className="sr-only">
                        Nombre Completo
                        </label>
                        <input
                          type="text"
                          value={name}
                          name='name'
                          onChange={e=>onChange(e)}
                          required
                          className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                          placeholder="Nombre Completo"
                        />
                      </div>
                  <div>
                    <label className="sr-only">
                      Empresa
                    </label>
                    <input
                      type="text"
                      value={company}
                      name='company'
                      onChange={e => onChange(e)}
                      required
                      className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      placeholder="Empresa"
                    />
                  </div>
                      <div>
                        <label htmlFor="email" className="sr-only">
                        Correo electronico
                        </label>
                        <input
                          name="email"
                          type="email"
                          autoComplete="email"
                          onChange={e => onChange(e)} 
                          value={email} 
                          required
                          className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                          placeholder="Correo electronico"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="sr-only">
                          Phone
                        </label>
                        <input
                          type="number"
                          name="phone"
                          id="phone"
                          onChange={e => onChange(e)} 
                          value={phone} 
                          autoComplete="tel"
                          required
                          className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                          placeholder="Phone"
                        />
                      </div>
                  <div>
                    <label className="heading__text block text-sm font-gilroy-medium text-gray-700">
                      Tamaño de la empresa
                    </label>
                    <select
                      name="size"
                      onChange={e => onChange(e)}
                      value={size}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      defaultValue="Canada"
                    >
                      <option value="" disabled selected>Tamaño de la empresa</option>
                      <option value="1-50 empleados">1-50 empleados</option>
                      <option value="50-250 empleados">50-250 empleados</option>
                      <option value="250-500 empleados">250-500 empleados</option>
                      <option value="500-1000 empleados">500-1000 empleados</option>
                      <option value="1000+ empleados">1000+ empleados</option>

                    </select>
                  </div>

                  <div>
                    <label className="heading__text block text-sm font-gilroy-medium text-gray-700">
                      País
                    </label>
                    <select
                      name="country"
                      onChange={e => onChange(e)}
                      value={country}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      defaultValue="Mexico"
                    > <option value="" disabled selected>País</option>
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Åland Islands">Åland Islands</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="American Samoa">American Samoa</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Anguilla">Anguilla</option>
                      <option value="Antarctica">Antarctica</option>
                      <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Aruba">Aruba</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Barbados">Barbados</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Belize">Belize</option>
                      <option value="Benin">Benin</option>
                      <option value="Bermuda">Bermuda</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                      <option value="Botswana">Botswana</option>
                      <option value="Bouvet Island">Bouvet Island</option>
                      <option value="Brazil">Brazil</option>
                      <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                      <option value="Brunei Darussalam">Brunei Darussalam</option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="Canada">Canada</option>
                      <option value="Cape Verde">Cape Verde</option>
                      <option value="Cayman Islands">Cayman Islands</option>
                      <option value="Central African Republic">Central African Republic</option>
                      <option value="Chad">Chad</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Christmas Island">Christmas Island</option>
                      <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Congo">Congo</option>
                      <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                      <option value="Cook Islands">Cook Islands</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Cote D'ivoire">Cote D'ivoire</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Dominica">Dominica</option>
                      <option value="Dominican Republic">Dominican Republic</option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Egypt">Egypt</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Equatorial Guinea">Equatorial Guinea</option>
                      <option value="Eritrea">Eritrea</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                      <option value="Faroe Islands">Faroe Islands</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="French Guiana">French Guiana</option>
                      <option value="French Polynesia">French Polynesia</option>
                      <option value="French Southern Territories">French Southern Territories</option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Gibraltar">Gibraltar</option>
                      <option value="Greece">Greece</option>
                      <option value="Greenland">Greenland</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guadeloupe">Guadeloupe</option>
                      <option value="Guam">Guam</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guernsey">Guernsey</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guinea-bissau">Guinea-bissau</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                      <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Isle of Man">Isle of Man</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jersey">Jersey</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kiribati">Kiribati</option>
                      <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                      <option value="Korea, Republic of">Korea, Republic of</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                      <option value="Latvia">Latvia</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Macao">Macao</option>
                      <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta">Malta</option>
                      <option value="Marshall Islands">Marshall Islands</option>
                      <option value="Martinique">Martinique</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Mayotte">Mayotte</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                      <option value="Moldova, Republic of">Moldova, Republic of</option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montenegro">Montenegro</option>
                      <option value="Montserrat">Montserrat</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Namibia">Namibia</option>
                      <option value="Nauru">Nauru</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Netherlands Antilles">Netherlands Antilles</option>
                      <option value="New Caledonia">New Caledonia</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Niue">Niue</option>
                      <option value="Norfolk Island">Norfolk Island</option>
                      <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                      <option value="Norway">Norway</option>
                      <option value="Oman">Oman</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Palau">Palau</option>
                      <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                      <option value="Panama">Panama</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Pitcairn">Pitcairn</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Puerto Rico">Puerto Rico</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Reunion">Reunion</option>
                      <option value="Romania">Romania</option>
                      <option value="Russian Federation">Russian Federation</option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="Saint Helena">Saint Helena</option>
                      <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                      <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                      <option value="Samoa">Samoa</option>
                      <option value="San Marino">San Marino</option>
                      <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Serbia">Serbia</option>
                      <option value="Seychelles">Seychelles</option>
                      <option value="Sierra Leone">Sierra Leone</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Slovakia">Slovakia</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Somalia">Somalia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                      <option value="Swaziland">Swaziland</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                      <option value="Taiwan">Taiwan</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Timor-leste">Timor-leste</option>
                      <option value="Togo">Togo</option>
                      <option value="Tokelau">Tokelau</option>
                      <option value="Tonga">Tonga</option>
                      <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                      <option value="Tuvalu">Tuvalu</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                      <option value="Uruguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Vanuatu">Vanuatu</option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="Viet Nam">Viet Nam</option>
                      <option value="Virgin Islands, British">Virgin Islands, British</option>
                      <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                      <option value="Wallis and Futuna">Wallis and Futuna</option>
                      <option value="Western Sahara">Western Sahara</option>
                      <option value="Yemen">Yemen</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                    </select>
                  </div>

                      <div>
                        <label className="sr-only">
                          Titulo del Mensaje
                        </label>
                        <input
                          type="text"
                          value={subject}
                          name='subject'
                          onChange={e=>onChange(e)}
                          required
                          className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                          placeholder="Titulo del Mensaje"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="sr-only">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={message}
                          onChange={e=>onChange(e)}
                          rows={4}
                          className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                          placeholder="Message"
                          required
                          defaultValue={''}
                        />
                      </div>

                        <div>
                            <label className="block text-sm font-gilroy-medium text-gray-700">
                                Presupuesto (opcional)
                            </label>
                            <select
                                name="budget"
                                onChange={e=>onChange(e)}
                                value={budget}
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                defaultValue="Canada"
                            >
                                <option value="" disabled selected>Presupuesto?</option>
                                <option value="0-5,000">$0 - $5,00</option>
                                <option value="5,000-10,000">$5,000 - $10,000</option>
                                <option value="10,000+">$10,000+</option>
                            </select>
                        </div>
                  

                      
                 

                        <Switch 
                          checked={agreed}
                          onChange={setAgreed}
                          className={classNames(
                            agreed ? 'bg-secondary' : 'bg-gray-200',
                            'relative inline-flex flex-shrink-0 h-6 w-11 border-2 dark:text-dark-txt border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                            )}
                        >
                          <span className="sr-only">Acepta las politicas</span>
                          <span
                            aria-hidden="true"
                            className={classNames(
                                agreed ? 'translate-x-5' : 'translate-x-0',
                                'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                            )}
                            />

                        </Switch>
                        <div className="ml-3">
                        <p className="text-base text-gray-500">
                            Al seleccionar esto, aceptas las{' '}
                            
                            <Link to="/privacidad" className="font-medium  underline">
                            <span className="heading__subtext text-blue-700 cursor-pointer">Politicas de Privacidad</span>
                            </Link>{' '}
                            y{' '}
                            
                            <Link to="/terminos" className="font-medium text-blue-700 underline">
                            <span className="heading__subtext text-blue-700 cursor-pointer">Terminos de Uso</span>
                            </Link>
                            .
                        </p>
                        </div>

                      <div>
                        {
                          loading ?
                        <button
                          className="float-right inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-gilroy-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          loading
                        </button>
                        :
                        <button
                          type="submit"
                          className="teos__button float-right inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-gilroy-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Enviar
                        </button>
                        }
                      </div>
                    </form>

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

})(Contacto)