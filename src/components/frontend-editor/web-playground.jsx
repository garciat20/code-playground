import React, { useRef } from 'react';
import style from './web-styles.module.css'

function WebPlayground(){

    // everytime a key is pressed anywhere, lets evaluate all the textareas and update the iframe

    const htmlRef = useRef(null);
    const cssRef = useRef(null);
    const jsRef = useRef(null);
    const iframeRef = useRef(null);
    
    function typing() {
            // Get values from textareas
        const htmlCode = htmlRef.current.value;
        const cssCode = cssRef.current.value;
        const jsCode = jsRef.current.value;
        const iframe = iframeRef.current;
        // let htmlCode = document.getElementById("htmlsandbox").value;
        // let cssCode = document.getElementById("csssandbox").value;
        // let jsCode = document.getElementById("jssandbox").value;

        iframe.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";

        iframe.contentWindow.eval(jsCode);
// document.getElementById("h1tag").innerText = "hu";
    }

      return (
        <>
           <div id="container" className={style.container}>
                <div className={style.left}>
                    <label for="html-sandbox" className={style.label}>
                        <i className={`fa-brands fa-html5 ${style.labelI}`}></i>HTML
                    </label>
                    <textarea id="html-sandbox" ref={htmlRef} className= {`${style.textarea} ${style.htmlsandbox}`} onKeyUp={typing}></textarea>
                    <label for="css-sandbox" className={style.label}>
                        <i className={`fa-brands fa-css3 ${style.labelI}`}></i>CSS
                    </label>
                    <textarea id="css-sandbox" ref={cssRef} className={`${style.textarea} ${style.csssandbox}`} onKeyUp={typing}></textarea>
                    <label for="js-sandbox" className={style.label}>
                        <i className={`fa-brands fa-js ${style.labelI}`}></i>JS
                    </label>
                    <textarea id="js-sandbox" ref={jsRef} className={`${style.textarea} ${style.jssandbox}`} onKeyUp={typing}></textarea>
                </div>
                <div className={style.right}>
                    <label for="output" className={style.label}>
                        <i className={`fa-solid fa-play ${style.labelI}`}></i>OUTPUT</label>
                    <iframe id="output" ref={iframeRef} className={style.iframe} sandbox="allow-scripts allow-same-origin"></iframe>
                </div>
            </div>
        </>
      );
}


export default WebPlayground