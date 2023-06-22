"use client";

import { useEffect, useState } from "react";

import { Content } from "./Interface";

const UseFetch = (url: string) => {

    const [data, setData] = useState<Content[] | undefined>(undefined);



        fetch(url, {

            headers: {

                "Content-Type": "application/json",
                Accept: "application/json"

            } // End Headers


        })//End Fetch

            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err))




    return(data)

}

export default UseFetch;

