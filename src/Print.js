import React, {useState, Fragment} from 'react'
import Phead from './PrintHead'
import Pbody from './Pbody'
const Print = ({sP, Con,d,s}) => {

    const [p,setP]= useState(true)
    let content
    let content2
    let content3
    let content4
    if(Con.length > 70) {
        const maped1 = Con.filter((m) => m.s1 == 1 ).map((x)=> {
            const obj = {...x}
            obj.soni = 1
            return obj
        })
        content = maped1

        const maped2 = Con.filter((m) => m.s1 == 2 ).map((x)=> {
            const obj = {...x}
            obj.soni = 1
            return obj
        })
        content2 = maped2

        const maped3 = Con.filter((m) => m.s1 == 3 ).map((x)=> {
            const obj = {...x}
            obj.soni = 1
            return obj
        })
        content3 = maped3
        const maped4 = Con.filter((m) => m.s1 == 4 ).map((x)=> {
            const obj = {...x}
            obj.soni = 1
            return obj
        })
        content4 = maped4
    }else {
        content = Con
    }
    const sa = ()=> {
        setP(false)
        setTimeout(()=> {
            window.print()
            sP(false)
        }, 100)
    }
    const back = ()=> {
        sP(false)
    }
    return (
        <Fragment>
            <div style={{display: "flex", justifyContent:"space-between"}}>
                 {p ? <div onClick={back} style={{cursor: "pointer", margin: "10px 30px", color:"var(--main-color)", fontSize:"20px"}}><i class="fas fa-arrow-alt-circle-left"></i></div>: null} 
                 {p ? <div onClick={sa} style={{cursor: "pointer", margin: "10px 30px"}}><img src="/print.svg"></img></div>: null} 
            </div>      
        <div className="print_con">
            {content ? <Phead d={d} s={s ? s:"1"}></Phead>: null}
            {content ? content.map(m => <Pbody info={m}></Pbody>): null}

            {content2 && <Phead d={d} s="2"></Phead>}
            {content2 ? content2.map(m => <Pbody info={m}></Pbody>): null}
            
            {content3 && <Phead d={d} s="3"></Phead>}
            {content3 ? content3.map(m => <Pbody info={m}></Pbody>): null}

            {content4 && <Phead d={d} s="4"></Phead>}
            {content4 ? content4.map(m => <Pbody info={m}></Pbody>): null}
            
        </div>
        </Fragment> 
    )
}

export default Print
