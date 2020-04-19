import React from "react";
import "./highlight.css";

const HighlightDifferencesComponent = ({ text1, text2 }: any) => {
    /**
    * This creates the regex to find the wanted `quote`.
    * If you want to highlight all the occurances of a `quote`, not
    * only the first occurance, add 'g' as the second parameter:
    * ex: const regex = new RegExp(`(${this.props.quote})`);
    * If you want to highlight multiple quotes from an array
    * you could do
    * const regex = new RegExp(`(${this.props.quotes.join('|')})`);
    */
    // const regex = new RegExp(`(${quote})`);
    /**
     * In `content` we wrap `quote`'s occurance(s) in `em`s
     * with a class `highlighed`. Please note that this will
     * be rendered as html, not React, so `class` is used instead
     * of `className`.
     */
    // const highlightedHtml = content.replace(
    //     regex,
    //     "<em class='highlighted'>$1</em>"
    // );

    text1 = window.localStorage.getItem('prevOutputValue');

    text1 = !!text1 ? text1 : text2;

    const getDiff = (text1: any, text2: any) => {
        //Takes in two strings 
        //Returns an array of the span of the differences 
        //So if given:
        // text1: "that is number 124"
        // text2: "this is number 123"
        //It will return:
        // [[2,4],[17,18]]
        //If the strings are of different lengths, it will check up to the end of text1 
        //If you want it to do case-insensitive difference, just convert the texts to lowercase before passing them in 
        var diffRange = []
        var currentRange = undefined;
        if (!!text1 && !!text2) {
            for (var i = 0; i < text1.length; i++) {
                if (text1[i] !== text2[i]) {
                    //Found a diff! 
                    if (currentRange === undefined) {
                        //Start a new range 
                        currentRange = [i]
                    }
                }
                if (currentRange !== undefined && text1[i] === text2[i]) {
                    //End of range! 
                    currentRange.push(i)
                    diffRange.push(currentRange)
                    currentRange = undefined
                }
            }
            //Push any last range if there's still one at the end 
            if (currentRange !== undefined) {
                currentRange.push(i)
                diffRange.push(currentRange)
            }

        }
        return diffRange;
    }

    let text1LineByLine = text1.split('\n');
    let text2LineByLine = text2.split('\n');
    let element = document.createElement('p');
    element.innerHTML = "";

    for (let j = 0; j < text2LineByLine.length; j++) {
        // var text1 = "that is number 124"
        // var text2 = "this is number 123"
        //let diffRange = getDiff(text1, text2)
        let text1line = j < text1LineByLine.length ? text1LineByLine[j] : "";
        let text2line = text2LineByLine[j];
        let diffRange = getDiff(text2line, text1line)

        //We have to loop backwards, because 
        for (let i = diffRange.length - 1; i >= 0; i--) {
            let range = diffRange[i]
            //Inject spans around the range
            let s = range[0]//start
            let e = range[1]//end
            text2line = text2line.slice(0, s) + "<span class='highlight'>" + text2line.slice(s, e) + "</span>" + text2line.slice(e)
        }

        element.innerHTML += text2line + `<br />`;
    }

    window.localStorage.setItem('prevOutputValue', text2);

    //Now we just need to generate the html according to the diff ranges we have 

    return (
        <div dangerouslySetInnerHTML={{ __html: element.innerHTML }} />
    );
}

export default HighlightDifferencesComponent;
