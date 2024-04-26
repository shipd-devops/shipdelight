'use client'
import { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';
// IMAGES
import DivderImage from '../../../public/images/divider.webp'
import DummyImage from '../../../public/images/dummy-case.webp'
import BlogImage from '../../../public/images/blog-4.webp'
import BlogImage2 from '../../../public/images/blog1-2.webp'
import BlogImage3 from '../../../public/images/blog4-1.webp'
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
                        <h1 className="small">Effective Strategies to Reduce RTO in E-commerce</h1>
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
                                <p>Return to Origin (RTO) is a common challenge in e-commerce, impacting profitability and customer satisfaction. To tackle this issue, proactive strategies are essential. In this blog post, we will explore proven approaches to reduce RTO and enhance the customer experience. By addressing delivery challenges, streamlining return processes, and optimizing operations, businesses can save time, and resources, and build customer trust.</p>
                                <p>Whether you’re a large e-commerce enterprise or a small business, reducing RTO is vital for long-term success. Discover the actionable steps that will empower you to effectively handle returns, improve customer satisfaction, and drive profitability in your e-commerce venture.</p>
                            </div>
                            <div>
                                <Image alt='blog-image' src={BlogImage2} />
                            </div>
                            <div>
                                <h3>Here are some ways you can reduce RTO in eCommerce shipping:</h3>
                            </div>
                            <div>
                                <h4>Double verify COD orders:</h4>
                                <p>Call or message to make sure that customers asking for COD are interested. Check contact details and delivery addresses. You can use AI-powered systems such as GoKwk or manual verification processes which are basically calling the customers to ensure the accuracy of provided details.</p>
                            </div>
                            <div>
                                <h4>Clear and Detailed Product Descriptions</h4>
                                <p>Try to provide complete information about the product, including its features, specifications, dimensions, and materials. This helps customers understand what they’re buying and reduces the chances of receiving the wrong or unsatisfactory products, which can lead to returns.</p>
                            </div>
                            <div>
                                <h4>Consistent Tracking Updates/ Ensure Fast Shipping</h4>
                                <p>You should keep your customers informed about their orders by providing real-time updates on the order status. Regular communication through SMS, email, or WhatsApp notifications helps customers track their deliveries, reducing uncertainty and minimizing returns.</p>
                            </div>
                            <div>
                                <h4>Prioritize Customer Delivery Preferences</h4>
                                <p>Brands should give customers the option to choose their preferred delivery time slots, addresses, or methods. By accommodating these preferences, you can enhance the delivery experience and decrease the chances of missed or failed deliveries, which often result in returns.</p>
                            </div>
                            <div>
                                <h4>Promote Pre-payment Options</h4>
                                <p>Brands should provide customers with a variety of payment options but always promote prepaid options by offering benefits and discounts. Offering flexibility in payment options improves the overall customer experience but generally, COD has been observed to cause a great percentage of RTOs, hence avoiding it helps decrease RTO rates.</p>
                            </div>
                            <div>
                                <h4>Offer Exchange Options for Returns</h4>
                                <p>When customers want to return a product, provide easy exchange options. Allow them to exchange the item for a different size, colour, or variant instead of a refund. Clearly communicate the exchange process, including return shipping labels, instructions, and the expected time for the exchange. By facilitating exchanges, brands can retain customers, minimize the impact of returns, and potentially recover lost sales.</p>
                            </div>
                            <div>
                                <h3>How ShipDelight helps you in Reducing RTO</h3>
                                <br />
                                <Image className='blog-image' alt='blog-image' src={BlogImage3} />
                                <p>ShipDelight understands the pain points of the brands they are working with and hence aspires to help others as well to execute exchange and reverse as seamlessly as the forward journey.</p>
                            </div>
                            <div>
                                <p>Here are our two cents on which can help you achieve a smooth reverse journey:</p>
                            </div>
                            <div>
                                <h4>Prioritize reverse partners:</h4>
                                <p>Striking the right balance between the courier partner’s price and performance is even more crucial in the reverse leg as this directly affects your purse in a significant way. The suggestion would be here to choose the courier that has a good reputation in TATs.</p>
                            </div>
                            <div>
                                <h4>Offer one-click return to customers:</h4>
                                <p>Similar to local shops in our localities, a hassle-free reverse and exchange promote the goodwill the customers seek after they have purchased from you. There is numerous study out there which backs the direct association between Repeat buying and a smooth return process.</p>
                            </div>
                            <div>
                                <h4>Promote exchange before returns:</h4>
                                <p>This has been our mantra and a simple-straightforward approach to retaining your profits. Ensure to provide exchanges on variant levels (sizes, colors or both) preventing potential sale loss.</p>
                            </div>
                            <div>
                                <h4>Customer engagement tool:</h4>
                                <p>After a customer places a return & exchange request, they expect to be notified of the status of their shipments. By leveraging the CETs such as WhatsApp (Tracking bit link is shared with a customer on SMS, WhatsApp & Email), you can reduce the WISMO (Where is my order?) queries your CX team deals with and simultaneously provide assurance and transparency with your customers.</p>
                            </div>
                            <div>
                                <h4>Enable QC-based Returns:</h4>
                                <p>Unchecked shipments back to your stores/ warehouses drains your margins as the cost associated with the entirety of the shipping cycle is footed by you with net zero revenue. Not to forget, the damaged or a different/ substandard product is to be discarded into the bin. Quality-based returns reduce the information asymmetry for you and help you make informed decisions moving forward.</p>
                            </div>
                            <div>
                                <p>While the pointers to reduce RTOs are good to know, ensuring its implementation and checks for performance is where it really makes the difference. This is where the ShipDelight team comes into play to help you deliver the return performance your audience seeks!</p>
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
