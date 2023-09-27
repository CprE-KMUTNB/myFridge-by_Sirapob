'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

export const EditFrame = () => {
    const router = useRouter();

    const handleAdd = () => {
        // Redirect to the home page
        router.push('/items');
    };

    const handleDiscard = () => {
        // Redirect to the home page
        router.push('items');
    };

    return (
        <div className="sticky h-[calc(100vh-148px)] overflow-auto bg-[#21253180] rounded-[40px] shadow-[0px_0px_10px_8px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] dark:text-gray-100">
            {/* Add item Header */}
            <div className="sticky w-3/5 pt-12 pl-16 font-medium text-4xl text-white">
                Items
            </div>
            {/* Add item menu */}
            <div className="sticky w-full h-[calc(90vh-120px)] p-16">
                <div className="sticky w-full h-full bg-[#142741] rounded-[33px] shadow-[0px_0px_10px_3px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)]">
                    <div className="flex relative pt-14 px-14 [font-family:'Manrope-SemiBold',Helvetica] font-SemiBold text-[#ffffff] text-3xl tracking-[0] leading-[normal]">
                    <img
                            className="w-10 h-10 pl-1 mr-5"
                            alt="Edit"
                            src="https://cdn.discordapp.com/attachments/1151835814939078738/1156153038503952454/0d622ecf015f0b97491b26ed4f4d9e38.png?ex=6513eeec&is=65129d6c&hm=6c3d177f07d4df5e0e8914df198e3b1fdf9cc04e5d16a8926b4428e3c51a4bb7&"
                        />
                        Adding Item
                    </div>
                    <div className="flex w-2/4">
                        <div className="sticky w-64 px-14 pt-10 [font-family:'Manrope-normal',Helvetica] font-normal text-[#ffffff] text-[25px] tracking-[0] leading-[normal]">
                            Name
                        </div>
                        <input
                            type="text"
                            className=" w-52 mt-5 pl-2 rounded-xl bg-[#21253180] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] dark:text-gray-100  hover:bg-[#41465680] transition-all duration-300 ease-in-out"
                            placeholder="Enter Item Name"
                        />
                    </div>

                    <div className="flex w-2/4">
                        <div className="sticky w-64 px-14 pt-8 [font-family:'Manrope-normal',Helvetica] font-normal text-[#ffffff] text-[25px] tracking-[0] leading-[normal]">
                            Quantity
                        </div>
                        <input
                            type="number"
                            className="w-52 mt-4 pl-2 rounded-xl bg-[#21253180] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] dark:text-gray-100  hover:bg-[#41465680] transition-all duration-300 ease-in-out"
                            placeholder="Enter Quantity"
                        />

                    </div>
                    <div className="flex">
                        <div className="sticky w-64 px-14 pt-8 [font-family:'Manrope-normal',Helvetica] font-normal text-[#ffffff] text-[25px] tracking-[0] leading-[normal]">
                            Expiry Date
                        </div>
                        <input
                            type="date"
                            className="w-52 mt-4 pl-2 rounded-xl bg-[#21253180] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] dark:text-gray-100  hover:bg-[#41465680] transition-all duration-300 ease-in-out"
                            placeholder="Select Expiry Date"
                        />
                        <div className="sticky ml-20 pt-6 pb-2 [font-family:'Manrope-normal',Helvetica] font-normal text-[#ffffff] text-[25px] tracking-[0] leading-[normal]">
                            Image
                        </div>
                        {/* Picture Uploader */}
                        <input
                            type="file"
                            className="w-1/5 mt-6 ml-8 rounded-xl bg-[#21253180] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] dark:text-gray-100 hover:bg-[#41465680] transition-all duration-300 ease-in-out"
                            placeholder="Upload Image"
                        />
                    </div>
                    <div className="flex">
                    <button
                        className="sticky mt-12 ml-14 w-40 h-14 bg-[#1d2387] hover:text-[23px] hover:bg-[#286fb5] transition-all duration-300 ease-in-out rounded-[10px] flex justify-center items-center"
                        onClick={() => handleAdd()}
                    >
                        <div className="flex items-center"> {/* Added this div */}
                        <img
                            className="w-10 h-10 p-1"
                            alt="Add"
                            src="https://cdn.discordapp.com/attachments/1151835814939078738/1156637223408648332/6960dd4be832615dbf7fc16139c09381.png?ex=6515b1db&is=6514605b&hm=003f0fa2ea16c2b2aaed6d196421e86c8ceac05bda820d8230228fec2d756eb1&"
                        />
                        <span className="text-[21px] hover:text-[23px] transition-all duration-300 ease-in-out">Add</span> {/* Added text here */}
                        </div>
                    </button>
                    <button
                        className="sticky mt-12 ml-10 w-40 h-14 bg-[#871d1d] hover:text-[23px] hover:bg-[#b85757] transition-all duration-300 ease-in-out rounded-[10px] flex justify-center items-center"
                        onClick={() => handleDiscard()}
                    >
                        <div className="flex items-center"> {/* Added this div */}
                        <img
                            className="w-10 h-10 p-1"
                            alt="discard"
                            src="https://cdn.discordapp.com/attachments/1151835814939078738/1156637223144394792/44030054813dd4a0f69338ff98f91177.png?ex=6515b1db&is=6514605b&hm=5686ab81a99728b67569d45a02294058f1df8e740911d86f58572b774e5993f1&"
                        />
                        <span className="text-[21px] hover:text-[23px] transition-all duration-300 ease-in-out">Discard</span> {/* Added text here */}
                        </div>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditFrame;
