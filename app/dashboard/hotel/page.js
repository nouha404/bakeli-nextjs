"use client"

import Link from 'next/link';
import { Plus } from "lucide-react";
import { useEffect, useState } from 'react';
import {fetchData} from "@/services/api";

const DashboardHeader = () => {
    return (
        <div className="flex justify-between items-center w-[1055px] p-4 border-b border-gray-300 bg-white">
            <Link href="/dashboard" className="pl-4 text-xl font-semibold">Dashboard</Link>
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Recherche"
                        className="py-2 pl-8 pr-4 border border-gray-300 rounded-full focus:outline-none focus:border-blue-400"
                    />

                </div>
                <button className="relative">
                    <div className="flex group">
                        <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6016 15.3462V9.34708C12.6016 8.06603 12.2422 7.00369 11.5236 6.16007C10.805 5.2852 9.83635 4.84777 8.61779 4.84777C7.39923 4.84777 6.43063 5.2852 5.71199 6.16007C4.99335 7.00369 4.63403 8.06603 4.63403 9.34708V15.3462H12.6016ZM14.6169 14.3151L16.6322 16.3304V17.3146H0.603393V16.3304L2.61871 14.3151V9.34708C2.61871 7.78482 3.00927 6.42565 3.79041 5.26958C4.60278 4.11351 5.71199 3.36362 7.11802 3.01993V2.31691C7.11802 1.91072 7.25862 1.56702 7.53983 1.28582C7.82104 0.973366 8.18036 0.817139 8.61779 0.817139C9.05522 0.817139 9.41454 0.973366 9.69575 1.28582C9.97696 1.56702 10.1176 1.91072 10.1176 2.31691V3.01993C11.5236 3.36362 12.6172 4.11351 13.3983 5.26958C14.2107 6.42565 14.6169 7.78482 14.6169 9.34708V14.3151ZM10.0238 19.7517C9.61764 20.1267 9.14896 20.3142 8.61779 20.3142C8.08662 20.3142 7.61794 20.1267 7.21176 19.7517C6.80557 19.3456 6.60247 18.8769 6.60247 18.3457H10.6331C10.6331 18.8769 10.43 19.3456 10.0238 19.7517Z" fill="black" fill-opacity="0.87"/>
                        </svg>

                        <svg className="absolute left-2 bottom-3" width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.843262" y="0.917236" width="17.8373" height="18.1705" rx="4.26601" fill="#FCC100"/>
                            <path d="M8.65273 7.5005H9.70531C10.0425 7.5005 10.3204 7.44354 10.5392 7.32962C10.7579 7.21115 10.9196 7.04712 11.0244 6.83751C11.1338 6.62335 11.1885 6.37502 11.1885 6.09251C11.1885 5.83734 11.1384 5.61179 11.0381 5.41586C10.9424 5.21536 10.7943 5.06044 10.5938 4.95108C10.3934 4.83717 10.1405 4.78021 9.83517 4.78021C9.59367 4.78021 9.3704 4.82805 9.16535 4.92374C8.9603 5.01943 8.79627 5.15385 8.67324 5.327C8.55021 5.50015 8.4887 5.70976 8.4887 5.95581H6.51341C6.51341 5.40902 6.65922 4.93286 6.95085 4.52732C7.24703 4.12178 7.64345 3.8051 8.14012 3.57727C8.63679 3.34944 9.18358 3.23553 9.78049 3.23553C10.4549 3.23553 11.0449 3.34488 11.5507 3.5636C12.0565 3.77776 12.4507 4.09444 12.7332 4.51365C13.0157 4.93286 13.1569 5.45231 13.1569 6.072C13.1569 6.38641 13.084 6.6917 12.9382 6.98788C12.7924 7.2795 12.5828 7.54378 12.3094 7.78073C12.0406 8.01311 11.7125 8.19993 11.3252 8.34119C10.9379 8.47789 10.5027 8.54623 10.0197 8.54623H8.65273V7.5005ZM8.65273 8.99734V7.97894H10.0197C10.5619 7.97894 11.0381 8.04045 11.4482 8.16348C11.8583 8.28651 12.2023 8.46422 12.4803 8.6966C12.7582 8.92443 12.9678 9.19555 13.1091 9.50995C13.2503 9.8198 13.321 10.1638 13.321 10.542C13.321 11.0068 13.2321 11.4214 13.0544 11.786C12.8767 12.1459 12.6261 12.4512 12.3026 12.7018C11.9836 12.9525 11.61 13.1438 11.1816 13.276C10.7533 13.4036 10.2863 13.4674 9.78049 13.4674C9.36128 13.4674 8.94891 13.4104 8.54338 13.2965C8.1424 13.178 7.77787 13.0026 7.44979 12.7702C7.12628 12.5333 6.86655 12.2371 6.67062 11.8817C6.47924 11.5217 6.38355 11.0956 6.38355 10.6035H8.35883C8.35883 10.8587 8.42263 11.0865 8.55021 11.287C8.6778 11.4875 8.85322 11.6447 9.0765 11.7586C9.30433 11.8725 9.55722 11.9295 9.83517 11.9295C10.1496 11.9295 10.4184 11.8725 10.6417 11.7586C10.8695 11.6402 11.0427 11.4761 11.1611 11.2665C11.2842 11.0524 11.3457 10.804 11.3457 10.5215C11.3457 10.157 11.2796 9.86537 11.1475 9.64665C11.0153 9.42338 10.8262 9.25934 10.5802 9.15454C10.3341 9.04974 10.0425 8.99734 9.70531 8.99734H8.65273Z" fill="white" fill-opacity="0.87"/>
                        </svg>
                    </div>
                </button>
                <div className="relative flex items-center space-x-2">
                    <img
                        src="/photo.jpeg"
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full"
                    />


                    <svg className="absolute left-3 top-5 " width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2.2738" y="1.99325" width="10.665" height="10.665" rx="5.33252" fill="#00FF92" stroke="white" stroke-width="2.66626"/>
                    </svg>

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16 17L21 12L16 7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21 12H9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>


                </div>
            </div>
        </div>
    );
};

export default function Hotel() {

    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        const getHotels = async () => {
            try {
                const data = await fetchData('/hotels');
                setHotels(data);
            } catch (error) {

            }
        };

        getHotels();
    }, []);


    console.log(hotels)


    return (

        <div className="">
                <DashboardHeader />
                <div className="flex items-center justify-between p-5 pl-8 bg-white description">
                    <div>
                        <h3 className="text-4xl font-light leading-normal font-roboto">Hotels <span>10</span></h3>
                        <p className="  h-[26px] top-[56.34px] left-[47.38px] opacity-60">Lorem ipsum dolor sit amet consectetur</p>


                    </div>

                    <Link href="/dashboard/add-hotel" className="button border-2 border-inputColor h-[56px] flex justify-center rounded items-center text-center w-[250px] ">
                    <Plus className="" /> Créer un nouveau hôtel
                    </Link>

                </div>

                <div className="grid justify-around grid-cols-3 gap-4 p-4 card bg-dashColor ">
                    {hotels.map((hotel) => (
                        <div
                            key={hotel.id}
                             className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src="/image2.png" alt="" />
                            </div>

                            {/*
                             <div className="inset-0 flex flex-col items-center justify-center">
                                <p className="font-roboto font-normal text-sm leading-[15.35px]">{hotel.address}</p>
                                <p className="font-roboto font-semibold text-xl leading-[25.59px]">{hotel.name}</p>
                                <p className="font-roboto font-normal text-sm leading-[15.35px]">{hotel.pricePerNight}</p>
                            </div>
                            */}

                            <Link href={`/hotels/${hotel.id}`}>
                                <div className="flex-1 p-6 flex flex-col justify-between">
                                    <div className="flex-1">
                                        <p className="text-xl text-linkColor-400 font-medium">
                                                <span className="hover:underline">
                                                    {hotel.address}
                                                </span>
                                        </p>
                                        <p className="mt-3 text-2xl text-adress-600 font-roboto">{hotel.name}</p>
                                        <p className="font-roboto font-normal text-base leading-[15.35px]">{hotel.pricePerNight}</p>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    ))}



                </div>

        </div>
      

  );
}
