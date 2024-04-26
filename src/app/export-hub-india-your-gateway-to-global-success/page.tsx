'use client'
import { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';
// IMAGES
import DivderImage from '../../../public/images/divider.webp'
import DummyImage from '../../../public/images/dummy-case.webp'
import BlogImage from '../../../public/images/blog-2.webp'
import BlogImage2 from '../../../public/images/blog1-2.webp'
import BlogImg3 from '../../../public/images/blog-3.webp'
import BlogImg4 from '../../../public/images/blog-4.webp'
import Quote from '../../../public/images/quote.svg'
import Image from 'next/image';
// import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';

// const endpoint = 'https://shipdelight.com/graphql'; // Your WordPress GraphQL endpoint
// const graphQLClient = new GraphQLClient(endpoint);

// const client = new ApolloClient({
//     uri: 'https://shipdelight.com/graphql',
//     cache: new InMemoryCache(),
// });

// const YOUR_QUERY = gql`
//     query {
//       posts {
//         nodes {
//           id
//           title
//           content
//         }
//       }
//     }
// `;


interface Post {
    id: string;
    title: string;
    content: string;
}

export default function BlogDetail() {
    const cardData = [
        {
            image: BlogImg3,
            text: 'Streamlining Shipping Processes',
            title: 'Streamlining Shipping Processes: How a Shipping Management Platform Can Revolutionize Your Logistics',
            link: '/streamlining-shipping-processes',
            category: 'Delivery',
            time: '5 Minutes',
            date: '03/08/2023'
        },
        {
            image: BlogImg4,
            text: 'Effective Strategies to Reduce RTO in E-commerce',
            title: 'Effective Strategies to Reduce RTO in E-commerce',
            link: '/effective-strategies-to-reduce-rto-in-e-commerce',
            category: 'Delivery',
            time: '5 Minutes',
            date: '02/08/2023'
        },
    ];
    // API EXAMPLES
    // const [data, setData] = useState<any>(null);
    // const { loading, error, data: queryData } = useQuery(YOUR_QUERY, {
    //     client,
    // });
    // useEffect(() => {
    //     if (queryData) {
    //       setData(queryData);
    //     }
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('https://shipdelight.com/wp-json/wp/v2/posts');
    //             const result = await response.json();
    //             console.log(result, 'result')
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //         };
    //     fetchData();  
    //   }, [queryData]);
    return (
        <main>
            <section className="common-section normal-section">
                <div className="container blog">
                    <div className="blog--title">
                        <div className="bread-crumb">
                            <Link href="/blogs">Blog</Link>
                            <p className='a'>/</p>
                            <p>Delivery</p>
                        </div>
                        <h1 className="small">Export Hub India: Your Gateway to Global Success</h1>
                        {/* <p className="title-desc">Lorem ipsum dolor sit amet consectetur. Ullamcorper pellentesque dictum velit dolor nulla. Bibendum aliquet ac id diam nunc eu nibh. penatibus mattis nisi nisl massa. Erat masselerisque cras. In justo varius id vitae suspendisse proin faucibus lectus.</p> */}
                    </div>
                    <div className="blog-details">
                        <div className='blog-details-inner'>
                            <div>
                                {/* <h3>Challenges </h3> */}
                                {/* <Image alt='DivderImage' src={DivderImage} /> */}
                                <Image className='blog-image' alt='blog-image' src={BlogImage} />
                            </div>
                            <div>
                                {/* <h4>Introduction</h4> */}
                                <p>There’s recent news about Procter & Gamble investing INR 2,000 crore to set up an export hub in India. This development is credited to the robust growth and “optimistic” mid and long-term prospects of India as per the company’s country CEO LV Vaidyanathan.</p>
                                <p>So, what is an export hub? And what significance does it hold for us logistics personnel?</p>
                                <p>Export Hub focuses on exports to developed markets through retail networks and distributors. In this case, P&G will be utilising its current network to export required raw materials and finished goods from the country to its global counterparts.</p>
                            </div>
                            <div>
                                <Image alt='blog-image' src={BlogImage2} />
                            </div>
                            <div>
                                {/* <h4>Importance of Customer Engagement in the Shipping Industry:</h4> */}
                                <p>Now this was in the context of a private company, but there are public-shared or co-owned export hubs which are about the search for and connection of exporters with potential buyers in the global market in order to create successful and long-term business relationships between them.</p>
                                <p>These projects or platforms majorly deal in B2B movements supporting local players to tap into the global market with ease. Export Hubs like these are secure, functional and act as reliable foreign B2B marketplaces for global buyers. Only the best producers that are most suited for exports are selected for the Export Hub program.</p>
                                <p>Furthermore, our Indian Government under the ‘Districts as Export Hubs Initiative’, identifies products and services with export potential for all districts of the country. The list of such identified products and services is regularly updated on the basis of inputs received from the States/UTs. </p>
                                <p>Under this initiative, district export action plans have been prepared for such identified products and services for overseas markets. These plans also include identifying and addressing challenges for exports of such identified products/services, improving supply chains, market accessibility and handholding for increasing exports.</p>
                                <p>For brands looking to initiate their presence in global markets, starting with a reliable export hub program would be an ideal way to start. Simply going to Exports Hub India, District Export Hub (DEH) by the Indian Brand Equity Foundation or the Ministry of Ecommerce website would do the trick.</p>
                            </div>
                           

                        </div>
                    </div>
                    <h3>You may also like these <span>blogs</span></h3>
                    <BlogCard relatedPost cardData={cardData} />
                </div>
            </section>
        </main>
    );
}
