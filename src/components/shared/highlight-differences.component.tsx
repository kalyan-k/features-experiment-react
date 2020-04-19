import React from "react";
import "./highlight.css";

const HighlightDifferencesComponent = ({ text1, text2 }: any) => {
    text1 = window.localStorage.getItem('prevOutputValue');

    text1 = !!text1 ? text1 : text2;

    const getValueDiffeence = (string1: any, string2: any) => {
        let isStringChanged = false;

        if (string1.length !== string2.length)
            isStringChanged = true;
        else {
            for (let i = 0; i < string2.length; i++) {
                if (string1[i] !== string2[i]) {
                    isStringChanged = true;
                    break;
                }
            }
        }

        return isStringChanged;
    }

    let text1LineByLine = text1.split('\n');
    let text2LineByLine = text2.split('\n');
    let element = document.createElement('p');
    element.innerHTML = "";

    for (let j = 0; j < text2LineByLine.length; j++) {
        let text1line = j < text1LineByLine.length ? text1LineByLine[j] : "";
        let text2line = text2LineByLine[j];

        let actualText1Line = text1line.split(':');
        let actualText2Line = text2line.split(':');

        if (actualText2Line.length > 1) {
            let isDifferencePresent = getValueDiffeence(actualText1Line[1], actualText2Line[1]);

            if(isDifferencePresent){
                text2line = text2line.replace(actualText2Line[1],`<span class='highlight'>${actualText2Line[1]}</span>`);
            }
        }

        element.innerHTML += text2line + `<br />`;
    }

    window.localStorage.setItem('prevOutputValue', text2);

    return (
        <div dangerouslySetInnerHTML={{ __html: element.innerHTML }} />
    );
}

export default HighlightDifferencesComponent;
