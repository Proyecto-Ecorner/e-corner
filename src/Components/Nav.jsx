import { useEffect } from "react";
import {
    Collapse,
    Ripple,
    initTWE,
} from "tw-elements";
import Search from "./Search";
import Avatar from "./Avatar";
import ecorner from "../assets/ecorner.png"

import { NavLink } from "react-router-dom";



function Nav() {
    useEffect(() => {
        initTWE({ Collapse, Ripple });
    }, [])
    return (
        <header>

            <nav
                class="relative flex w-full items-center justify-between bg-[#B9A7CD] py-2 shadow-dark-mild dark:bg-body-dark lg:flex-wrap lg:justify-start lg:py-4"
                data-twe-navbar-ref>
                <div class="flex w-full flex-wrap items-center justify-between px-3">
                    <div class="flex items-center">

                        <button
                            class="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
                            type="button"
                            data-twe-collapse-init
                            data-twe-target="#navbarSupportedContentX"
                            aria-controls="navbarSupportedContentX"
                            aria-expanded="false"
                            aria-label="Toggle navigation">

                            <span
                                class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </span>
                        </button>
                    </div>
                    
                    <div class="relative overflow-hidden bg-cover bg-no-repeat size-20">
                    <img
                        class="rounded"
                        src={ecorner}
                        alt="" />
                    </div>

                    <div
                        class="!visible hidden grow basis-[100%] items-center text-center lg:!flex lg:basis-auto lg:text-left"
                        id="navbarSupportedContentX"
                        data-twe-collapse-item>
                        <ul
                            class="me-auto flex flex-col lg:flex-row"
                            data-twe-navbar-nav-ref>
                            <li class="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                                <a
                                    class="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                    href="#!"
                                    data-twe-nav-link-ref
                                    data-twe-ripple-init
                                    data-twe-ripple-color="light"
                                >Inicio</a>
                            </li>
                            <li class="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                                <a
                                    class="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                    href="#!"
                                    data-twe-nav-link-ref
                                    data-twe-ripple-init
                                    data-twe-ripple-color="light"
                                >Publicar</a>
                            </li>
                            <li class="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                                <a
                                    class="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                    href="#!"
                                    data-twe-nav-link-ref
                                    data-twe-ripple-init
                                    data-twe-ripple-color="light"
                                >Comprar</a>
                            </li>
                            <li class="mb-2 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                                <NavLink
                                    class="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                    to="Registro2"
                                    data-twe-nav-link-ref
                                    data-twe-ripple-init
                                    data-twe-ripple-color="light"
                                >Crear cuenta</NavLink>
                            </li>
                        </ul>
                    </div>
                <div class = "flex flex-row-reverse">
                <Avatar/>                
                <Search/>
                  
                </div>
                 
                </div>
               
            </nav>

            <div
                class="relative h-[350px] overflow-hidden bg-[url('/Users/paolaguzman/Documents/Paola/PROGRAMACIÓN/Tailwind/e-conner/src/assets/Head.jpeg')] bg-cover bg-[50%] bg-no-repeat">
                <div
                    class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
                    <div class="flex h-full items-center justify-center">
                        <div class="px-6 text-center text-white md:px-12">
                            <h1 class="mb-6 text-5xl font-bold">e-corner</h1>
                            <h3 class="mb-8 text-3xl font-bold">Tu compra online de confianza!!! </h3>
                            <button
                                type="button"
                                class="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
                                data-twe-ripple-init
                                data-twe-ripple-color="light">
                                Habla con un asesor
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Nav





