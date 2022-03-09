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

interface Props {
  onClose: () => void
}

export function Backdrop ({ onClose }: Props) {
  return (
    <Wrapper onClick={onClose}></Wrapper>
  )
}