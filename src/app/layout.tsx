'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { usePathname } from 'next/navigation'


  const inter = Inter({ subsets: ["latin"] });

  // export const metadata: Metadata = {
  //   title: "ShipDelight",
  //   description: "ShipDelight",
  // };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const getMetadata = () => {
    const pathname = usePathname()
    switch (pathname) {
      case "/platforms/ilogix/d2c-delight":
        return {
          title: "D2C Delight: Empowering Brands Beyond Marketplaces",
          description: "Shift your focus from marketplace dependency to building a robust online presence and maximize brand control and profitability",
        };
      case "/platforms/ilogix/retail-delight":
        return {
          title: "Retail Delight: Seamless Logistics for Omnichannel Excellence",
          description: "Retail Delight's seamless logistics solutions. Streamline your omnichannel operations for efficiency and customer satisfaction",
        };
      case "/platforms/elogix/erp-delight":
        return {
          title: "ERP Delight: Fleet Owner's ERP for B2C Movement",
          description: "Empower fleet owners with ERP solutions for seamless end-to-end B2C movement. Unlock efficiency and elevate customer satisfaction",
        };
      case "/platforms/elogix/biker-delight":
        return {
          title: "biker-delight",
          description: "biker-delight",
        };
      case "/solution/b2b-logistics":
        return {
          title: "Efficient B2B Logistics Solutions",
          description: "Optimize your business-to-business logistics with our efficient solutions tailored to meet your needs",
        };
      case "/solution/ecommerce-shipping":
        return {
          title: "Seamless Ecommerce Shipping Services",
          description: "Deliver exceptional ecommerce experiences with our seamless shipping solutions, ensuring timely delivery and customer satisfaction.",
        };
      case "/solution/ndr":
        return {
          title: "Efficient NDR Management",
          description: "Streamline NDR management to enhance efficiency and improve customer communication for successful deliveries",
        };

      case "/solution/returns":
        return {
          title: "Hassle-free Returns Process",
          description: "Simplify returns for your customers with our hassle-free process, ensuring satisfaction and loyalty",
        };
      case "/solution/exchanges":
        return {
          title: "Smooth Exchange Procedures",
          description: "Facilitate smooth exchanges for your customers, ensuring a seamless experience and fostering trust",
        };
      case "/solution/refunds":
        return {
          title: "Fast Refund Processing",
          description: "Speed up refund processing to provide customers with timely resolutions and maintain satisfaction",
        };
      case "/solution/communications":
        return {
          title: "Effective Communication Solutions",
          description: "Enhance communication throughout the shipping process to keep customers informed and satisfied",
        };
      case "/solution/omni-channel":
        return {
          title: "Omni-Channel Fulfilment Solutions",
          description: "Synchronize online and offline operations seamlessly with ShipDelight's omni-channel fulfilment solutions.",
        };
      case "/solution/express-delivery":
        return {
          title: "Exceeding Expectations with Express Delivery",
          description: "With ShipDelight Express, exceed customer expectations by delivering orders in record time, ensuring delight.",
        };
      case "/solution/cash-on-dilevry":
        return {
          title: "Convenient Cash on Delivery Services",
          description: "Offer convenient cash on delivery options to customers, enhancing flexibility and satisfaction.",
        };
      case "/solution/warehouse":
        return {
          title: "Effective Warehousing & Inventory Management",
          description: "Optimize your warehousing and inventory management processes for improved efficiency and cost-effectiveness.",
        };
      case "/solution/franchises":
        return {
          title: "Empowering Franchises in Logistics",
          description: "Franchise Creator empowers logistics brands to extend their reach and foster growth through franchise opportunities.",
        };
      case "/solution/biker-app":
        return {
          title: "Efficient Biker App Solutions",
          description: "Optimize Last Mile delivery operations with our efficient biker app solutions, ensuring timely and reliable service.",
        };
      case "/solution/logistics-erp":
        return {
          title: "Streamlined Logistic ERP Systems",
          description: "Streamline your Hub and Branch operations with our streamlined ERP systems, enhancing efficiency and accuracy.",
        };
      case "/industry/fashion":
        return {
          title: "Fashion Industry Logistics Solutions",
          description: "Tailored logistics solutions for the fashion industry, ensuring timely delivery and customer satisfaction.",
        };
      case "/industry/electronics":
        return {
          title: "Electronics Industry Logistics Support",
          description: "Specialized logistics support for the electronics industry, ensuring safe and timely delivery of products.",
        };
      case "/industry/health-care":
        return {
          title: "Logistics Solutions for Health & Pharma",
          description: "Secure and efficient logistics solutions for the health and pharma industry, ensuring compliance and safety.",
        };
      case "/industry/home-and-decor":
        return {
          title: "Logistics Solutions for Home & Décor",
          description: "Tailored logistics solutions for the home and décor industry, ensuring safe and timely delivery of products.",
        };
      case "/industry/food-and-beverage":
        return {
          title: "Efficient Logistics for Foods & Beverages",
          description: "Reliable logistics support for the sports and utilities industry, ensuring timely delivery and customer satisfaction.",
        };
      case "/industry/sports":
        return {
          title: "sports",
          description: "sports.",
        };
      case "/about":
        return {
          title: "Discover Our Story: About Us",
          description: "Learn more about our company's journey, mission, and values as we strive to revolutionize the logistics industry.",
        };
      case "/career":
        return {
          title: "Join Our Team: Careers",
          description: "Explore exciting career opportunities with us as we work together to drive innovation and excellence in logistics.",
        };
      case "/contact-us":
        return {
          title: "Get in Touch: Contact Us for Support",
          description: "Contact us for any inquiries, assistance, or support regarding our services. We're here to help!",
        };
      case "/blogs":
        return {
          title: "Blogs - ShipDelight",
          description: "Explore our informative logistics blogs for insights, tips, and industry updates to stay informed.",
        };
      case "/pricing":
        return {
          title: "Transparent Pricing Solutions",
          description: "Explore our transparent pricing solutions tailored to your needs, ensuring clarity and affordability for your business.",
        };
      case "/book-a-demo":
        return {
          title: "Schedule a Demo Today!",
          description: "Book a demo to experience our solutions firsthand. Discover how our services can revolutionize your business operations.",
        };
      default:
        return {
          title: "ShipDelight",
          description: "Welcome to ShipDelight",
        };
    }
  };
  const { title, description } = getMetadata();
  
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <AntdRegistry>
        <body className={inter.className}>
          <Header/>
          {children}
          <Footer />
        </body>
      </AntdRegistry>
    </html>
  );
}
