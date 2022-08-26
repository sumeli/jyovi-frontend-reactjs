import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer class="bg-white ">
                <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase ">Company</h2>
                        <ul class="text-gray-500 ">
                            <li class="mb-4">
                                <a href="#" class=" hover:underline">About Us</a>
                            </li>


                            <li class="mb-4">
                                <a href="#" class="hover:underline">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase ">Help center</h2>
                        <ul class="text-gray-500 ">

                            <li class="mb-4">
                                <a href="#" class="hover:underline">Twitter</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Facebook</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase ">Legal</h2>
                        <ul class="text-gray-500 ">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Privacy Policy</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Licensing</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <a class="mb-6 text-sm font-semibold text-gray-500 uppercasehover:text-black" href="#">Join as Professional</a>

                    </div>
                </div>
                <div class="py-6 px-4 bg-gray-100  md:flex md:items-center md:justify-between">
                    <span class="text-sm text-gray-500 sm:text-center">© 2022 <a href="https://flowbite.com/">Jyovi</a>. All Rights
                        Reserved.
                    </span>
                </div>
            </footer>
        </div>
    )
}

export default Footer