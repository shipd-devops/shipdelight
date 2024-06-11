'use client'
import { useEffect } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { usePathname } from 'next/navigation'
import Script from 'next/script'
import { GlobalContextProvider } from "./context/srore";

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
  const pathname = usePathname()
  const getMetadata = () => {
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
      case "/get-in-touch-d2c":
        return {
          title: "Contact ShipDelight: Reach Out for D2C Insider Member Exclusive Offers",
          description: "Connect with ShipDelight to explore exclusive offers for D2C Insider Members. Fill out the lead form and our team will get in touch with you to discuss how we can elevate your logistics operations. Don't miss out on this opportunity to optimize your D2C business with ShipDelight!",
        };
      case "/d2c-landing-page":
        return {
          title: "Exclusive D2C Insider Member Offer by ShipDelight: Optimize Your Logistics Today",
          description: "Join ShipDelight's D2C Insider Member Offer and optimize up to 3000 orders seamlessly with iLogix Curated Pilot and enable 5 courier partners with comprehensive APIs. Don't miss out, seize this opportunity to elevate your D2C business with ShipDelight!",
        };
      case "/electronics-industry":
        return {
          title: "Quick Commerce Solutions for the Electronics Industry",
          description: "Discover ShipDelight's quick commerce solutions tailored for the electronics industry. Enjoy same-day and next-day delivery, multi-location pickups, and integrated dashboards for efficient logistics management. Partner with ShipDelight and deliver excellence to your customers.",
        };
      case "/health-and-supplements-industry":
        return {
          title: "Quick Commerce Solutions for the Health and Supplements Industry",
          description: "Transform your health and supplements logistics with ShipDelight's quick commerce solutions. Enjoy same-day and next-day delivery, multi-location pickups, and integrated dashboards for efficient operations. Partner with ShipDelight for speed, reliability, and customer satisfaction.",
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

        {/* GTAG */}
        {/* <script async type="text/javascript" src="https://www.googletagmanager.com/gtag/js?id=AW-728181268&amp;l=dataLayer&amp;cx=c"></script>
        <script async type="text/javascript" src="https://www.googletagmanager.com/gtag/js?id=G-MVXSPB5CC2&amp;l=dataLayer&amp;cx=c"></script> */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-728181268" />
        <Script
          id="inline-script5"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'AW-728181268');
            `,
          }}
        />
        {/* GTM */}
        <Script async src="https://www.googletagmanager.com/gtm.js?id=GTM-5CXK8T3" />
        <Script
          id="inline-script4"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5CXK8T3');
            `,
          }}
        />
        {/* FACEBOOK */}
        {/* <Script src="https://connect.facebook.net/signals/config/735573410339615?v=2.9.154&amp;r=stable&amp;domain=shipdelight-v4.mars-cdn.com&amp;hme=c3a545c63044e8e9102d4f32d84a1137594d024f28e801d670bc76dc5c075575&amp;ex_m=67%2C112%2C99%2C103%2C58%2C3%2C93%2C66%2C15%2C91%2C84%2C49%2C51%2C158%2C161%2C172%2C168%2C169%2C171%2C28%2C94%2C50%2C73%2C170%2C153%2C156%2C165%2C166%2C173%2C121%2C14%2C48%2C178%2C177%2C123%2C17%2C33%2C38%2C1%2C41%2C62%2C63%2C64%2C68%2C88%2C16%2C13%2C90%2C87%2C86%2C100%2C102%2C37%2C101%2C29%2C25%2C154%2C157%2C130%2C27%2C10%2C11%2C12%2C5%2C6%2C24%2C21%2C22%2C54%2C59%2C61%2C71%2C95%2C26%2C72%2C8%2C7%2C76%2C46%2C20%2C97%2C96%2C9%2C19%2C18%2C81%2C53%2C79%2C32%2C70%2C0%2C89%2C31%2C78%2C83%2C45%2C44%2C82%2C36%2C4%2C85%2C77%2C42%2C39%2C34%2C80%2C2%2C35%2C60%2C40%2C98%2C43%2C75%2C65%2C104%2C57%2C56%2C30%2C92%2C55%2C52%2C47%2C74%2C69%2C23%2C105" async /> */}
        <Script async src="https://connect.facebook.net/en_US/fbevents.js" />
        <Script
          id="inline-script3"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '735573410339615');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>  
          <img height="1" width="1" style={{display:"none"}} src="https://www.facebook.com/tr?id=735573410339615&ev=PageView&noscript=1" />
        </noscript>

        {/* LINKEDIN */}
        <Script type="text/javascript" async src="https://snap.licdn.com/li.lms-analytics/insight.min.js" />
        <Script
          id="inline-script2"
          dangerouslySetInnerHTML={{
            __html: `
              _linkedin_partner_id = "3731164";
                  
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            `,
          }}
        />
        <Script
          id="inline-script1"
          dangerouslySetInnerHTML={{
            __html: `
              (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};

              window.lintrk.q=[]}
              
              var s = document.getElementsByTagName("script")[0];
              
              var b = document.createElement("script");
              
              b.type = "text/javascript";b.async = true;
              
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              
              s.parentNode.insertBefore(b, s);})(window.lintrk);
            `,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{display:"none"}} alt="" src="https://px.ads.linkedin.com/collect/?pid=3731164&fmt=gif" />
        </noscript>
        
        {/* BUTTON TO SEND TO THANK YOU (FORM) */}
        {/* <Script type="text/javascript">
          {`
           document.addEventListener('DOMContentLoaded', function() {
              if (window.location.href === 'https://shipdelight.com/book-a-demo') {
                  console.log('book a page');
                  const button = document.querySelector(".fserv-button-submit");
                  if (button) {
                      button.addEventListener("click", function() {
                          window.lintrk('click', { conversion_id: 6615508 });
                          gtag('event', 'conversion', { 'send_to': 'AW-728181268/IJHnCL6C_58DEJTUnNsC' });
                          console.log('going to track');
                      });
                  } else {
                      console.warn('.fserv-button-submit not found');
                  }
              } else {
                  console.log('Not on the book a demo page');
              }
          });
          `}
        </Script> */}
        {/* <Script
          id="inline-script"
          dangerouslySetInnerHTML={{
            __html: `
            console.log('okokoko')
              window.lintrk('click', { conversion_id: 6615508 });
              gtag('event', 'conversion', { 'send_to': 'AW-728181268/IJHnCL6C_58DEJTUnNsC' });
            `,
          }}
        /> */}
        {/* <script type="text/javascript">
          {
            `
              document.addEventListener( 'wpcf7mailsent', function( event ) {
                if ( '3567' == event.detail.contactFormId ) {
                }
              }, false );
            `
          }
        </script> */}

        {/* thankyou page */}
        {/* <Script> 
          { `
              if (window.location.href == 'https://shipdelight.com/thankyou') {
                gtag('event', 'conversion', { 'send_to': 'AW-728181268/IJHnCL6C_58DEJTUnNsC', 'value': 1.0, 'currency': 'INR' }); }
          `}
        </Script> */}
        
      </head>
      <AntdRegistry>
        <body className={inter.className}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5CXK8T3"
        height="0" width="0" style={{ display:"none", visibility:"hidden"}}></iframe></noscript>
        <GlobalContextProvider>
          <Header/>
          {children}
          <Footer />
        </GlobalContextProvider>
        </body>
      </AntdRegistry>
    </html>
  );
}
