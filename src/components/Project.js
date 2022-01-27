import React from 'react';

export default function Project({name, link, description, image}) {


    return(
        <div class="Tiles runbuddy">
            <a href={link}><div class="Tile-img">
            </div>
            <div class="img-text">
                <h4>{name}</h4>
                <p>{description}</p>
                <img src={image} />
            </div></a>

        </div>
    );
}