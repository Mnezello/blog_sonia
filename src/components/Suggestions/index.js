import React, { useEffect, useState } from 'react';
import { Waypoint } from 'react-waypoint';
import sanityClient from '../../services/sanity-client';
import BlockContent from "@sanity/block-content-to-react";
//import { Carousel } from '@trendyol-js/react-carousel';
import { MdFileDownloadOff } from 'react-icons/md';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';

export default function Suggetions() {
    const [allPosts, setAllPosts] = useState(null);

    useEffect(() => {
        sanityClient
        .fetch(
            `*[_type == "post"] | order(_createdAt desc){
                title,
                mainImage{
                    asset->{
                      _id,
                      url
                    }
                },
                "name": author->name,   
                body
            }`
        )
        .then((data) => setAllPosts(data))
        .catch(console.error);
    }, []); 

    let itemNumber;

    function mediaQuery(){
        if (window.matchMedia("(max-width: 576px)").matches) {
            itemNumber = 1;
        } else if (window.matchMedia("(max-width: 992px)").matches){
            itemNumber = 2
        } else {
            itemNumber = 3;
        } 
    }

    mediaQuery();

    return (
        <div className="suggestions-bg">
            <div className="container">
                <div className="suggestions-container">
                    <h1>Sugestões</h1>
                    <Waypoint onEnter={()=> Array.from(document.querySelectorAll(".suggestions-text")).forEach(el => el.classList.add("enhanced"))}/>
                    <div className="row">
                        <div className="col-12" >
                            
                                <div className="loading-error">
                                    <MdFileDownloadOff className="error-icon-suggestions" size={54}/>
                                    <h2>
                                        As sugestões não foram carregadas!
                                    </h2>
                                    <p>
                                        Tente recarregar a página ou acessá-la mais tarde.
                                    </p>
                                </div>
                        
                                
                             
                        </div>
                    </div>
                </div>
            </div>
            <div id="contato"/>
        </div>
    )
}
