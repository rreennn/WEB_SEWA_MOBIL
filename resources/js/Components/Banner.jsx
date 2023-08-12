import { animateScroll as scroll, Link } from "react-scroll";
import React from "react";

const Banner = () => {
    return (
        <>
            <section class="relative bg-[url(https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)] bg-cover bg-center bg-no-repeat">
                <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

                <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 class="text-3xl font-extrabold sm:text-5xl">
                            Mau jalan-jalan naik mobil?
                            <strong class="block font-extrabold text-rose-700">
                                Sewa di DriveCar aja!
                            </strong>
                        </h1>

                        <p class="mt-4 text-white max-w-lg sm:text-xl/relaxed">
                            Untuk Anda yang ingin keliling kota saat liburan dengan mobil terbaik
                        </p>

                        <div class="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                                href="#"
                                class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Pesan Sekarang
                            </a>

                            <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            >
                                Tentang Kami
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;
