"use client"

import React, { useEffect } from 'react';
import { useGetData } from '../hooks/useRequestData';

import { BiFilter, BiGridAlt, BiListUl, BiMapAlt} from "react-icons/bi";

const firstPage = () => {

    const { error, loading, data, getData } = useGetData();

    useEffect(() => {
        // Kald hok som bruger axios til at hente data fra API'et
        getData("http://dev-api.guestbox.dk/Accommodation/GetAllAccommodations?DomainId=1")

    }, [])

    return (

        <main>

            {(error) && <Error />}

            {/* {(loading) && <Loading />} */}


            <div className='flex justify-center'>

                <div className='flex p-2 my-2 justify-evenly'>
                    <div className='py-3 bg-yellow-300 rounded-full'>
                        <button className='h-12 px-10 mx-12 text-2xl border border-gray-600 rounded-full hover:bg-blue-300'>Region</button>
                        <button className='h-12 px-10 mx-12 text-2xl border border-gray-600 rounded-full hover:bg-blue-300'><span className='flex'><BiFilter/>Sortér</span></button>
                        <button className='h-12 px-10 mx-12 text-2xl border border-gray-600 rounded-full hover:bg-blue-300'>Søg </button>
                    </div>

                </div>

            </div>

            <div className="flex justify-center h-auto">
                <div className='p-2 my-2 border border-gray-800 rounded-full'>
                    <button className="h-12 px-10 text-xl border border-gray-600 rounded-full hover:bg-gray-300"><span className='flex'><BiMapAlt className='mx-1'/>Kort</span></button>
                    <button className="h-12 px-10 text-xl border border-gray-600 rounded-full hover:bg-gray-300"><span className='flex'><BiGridAlt className='mx-1'/>Gitter</span></button>
                    <button className="h-12 px-10 text-xl border border-gray-600 rounded-full hover:bg-gray-300"><span className='flex'><BiListUl className='mx-1'/>Liste</span></button>
                </div>
            </div>

            <div className='grid p-5 text-center lg:grid-cols-4 lg:text-left seasons'>

                {data && data.slice(0, 4).map((d, index) =>

                    <div className="max-w-sm p-2 my-4 ml-12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-400" key={index}>
                        <a href="#">
                            <img className="rounded-lg listeImg" src={d.photos[0].photoUrl} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{d.name}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{d.texts[0].text.slice(0, 200)}...</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>




                )}

            </div>

            <div className='flex p-5 justify-evenly seasons2'>
                <div className='mt-8'>Alt inkluderet i pris</div>

                <svg className='ServiceIcons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M240 80H342.7c-7.9-19.5-20.4-36.5-36.2-49.9L240 80zm37.7-68.2C261.3 4.2 243.2 0 224 0c-53.7 0-99.7 33.1-118.7 80h81.4l91-68.2zM224 256c70.7 0 128-57.3 128-128c0-5.4-.3-10.8-1-16H97c-.7 5.2-1 10.6-1 16c0 70.7 57.3 128 128 128zM124 312.4c-9.7 3.1-19.1 7-28 11.7V512H243.7L181.5 408.2 124 312.4zm33-7.2L204.3 384H272c44.2 0 80 35.8 80 80c0 18-6 34.6-16 48h82.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3c-7.2 0-14.3 .4-21.3 1.3zM0 482.3C0 498.7 13.3 512 29.7 512H64V345.4C24.9 378.1 0 427.3 0 482.3zM320 464c0-26.5-21.5-48-48-48H223.5l57.1 95.2C303 507.2 320 487.6 320 464z" /></svg>

                <div className='mt-8'>Forbrug</div>

                <svg className='ServiceIcons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M208 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM320 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM416 32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0 160c0 27.6-11.7 52.5-30.4 70.1C422.1 275.7 448 310.8 448 352c0 53-43 96-96 96H160c-53 0-96-43-96-96s43-96 96-96h88.4c-15.2-17-24.4-39.4-24.4-64H96c-53 0-96 43-96 96V416c0 53 43 96 96 96H416c53 0 96-43 96-96V288c0-53-43-96-96-96zM160 288c-35.3 0-64 28.7-64 64s28.7 64 64 64H352c35.3 0 64-28.7 64-64s-28.7-64-64-64H320 160z" /></svg>

                <div className='mt-8'>Rengøring</div>

                <svg className='ServiceIcons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M96 0C78.3 0 64 14.3 64 32v96h64V32c0-17.7-14.3-32-32-32zM288 0c-17.7 0-32 14.3-32 32v96h64V32c0-17.7-14.3-32-32-32zM32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32v32c0 77.4 55 142 128 156.8V480c0 17.7 14.3 32 32 32s32-14.3 32-32V412.8C297 398 352 333.4 352 256V224c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z" /></svg>

                <div className='mt-8'>Forsikring</div>
            </div>

            <div className='grid p-5 text-center lg:grid-cols-4 lg:text-left seasons'>

                {data && data.slice(0, 4).map((d, index) =>

                    <div className="max-w-sm p-2 my-4 ml-12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-400" key={index}>
                        <a href="#">
                            <img className="rounded-lg listeImg" src={d.photos[0].photoUrl} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{d.name}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{d.texts[0].text.slice(0, 200)}...</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>

                )}

            </div>

            <div className='grid p-5 text-center lg:grid-cols-4 lg:text-left seasons'>

                {data && data.slice(1, 5).map((d, index) =>

                    <div className="max-w-sm p-2 my-4 ml-12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-400" key={index}>
                        <a href="#">
                            <img className="rounded-lg listeImg" src={d.photos[0].photoUrl} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{d.name}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{d.texts[0].text.slice(0, 200)}...</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>

                )}

            </div>

            <div className='grid mb-10 text-center lg:grid-cols-4 lg:text-left seasons'>

                {data && data.slice(0, 4).map((d, index) =>

                    <div className="max-w-sm p-2 my-4 ml-12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-400" key={index}>
                        <a href="#">
                            <img className="rounded-lg listeImg" src={d.photos[0].photoUrl} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{d.name}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{d.texts[0].text.slice(0, 200)}...</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>

                )}

            </div>




        </main>

    )

}

export default firstPage;