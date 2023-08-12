import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";

export default function History(props) {
    return (
        <>
            <Navbar props={props} />
            <div className="flex justify-center w-full h-[100vh]">
                <div class="overflow-x-auto rounded-lg border border-gray-200">
                    <table class="min-w-full mt-3 divide-y-2 divide-gray-200 bg-white text-sm">
                        <thead class="ltr:text-left rtl:text-right">
                            <tr>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Id Pesanan
                                </th>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Id User
                                </th>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Mobil
                                </th>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Tanggal
                                </th>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Kembali
                                </th>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Harga
                                </th>
                            </tr>
                        </thead>

                        <tbody class="divide-y divide-gray-200">
                            {props.data.data.map((data, i) => {
                               return <tr key={i}>
                                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        {data.id}
                                    </td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                                        {data.user_id}
                                    </td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                                        {data.mobil}
                                    </td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                                        {data.tanggal}
                                    </td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                                        {data.kembali}
                                    </td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                                        {data.harga}
                                    </td>
                                </tr>;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    );
}
