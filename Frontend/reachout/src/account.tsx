import React, { useState } from 'react';

interface Props {
    user?: string
}

function Account(props: Props) {

      return (
        <p>Hello Worl,your name is {props.user}</p>
      );
    }
export default Account