'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from 'antd';
// IMAGES
import PricingImage from '../../../public/images/pricing--image.webp'


export default function Home() {
    const router = useRouter();
    return (
        <main>
            <section className="normal-section pricing-section">
                <div className="container">
                    <div className="pricing--content">
                        <div className="pricing-steps--content">
                            <h1 className="small">Thank you for reaching out to us! 🎉</h1>
                            <p>Your request has been successfully received. We're here to ensure your experience with us is seamless and tailored to your requirements.</p>
                            <p>A Brand Specialist will be in touch with you shortly to assist you further.</p>
                            <p>We look forward to connecting with you soon!</p>
                            <Button onClick={()=>{router.push('/')}} type="primary" className="btn-main">
                                Go to Home Page
                            </Button>
                        </div>
                    </div>
                    <div className="pricing--image">
                        <Image src={PricingImage} alt="kl" />
                    </div>
                </div>
            </section>
        </main>
    );
}
