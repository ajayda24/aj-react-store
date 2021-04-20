# aj-react-store
#### Easy state management for react
-----
<br />

## Installation
```js
npm i aj-react-store
```

## Usage

__``` import globalState,{useSaveStore,useInitStore} from 'aj-react-store'```__

### __In App.js__

Call ```useInitStore()``` 

<br />

### __Save to Global State__
```useSaveStore(identifierString,value)```

__Eg__: ```useSaveStore('formState',state)```

<br />

### __Access globalState__
```console.log(globalState)```

<br />

## __Example__
### App.js 

```
import React, { useState } from 'react'
import globalState, { useSaveStore, useInitStore } from 'aj-react-store'

import Form from './Form'

const App = (props) => {
  useInitStore() //To Activate globalState

  // Making a simple state using useState
  const [state, setState] = useState({
    a: 'hello',
    b: ['hi', 'hello'],
    c: { ha: 'qwe', hlo: 'hehe' },
  })

  useSaveStore('state', state) //Saving state to globalState

  console.log(globalState)

  return (
    <div>
      <Form />
      {globalState.form} {/* Tom */}
    </div>
  )
}

export default App

```

### Form.js 

```
import React,{useState} from 'react'
import globalState, { useSaveStore } from 'aj-react-store'

const Form = (props) => {
  // Making a simple state using useState
  const [name, setName] = useState('Tom')

  useSaveStore('form', name) //Saving state to globalState

  console.log(globalState)
  // {
  //   app:{
  //       a: 'hello',
  //       b: ['hi', 'hello'],
  //       c: { ha: 'qwe', hlo: 'hehe' },
  //   },
  //   form: 'Tom'
  // }

  return (
    <div>
      {globalState.state.a} {/* hello */}
    </div>
  )
}

export default Form

```