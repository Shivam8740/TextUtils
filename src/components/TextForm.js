import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied!", "success");
    }
    const handleClr = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text box cleared", "success");
    }
    const handleRemSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }
    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);

    }
    const wordCount = () => {
        let count = 0;
        let words = text.split(' ');
        for (let i = 0; i < words.length; i++) {
            if (words[i] !== "") {
                count++;
            }
        }
        return count;
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className='container'>
                <h1 className='my-3'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ background: props.mode === 'dark' ? '#5C8374' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to LowerCase</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleClr}>Clear Text</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleRemSpace}>Remove Extra Space</button>
            </div>
            <div>
                <h6>Total Words = {wordCount(text)}</h6>
                <h6>Total Characters = {text.length}</h6>
                <h6>Time to Read = {(wordCount(text)) * 0.008} Minutes</h6>
                <h2>Preview</h2>
                <p>{text}</p>

            </div>
        </>
    )
}