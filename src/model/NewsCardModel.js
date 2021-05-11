import React, { Component } from 'react';
import NewsCardController from '../controllers/NewsCardController'

export default class NewsCardModel extends Component {

    render() {

        const text = `Lorem Ipsum is simply dummy text of the printing and 
typesetting industry. Lorem Ipsum has been the industry's standard 
dummy text ever since the 1500s, when an unknown printer took a galley 
of type and scrambled it to make a type specimen book. It has survived not 
only five centuries, but also the leap into electronic typesetting, remaining 
essentially unchanged. It was popularised in the 1960s with the release of Letraset 
sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
software like Aldus PageMaker including versions of Lorem Ipsum.`;

        const image1 = `https://s2.glbimg.com/QqEDyJyWVPTI9tU-5izKpJls6UE=/620x520/smart/
e.glbimg.com/og/ed/f/original/2020/11/30/baby-yoda.jpg`;

        const image2 = `https://static.wikia.nocookie.net/godofwar/images/d/dc/Kratos.jpg/revision/latest?cb=20170725220420&path-prefix=pt-br`;

        const image3 = `https://miro.medium.com/max/485/1*NPFbsnC4K9b5xPbEz6LoJw.jpeg`;


        return (
            <div>
                <NewsCardController
                    image1={image1}
                    image2={image2}
                    image3={image3}
                    text={text}>
                </NewsCardController>
            </div>
        )
    }
}