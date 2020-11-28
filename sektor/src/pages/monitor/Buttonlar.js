import React from 'react'

const Buttonlar = ({btn, Add, setHtml, setTitle, setEdit, setId}) => {
    const editHotLink = () => {
        setHtml(btn.content)
        setTitle(btn.title)
        setId(btn.id)
        setEdit(2)

    }
    return (
    <button style={{borderRadius: "5px", margin: "5px"}} onClick={()=> Add(btn.content)} className="hot_btn">{btn.title}<span onClick={editHotLink} class="badge"><i class="fas fa-pencil-alt"></i></span></button>
    )
}

export default Buttonlar