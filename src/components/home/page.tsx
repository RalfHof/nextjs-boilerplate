"use client"

import Link from 'next/link';
import Script from 'next/script';

export default function Home() {

    return (
        <>
            <div className='HomeImg '></div>
            <div className='ContainerHome' >

                <div className='HeaderContent'>
                    <h1 id='HeaderText'>
                        <span>Linkify </span> - Effiziente Datenübertragung zwischen <span>ecoDMS </span>  und  <span> Buchungssoftware</span>
                    </h1>

                    <p className='HeaderSubText'>
                        Mit Linkify bieten wir Ihnen eine einfache und schnelle Möglichkeit, Daten nahtlos von lexoffice zu ecoDMS zu übertragen. So reduzieren Sie den manuellen Aufwand erheblich und steigern die Effizienz Ihrer Prozesse. Vertrauen Sie auf unsere Lösung, um Ihre Arbeit zu erleichtern und wertvolle Zeit zu sparen.
                    </p>
                </div>
                <div className='BtnHomeContainer'>

                    <div className='BtnHome'>
                        <Link href={"/product"} className='BtnDesign'>Get Started</Link >
                        <Link href={"/product"} className='BtnDesign'>Produktseite</Link >
                    </div>
                </div>



                <div id="particles-js">
                    <Script src="/js/HeaderAnimationCanva/particles.js" />
                    <Script src="/js/HeaderAnimationCanva/js/app.js" />
                </div>
            </div>

        </>
    );
}
