"use client"

import React, { useEffect, useState } from 'react'
import { useGetData } from '../hooks/useRequestData';
import { BiAccessibility, BiAnchor, BiChild, BiCycling, BiJoystick, BiShower, BiSignal5, BiGasPump, BiBone, BiCar, BiDesktop, BiDrink, BiDumbbell, BiFootball, } from "react-icons/bi";

import Image from 'next/image';


const page = () => {

    const { error, loading, data, getData } = useGetData();

    const [selected, setSelected] = useState(null)

    const Icondata = [
        {
            question: 'Question 1',
            answer: 'Lorem something something'
        }
    ]

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    useEffect(() => {
        // Kald hok som bruger axios til at hente data fra API'et
        getData("http://dev-api.guestbox.dk/Accommodation/GetAllAccommodations?DomainId=1")

    }, [])



    return (
        <>

            <main className="flex flex-col items-center justify-between min-h-screen px-10 py-5">

                <div className='my-5 seasons2'>

                    <div className='Gallery'>

                        <div className="container px-5 py-1 m-2 mx-auto lg:px-32 lg:pt-4">
                            <div className="flex flex-wrap -m-1 md:-m-2">
                                <div className="flex flex-wrap w-1/2">

                                    <div className="w-full p-1 md:p-2">
                                        <img
                                            alt="gallery"
                                            className="block object-cover object-center w-full h-full rounded-lg"
                                            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                                    </div>
                                </div>
                                <div className="flex flex-wrap w-1/2">
                                    <div className="w-full p-1 md:p-2">
                                        <img
                                            alt="gallery"
                                            className="block object-cover object-center w-full h-full rounded-lg"
                                            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                    </div>
                                    <div className="w-1/2 p-1 md:p-2">
                                        <img
                                            alt="gallery"
                                            className="block object-cover object-center w-full h-full rounded-lg"
                                            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
                                    </div>
                                    <div className="w-1/2 p-1 md:p-2">
                                        <img
                                            alt="gallery"
                                            className="block object-cover object-center w-full h-full rounded-lg"
                                            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='flex px-10'>
                    {

                        data && data.slice(0, 1).map((d, index) =>

                            <div className='px-1' key={index}>
                                <div className=''>
                                    <h2>{d.name}</h2>
                                    <p>{d.texts[3].text}</p>
                                </div>
                            </div>

                        )

                    }
                    {/* <h2 className=''>TEXT GOES HERE</h2>
                    <p>Yep here is the texts</p> */}

                    <div className='flex p-2 ml-5 infobox'>
                        <ul>
                            <li className='my-2'>Der er plads til x sovende gæster</li>
                            <li className='my-2'>Alt inkluderet i én pris</li>
                            <li className='my-2'>Tryg afbetaling</li>
                            <button className='px-4 py-2 mb-2 font-semibold text-white bg-black border border-black rounded hover:bg-white hover:text-black'>Tjek tilgængelighed</button>
                        </ul>
                    </div>

                </div>

                <div className='Gallery'>

                    <div className='Gallery'>

                        <div className="container p-5 py-1 m-2 mx-auto lg:px-32 lg:pt-4">
                            <div className="flex flex-wrap -m-1 md:-m-2">
                                <div className="flex flex-wrap w-1/2">
                                    <div className="w-1/2 p-1 md:p-2">
                                        <img
                                            alt="gallery"
                                            className="block object-cover object-center w-full h-full rounded-lg"
                                            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
                                    </div>
                                    <div className="w-1/2 p-1 md:p-2">
                                        <img
                                            alt="gallery"
                                            className="block object-cover object-center w-full h-full rounded-lg"
                                            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
                                    </div>
                                    <div className="w-full p-1 md:p-2">
                                        <img
                                            alt="gallery"
                                            className="block object-cover object-center w-full h-full rounded-lg"
                                            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                                    </div>
                                </div>
                                <div className="flex flex-wrap w-1/2">
                                    <div className="w-full p-1 md:p-2">
                                        <img
                                            alt="gallery"
                                            className="block object-cover object-center w-full h-full rounded-lg"
                                            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                    </div>
                                    <div className="w-1/2 p-1 md:p-2">
                                        <img
                                            alt="gallery"
                                            className="block object-cover object-center w-full h-full rounded-lg"
                                            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
                                    </div>
                                    <div className="w-1/2 p-1 md:p-2">
                                        <img
                                            alt="gallery"
                                            className="block object-cover object-center w-full h-full rounded-lg"
                                            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
                                    </div>
                                </div>
                                
                                <button className='p-2 mx-auto font-semibold text-white bg-black border border-black rounded hover:bg-white hover:text-black'>Se flere billeder</button>
                            
                            </div>
                        </div>


                    </div>


                </div>

                <div className='wrapper'>

                    <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />

                    <h2 className='text-2xl font-bold'>Udvalgte features</h2>

                    <div className='flex my-2 justify-evenly'>
                        <BiBone size={70} color='gray' />
                        <BiCar size={70} color='gray' />
                        <BiDesktop size={70} color='gray' />
                        <BiDumbbell size={70} color='gray' />
                    </div>
                    <div className='flex my-2 justify-evenly'>
                        <BiDrink size={70} color='gray' />
                        <BiFootball size={70} color='gray' />
                        <BiSignal5 size={70} color='gray' />
                        <BiChild size={70} color='gray' />
                    </div>

                    <div className='HiddenFeatures'>
                        {Icondata.map((item,i)=>
                        <div className='item'>
                            <div className='title' onClick={() => toggle(i)}>
                                <h2 className='text-lg'>Vis alle features</h2>
                                <span>{selected === i ? '-' : '+'}</span>
                            </div>
                            <div className={selected === i ? 'content show' : 'content'}>
                                <div className='flex justify-evenly'>
                                    <BiAccessibility size={50} color='gray' />
                                    <p>Kørestol</p>
                                    <BiAnchor size={50} color='gray' /> 
                                    <p>Strandadgang</p>
                                    <BiCycling size={50} color='gray' /> 
                                    <p>Cykel</p>
                                    <BiJoystick size={50} color='gray' /> 
                                    <p>Spilkonsol</p>
                                    <BiShower size={50} color='gray' /> 
                                    <p>Udendørsbruser</p>
                                    <BiGasPump size={50} color='gray' /> 
                                    <p>Elbil ladestand</p>
                                </div>
                            </div>
                        </div>
                            )}
                    </div>

                    <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />

                    <div className='flex justify-between mt-5'>
                        <div className='AboutHost'>
                            <h2 className='text-xl font-bold'>Lidt om værten</h2>
                            <Image src='/Yusuf_Tamina.png' alt='Hosts' width={200} height={200} className='mx-auto rounded-full' />
                            <p>Vi er Yusuf og Tamina, begge fra Brønnerup, <br />
                                og vi har gjort en drøm til virkelighed med <br />
                                dette sommerhus.</p>
                            <a href="#">
                                <p className='underline hover:text-blue-400'>Mere om Yusuf og Tamina &#10132;</p>
                            </a>
                        </div>
                        <div className='VacationHome'>
                            <h2 className='text-xl font-bold'>Sommerhuset</h2>
                            <p className='mt-40'>AxB soveværelser. <br />
                                Sengelinned og håndklæder er <br />
                                inkluderet. <br />
                                Opladning af elbil tilladt.
                            </p>
                        </div>
                        <div className='GoodToKnow'>
                            <h2 className='text-xl font-bold'>Værd at vide</h2>
                            <p className='mt-40'>
                                Ankomst efter 12:00 <br />
                                Afrejse inden 11:00 <br />
                                Fester er tilladt <br />
                                Rygning skal helst foregå ude <br />
                                Turistgebyr ikke inkluderet.
                            </p>
                        </div>
                        <div className='Cancellation'>
                            <h2 className='text-xl font-bold'>Afbestillingspolitik</h2>
                            <p className='mt-40'>Få fuld refundering, hvis du <br />
                                afbestiller indtil 60 dage før <br />
                                ankomstdag.</p>
                            <a href="#">
                                <p className='underline hover:text-blue-400'>Læs vilkår her &#10132;</p>
                            </a>
                        </div>
                    </div>

                    <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />

                </div>

                <div>
                    <h2>Destination</h2>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d236152.08088166962!2d10.427506999964711!3d56.365846790659724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sda!2sdk!4v1686046318349!5m2!1sda!2sdk" width="700" height="450" loading="lazy"></iframe>

                </div>

            </main>


        </>
    )
}

export default page