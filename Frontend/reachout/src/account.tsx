import React, { useState } from 'react';

interface Props {
    user?: string
}

function Account(props: Props) {

      return (
        <p>your user id is {props.user}</p>
      );
    }
export default Account