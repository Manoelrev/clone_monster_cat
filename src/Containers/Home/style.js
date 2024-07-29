import styled from "styled-components";

export const Header = styled.header `
    
    display: flex;
    flex-direction: column;
    letter-spacing: 0.1em;
    
    @media (min-width: 532px){
        max-width: 532px;
    }
    @media (min-width: 768px){
        max-width: 768px;
    }
    @media (min-width: 992px){
        max-width: 992px;
    }
    @media (min-width: 1440px){
        max-width: 1200px;
    }
    @media (min-width: 1920px){
        max-width: 1600px;
    }
    @media (min-width: 2516px){
        max-width: 1920px;
    }


    section {
        padding-left: 10vh;
        padding-right: 10vh;
    }

    margin-left: auto;
    margin-right: auto;
`

export const ImagemBackground = styled.nav `
    width: 102%;
    height: 102%;
    position: absolute;
    top: -1%;
    left: -2%;
    background-position: center;
    background-size: cover;
    filter: blur(10px) brightness(50%);
    z-index: -1;
`

export const MonsterCatMenu = styled.nav `
    
    @media (min-width: 532px){
        max-width: 532px;
    }
    @media (min-width: 768px){
        max-width: 768px;
    }
    @media (min-width: 992px){
        max-width: 992px;
    }
    @media (min-width: 1440px){
        max-width: 1200px;
    }
    @media (min-width: 1920px){
        max-width: 1600px;
    }
    @media (min-width: 2516px){
        max-width: 1920px;
    }

    position: fixed;
    display: flex;

    margin: 30px 0;
    width: 100%;

    justify-content: space-between;
    align-items: top;
    z-index: 40;
    
    pointer-events: none;

    .MonsterCatLogo {
        height: 50px; 
        width: 50px;
    }

    .MenuLogo {
        background: none;
        border: 0;
        height: 50px; 
        width: 50px;
    }

    .MenuExternalLinks{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width: 50px;
        pointer-events: all;
    }

    .MenuExternalLinks li{
    }

    .MenuExternalLinks li img{
        height: 25px; 
        width: 25px;
    }
`

export const MonsterArticleCover = styled.section `
    display: flex;
    flex-wrap: wrap;
    margin-top: 200px;
    align-items: center;
    grid-column: 2;
    gap: 30px;

    .coverBox {
        display: flex;


        h1 {
            writing-mode: vertical-rl;
            rotate: 180deg;

            font-family:  "Montserrat", "Helvetica", Arial, sans-serif;
            font-style: italic;
            font-size: 18px;

            position: relative;
            left: -5px;
        }

        img {
            @media (min-width: 1440px) {
                width: 1200px;
            }
            @media (min-width: 992px) {
                width: 992px;
            }
            @media (min-width: 768px) {
                width: 768px;
            }
            @media (min-width: 532px) {
                width: 532px;
            }
        }
    }

    .tileMusic{
        display: flex;
        flex-direction: column;
        align-items: left;
        h1 {
            font-family: "Monument Extended", "Helvetica", Arial, sans-serif;
            font-weight: 500;
            font-size: 48px;

            text-transform: uppercase;

            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #F1F1F1;
            -webkit-text-fill-color: transparent;
            -webkit-font-smoothing: antialiased;
        }

        p {
            font-family: "Monument Extended", "Helvetica", Arial, sans-serif;
            font-weight: 400;
            font-size: 28px;

            text-transform: uppercase;
        }

        .musicButton{
            display: flex;
            margin-top: 3rem;
            flex-wrap: nowrap;
        }

        a {
            background-color: transparent;
            border: #fdfdfd solid 1px;

            display: inline-flex;
            
            height: 5px;
            margin-left: 0.25rem;
            padding: 1.6rem 1.8rem;

            font-family: "Monument Extended", "Helvetica", Arial, sans-serif;
            text-transform: uppercase;
            font-weight: 500;
            font-size: 14px;;
            line-height: 9px;
            white-space: nowrap;

        }

        a span {
            line-height: 10px
        }

        a:hover {
            background-color: #fdfdfd;
            color: #000000;
        }
    }
`

export const MonsterCatStream = styled.section `
    display: flex;
    flex-direction: column;
    margin-top: 100px;

    h2 {
        font-family: "Monument Extended", "Helvetica", Arial, sans-serif;
        font-size: 2.5em;
        line-height: 1;

        text-transform: uppercase;
        font-weight: 400;
        grid-column: 1;
    }

    ul{
        display: flex;
        margin-top: 50px;
        grid-column: 1;
    }

    li {
        width: 72px;
        height: 60px;
        border: #fdfdfd solid 1px;

        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 30px;
            height: 30px;
        }

        span {
            display: none;
        }
    }

    li:hover {
        span {
            position: absolute;
            margin-top: -70px;
            margin-left: -70px;

            display: block;
            padding: 0.25rem 0.5rem;
            border-radius: 10px;

            background-color: #fdfdfd;
            color: #000000;
            background-color: #F1F1F1;
            
            text-align: center;
            font-size: 12px;
            font-weight: 600;
            font-family: "Montserrat";
            text-transform: uppercase;;
        }
    }

    .MonsterCat {
        width: 133px;
        height: 60px;

        img {
            width: 80px;
            height: 30px;
        }
    }
`

export const MonsterCatPlaceHolder = styled.section `
    display: flex;
    flex-direction: column;
    margin-top: 100px;

    h2, p {
        font-weight: 600;
        font-size: 2.5em;
        line-height: 1;

        text-transform: uppercase;
        font-weight: 400;
        grid-column: 1;
        margin-bottom: 50px;
        font-family: "Monument Extended", "Helvetica", Arial, sans-serif;
    }


    ol h2, ol p{
        font-family: "Montserrat", "Helvetica", Arial, sans-serif;
    }

    iframe {
        width: 100%;
        min-height: 768px;

        -webkit-backdrop-filter: blur(2px);
        -moz-backdrop-filter: blur(2px);
        backdrop-filter: blur(2px);
    }

    button {
        background: none;
        border: 0;

        img {
            width: 25px;
        }
    }


    li {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        height: 40px;

        .bar_1 {
            display: flex;
            justify-content: center;

            .number{
                font-size: 20px;
                margin-top: 10px;
                font-weight: 400;
                
                width: 35px;
                margin-right: 10px;
            }

            button {
                margin-right: 20px;
            }
        }

        h2 {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 0px;
        }

        p {
            font-size: 14px;
        }

        .bar_2 {
            p {
                font-size: 18px;
            }

            a {
                margin-left: 20px;
                img{
                    width: 25px;
                    height: 20px;
                }
            }
        }
    }
`

export const MonsterCatFooter = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;

    section {

        width: 100%;
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        padding: 0;
        margin-top: 70px;
    }

    .bloco_um {
        border-top: #fdfdfd solid 2px;
        border-bottom: #fdfdfd solid 2px;
        div {
            width: 33%;
        }
    }

    .links_externos {
        
        margin: 30px 0;
        display: flex;
        flex-direction: column;

        color: #F1F1F1;
        font-family: "Monument Extended", "Helvetica", Arial, sans-serif;
        font-size: 18px;
        line-height: 1.75;
        text-decoration: none;
        font-weight: 500;
    }

    .link_email{
        
        h3{
            font-size: 18px;
            color: #898888;
            font-family: "Monument Extended", "Helvetica", Arial, sans-serif;;
            font-weight: normal;
            margin-bottom: 20px;
        }
        P{
            font-family: "Montserrat", "Helvetica", Arial, sans-serif;
            font-weight: normal;
            font-size: 18px;
            color: #F1F1F1;
            margin-bottom: 20px;
            
        }

        form {
            display: flex;
            align-items: baseline;
            padding-bottom: 10px;
            border-bottom: #898888 solid 2px;
        }
        input{
            width: 80%;
            background: transparent;
            border: 0;

            font-family: "Montserrat", "Helvetica", Arial, sans-serif;
            font-weight: 400;
            color: white;
            font-size: 18px;
            &:focus {outline:none;}
        }

        .confirm_button {
            background: none;
            border: none;
            transition: 0.5s;
            padding: 5px 30px;
            color: #ffffff;
        }

        .confirm_button:hover {
            background-color: #ffffff;
            color: #000000;
        }
    }

    .bloco_dois{
        display: flex;
        justify-content: center;
        width: 100%;
        text-align: center;
        margin-bottom: 100px;


    }
`