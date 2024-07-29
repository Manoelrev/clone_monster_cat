import styled from "styled-components";


export const header = styled.header `
    display: flex;
    padding: 0;

    margin-top: 15vh;
    margin-left: auto;
    margin-right: auto;


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
`

export const Container = styled.section `
    
    display: flex;
    flex-direction: column;

    margin-left: auto;
    margin-right: auto;

    width: 700px;
    height: 500px;
    background-color: rgba(35,35,35,250);
    border-radius: 25px;

    h1 {
        font-weight: 600;
        font-size: 2.5em;
        line-height: 1;
        text-align: center;

        text-transform: uppercase;
        font-weight: 400;
        grid-column: 1;
        margin-bottom: 50px;
        font-family: "Monument Extended", "Helvetica", Arial, sans-serif;
    }

    p {
        
        font-weight: 600;
        font-size: 1.5em;
        line-height: 1;
        

        text-transform: uppercase;
        font-weight: 400;
        grid-column: 1;
        margin-bottom: 18px;
        font-family: "Montserrat", "Helvetica", Arial, sans-serif;
    }

    div {
        margin: 50px 0;
    }

    .bloco_input {
        margin-left: 40px;
        display: flex;
        flex-direction: column;

        button {
            text-align: left;
            background: #383838;
            border: none;
            transition: 0.5s;
            width: 200px;
            height: 70px;
            padding: 5px 30px;
            color: #ffffff;

            margin-top: 40px;

            a {
            background-color: transparent;

            display: inline-flex;
            

            font-family: "Monument Extended", "Helvetica", Arial, sans-serif;
            text-decoration: none;
            text-transform: uppercase;
            font-weight: 500;
            font-size: 14px;
            
            line-height: 20px;
            white-space: nowrap;
            color: white;

        }

        a span {
            line-height: 18px
        }


            &:hover {
                
                background-color: #ffffff;
                a {
                    color: #000000;
                }
            }
        }

        input{
            width: 80%;
            height: 50px;
            background: transparent;
            border: 0;
            border-bottom: #898888 solid 2px;
            
            font-family: "Montserrat", "Helvetica", Arial, sans-serif;
            font-weight: 400;
            color: white;
            font-size: 18px;
            &:focus {outline:none;}

        }
    }
`