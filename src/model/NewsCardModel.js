import React, { Component } from 'react';
import NewsCard from '../view/NewsCard/NewsCard'

export default class NewsCardModel extends Component {


    render() {
        const { image1, image2, image3, text } = this.props;

        return (
            <div>
                <NewsCard image={image1} title="Notícia 1" text={text}></NewsCard>
                <NewsCard image={image2} title="Notícia 2" text={text}></NewsCard>
                <NewsCard image={image3} title="Notícia 3" text={text}></NewsCard>
            </div>
        )
    }

}