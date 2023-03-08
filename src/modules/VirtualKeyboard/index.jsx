import React, { useEffect, useState } from 'react'
import KeyboardContext from './contexts/KeyboardContext'
import { View } from 'react-native'
import { makeKeyboard } from './helpers/KeyboardHelpers'

const VirtualKeyboard = ({ onWrite = null, limit = 5, buttonsSettings = {} }) => {

  const defaultContextData = {
    writted: '', // texto escrito con el virtualkeyboard
    limit,
    buttons: buttonsSettings
    /** buttons props
     * {
     *   A : {
     *     background: string ( rgb o hexacolor )
     *     disabled: boolean
     *   }
     * }
     */
  }

  const keys = makeKeyboard()
  const [data, setData] = useState(defaultContextData)

  useEffect(() => {
    onWrite && onWrite(data.writted)
  }, [data.writted])

  useEffect(() => {
    setData(prev => ({ ...prev, buttons: buttonsSettings }))
  }, [buttonsSettings])

  return (
    <KeyboardContext.Provider value={{ data, setData }}>
      <View>
        {keys}
      </View>
    </KeyboardContext.Provider>
  )
}

export default VirtualKeyboard