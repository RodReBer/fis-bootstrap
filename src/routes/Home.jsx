import {
    ChevronRightIcon,
    Cog6ToothIcon,
} from '@heroicons/react/20/solid'
import { FaTabletAlt } from "react-icons/fa";
import { BsGrid1X2Fill } from "react-icons/bs";
import { PiPackageLight } from "react-icons/pi";
import { IoMdDocument } from "react-icons/io";
import { TfiWorld } from "react-icons/tfi";
import { SiStyledcomponents } from "react-icons/si";
import { MdContactSupport } from "react-icons/md";
import Footer from '../components/Footer'
import Container from '../components/Container'
import images from '../assets/index.js';


import React, { useEffect } from 'react';

import 'prismjs/themes/prism.css';
import Prism from 'prismjs';



const primaryFeatures = [
    {
        name: 'Incluir a través de CDN',
        description: (
            <>
                Cuando solo necesite incluir CSS o JS compilado de Bootstrap, puede usar
                <a className='font-semibold leading-6 text-indigo-400' href="https://www.jsdelivr.com/" target="_blank" rel="noopener noreferrer"> jsDelivr</a>.
                Véalo en acción con nuestro sencillo
                <a className='font-semibold leading-6 text-indigo-400' href="https://getbootstrap.com/docs/5.3/getting-started/introduction/#quick-start" target="_blank" rel="noopener noreferrer"> inicio rápido</a>, o
                <a className='font-semibold leading-6 text-indigo-400' href="https://getbootstrap.com/docs/5.3/examples/" target="_blank" rel="noopener noreferrer"> explore los ejemplos</a>
                para poner en marcha su próximo proyecto. También puede optar por incluir a
                Popper y nuestro JS
                <a className='font-semibold leading-6 text-indigo-400' href="https://getbootstrap.com/docs/5.3/getting-started/introduction/#separate" target="_blank" rel="noopener noreferrer"> por separado.</a>
            </>
        ),
        icon: TfiWorld,
    },
    {
        name: 'Instalar a través del administrador de paquetes',
        description: (
            <>
                Instale los archivos fuente de Sass y JavaScript de Bootstrap a través de npm, RubyGems, Composer o Meteor. Las instalaciones administradas por paquetes no incluyen documentación ni nuestros scripts de compilación completos. También puede
                <a className='font-semibold leading-6 text-indigo-400' href="https://github.com/twbs/examples/" target="_blank" rel="noopener noreferrer"> usar cualquier demostración de nuestro repositorio de ejemplos</a> para iniciar rápidamente los proyectos de Bootstrap.
            </>
        ),
        icon: PiPackageLight,  // Solo referencia al componente
    },
];

const secondaryFeatures = [
    {
        name: 'Responsividad',
        description: 'Mobile-first: Bootstrap utiliza un enfoque "mobile-first", es decir, los estilos por defecto están diseñados para móviles y luego se ajustan para pantallas más grandes.',
        icon: FaTabletAlt,
    },
    {
        name: 'Componentes predefinidos',
        description: 'Bootstrap incluye varios componentes predefinidos, como botones, formularios, alertas, etc.',
        icon: SiStyledcomponents,
    },
    {
        name: 'Sistema de Grid',
        description: ' Bootstrap incluye un sistema de grid basado en flexbox que permite crear diseños complejos y flexibles con facilidad.',
        icon: BsGrid1X2Fill,
    },

    {
        name: 'Personalización',
        description: 'Bootstrap es altamente personalizable y permite anular fácilmente los estilos predeterminados.',
        icon: Cog6ToothIcon,
    },
    {
        name: 'Documentación',
        description: ' Bootstrap tiene una documentación completa y detallada que explica cómo usar cada uno de sus componentes y estilos.',
        icon: IoMdDocument,
    },
    {
        name: 'Soporte',
        description: ' Bootstrap tiene una gran comunidad de desarrolladores que pueden ayudarte con cualquier problema o pregunta que puedas tener.',
        icon: MdContactSupport,
    },
]

const item = {
    icon: (props) => (
        <svg fill="#ffff" width="40px" height="40px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>kahoot</title>
            <path d="M24.75 26.274l-1.239 2.918 2.652 1.829 2.613-1.546-1.11-3.199zM1.851 3.919v23.879l5.050 0.175-0.044-8.36 3.113-3.004 3.287 11.363h4.462l-4.114-14.823 6.204-6.814-4.376-1.676-8.534 8.141v-10.165zM26.71 24.599l3.438-21.92-8.924-1.698z"></path>
        </svg>
    ),
};

const Home = () => {

    const codeCarousel = `
    <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="..." class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
        `;
    const codeSpinners = `
    <--! Primary -->
    <div class="spinner-border text-primary " role="status">
        <span class="visually-hidden">Loading...</span>
    </div>

    <--! Secondary -->
    <div class="spinner-grow text-secondary" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>

    <--! Boton Cargando -->
    <button class="btn btn-primary" type="button" disabled>
    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span role="status">Loading...</span>
    </button>

    <--! Succsess -->
    <div class="spinner-border text-success" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>

    <--! Danger -->
    <div class="spinner-grow text-danger" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>

    <--! Warning -->
    <div class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>

    <--! Info -->
    <div class="spinner-border text-info" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>

    <--! Light -->
    <div class="spinner-border text-light" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>

    <--! Dark -->
    <div class="spinner-border text-dark" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
                            `;
    const codeAcordion = `
    <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Accordion Item #1
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                <div class="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Accordion Item #2
                </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Accordion Item #3
                </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
        </div>
    </div>
    `;
    const codeTables = `
    <div className="flex gap-2 items-center content-center overflow-scroll">
        <table class="table ">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Dominio</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Rodrigo</td>
                    <td>Rey</td>
                    <td>@rre</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Roman</td>
                    <td>Ferrero</td>
                    <td>@rfe</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">selecciono</td>
                    <td>@la_columna_que_quiero</td>
                </tr>
            </tbody>
        </table>
    </div>
                           `;
    const codeGetStarted = `
        <!doctype html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <--! IMPORTANTISIMO -->
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Bootstrap demo</title>
            <--! Bootstrap CSS -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        </head>
        <body>
            <h1>Hello, world!</h1>
            <--! Bootstrap JS -->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        </body>
        </html>
`;
    const codeNpm = `
    npm install bootstrap@5.3.3
    o
    gem install bootstrap -v 5.3.3
    `;
    const codeTipografia = `
    <h1><span className='text-indigo-400 font-bold'>h1.</span> Bootstrap heading <small>Secondary Text</small></h1>
    <h2><span className='text-indigo-400 font-bold'>h2.</span>  Bootstrap heading <small>Secondary Text</small></h2>
    <h3><span className='text-indigo-400 font-bold'>h3.</span>  Bootstrap heading <small>Secondary Text</small></h3>
    <h4><span className='text-indigo-400 font-bold'>h4.</span>  Bootstrap heading <small>Secondary Text</small></h4>
    <h5><span className='text-indigo-400 font-bold'>h5.</span>  Bootstrap heading <small>Secondary Text</small></h5>
    <h6><span className='text-indigo-400 font-bold'>h6.</span>  Bootstrap heading <small>Secondary Text</small></h6>
    `;
    const codeButtons = `
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>

    <button type="button" class="btn btn-link">Link</button>
    `;
    useEffect(() => {
        const codeElements = document.querySelectorAll('.highlightedCode');
        codeElements.forEach((codeElement) => {
            Prism.highlightElement(codeElement);
        });
    }, []);

    return (
        <div className="bg-gray-800">
            <main>
                {/* Hero section */}
                <div className="relative isolate overflow-hidden">
                    <svg
                        aria-hidden="true"
                        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    >
                        <defs>
                            <pattern
                                x="50%"
                                y={-1}
                                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                                width={200}
                                height={200}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M.5 200V.5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
                            <path
                                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" width="100%" height="100%" strokeWidth={0} />
                    </svg>
                    <div
                        aria-hidden="true"
                        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                            }}
                            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-violet-600 to-[#4f46e5] opacity-35"
                        />
                    </div>
                    <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-40 lg:flex lg:px-8 lg:pt-40">
                        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                            <img
                                alt="Bootstrap logo"
                                src="/image.webp"
                                className="h-11"
                            />
                            <div className="mt-24 sm:mt-32 lg:mt-16">
                                <a target='blank' href="https://getbootstrap.com" className="inline-flex space-x-6">
                                    <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                                        Ultimas actualizaciones
                                    </span>
                                    <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                                        <span>Versi&oacute;n v5.3.3</span>
                                        <ChevronRightIcon aria-hidden="true" className="h-5 w-5 text-gray-500" />
                                    </span>
                                </a>
                            </div>
                            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                                Bootstrap
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                <hr />

                                Bootstrap es un <span className='text-white font-bold'>framework</span> front-end gratuito para un desarrollo web más rápido y sencillo
                                <br />
                                Fue desarrollado por <span className='text-white font-bold'>Mark Otto y Jacob</span> Thornton en Twitter y lanzado como producto de código abierto en agosto de 2011 en GitHub.
                                <br />
                                En junio de 2014, Bootstrap fue el proyecto <span className='text-white font-bold'>n&uacute;mero uno</span> en GitHub

                                <hr />


                            </p>

                            <div className="mt-10 flex items-center gap-x-6">

                                <a
                                    href="https://kahoot.it/?deviceId=yTcpbj6yupig2yijoSO7Qd&sessionId=1728527769463"
                                    className="rounded-md bg-indigo-500 px-5 py-4 text-xl font-bold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 flex gap-2 items-center"
                                >
                                    Kahooooooot
                                    <item.icon aria-hidden="true" className="h-6 w-6" />

                                </a>

                            </div>
                        </div>
                        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                                <img
                                    alt="App screenshot"
                                    src={images.bootstrap}
                                    width={2432}
                                    height={1442}
                                    className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature section */}
                <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-base font-semibold leading-7 text-indigo-400">PRACTICO</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Empieza como quieras
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Salta directamente a la construcción con Bootstrap: usa la CDN, instálala a través del administrador de paquetes o descarga el código fuente.
                        </p>
                        <a href="https://getbootstrap.com/docs/5.3/getting-started/download/" target="_blank" rel="noopener noreferrer" className='text-xl font-semibold leading-6 text-indigo-400 underline'>Leer los documentos de instalaci&oacute;n<span aria-hidden="true">→</span></a>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                            {primaryFeatures.map((feature) => (
                                <div key={feature.name} className="flex flex-col">
                                    <dt className="text-base font-semibold leading-7 text-white">
                                        <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                                            <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                        <p className="flex-auto">{feature.description}</p>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                    <div className='pt-10'>
                        {/* Div donde se mostrará el código resaltado */}
                        <pre>
                            <code className="language-html highlightedCode">
                                {codeGetStarted}
                            </code>
                        </pre>
                    </div>
                    <div className='pt-10'>
                        {/* Div donde se mostrará el código resaltado */}
                        <pre>
                            <code className="language-html highlightedCode">
                                {codeNpm}
                            </code>
                        </pre>
                    </div>
                </div>

                {/* Feature section */}
                <div className="mt-32 sm:mt-56">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl sm:text-center">
                            <h2 className="text-base font-semibold leading-7 text-indigo-400">Caracter&iacute;sticas</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Principales</p>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Bootstrap es un framework front-end que facilita el desarrollo web con componentes listos para usar como botones, formularios y más.

                            </p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden pt-16">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <img
                                alt="App screenshot"
                                src={images.img2}
                                width={2432}
                                height={1442}
                                className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
                            />
                            <div aria-hidden="true" className="relative">
                                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                            {secondaryFeatures.map((feature) => (
                                <div key={feature.name} className="relative pl-9">
                                    <dt className="inline font-semibold text-white">
                                        <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-500" />
                                        {feature.name}:
                                    </dt>{' '}
                                    <dd className="inline">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>

                {/* Botones section */}
                <div className="mt-32 sm:mt-56">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl sm:text-center">
                                <h2 className="text-base font-semibold leading-7 text-indigo-400">Botones</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Variantes</p>
                                <p className="mt-6 text-lg leading-8 text-gray-300">
                                    Bootstrap incluye varias variantes de botones, cada una con su propio propósito semántico, con algunos extras añadidos para un mayor control.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='pt-16'>
                        <Container>
                            <div className="flex gap-2 items-center content-center  flex-wrap">
                                <button type="button" class="btn btn-primary">Primary</button>
                                <button type="button" class="btn btn-secondary">Secondary</button>
                                <button type="button" class="btn btn-success">Success</button>
                                <button type="button" class="btn btn-danger">Danger</button>
                                <button type="button" class="btn btn-warning">Warning</button>
                                <button type="button" class="btn btn-info">Info</button>
                                <button type="button" class="btn btn-light">Light</button>
                                <button type="button" class="btn btn-dark">Dark</button>

                                <button type="button" class="btn btn-link">Link</button>

                            </div>
                        </Container>
                        <div className='pt-10'>
                            {/* Div donde se mostrará el código resaltado */}
                            <pre>
                                <code className="language-html highlightedCode">
                                    {codeButtons}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Ejemplo de encabezados */}
                <div className="mt-32 sm:mt-56">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl sm:text-center">
                                <h2 className="text-base font-semibold leading-7 text-indigo-400">Encabezados</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Variantes</p>
                                <p className="mt-6 text-lg leading-8 text-gray-300">
                                    Bootstrap incluye varios tamaños de encabezados, cada uno con su propio propósito semántico, con algunos extras añadidos para un mayor control.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='pt-16'>
                        <Container>
                            <div className=" text-white">
                                <h1 className='text-4xl'><span className='text-indigo-400 font-bold'>h1.</span> Bootstrap heading <small>Secondary Text</small></h1>
                                <h2 className='text-3xl'><span className='text-indigo-400 font-bold'>h2.</span>  Bootstrap heading <small>Secondary Text</small></h2>
                                <h3 className='text-2xl'><span className='text-indigo-400 font-bold'>h3.</span>  Bootstrap heading <small>Secondary Text</small></h3>
                                <h4 className='text-xl'><span className='text-indigo-400 font-bold'>h4.</span>  Bootstrap heading <small>Secondary Text</small></h4>
                                <h5 className='text-lg'><span className='text-indigo-400 font-bold'>h5.</span>  Bootstrap heading <small>Secondary Text</small></h5>
                                <h6 className='text-sm'><span className='text-indigo-400 font-bold'>h6.</span>  Bootstrap heading <small>Secondary Text</small></h6>

                            </div>
                        </Container>
                        <div className='pt-10'>
                            {/* Div donde se mostrará el código resaltado */}
                            <pre>
                                <code className="language-html highlightedCode">
                                    {codeTipografia}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
                {/* Ejemplo de tablas */}
                <div className="mt-32 sm:mt-56">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl sm:text-center">
                                <h2 className="text-base font-semibold leading-7 text-indigo-400">Tablas</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Variantes</p>
                                <p className="mt-6 text-lg leading-8 text-gray-300">
                                    Bootstrap incluye varias variantes de tablas, cada una con su propio propósito semántico, con algunos extras añadidos para un mayor control.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='pt-16'>
                        <Container>
                            <div className="flex gap-2 items-center content-center overflow-scroll">
                                <table class="table ">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Apellido</th>
                                            <th scope="col">Dominio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Rodrigo</td>
                                            <td>Rey</td>
                                            <td>@rre</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Roman</td>
                                            <td>Ferrero</td>
                                            <td>@rfe</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td colspan="2">selecciono</td>
                                            <td>@la_columna_que_quiero</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Container>
                        <Container>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Columna 1</th>
                                        <th scope="col">Columna 2</th>
                                        <th scope="col">Columna 3</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="table-primary">
                                        <th scope="row">1</th>
                                        <td>Celda 1</td>
                                        <td>Celda 2</td>
                                        <td>Celda 3</td>
                                    </tr>
                                    <tr class="table-secondary">
                                        <th scope="row">2</th>
                                        <td>Celda 1</td>
                                        <td>Celda 2</td>
                                        <td>Celda 3</td>
                                    </tr>
                                    <tr class="table-success">
                                        <th scope="row">3</th>
                                        <td>Celda 1</td>
                                        <td>Celda 2</td>
                                        <td>Celda 3</td>
                                    </tr>
                                    <tr class="table-danger">
                                        <th scope="row">4</th>
                                        <td>Celda 1</td>
                                        <td>Celda 2</td>
                                        <td>Celda 3</td>
                                    </tr>
                                    <tr class="table-warning">
                                        <th scope="row">5</th>
                                        <td>Celda 1</td>
                                        <td>Celda 2</td>
                                        <td>Celda 3</td>
                                    </tr>
                                    <tr class="table-info">
                                        <th scope="row">6</th>
                                        <td>Celda 1</td>
                                        <td>Celda 2</td>
                                        <td>Celda 3</td>
                                    </tr>
                                    <tr class="table-light">
                                        <th scope="row">7</th>
                                        <td>Celda 1</td>
                                        <td>Celda 2</td>
                                        <td>Celda 3</td>
                                    </tr>
                                    <tr class="table-dark">
                                        <th scope="row">8</th>
                                        <td>Celda 1</td>
                                        <td>Celda 2</td>
                                        <td>Celda 3</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Container>
                        <div className='pt-10'>
                            {/* Div donde se mostrará el código resaltado */}
                            <pre>
                                <code className="language-html highlightedCode">
                                    {codeTables}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
                {/* Ejemplo de acordion */}
                <div className="mt-32 sm:mt-56">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl sm:text-center">
                                <h2 className="text-base font-semibold leading-7 text-indigo-400">Acordion</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Variantes</p>
                                <p className="mt-6 text-lg leading-8 text-gray-300">
                                    Bootstrap incluye varias variantes de acordion, cada una con su propio propósito semántico, con algunos extras añadidos para un mayor
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='pt-16'>
                        <Container>
                            <div class="accordion" id="accordionPanelsStayOpenExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                            Accordion Item #1
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                                        <div class="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                            Accordion Item #2
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                                        <div class="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                            Accordion Item #3
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                                        <div class="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>

                        <div>
                            {/* Div donde se mostrará el código resaltado */}
                            <pre>
                                <code className="language-html highlightedCode">
                                    {codeAcordion}
                                </code>
                            </pre>
                        </div>


                    </div>
                </div>
                {/* Ejemplo de spinners */}
                <div className="mt-32 sm:mt-56">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl sm:text-center">
                                <h2 className="text-base font-semibold leading-7 text-indigo-400">Spinners</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Variantes</p>
                                <p className="mt-6 text-lg leading-8 text-gray-300">
                                    Bootstrap incluye varias variantes de spinners, cada una con su propio propósito semántico, con algunos extras añadidos para un mayor
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='pt-16'>
                        <Container>
                            <div>
                                <div class="spinner-border text-primary ml-2 " role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                                <div class="spinner-grow text-secondary ml-2" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                                <button class="btn btn-primary ml-2" type="button" disabled>
                                    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                                    <span role="status">Loading...</span>
                                </button>
                                <div class="spinner-border text-success ml-2" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                                <div class="spinner-grow text-danger ml-2" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                                <div class="spinner-border text-warning ml-2" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                                <div class="spinner-border text-info ml-2" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                                <div class="spinner-border text-light ml-2" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                                <div class="spinner-border text-dark ml-2" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </Container>
                    </div>
                    <div className='pt-10'>
                        {/* Div donde se mostrará el código resaltado */}
                        <pre>
                            <code className="language-html highlightedCode">
                                {codeSpinners}
                            </code>
                        </pre>
                    </div>
                </div>

                {/* Ejemplo de carousel */}
                <div className="mt-32 sm:mt-56">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl sm:text-center">
                                <h2 className="text-base font-semibold leading-7 text-indigo-400">Carrusel</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Variantes</p>
                                <p className="mt-6 text-lg leading-8 text-gray-300">
                                    Bootstrap incluye varias variantes de carrusel, cada una con su propio propósito semántico, con algunos extras añadidos para un mayor
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='pt-16'>
                        <Container>
                            <div id="carouselExample" class="carousel slide">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src={images.ort} class="d-block mx-auto h-64 md:h-96  " alt="imagen-1" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={images.ing} class="d-block mx-auto max-h-96" alt="imagen-2" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={images.sociales} class="d-block mx-auto max-h-96" alt="imagen-3" />
                                    </div>
                                </div>


                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </Container>
                    </div>

                    <div className='pt-10 z-10'>
                        {/* Div donde se mostrará el código resaltado */}
                        <pre>
                            <code className="language-html highlightedCode">
                                {codeCarousel}
                            </code>
                        </pre>
                    </div>
                </div>


            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}
export default Home;