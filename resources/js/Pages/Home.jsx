import Banner from "@/Components/Banner";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";

export default function Home(props) {
    return (
        <>
            <Navbar props={props}/>
            <div className="container mx-auto w-full bg-slate-300" id="top">
                <Banner />
                <section className="mt-10 bg-slate-200" id="about">
                <section class="bg-gray-900 my-10 text-white">
                    <div class="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                        <div class="max-w-xl">
                            <h2 class="text-3xl font-bold sm:text-4xl">
                                Kenapa pilih DriveCar?
                            </h2>

                            <p class="mt-4 text-gray-300">
                                Kami menyediakan mobil-mobil yang berkualitas baik 
                                nyaman disetir maupun ditumpangi, sehingga perjalanan
                                Anda menjadi lancar dan aman.
                            </p>
                        </div>

                        <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                            <div class="flex items-start gap-4">
                                <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                                    <svg
                                        class="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <div>
                                    <h2 class="text-lg font-bold">
                                        Mobil Keadaan Baik
                                    </h2>

                                    <p class="mt-1 text-sm text-gray-300">
                                        Mobil selalu mendapat servis rutin, tidak perlu khawatir
                                        dengan masalah internal mobil
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-start gap-4">
                                <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                                    <svg
                                        class="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <div>
                                    <h2 class="text-lg font-bold">
                                        Legal dan Bersertifikat!
                                    </h2>

                                    <p class="mt-1 text-sm text-gray-300">
                                        Perusahaan kami sudah terdaftar di data perusahaan negara,
                                        tidak perlu khawatir lagi akan penipuan dan lain-lainnya.
                                        Semoga perjalanan Anda menyenangkan!
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-start gap-4">
                                <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                                    <svg
                                        class="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <div>
                                    <h2 class="text-lg font-bold">
                                        Keuntungan dari kami!
                                    </h2>

                                    <p class="mt-1 text-sm text-gray-300">
                                        Tidak perlu mengisi bensin lagi saat Anda menyewa mobil.
                                        Garansi uang kembali, jika mobil dalam keadaan kurang dan bensin tidak penuh!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </section>
            </div>
            <Footer />
        </>
    );
}
