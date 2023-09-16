import { useState } from React;
const TextField = () => {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleKeyDown = (event) => {

    };

    return (
        <div>
            <input type="text" value={text} onChange={handleChange} onKeyDown={handleKeyDown}/>
        </div>
    );
};

export default TextField;