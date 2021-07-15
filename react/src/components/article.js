import React from "react";
import axios from 'axios';
import '../styles/Article.css';
import priceline from '../images/priceline.jpeg';
import longbottom from '../images/longbottom.jpg';
import lockdownpay from '../images/lockdownpay.jpeg';

function Articles() {
    const [articles, setArticles] = React.useState([]);

    React.useEffect(() => {
        axios.get('/all', {crossDomain: true})
        .then(response => setArticles(response.data));
    }, []);
    function refresh() {
        axios.get('/all', {crossDomain: true})
        .then(response => response.data);
    }
    function imgToDisplay(idx) {
        switch(idx) {
            case 0: 
                return priceline;
            case 1: 
                return longbottom;
            default:
                return lockdownpay;
        }
    }

    return (
        <div>
            <h3> Articles</h3>
            <button data-test-id="refreshBtn" onClick={refresh}>Refresh</button>
            <ul className="Articles">
                {articles.map((article, idx) => (
                    <div className="Article" key={article.id}>
                        <div>
                            <img src={imgToDisplay(idx)} className="Article-Img" alt="logo" />
                        </div>
                        <div className="Story">
                            <li key={article.id}>
                                <span className="Title">{article.title}</span>
                                <p> {article.body} </p>
                                <span> Tags [ <span className="Tag">{article.tags.replace(/,/g, " - ")}</span>] </span>
                            </li>
                        </div>

                    </div>
                    
                ))}
            </ul>
        </div>
    );
}

export default Articles;