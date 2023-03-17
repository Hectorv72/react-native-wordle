import React, { useEffect, useMemo, useState } from 'react'
import KeyboardContext from './contexts/KeyboardContext'
import { View } from 'react-native'
import { makeKeyboard } from './helpers/KeyboardHelpers'


const VirtualKeyboard = ({ written, setWritten, limit = 5, buttonsSettings = {} }) => {
  const defaultSettings = {
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
  const keys = useMemo(() => makeKeyboard(), [])
  const [settings, setSettings] = useState(defaultSettings)
  // const [written, setWritten] = useState('')

  const context = {
    settings,
    setSettings,
    written,
    setWritten
  }

  useEffect(() => {
    setSettings(prev => ({ ...prev, buttons: buttonsSettings }))
  }, [buttonsSettings])

  return (
    <KeyboardContext.Provider value={context}>
      <View style={{ alignItems: 'center', gap: 5 }}>
        {keys}
      </View>
    </KeyboardContext.Provider>
  )
}

export default VirtualKeyboard