import React from 'react'
import { DefaultEditor } from 'react-simple-wysiwyg';

const Layout = () => {
    const [html, setHtml] = React.useState('my <b>HTML</b>');
  
    const onChange = (e) => {
      setHtml(e.target.value);
    };
    const Add = () => {
        setHtml(html + "<h1>Hello world</h1>")
    }
    return (
        <div>
             <DefaultEditor value={html} onChange={onChange} />
             <button onClick={Add} >Add something</button>
        </div>
    )
}

export default Layout
