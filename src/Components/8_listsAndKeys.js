import React from "react";

function ListAndKeys() {
    // const messages = ['React', 'Re: React', 'Re:Re: React'];
    const messages = [
        {id: 1, name: 'React'},
        {id: 2, name: 'Re: React'},
        {id: 3, name: 'Re:Re: React'}
    ];
    const data = messages.map((data, index) => {
        return <Main key={data.id} data={data} id={data.id}/>
    })

    return data
}

function Main(props) {
    return(
        <li>
            {props.data.name} -
            {props.id}
        </li>
    )
}

export default ListAndKeys

