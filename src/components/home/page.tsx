"use client"

import Link from 'next/link';
import Script from 'next/script';

export default function Home() {

    return (
        <>
            {/* <div className='HomeImg '></div> */}

            <div className='ContainerHome' >

                <div className='HeaderContent'>
                    <h1 id='HeaderText'>
                        <span>www.</span><span>Linkify<span>.cloud</span></span>
                    </h1>

                    <p className='HeaderSubText'>
                        Mit Linkify übertragen Sie Daten mühelos zwischen Buchungssoftware und DMS. Sparen Sie Zeit, reduzieren Sie manuelle Arbeit und optimieren Sie Ihre Abläufe.
                    </p>

                    <div className='BtnHomeContainer'>
                        <Link href={"#PriceHeadline"} className='BtnDesign invert'>Get Started</Link >
                        <Link href={"/product"} className='BtnDesign'>Produktseite</Link >
                    </div>

                    <div id="particles-js">
                        <Script src="/js/HeaderAnimationCanva/particles.js" />
                        <Script src="/js/HeaderAnimationCanva/js/app.js" />
                    </div>
                </div>
            </div>

        </>
    );
}
