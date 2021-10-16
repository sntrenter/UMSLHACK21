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

      return (
        <select 
        value={selectedOption}
        //onChange={()=>{props.passUser(selectedOption);console.log("test")}}
        onChange={e => {setSelectedOption(e.target.value); props.passUser(selectedOption)}}
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