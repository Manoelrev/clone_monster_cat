import * as std from './style'
import { useState } from 'react'
import {getDataBase, getImage, getDataString, getColor} from './DataBase'

import { useParams } from "react-router-dom";
import { Form } from "react-router-dom";

function Home() {
    const id = useParams().Id;

    var Data = getDataBase(id);


    function MonsterCatMenu() {
        return(
            <std.MonsterCatMenu>
                <img className='MonsterCatLogo' src="https://cdn.monstercat.com/monstercat-logo.webp" alt='MonsterCat Logo'/>
                <div>
                <button className='MenuLogo'><img alt='Menu Button' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAFFJREFUSEvtlEkKADAIA83/H52eu1APZQShnquTBaqAR/D9+IA04fqIbDuVdXkgaRK9OcABL+pPu/Ud4A7wDnAAHlF/AN4BDujfwXewJoD/pgNrVBgZX2h0sgAAAABJRU5ErkJggg=="/></button>
                <ul className='MenuExternalLinks'>
                    <li key={"Instagram_logo"}><a title="Monstercat on Instagram" social="instagram" href="https://www.instagram.com/monstercat"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAmJJREFUSEvFlU2IT2EUxn8PiojZTFYYhUISIklYIKU0MZphsLHxsVDko8hCiQwhKwsW0vjIZ5QSOymJpBg0kZQNK7LydbyP3v/0d+d/m39qmru79573PM95nnPOK/r5UT/nZ2AAImICsANYAEyDUiIBvAAeACcldRcV6VVBRGwGTgFDgA/AI+B1iZSzgBnAWOAHsFXSmerYfwAiYnZO2AWslPS2Ho8iwlXeAsYBcyQ9q5wrAlwHlgOTJb3vK3lEbEjyHQC+pGo3Ak9SRTcltZQBOGmXJIP0PBExCFgKTAV+Aa+A+/nbXUspqSkiDNAoaXwZwFegU9KWSkBEWN/LwLxCRTb2bNL9EzBa0rmIsALLJI0oA/gNHJO02wGZ+UPAjHYC94DBmXkH4K5ZKMnd5HgTWS3JMX+fogcOPCxpbz7Qmtm3SrpSkK0teXUJaJZkgw1wMcnXJsmSlgJ0SNqTD5jlLmCkpG8FgEbgc2rng5L25/hOoF1SD/FaFXhgtucDRwDL1SDJ/lQbXwE4JGlfjj8PrO8L4ERK5il2yW63q1nXawWAdjdEQSK/r+nLg+oKrKVNbspS2WRP+BLgKPAGWFQw2Z4MK/PAOrtNN1W16Zhs5vwabbpW0seqWLfpYkkNZQBuu+6SQWsGVgDfgTvA7QrzKoCnwChJk8oArOGq1JpT6lkVBU+mp/31HLiQtuq6MoCZiaVZOLBF0ruCLDVf0wQ7+Y3s1VxJztF7DnLnVNa1DX6cJfGvn8DLNIhDgYnZbH8fDngL+/82SaerWdS80f7zwjlea70PzJVZj+71xvR7BX8AWsb9GfXCJjsAAAAASUVORK5CYII="/></a></li>
                    <li key={"tiktok_logo"}><a title="Monstercat on tiktok" social="tiktok" href="www.tiktok.com/@monstercat"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAcBJREFUSEu9lc+Lj1EUh58nSspCSVmwIjSxsZlYsCILWVPGz1jaqWnssbKTbGTGkIWUpY0yNlamRorG+BNsJETOvLfuW9fb953v+53XuKu3c+/5POfce855ZY2Xa6zPyICImAEmcmAf1b0rBdkX8AfYrH5tg/QFJN0p9ea/BEwDZwvB78AJ9eUgyGoyaAKS7m/gEfAU+KR+qGGrAZSPPCjoGfVcH0CZwU9gHbC+IE2r54cCImIrcBkYA7YA19W3EVECloCjwA3gVBYdDoiIS8AdYEMR2YQ62wRUtl3pTERsBLanb3WxNYOIOA08HnC5NaB8g6Ua0KlMcxSfgW2FQ2qmd8CtqmuftGXQFXAFuFccTqV3Vf1S2/oCngMns1iq5TE1yuj6AhaA/VnwgXqhmXpEPKya6Uy2L6q7Ow+7iHgDjGeHefXAAEDKbE+2z6lHRgGkoTVZOBxWXxf3fwx4UezfV1NJt66/RkVEpHTfF535DbgNpEraAVxsKB1UU9bdALlhmpXU5jyr1j+e7oAMSY94F9jU4vkKOK7+WCn6tNc6Tatq2QlcAw5VY3hfNYt+Ac8SWJ0bJlzvjzyuuwr/N8AyZ22nGUWK7j0AAAAASUVORK5CYII="/></a></li>
                    <li key={"twitter_logo"}><a title="Monstercat on twitter" social="twitter" href="https://twitter.com/monstercat"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAATBJREFUSEvtlLsuRUEYhb/VSkRDkChEJDyDuCRoxWuIVuJNRKOSeAHxBIgK0bpETckLLPuXKTbnnJlxkh3NmXKy91r/+mbNiI6XOtZnZFAk/L+IbB8Cp5Le+o1qewlYk3QyKMrABLb3gSPgGVj/bWJ7EbgCZoBdSef9THIG8WMIhNBLmvQ7ie0F4AaYBh6ADUmffzJIQj0mwFiteGgUD9n2LHCZkjwCEwnLXZNwS9JHrkpFg5RkLuGaT2JZLG3DWoNgHcyDfaz7JtVmafpaRCF+nRA9JUSxd9vsb5dMsglstyd/BVaA8VY9i0lyNe0Rl/SeziSqG8imSrhyBntNz4+BwBI9/3GbbS+nJJPAjqSLYe7BAXCWeSrCZHWop6L4TFZ+UFXTSq2+n40MivQ6R/QFgd1qGe7ts/oAAAAASUVORK5CYII="/></a></li>
                    <li key={"twitch_logo"}><a title="Monstercat on twitch" social="twitch" href="https://www.twitch.tv/monstercat"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWhJREFUSEvtlT8vBFEUxX9HotDriIROFNRCSFQo/PkACvEFNlFpiOgkKoVCZBuNxJ9IaHwCiQiNSqFAiCiVXO9tZmT2ZWd3ZyezlZdM8+68e+45977zRMFLBeenvQBm1gm8At05mXVIMp+jioGZLQAnwBdw0wLIkC9O0l/eEOASmAbuJY1kBTCzU2AeSGXw7YM5AI6BxXoMKrrlAGjIIBXAzM6Aubg6J8ewk+POMd50DV33VTUj0T9Arh5sAWOSJiO9B4ADoCypHO0VPkUXwEwhY2pmJWAHeJHUG1/S8Ca3dA/MbBXYBp6BcUlPjQDegb2EVdxKOjezPmA5sJAel3gF8Gd8jx6T8TQGoQ3tA2vOp66B/hoe9RZVXpW8lpvGEoU5vMMORl8Y+wBGw8rTJNoITvuRnAj2doHPxN6RpIc05637opmZB6z4DPADLEk6zGLjjQC6gClgFriS5KXKtNr7JmcqrcmffwFildIZbJoKqgAAAABJRU5ErkJggg=="/></a></li>
                    <li key={"facebook_logo"}><a title="Monstercat on facebook" social="facebook" href="https://www.facebook.com/monstercat"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPpJREFUSEvtlLtOQkEQhr+/IIZaaHwE6SwobGh4ABOjbwCB0oaKxsLeDhNbOk9DbC0oaOUBJLGUBHgFMnCSKYw5ei6eTSjYarK783+7cxOBlwLrc1gAM2sAD0ATqAFfwFjS8LdIZP6BmZ0Bn8DJD7FI0k0ZgBHQSxB6kXRbBuAduHChKdCWtE0rkjwhWgF1F+xLekoTj8/zADbAqYt2JT3/G2BmcWzPXWgAVN1+BeZuzyS9FcqBmUXAdcpL7yQ9hgRcSZoUBdwDLXe+3DdZxe0PYOl2R9KiEOC7k5mtvXvj7XKSfATkbbRjDv7u1+BlmmWwJd3JPE0PFrAD05RgGZjkNQQAAAAASUVORK5CYII="/></a></li>
                    <li key={"discord_logo"}><a title="Monstercat on discord" social="discord" href="https://discord.com/invite/monstercat"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAY5JREFUSEvNlTtLXEEYhp83NiYoaBcRgnhBtEmqgG1A2zSGWIi3wtJGsbG3CyQ/QQIpkiJFoghRi4BlQBAbL8iCiHY2Fgr6ekZG2Wx0zzm77JKB08w38z7nu46o8VKN9akvwPZ7YBHozOnZFbAGTEk6Lr77lwe2d4GenOLFx+ckfSgHcBXi4eqSpIn/DnAEXADPgR2gDQh7L4FnJR7n9mAB+A2cStq7E7MdIH1AKIrpIkguwC9JQ+VyYrsVKADN8VwuwJikz2lJt/01Cd27SgAdkgq2XwF/gBFJ32wvA+2Swj62Z4BPeQHnkpqiwACwmYRiUtKS7Y0I6I32N8B6XsC+pNuGs90i6aw0VLZDFW3Hrr8rgMw5uATeSlqNIZoHgkhoxAagEfgInMTREuwVNVoo0cPkGy/xIAh/T0I3CHRXWqZpBfSQPTVE11DVCE8FbMURkPXvQw8MA0+y5qAfmAW6MhJ+AAfAF+Bp6jTNKPrPMduvgRXgZ9lxXSkg9ssLYFRSeBHvV33f5Go8eOzuDQtBrBlFHSMtAAAAAElFTkSuQmCC"/></a></li>
                    <li key={"monstercat_logo"}><a title="Monstercat App" social="monstercat" href="https://player.monstercat.app/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAnlJREFUSEvFlVuITlEUx39/CRNN8eYSygNlQmo8KZ7kkoQYDzNKSZKJBymXXMKTUG4lD4RyedDkmikPcnmTWyT35FWNptyz7DXt72t/Z875nKYm++mcs9fZv3X5r7VFPy/18/nUBZjZYGApMBeYCowHDPgAPAZuApcl/SpytBBgZvOA4/HQeoG+AdZKup1nlAsws13B053xh4/AReA68CR+mwYsBJYDY+K3TZIOZCG9AMnh3UArcFWSp6XXMrMBwDLgFNAAbJB0ODWsAZiZe3UF+BY8bpb0vIwIzGwGcB9w4CxJ9yr/VQFmNgx4BYwE2iSdqxiZ2QVgi6T3RUAz2wgcAl6Gwk+pFD4FrAOOhby+AJrStFjIG/AzQg4WpGtQVJc7uFhSh9ulgBuAK2e9JAdVVwRU3j18j6aahiTSfcGRrcBJSWuygE9hYzQwQdK7OoDKlkfiII+sZ5nZTOAu8EjS9Czga1RCg6TvJQBu4jVxiMvYASOAz0CXpOFZgMvSC90oyZ+LUpRuZQGNwBegW5I/19TAqz8xKuBZCUBeijwtD10okiZnAeeDxFYAmyXt72ORtwN7Qh3PhjquzALagDPAa2CSpD9J8crIdGDon7fAWKBF0qUswFvd0+QGqySdTgBlGq0d8DHhzeqN9qMGEFUwB7jVh1HRDDyIo2K2JJdqz8obdtuAvVENrZKupfXI1MZnT4s3FjA0SLRd0tHUpmhc7wjw3dHQpeg6905/CvhIaArNtChO0lHxEvJJeiTrTL0LZ0EYfCdidxcF4d/9wlkt6U6e0b+uzCHB6yXAfC9cmPvjoreuFtd7J9Ah6XeRB//30q+Xl7J7fwFo2QAoSvoDawAAAABJRU5ErkJggg=="/></a></li>
                </ul>
                </div>
            </std.MonsterCatMenu>
        )
    }
    
    function MonsterCatArticle() {
        const [isHover, setIsHover] = useState(false);

        const handleMouseEnter = () => {
           setIsHover(true);
        };
        const handleMouseLeave = () => {
           setIsHover(false);
        };
        
        var text =  isHover ? '1px solid #fdfdfd' : '1px solid ' + getColor(Data)
        const boxStyle = {
            backgroundColor: isHover ?  "#fdfdfd" : getColor(Data) ,
            border: text
        };

        return (
                <std.MonsterArticleCover>
                    <div className='coverBox'>
                        <h1><span  style={{color: getColor(Data)}}>{Data.Release.BrandTitle}</span> — {getDataString(Data)}</h1>
                        <img src={getImage(id)}/>
                    </div>
                    <div className='tileMusic'>
                        <h1>{Data.Release.Title}</h1>
                        <p>{Data.Release.ArtistsTitle}</p>
                        <div className='musicButton'>
                            <a style={boxStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><span className="material-symbols-outlined">play_arrow</span>Listen Now</a>
                            <a><span className="material-symbols-outlined">share</span>Share</a>
                        </div>
                    </div>
                </std.MonsterArticleCover>
        )
    }

    function baseStream(Link) {
        if (Link.Platform !="Google Play"){
            return (
                <li key={Link.Platform}>
                    <a href={Link.Url}>
                        <img src={Link.Platform + '.png'}/>
                        <span>Stream on {Link.Platform} Player</span>
                    </a>
                </li>
            )
    }}

    function streams(){
        try {
            return (Data.Release.Links.map(Link => baseStream(Link)))
        } catch (error) {
        }
    }
    function MonsterCatStream() {
        return (
            <std.MonsterCatStream>
                <h2>STREAM IT YOUR WAY</h2>
                <ul>
                    <li className='MonsterCat' key={"MonsterCat_stream"}>
                        <a href={'player.monstercat.app/release/' + id}>
                            <img src={'MonsterCat.png'}/>
                            <span>Stream on Monster Cat Player</span>
                        </a>
                    </li>
                    {streams()}
                </ul>
            </std.MonsterCatStream>
        ) 
    }

    function playMusics(Link) {
        
        return(
                <source src={'https://www.monstercat.com/api/release/' + Data.Release.Id + '/track-stream/' + Link.Id} type="audio/mpeg"/>
        )
    }

    function youtubeMusicLink(){
        if(Data.Release.Links == null)
        {
            return
        }
        
        return (Data.Release.Links.map(Link => {
            if(Link.Platform == "YouTube") {
                    return (
                        <std.MonsterCatPlaceHolder key={"yotube_embed"}>
                            <h2>MUSIC VIDEO</h2>
                            <iframe src={Link.Url.replace("/watch?v=", "/embed/").split("&")[0]} title={"YouTube video player"}></iframe>
                        </std.MonsterCatPlaceHolder>
                    )
                }
            }
        ))
    }

    function tracks() {

        function time( str ) {
            var x = Math.floor(str / 60)
            var y = (str - x * 60) / 100
            return String((x + y).toFixed(2)).replace('.', ":")
          }

        return (Data.Tracks.map((Link, index) => 
            (
            <li key={index +"_music"} >
                <audio controls hidden id={Link.Id}>
                        {playMusics(Link)}
                </audio>

                <div className='bar_1'>
                    <p className='number'>{index+1}</p>
                    <button onClick={function (){
                        const audio = document.getElementById(Link.Id);
                        const buttonImg = document.getElementById(Link.Id+"_button");
                        if(audio.paused) {
                            audio.play()
                            buttonImg.src = "pause.png"
                        } else {
                            audio.pause()
                            buttonImg.src = "play.png"
                        }
                    }}><img id={Link.Id+"_button"} alt='Play' src={"play.png"}/>
                    </button>

                <div>
                    <h2>{Link.Title}</h2>
                    <p>{Link.ArtistsTitle}</p>
                </div>
                </div>
                
                <div className='bar_2'>
                    <p>{time(Link.Duration)} <a rel='external' href={"https://www.monstercat.com/release/" + id +"#track-" + index}><img src={"share.svg"} alt='Share Button'/></a></p>
                    
                </div>
            </li>) 
            ))
    }

    function MonsterCattracks() {
        return (
            <std.MonsterCatPlaceHolder>
                <h2>TRACK LIST</h2>
                <ol>
                    {tracks()}
                </ol>
            </std.MonsterCatPlaceHolder>
        )
    }

    function MonsterCatFooter(){
        return (
            <std.MonsterCatFooter>
            <section className='bloco_um'>
                <div className='links_externos'>
                    <a>About Monstercat</a>
                    <a>Contact Us</a>
                    <a>Careers</a>
                    <a>News</a>
                    <a>Press</a>
                </div >
                <div className='links_externos'>
                    <a>Terms of Service</a>
                    <a>Privacy Policy</a>
                </div>
                <div className='link_email'>
                    <h3>Monstercat News</h3>
                    <p>Don't miss a thing, stay up to date with the latest news from us.</p>
                    <form>
                        <input type='email' placeholder='Enter Email'/>
                        <button className="confirm_button" type="submit" value="Submit"><span className="material-symbols-outlined">arrow_forward</span></button>
                    </form>
                </div>
            </section>
            <section>
                <div>
                    <h1>2011 - 2024 © Monstercat, All Rights Reserved</h1>
                </div>
            </section>
            <section className='bloco_dois'>
                <div>
                    <p>Um projeto feito para adquirir conhecimentos e base no framework React, ISSO NÂO É O SITE OFFICIAL é apenas um projeto feito para estudos.</p>
                </div>
            </section>
            </std.MonsterCatFooter>
        )
    }


    return (
        <std.Header>
            <std.ImagemBackground style={{backgroundImage: 'url(' +  getImage(id) + ')' }}/>
            {MonsterCatMenu()}
            {MonsterCatArticle()}
            {MonsterCatStream()}
            {MonsterCattracks()}
            {youtubeMusicLink()}
            {MonsterCatFooter()}
        </std.Header>
    )}

export default Home