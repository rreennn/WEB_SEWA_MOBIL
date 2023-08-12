import { router } from "@inertiajs/react";

const Navbar = ({props}) => {
    return (
        <>
            <header className="bg-white shadow-md sticky top-0 z-20">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="md:flex md:items-center md:gap-12">
                            <a className="block text-teal-600" href="/">
                                <span className="sr-only">Home</span>
                                <img className="w-[40px]" src="http://localhost:8000/storage/assets/car.svg" alt="" />
                            </a>
                        </div>

                        <div className="hidden md:block">
                            <nav aria-label="Global">
                                <ul className="flex items-center gap-6 text-sm">
                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75"
                                            href="/"
                                        >
                                            Tentang Kami
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75"
                                            href={route('mobil')}
                                        >
                                            Mobil
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75"
                                            onClick={()=>window.location.href=route('history', props.auth.user.id)}
                                        >
                                            Riwayat Pesanan
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="flex items-center gap-4">
                                {!props.auth.user ? 
                            <div className="sm:flex sm:gap-4">
                                
                                <a
                                    className="rounded-md bg-rose-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                    href={route('login')}
                                >
                                    Login
                                </a>

                                <div className="hidden sm:flex">
                                    <a
                                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-rose-600"
                                        href={route('register')}
                                    >
                                        Register
                                    </a>
                                </div>
                            </div> : <div className="hidden sm:flex">
                                    <a
                                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-rose-600"
                                        onClick={()=>router.post(route('logout'))}
                                    >
                                        Logout
                                    </a>
                                </div>

                            }

                            <div className="block md:hidden">
                                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
