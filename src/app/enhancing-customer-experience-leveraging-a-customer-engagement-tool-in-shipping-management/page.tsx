'use client'
import { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';
// IMAGES
import DivderImage from '../../../public/images/divider.webp'
import DummyImage from '../../../public/images/dummy-case.webp'
import BlogImage from '../../../public/images/blog1-1.webp'
import BlogImage2 from '../../../public/images/blog1-2.webp'
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
            image: BlogImg2,
            text: 'Export Hub India',
            title: 'Export Hub India: Your Gateway to Global Success',
            link: '/export-hub-india-your-gateway-to-global-success',
            category: 'Delivery',
            time: '3 Minutes',
            date: '03/08/2023'
        },
        {
            image: BlogImg3,
            text: 'Streamlining Shipping Processes',
            title: 'Streamlining Shipping Processes: How a Shipping Management Platform Can Revolutionize Your Logistics',
            link: '/streamlining-shipping-processes',
            category: 'Delivery',
            time: '5 Minutes',
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
                        <h1 className="small">Enhancing Customer Experience: Leveraging a Customer Engagement Tool in Shipping Management</h1>
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
                                <h4>Introduction</h4>
                                <p>In today’s business landscape, delivering exceptional customer experience is crucial for the success of any direct-to-consumer (D2C) brand. More than competitors, Brands have to compete with the Marketplaces on which they are listed. Consumers have greater trust in marketplaces in terms of Timely Delivery, Assurity of Return and Refund, Condition of the item, etc, hence they would prefer to order your products from the marketplace rather than the owned website. This puts pressure on brands as most owners would agree that marketplaces are good for visibility but not necessarily for profits. Sales from marketplaces are also futile as the brands don’t receive any data about their own customers, leaving them blind.</p>
                            </div>
                            <div>
                                <Image alt='blog-image' src={BlogImage2} />
                            </div>
                            <div>
                                <h4>Importance of Customer Engagement in the Shipping Industry:</h4>
                                <p>Customer engagement in the shipping industry goes beyond simply delivering packages on time. It involves actively involving customers throughout the entire shipping journey. By keeping customers informed and engaged, D2C brands can create a positive post-purchase experience that not only delights customers but also strengthens brand loyalty. Engaged customers are more likely to make repeat purchases and recommend the brand to others, contributing to the overall success of the business.</p>
                            </div>
                            <div>
                                <h4>Role of a Customer Engagement Tool in Keeping Customers Informed and Satisfied:</h4>
                                <p>A customer engagement tool acts as a centralized hub for managing and automating communication with customers during the shipping process. It enables D2C brands to provide real-time updates, tracking information, and personalized notifications to customers, keeping them informed about the status of their orders. By leveraging such a tool, brands can address potential concerns, manage expectations, and minimize WISMOs (Where is my order?) caused by uncertainty or lack of information.</p>
                                <p>With a customer engagement tool, brands can send proactive notifications about order confirmations, shipping updates, estimated delivery times, and even unexpected delays. This level of transparency and communication instill confidence in customers, as they feel informed and reassured about the progress of their shipments. Additionally, by offering self-service options through the tool, customers can actively track their orders, request changes, and communicate directly with customer support if needed, further enhancing the overall experience.</p>
                            </div>
                            <div>
                                <h4>Providing Actionable Options:</h4>
                                <p>If an order is undelivered, customers can seamlessly connect with the brand directly from the page, ensuring efficient communication and prompt resolution. For delivered orders requiring returns or exchanges, customers can initiate the necessary actions without navigating away from the page.</p>
                            </div>
                            <div>
                                <h4>Integration with WhatsApp, SMS, and Email for Enhanced Communication:</h4>
                                <p>To truly enhance customer experience, a customer engagement tool should seamlessly integrate with popular communication channels such as WhatsApp, SMS, and email. Here’s how these integrations can benefit D2C brands.</p>
                            </div>
                            <div>
                                <h4>SKU-Level Warranty:</h4>
                                <p>Warranty management Should be automated. Brands should maintain SKU (Stock Keeping Unit) level warranty for returns and exchanges. Customers then can opt for Return or Exchange within the Brand Policies.</p>
                            </div>
                            <div>
                                <h4>Proactive Customer Service:</h4>
                                <p>Brands need to be proactive in addressing customer needs. With tools such as the Net Promoter Score (NPS) Feedback system, brands can gain valuable insights into customer satisfaction by actively monitoring and responding to feedback, fostering stronger customer relationships.</p>
                            </div>
                            <div>
                                <h4>Clickable Cross-Selling Section:</h4>
                                <p>Based on customers’ purchase history and preferences, personalized recommendations should be presented to spark curiosity and encourage additional purchases. A brand Experience Page featuring a clickable section dedicated to cross-selling would help sales goals.</p>
                            </div>
                            <div>
                                <h4>Conclusion:</h4>
                                <p>For emerging and established D2C brands, delivering an exceptional post-purchase experience is paramount. By leveraging a customer engagement tool that integrates with communication platforms like WhatsApp, SMS, and email, brands can enhance customer experience, build stronger relationships, and streamline their supply operations.</p>
                                <p>At ShipDelight we understand the pain points involved in the post-purchase experience and address them at the root level. ShipDelight’s Branded Experience Page not only allows your customers to track their orders in real-time but also provides options to initiate exchanges, returns, and refunds according to your policies. Want to know more? Feel free to connect with us today.</p>
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
