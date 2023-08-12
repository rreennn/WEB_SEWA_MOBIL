import { animateScroll as scroll, Link } from "react-scroll";
import React from "react";

const Footer = () => {
    return (
        <>
            <footer class="bg-rose-800">
                <div class="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <div class="flex justify-center text-white sm:justify-start">
                            <img className="w-[40px]" src="http://localhost:8000/storage/assets/car2.svg" alt="" />
                            <h2 className="px-5 pt-1 text-lg font-semibold">DriveCar</h2>
                        </div>

                        <p class="mt-4 text-center text-sm text-white lg:mt-0 lg:text-right">
                            Copyright &copy; 2022. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
