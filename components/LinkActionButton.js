import {ActionIcon, ThemeIcon, useMantineTheme } from '@mantine/core'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'

function ALinkButton({icon, page, size=50, glow='blue'}) {
  const [active, setActive] = useState('transparent')
  const theme = useMantineTheme()
  const [color, setColor] = useState(null)

  useEffect(()=>{
    if(glow == 'black'){
      setColor('dark')
    }else if(glow == 'purple'){
      setColor('grape')
    }
  }, [])

  
  const onTouch = useCallback(
    () => {
      setActive('filled')
    },
    [],
  )
  const onTouchEnd = useCallback(
    () => {
      setActive('transparent')
    },
    [],
  )
  
  return (
    <Link href={page}>
    <ActionIcon 
    style={{
      boxShadow:`0px 0px 15px ${glow}`
    }}
    onTouchStart={onTouch} 
    onTouchEnd={onTouchEnd} 
    variant={active}
    color={color || glow}
    size={size}
    radius={50}>{icon}
    </ActionIcon>
    </Link>
  )
}

export default ALinkButton