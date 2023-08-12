import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";

export default function Mobil(props) {
    return (
        <>
            <Navbar props={props}/>
            <div className="container mx-auto w-full" id="top">
                <div class="flex items-center justify-between gap-4 bg-rose-800 px-4 py-3 text-white">
                    <p class="text-md font-bol">Pilih Mobil Terbaik!</p>
                </div>
                <div className="card-collection my-16 flex justify-evenly gap-4">
                    <a href={route('order', ['Fortuner'])} class="block group">
                        <img
                            src="https://images.unsplash.com/photo-1615887110697-0819ec23465f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                            alt=""
                            class="object-cover w-[300px] rounded aspect-square"
                        />

                        <div class="mt-3">
                            <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                                Fortuner
                            </h3>

                            <p class="mt-1 text-sm text-gray-700">Rp 300.000/hari</p>
                        </div>
                    </a>
                    <a href={route('order', ['HondaJazz'])} class="block group">
                        <img
                            src="https://images.unsplash.com/photo-1609676671207-d021525a635d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=792&q=80"
                            alt=""
                            class="object-cover w-[300px] rounded aspect-square"
                        />

                        <div class="mt-3">
                            <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                                Honda Jazz
                            </h3>

                            <p class="mt-1 text-sm text-gray-700">Rp 250.000/hari</p>
                        </div>
                    </a>
                    <a href={route('order', ['ToyotaSUV'])} class="block group">
                        <img
                            src="https://images.unsplash.com/photo-1603094543704-64cdce2d2532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=742&q=80"
                            alt=""
                            class="object-cover w-[300px] rounded aspect-square"
                        />

                        <div class="mt-3">
                            <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                                Toyota SUV
                            </h3>

                            <p class="mt-1 text-sm text-gray-700">Rp 350.000/hari</p>
                        </div>
                    </a>
                </div>
                <div className="card-collection my-16 flex justify-evenly gap-4">
                    <a href={route('order', ['Livina'])} class="block group">
                        <img
                            src="https://www.autodeal.com.ph/custom/car-model-photo/original/nissan-livina-exterior-6316b7321bd2d.jpg"
                            alt=""
                            class="object-cover w-[300px] rounded aspect-square"
                        />

                        <div class="mt-3">
                            <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                                Livina
                            </h3>

                            <p class="mt-1 text-sm text-gray-700">Rp 280.000/hari</p>
                        </div>
                    </a>
                    <a href={route('order', ['SuzukiErtiga'])} class="block group">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/e/e4/2013_Suzuki_Ertiga_1.4_GX_wagon_%28ZE81S%3B_01-20-2019%29%2C_South_Tangerang.jpg"
                            alt=""
                            class="object-cover w-[300px] rounded aspect-square"
                        />

                        <div class="mt-3">
                            <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                                Suzuki Ertiga
                            </h3>

                            <p class="mt-1 text-sm text-gray-700">Rp 320.000/hari</p>
                        </div>
                    </a>
                </div>
            </div>
            <Footer />
        </>
    );
}
