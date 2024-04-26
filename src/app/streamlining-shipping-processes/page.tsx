'use client'
import { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';
// IMAGES
import BlogImg1 from '../../../public/images/blog-1.webp'
import BlogImage3 from '../../../public/images/blog1-2.webp'
import BlogImage from '../../../public/images/blog-3.webp'
import BlogImage2 from '../../../public/images/blog3-1.webp'
import BlogImg2 from '../../../public/images/blog-2.webp'
import BlogImg3 from '../../../public/images/blog-3.webp'
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
            image: BlogImg1,
            text: 'Enhancing Customer Experience',
            title: 'Enhancing Customer Experience: Leveraging a Customer Engagement Tool in Shipping Management',
            link: '/enhancing-customer-experience-leveraging-a-customer-engagement-tool-in-shipping-management',
            category: 'Delivery',
            time: '4 Minutes',
            date: '03/08/2023'
        },
        {
            image: BlogImg2,
            text: 'Export Hub India',
            title: 'Export Hub India: Your Gateway to Global Success',
            link: '/export-hub-india-your-gateway-to-global-success',
            category: 'Delivery',
            time: '3 Minutes',
            date: '03/08/2023'
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
                        <h1 className="small">Streamlining Shipping Processes: How a Shipping Management Platform Can Revolutionize Your Logistics</h1>
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
                                <h3>Introduction</h3>
                                <p>In the fast-paced world of e-commerce, managing shipping and order fulfilment can be a complex and challenging task for businesses, especially for emerging and established Direct-to-Consumer (D2C) brands. With the rising expectations of customers and the need for efficient supply chain operations, it has become crucial to streamline shipping processes. In this blog, we will explore the challenges faced by businesses in managing shipping and order fulfilment manually and discuss how a comprehensive shipping management platform can revolutionize logistics, simplifying operations and enhancing the post-purchase experience for both customers and the operations team.</p>
                            </div>
                            <div>
                                <h3>Challenges in Managing Shipping and Order Fulfilment:</h3>
                            </div>
                            <div>
                                <h4>Manual Processes and Lack of Automation:</h4>
                                <p>Many businesses we have talked with still rely on simple OMS given by aggregators to manage their shipping operations. This approach is time-consuming, prone to errors as there is no practical way to evaluate the performance of the courier partners, and can lead to inefficiencies e.g., manual NDR processes which result in RTOs. With increasing order volumes, it becomes challenging to keep track of shipments, inventory, and customer information accurately.</p>
                            </div>
                            <div>
                                <h4>Inefficient Order Management:</h4>
                                <p> Businesses struggle to effectively manage and track orders with a basic OMS, leading to delays and dissatisfied customers. Challenges include improper LSP tracking, lack of real-time inventory visibility, and managing multiple marketplace listings. These result in delivery errors, operational inefficiencies, and increased costs.</p>
                            </div>
                            <div>
                                <h4>Complexity in Reverse Logistics:</h4>
                                <p>Dealing with returns, exchanges, and refunds can be a logistical nightmare for businesses. For example, businesses may want their returns to be handled by ABC and exchanges from different Providers. Handling various aspects of the RVP process is similar to trying to row two or more boats at once. Without proper systems in place, reverse logistics processes can be time-consuming, leading to delays in processing returns and customer dissatisfaction. Managing inventory for exchanges and refunds can also become challenging without a streamlined system.</p>
                            </div>
                            <div>
                                <h3>Benefits of Using a Comprehensive Shipping Management Platform:</h3>
                                <br />
                                <Image className='blog-image' alt='blog-image' src={BlogImage2} />
                            </div>
                            <div>
                                <h4>Automated Order Processing:</h4>
                                <p> A comprehensive shipping management platform automates order processing, eliminating manual errors and streamlining the fulfilment process. By integrating with e-commerce platforms, the platform can automatically import orders, assign shipping carriers, generate shipping labels, and update order statuses in real-time.</p>
                            </div>
                            <div>
                                <h4>Seamless Carrier Integration:</h4>
                                <p>Direct integration with multiple shipping carriers, allows businesses to get the best rates from the source, choose the most cost-effective shipping options, and manage partner efficiently. </p>
                            </div>
                            <div>
                                <h4>Centralized Order Management:</h4>
                                <p>With a shipping management platform, businesses gain access to a centralized dashboard where they can monitor and track all their courier from a single interface. This enables real-time visibility into order statuses, simplifies order prioritization with AI-based business logic, and helps identify potential bottlenecks or issues that may impact delivery timelines.</p>
                            </div>
                            <div>
                                <h4>Efficient Reverse/Exchange Modules:</h4>
                                <p>A comprehensive shipping management platform that includes robust reverse logistics capabilities. It enables businesses to process returns, exchanges, and refunds efficiently, reducing the time and effort required for handling such requests. The platform automates the return process, provides return shipping labels, updates.</p>
                            </div>
                            <div>
                                <h4>Analytics and Reporting:</h4>
                                <p>A comprehensive shipping management platform offers robust analytics and reporting capabilities. Businesses can gain valuable insights into shipping costs, carrier performance, order fulfilment efficiency, and customer satisfaction metrics. For example, if you identify your premium audience in the XYZ segment cluster. You can now create personalized offers for them and track the performance of couriers to ensure their deliverability. These types of insights enable data-driven decision-making, identify areas for improvement, and optimize shipping operations for cost-effectiveness and customer delight.</p>
                            </div>
                            <div>
                                <h4>Enhanced Customer Experience:</h4>
                                <p>By leveraging a shipping management platform, businesses can provide their customers with a seamless post-purchase experience via their branded tracking pages, reinforcing their brand image throughout the shipping journey. Real-time tracking updates, automated delivery notifications, and easy return/ exchange processes contribute to customer satisfaction and loyalty.</p>
                            </div>
                            <div>
                                <h4>Conclusion:</h4>
                                <p>In today’s competitive market, brands invest significant time and resources into crafting exceptional pre-purchase experiences. However, when it comes to the post-purchase journey, control often slips away as third-party providers take over. A shipping Management Platform help you design and control the post-purchase experience.</p>
                            </div>
                            <div>
                                <p>At ShipDelight, we understand the unique challenges faced by D2C brands, and our shipping management platform is designed to address those challenges head-on. To learn more about how ShipDelight can revolutionize your logistics and streamline your shipping processes, visit our website or get in touch with our team today.</p>
                            </div>
                            <Image alt='blog-image' src={BlogImage3} />

                        </div>
                    </div>
                    <h3>You may also like these <span>blogs</span></h3>
                    <BlogCard relatedPost cardData={cardData} />
                </div>
            </section>
        </main>
    );
}
