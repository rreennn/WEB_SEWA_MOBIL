import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { router } from "@inertiajs/react";
import React from "react";
import { useState } from "react";

export default function Order(props) {
    const [tanggal, setTanggal] = useState("");
    const [kembali, setKembali] = useState("");
    const handleSubmit = () => {
        const harga = {
            Fortuner:300000,
            HondaJazz:250000,
            ToyotaSUV:350000,
            Livina:280000,
            SuzukiErtiga:320000,
        }
        const startDate = new Date(tanggal);
        const finishDate = new Date(kembali);
        const timeDifference = Math.abs(finishDate - startDate);
        const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        const data = {
            userId:props.auth.user.id,
            mobil:props.value,
            tanggal:tanggal,
            kembali:kembali,
            durasi:daysRemaining,
            harga:harga[props.value],
        }
        router.post(route('submit'), data)
    }
    
    console.log(props);
    return (
        <>
            <Navbar props={props}/>
            <div className="container w-full flex justify-center" id="top">
                <div class="mx-auto rounded-md shadow-md bg-slate-200 my-8 w-[600px] max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div class="mx-auto max-w-lg text-center">
                        <h1 class="text-2xl font-bold sm:text-3xl">
                            Order Sekarang!
                        </h1>
                    </div>

                    <form
                        action=""
                        class="mx-auto mb-0 mt-8 max-w-md space-y-4"
                    >
                        <div>
                            <label
                                for="UserEmail"
                                class="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                            >
                                <input
                                    type="text"
                                    id="Mobil"
                                    placeholder="Mobil"
                                    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    value={props.value}
                                    disabled
                                />

                                <span class="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                                    Mobil
                                </span>
                            </label>
                        </div>
                        <div>
                            <label
                                htmlFor=""
                                class="block text-sm font-medium text-gray-900"
                            >
                                Untuk Tanggal
                            </label>
                            <input
                                type="date"
                                name=""
                                id=""
                                className="mt-1.5 rounded-lg w-full"
                                min={new Date().toJSON().slice(0,10)}
                                onChange={(event)=>setTanggal(event.target.value)}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor=""
                                class="block text-sm font-medium text-gray-900"
                            >
                                Sampai Tanggal
                            </label>
                            <input
                                type="date"
                                name=""
                                id=""
                                className="mt-1.5 rounded-lg w-full"
                                min={new Date().toJSON().slice(0,10)}
                                onChange={(event)=>setKembali(event.target.value)}
                            />
                        </div>
                        <div onClick={handleSubmit} className="flex justify-center pt-5">
                            <a class="group relative inline-block text-sm font-medium text-red-600 focus:outline-none focus:ring active:text-red-500">
                                <span class="absolute inset-0 border rounded-md border-current"></span>
                                <span class="block border border-current rounded-md bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                                    Pesan
                                </span>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
