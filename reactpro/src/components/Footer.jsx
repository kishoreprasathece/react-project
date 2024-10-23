import React from 'react';

const Footer = () => {
    return (
        <div>
           <footer class="bg-black text-white p-6">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
     
        <div>
            <h4 class="text-lg font-bold mb-2">SUPPORT</h4>
            <p>Mon - Sat | 9:00AM to 9:00PM (EST)</p>
            <p>Excludes Public Holidays</p>
            <p>Chat with us or send an email. We respond within 24-48 hours.</p>
        </div>

        <div>
            <p class="text-lg font-bold mb-2">ORDER</p>
            <ul class="list-none space-y-1">
                <li>Track</li>
                <li>Exchange & Return</li>
                <li>Become Insider</li>
            </ul>
        </div>


        <div>
            <p class="text-lg font-bold mb-2">INFORMATION</p>
            <ul class="list-none space-y-1">
                <li>Shipping Policy</li>
                <li>Privacy</li>
                <li>Get 20% OFF</li>
                <li>Terms & Conditions</li>
            </ul>
        </div>


        <div>
            <p class="text-lg font-bold mb-2">SOCIAL MEDIA</p>
            <ul class="list-none flex space-x-4 items-center">
                <li>
                    <a href="https://www.instagram.com/">
                        <img src="assests/Instagram.png" alt="Instagram" class="w-6 h-6"/>
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/message">
                        <img src="assests/WhatsApp.png" alt="WhatsApp" class="w-6 h-6"/>
                    </a>
                </li>
            </ul>
            <p class="mt-4">All rights reserved</p>
        </div>
    </div>
</footer>


<footer class="bg-black text-white text-center p-4">
    <p>© 2024 ECOMM.</p>
</footer>
 
        </div>
    );
};

export default Footer;