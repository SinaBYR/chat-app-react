import React, { ReactNode } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 1;
`

const Content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

interface Props {
  children?: React.ReactNode
  onClose: () => void
}

export function Backdrop ({ children, onClose }: Props) {
  return (
    <Wrapper onClick={onClose}>
      {/* <Content>{children}</Content> */}
    </Wrapper>
  )
}