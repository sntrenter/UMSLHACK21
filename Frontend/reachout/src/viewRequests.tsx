import React, { useState } from 'react';

interface Props {
    user?: string
}

function ViewRequests(props: Props) {

      return (
        <p>help requests for {props.user}</p>
      );
    }
export default ViewRequests