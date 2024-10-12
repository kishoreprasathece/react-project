import React from 'react';
import Content from './components/Content';

const App = () => {
  return (
   <div>

    <div id="logo" class="w-full p-4 border-4 border-white bg-black text-white text-center font-poppins font-semibold cursor-grab">
    <h2>HOW TO αLPHA</h2>
    <div class="flex items-center bg-gray-200 border border-gray-300 rounded p-2 w-80 mx-auto">
        <input type="text" id="product-search" class="border-none outline-none p-2 w-full rounded text-sm" placeholder="Search 'all' to view all product"/>
        <button class="bg-yellow-300 border-none p-2 rounded flex items-center justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/768px-Magnifying_glass_icon.svg.png" alt="Search Icon" class="w-4 h-4"/>
        </button>
    </div>
    <img id="addtocart" src="image/addtocart.png" class="w-12 h-12 cursor-pointer ml-auto mt-[-12px]"/>
</div>




<Content/>

</div>
  );
};

export default App;