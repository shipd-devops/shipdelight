'use client'
import { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';
// IMAGES
import DivderImage from '../../../public/images/divider.webp'
import DummyImage from '../../../public/images/dummy-case.webp'
import DummyImage2 from '../../../public/images/dummy-case-2.webp'
import DummyImage3 from '../../../public/images/dummy-case-3.webp'
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
  
export default function Home() {
    const cardData = [
        {
            image: DummyImage,
            text: 'Global manufacturer & Retailer',
            title: 'Lorem Ipsum is a dummy text which can replace by original',
            link: '/blog-detail',
            category: 'Delivery',
            time: '5 Minutes',
            date: '12/10/2023'
        },
        {
            image: DummyImage,
            text: 'Global manufacturer & Retailer',
            title: 'Lorem Ipsum is a dummy text which can replace by original',
            link: '/blog-detail',
            category: 'Delivery',
            time: '5 Minutes',
            date: '12/10/2023'
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
                            <p>Global manufacturer & Retailer</p>
                        </div>
                        <h1 className="small">Innovating logistics for convenience stores</h1>
                        <p className="title-desc">Lorem ipsum dolor sit amet consectetur. Ullamcorper pellentesque dictum velit dolor nulla. Bibendum aliquet ac id diam nunc eu nibh. penatibus mattis nisi nisl massa. Erat masselerisque cras. In justo varius id vitae suspendisse proin faucibus lectus.</p>
                    </div>
                    <div className="blog-details">
                        <div className='blog-details-inner'>
                            <div>
                                <h3>Challenges </h3>
                                <Image alt='DivderImage' src={DivderImage} />
                                <Image className='blog-image' alt='blog-image' src={DummyImage3} />
                            </div>
                            <div>
                                <h4>Challenge Title</h4>
                                <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper pellentesque dictum velit dolor nulla. Bibendum aliquet ac id diam nunc eu nibh. penatibus mattis nisi nisl massa. Erat masselerisque cras. In justo varius id vitae suspendisse proin faucibus lectus.</p>
                            </div>
                            <div>
                                <h4>Challenge Title</h4>
                                <p>Lorem ipsum dolor sit amet consectetur. Odio aliquet id sagittis ullamcorper. Dictumst pretium urna ac et feugiat pretium nullam rhoncus. Purus vel volutpat eget vulputate. Molestie congue mauris in arcu sed auctor maecenas. Nibh lorem amet tincidunt elit velit convallis tristique donec vitae.</p>
                                <p> Donec risus suscipit nec tincidunt bibendum non. Sit mattis parturient ultrices est egestas. Amet cras aliquet sociis praesent bibendum sed magna platea. Metus ultricies sit nullam at viverra lacinia non. Turpis nullam condimentum massa ac fermentum. Tincidunt vel augue pellentesque turpis luctus nibh risus fermentum. Nibh ut mus ut integer nibh. Volutpat egestas rhoncus justo mauris sed odio sit. In nunc eget orci in. Sagittis sed erat tempus vitae consectetur maecenas.</p>
                            </div>
                            <div>
                                <h4>Challenge Title</h4>
                                <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper pellentesque dictum velit dolor nulla. Bibendum aliquet ac id diam nunc eu nibh. penatibus mattis nisi nisl massa. Erat masselerisque cras. In justo varius id vitae suspendisse proin faucibus lectus.</p>
                            </div>
                        </div>
                        <div className='blog-details-inner'>
                            <div>
                                <h3>Solutions</h3>
                                <Image alt='DivderImage' src={DivderImage} />
                                <Image className='blog-image' alt='blog-image' src={DummyImage} />
                            </div>
                            <div>
                                <h4>Solution Title</h4>
                                <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper pellentesque dictum velit dolor nulla. Bibendum aliquet ac id diam nunc eu nibh. penatibus mattis nisi nisl massa. Erat masselerisque cras. In justo varius id vitae suspendisse proin faucibus lectus.</p>
                                <p>Lorem ipsum dolor sit amet consectetur. Odio aliquet id sagittis ullamcorper. Dictumst pretium urna ac et feugiat pretium nullam rhoncus. Purus vel volutpat eget vulputate. Molestie congue mauris in arcu sed auctor maecenas. Nibh lorem amet tincidunt elit velit convallis tristique donec vitae. Donec risus suscipit nec tincidunt bibendum non. Sit mattis parturient ultrices est egestas. Amet cras aliquet sociis praesent bibendum sed magna platea. Metus ultricies sit nullam at viverra lacinia non. Turpis nullam condimentum massa ac fermentum. Tincidunt vel augue pellentesque turpis luctus nibh risus fermentum. Nibh ut mus ut integer nibh. Volutpat egestas rhoncus justo mauris sed odio sit. In nunc eget orci in. Sagittis sed erat tempus vitae consectetur maecenas.</p>
                                <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper pellentesque dictum velit dolor nulla. Bibendum aliquet ac id diam nunc eu nibh. penatibus mattis nisi nisl massa. Erat masselerisque cras. In justo varius id vitae suspendisse proin faucibus lectus.</p>
                            </div>
                        </div>
                        <div className='blog-details-inner'>
                            <div>
                                <h3>RESULTS</h3>
                                <span></span>
                                <Image alt='DivderImage' src={DivderImage} />
                            </div>
                            <div>
                                <div className="blog-details--qoute">
                                    <Quote />
                                    <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper pellentesque dictum velit dolor nulla. Bibendum aliquet ac id diam nunc eu nibh. penatibus mattis nisi nisl massa. Erat masselerisque cras. In justo varius id vitae suspendisse proin faucibus lectus.</p>
                                </div>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper pellentesque dictum velit dolor nulla. Bibendum aliquet ac id diam nunc eu nibh. penatibus mattis nisi nisl massa. Erat masselerisque cras. In justo varius id vitae suspendisse proin faucibus lectus.</p>
                                <p>Lorem ipsum dolor sit amet consectetur. Odio aliquet id sagittis ullamcorper. Dictumst pretium urna ac et feugiat pretium nullam rhoncus. Purus vel volutpat eget vulputate. Molestie congue mauris in arcu sed auctor maecenas. Nibh lorem amet tincidunt elit velit convallis tristique donec vitae. Donec risus suscipit nec tincidunt bibendum non. Sit mattis parturient ultrices est egestas. Amet cras aliquet sociis praesent bibendum sed magna platea. Metus ultricies sit nullam at viverra lacinia non. Turpis nullam condimentum massa ac fermentum. Tincidunt vel augue pellentesque turpis luctus nibh risus fermentum. Nibh ut mus ut integer nibh. Volutpat egestas rhoncus justo mauris sed odio sit. In nunc eget orci in. Sagittis sed erat tempus vitae consectetur maecenas.</p>
                                <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper pellentesque dictum velit dolor nulla. Bibendum aliquet ac id diam nunc eu nibh. penatibus mattis nisi nisl massa. Erat masselerisque cras. In justo varius id vitae suspendisse proin faucibus lectus.</p>
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
