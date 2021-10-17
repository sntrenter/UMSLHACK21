import React, { useState } from 'react';

interface Props {
    passUser: Function
    users?: any;
}

function Menubar(props: Props) {
    let  [items] = React.useState([{"id":1,"name":"JOHN"},{"id":2,"name":"ROSE"},{"id":3,"name":"BEN"},{"id":4,"name":"RACHEL"}]   );
    const [selectedOption, setSelectedOption] = useState(items[0].name);



      function handleChange(value: string): void{
        console.log("test",value)
        console.log(selectedOption)
        setSelectedOption(value)
        props.passUser(selectedOption)
        // handle other stuff like persisting to store etc
      }
      return (
        <select 
        value={selectedOption}
        onChange= {e => {props.passUser(e.target.value);setSelectedOption(e.target.value)}}
        >
          {items.map(item => (
            <option
              key={item.id}
              value={item.id}
            >
              {item.name}
            </option>
          ))}
        </select>
      );
    }
export default Menubar