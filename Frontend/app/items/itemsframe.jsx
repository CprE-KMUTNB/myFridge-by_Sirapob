'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export const ItemsFrame = () => {
    const router = useRouter();

    const handleAdd = () => {
        router.push('/add-items');
    };

    const handleEdit = () => {
        router.push('/edit-items');
    };

    // Sample list of items with quantity
    const items = [
        {
            name: 'Milk',
            expires: '31 Dec 2023',
            quantity: 5,
            image: 'https://cdn.discordapp.com/attachments/1151835814939078738/1157130085443317760/Screenshot_2566-09-29_at_08.36.45.png?ex=651b715e&is=651a1fde&hm=3be0525dc3d36a533c98710d302b325a31f4f53996c8ff718e0e82d5ee63c244&', // Replace with actual image URL
        },
        {
            name: 'Eggs',
            expires: '30 Dec 2023',
            quantity: 4,
            image: 'https://cdn.discordapp.com/attachments/1151835814939078738/1157130085976002581/Screenshot_2566-09-29_at_08.37.22.png?ex=651b715e&is=651a1fde&hm=1517ec86e3850ab4c36eadb297010df6ff7724d46e5645898fe762b8e95dc9bf&', // Replace with actual image URL
        },
        {
            name: 'Ketchup',
            expires: '29 Nov 2023',
            quantity: 3,
            image: 'https://cdn.discordapp.com/attachments/1151835814939078738/1157130086210875402/Screenshot_2566-09-29_at_08.37.49.png?ex=651b715e&is=651a1fde&hm=ee608a35dacd4c0cf42aa9620c3e49e0aebfeec2cd1967291eb01ba62bd36cb0&', // Replace with actual image URL
        },
        {
            name: 'Chocolate',
            expires: '20 Nov 2023',
            quantity: 3,
            image: 'https://cdn.discordapp.com/attachments/1151835814939078738/1157130086479298570/Screenshot_2566-09-29_at_08.38.15.png?ex=651b715f&is=651a1fdf&hm=2b8f8979b5a39275437c741e83dce853a543d14c62572f3aa927f521507b49ba&', // Replace with actual image URL
        },
        {
            name: 'Butter',
            expires: '31 Oct 2023',
            quantity: 3,
            image: 'https://cdn.discordapp.com/attachments/1151835814939078738/1156150750003597332/Screenshot_2566-09-06_at_21.18_1.png?ex=651bd5cb&is=651a844b&hm=c080a0f4c6f2ca6d1ad2918c43d212f052e4447fd201e01d7ded9dd0f174b68a&', // Replace with actual image URL
        },
        {
            name: 'Apple Juice',
            expires: '20 Oct 2023',
            quantity: 4,
            image: 'https://cdn.discordapp.com/attachments/1151835814939078738/1157130086730977371/Screenshot_2566-09-29_at_08.41.03.png?ex=651b715f&is=651a1fdf&hm=6e8d2e907fe3fa2bcba799e8544886519e43ab58773764a94603c277a665e3c5&', // Replace with actual image URL
        },
        {
            name: 'Mayonaise',
            expires: '15 Oct 2023',
            quantity: 1,
            image: 'https://cdn.discordapp.com/attachments/1151835814939078738/1157130085720129546/Screenshot_2566-09-29_at_08.41.17.png?ex=651b715e&is=651a1fde&hm=ca88bc0c057a79d6185e8ded1dc8b600265c9f3cbc5cca1479ec66f6c7cc9e30&', // Replace with actual image URL
        },
        // Add more items here
    ];

    return (
        <div className="font-Manrope">
        <div className="sticky h-[calc(100vh-148px)] overflow-auto bg-[#21253180] rounded-[40px] shadow-[0px_0px_10px_8px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] dark:text-gray-100">
            {/* Dashboard Header */}
            <div className="flex">
                <div className="sticky w-3/5 pt-12 pl-16 font-medium text-4xl text-white">
                    Items
                </div>

                {/* Search box with PNG icons (moved to the left) */}
                <div className="sticky w-2/5 right-0 pt-12 pr-16 flex items-center">
                    <input
                        type="text"
                        placeholder="Search Items..."
                        className="w-full h-full py-1 pl-12 pr-7 rounded-xl bg-[#40404099] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] dark:text-gray-100  hover:bg-[#41465680] transition-all duration-300 ease-in-out"
                        style={{ color: "white" }} // Set text color to white
                    />
                    <img
                        src="https://cdn.discordapp.com/attachments/1151835814939078738/1151837859939102720/1f5f8f3eb04b33df710ea2026ec3e432.png" // Replace with the actual path to your PNG icon
                        alt="Search"
                        className="absolute w-6 h-6 left-4 "
                    />
                </div>
            </div>

            <div className="flex">
                {/* Sort by drop down */}
                <div className="w-2/5 pt-16 px-16 text-white text-[20px]">
                    <label htmlFor="sortBy" className="block text-white text-[20px]">Sort by:</label>
                    <select
                        id="sortBy"
                        className="w-full py-3 pl-3 pr-10 mt-1 rounded-xl bg-[#40404099] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] hover:rounded-[15px] dark:text-gray-100 hover:bg-[#41465680] transition-all duration-300 ease-in-out"
                    >
                        <option value="name">Name</option>
                        <option value="expire">Expiry Date</option>
                        <option value="recently">Recently Added</option>
                        <option value="qtyup">Quantity Ascending</option>
                        <option value="qtydown">Quantity Descending</option>
                    </select>
                </div>
                {/* Add item button */}
                <div className="w-3/4 pt-16 px-16 mt-6 flex justify-end">
                    <button
                        className="w-48 h-14 bg-[#0c420c] hover:bg-[#1a3f50] transition-all duration-300 ease-in-out rounded-[10px] flex justify-center items-center focus:outline-none"
                        onClick={() => handleAdd()} // Add the onClick attribute here
                    >
                        <div className="font-medium text-[#ffffff] text-[21px]">
                            Add Item
                        </div>
                    </button>
                </div>
            </div>

            {/* Item Lists */}
            <div className="flex flex-wrap">
                {items.map((item, index) => (
                    <div key={index} className={`w-1/3 pt-10 pb-6 ${index % 3 === 0 ? 'pl-16' : ''} ${index % 3 === 1 ? 'pr-8 pl-8' : ''} ${index % 3 === 2 ? 'pr-16' : ''}`}>
                        <div className="relative w-full h-96 bg-[#142741] rounded-[33px] shadow-[0px_0px_10px_3px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)]">
                            <div className="absolute top-56 ml-10 [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-white text-[24px] tracking-[0] leading-[normal]">
                                {item.name}
                            </div>
                            <div className="absolute top-64 mt-2 ml-10 font-medium text-white text-[20px] tracking-[0] leading-[normal]">
                                Expires: {item.expires}
                            </div>
                            <button
                                className="absolute mb-7 mr-10 right-0 bottom-0 w-14 h-14 bg-[#1d2387] hover:mb-6 hover:mr-9 hover:w-16 hover:h-16 hover:bg-[#571a56] transition-all duration-300 ease-in-out rounded-[10px] flex justify-center items-center"
                                onClick={() => handleEdit()}
                            >
                                <img
                                    className="w-10 h-10 p-1"
                                    alt="Edit"
                                    src="https://cdn.discordapp.com/attachments/1151835814939078738/1156153038503952454/0d622ecf015f0b97491b26ed4f4d9e38.png?ex=6513eeec&is=65129d6c&hm=6c3d177f07d4df5e0e8914df198e3b1fdf9cc04e5d16a8926b4428e3c51a4bb7&"
                                />
                            </button>
                            <div className="absolute top-72 mt-7 ml-10 font-normal text-white text-[20px] tracking-[0] leading-[normal]">
                                Quantities: {item.quantity}
                            </div>
                            <img
                                className="absolute object-cover px-9 py-4 h-[220px] w-full "
                                alt={item.name}
                                src={item.image}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default ItemsFrame;