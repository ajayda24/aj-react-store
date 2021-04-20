import { useState, useEffect } from 'react'

let globalState = {}

export const useSaveStore = (componentName, componentState) => {
  useEffect(() => {
    if (globalState) {
      globalState.appStateChanger()
    }
  }, [globalState])

  if (Array.isArray(componentState)) {
    globalState[componentName] = componentState
  } else if (typeof componentState == 'object') {
    let stateStringfy = JSON.parse(JSON.stringify(componentState))
    globalState[componentName] = {
      ...globalState.componentName,
      ...stateStringfy,
    }
  } else {
    globalState[componentName] = componentState
  }
}

export const useInitStore = () => {
  const [stateChanging, setStateChanging] = useState(false)
  const setWholeStateHandler = (updates) => {
    setStateChanging(!stateChanging)
  }
  useSaveStore('appStateChanger', setWholeStateHandler)
}

export default globalState
