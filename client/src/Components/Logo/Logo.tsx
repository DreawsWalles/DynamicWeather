import {ILogoProps} from "./ILogoProps";
import {useEffect, useState} from "react";
import styles from "./Logo.module.css";

const ids = {
    logo: {
        moon: "logo-moon",
        sun: "logo-sun"
    }
}
export function Logo(props: ILogoProps){
    const [part, setPart] = useState(0);
    useEffect(() => {
        const hour= props.currentTime.getHours();
        let moon = document.getElementById(ids.logo.moon)!;
        let sun = document.getElementById(ids.logo.sun)!;
        if(hour >= 0 && hour <= 6)
        {
            moon.classList.remove(styles.none);
            sun.classList.add(styles.none);
            setPart((props.currentTime.getHours() + 1) * 0.7);
            return;
        }
        moon.classList.add(styles.none)
        sun.classList.remove(styles.none);
        setPart(hour * 200 / 18);
    }, [props.currentTime]);
    return(
        <div>
            <svg id={ids.logo.moon} width="98" height="97" viewBox="0 0 205 204" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="moonGradient" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="white" />
                        <stop offset="100%" stopColor="black" />
                    </linearGradient>
                </defs>
                <path opacity={part} d="M196.89 127.89C192.066 143.752 183.216 158.094 171.202 169.52C159.188 180.945 144.42
                189.065 128.336 193.087C112.252 197.11 95.4007 196.899 79.4228 192.474C63.4448 188.049 48.8851 179.562 37.1617
                167.838C25.4383 156.115 16.9509 141.555 12.5261 125.577C8.10129 109.599 7.88989 92.7477 11.9125 76.6637C15.9351
                60.5798 24.0546 45.8117 35.4802 33.798C46.9058 21.7842 61.248 12.9342 77.11 8.11C72.0808 24.7507 71.6601 42.444
                75.8927 59.3048C80.1253 76.1657 88.8527 91.5625 101.145 103.855C113.437 116.147 128.834 124.875 145.695 129.107C162.556
                133.34 180.249 132.919 196.89 127.89Z"
                      fill="url(#moonGradient)" />
            </svg>
            <svg id={ids.logo.sun} width="98" height="98" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="sunGradient" x1="100%" y1="0" x2={`${100-part}%`} y2="0%">
                        <stop offset="0%" stopColor="red" />
                        <stop offset="100%" stopColor="yellow" />
                    </linearGradient>
                </defs>
                <path opacity="0.8" d="M20.2 14.36L18.64 12.8C17.08 11.24 14.56 11.28 13.04 12.8L13 12.84C11.44 14.4 11.44
                16.92 13 18.44L14.56 20C16.12 21.56 18.6 21.56 20.16 20L20.2 19.96C21.76 18.44 21.76 15.88 20.2 14.36ZM8.04
                39.8H3.96C1.76 39.8 0 41.56 0 43.76V43.8C0 46 1.76 47.76 3.96 47.76H8C10.24 47.8 12 46.04 12 43.84V43.8C12
                41.56 10.24 39.8 8.04 39.8ZM44.04 0H44C41.76 0 40 1.76 40 3.96V7.8C40 10 41.76 11.76 43.96 11.76H44C46.24
                11.8 48 10.04 48 7.84V3.96C48 1.76 46.24 0 44.04 0ZM75 12.84C73.44 11.28 70.92 11.28 69.36 12.8L67.8 14.36C66.24
                15.92 66.24 18.44 67.8 19.96L67.84 20C69.4 21.56 71.92 21.56 73.44 20L75 18.44C76.56 16.88 76.56 14.4 75
                12.84ZM67.76 73.24L69.32 74.8C70.88 76.36 73.4 76.36 74.96 74.8C76.52 73.24 76.52 70.72 74.96 69.16L73.4
                67.6C71.84 66.04 69.32 66.08 67.8 67.6C66.2 69.2 66.2 71.68 67.76 73.24ZM76 43.76V43.8C76 46 77.76 47.76
                79.96 47.76H84C86.2 47.76 87.96 46 87.96 43.8V43.76C87.96 41.56 86.2 39.8 84 39.8H79.96C77.76 39.8 76
                41.56 76 43.76ZM44 19.8C30.76 19.8 20 30.56 20 43.8C20 57.04 30.76 67.8 44 67.8C57.24 67.8 68 57.04 68
                43.8C68 30.56 57.24 19.8 44 19.8ZM43.96 87.6H44C46.2 87.6 47.96 85.84 47.96 83.64V79.8C47.96 77.6 46.2
                75.84 44 75.84H43.96C41.76 75.84 40 77.6 40 79.8V83.64C40 85.84 41.76 87.6 43.96 87.6ZM13 74.76C14.56 76.32
                17.08 76.32 18.64 74.76L20.2 73.2C21.76 71.64 21.72 69.12 20.2 67.6L20.16 67.56C18.6 66 16.08 66 14.52
                67.56L12.96 69.12C11.44 70.72 11.44 73.2 13 74.76Z"
                      fill="url(#sunGradient)" stroke="gray" />
            </svg>


        </div>
    )
}