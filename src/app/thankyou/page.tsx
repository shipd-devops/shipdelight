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
                            <h1 className="small">Success! 🎉</h1>
                            <p>We've received your request for a demo.</p>
                            <p>Check your email inbox for a link to kickstart your journey with us.</p>
                            <p>Welcome aboard!"</p>
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
