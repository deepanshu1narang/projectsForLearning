import React, { useState, useEffect } from 'react'

export default function List0121(props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(props.getItems());
        console.log("updating items");
    }, [props.getItems]);

  return items.map((item, index) => <div key={index.toString() + " " + item} > {item} </div>);
}
