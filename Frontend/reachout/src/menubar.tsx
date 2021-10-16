import React, { useState } from 'react';

interface Props {
    passUser: Function
}

function Menubar(props: Props) {
    const [items] = React.useState([
        {
          label: "John",
          value: "user1"
        },
        { label: "James", value: "user2" },
        { label: "Jamantha", value: "user3" }
      ]);
      const [selectedOption, setSelectedOption] = useState(items[0].value);

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
              key={item.value}
              value={item.value}
            >
              {item.label}
            </option>
          ))}
        </select>
      );
    }
export default Menubar