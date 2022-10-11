import * as React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link'

function App() {

  const vector = document.location.hash.substring(1)

  return <ul>
    <li><Button variant="contained">Hello World</Button></li>
    <li><Link href="https://veracode.com">Safe</Link></li>
    <li><Link href={`${vector}`}>Unsafe</Link></li>
    <li><Link href={`https://example.com/?something=${vector}`}>Tricky</Link></li>
    </ul>;
}

export default App;
