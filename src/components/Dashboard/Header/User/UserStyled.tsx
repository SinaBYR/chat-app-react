import styled from 'styled-components'
import { BsPersonSquare } from 'react-icons/bs'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 65%;
  z-index: 1;
`

export const Upper = styled.button`
  display: flex;
  align-items: center;
  width: 250px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.orange};
  margin-left: 16px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 30em) {
    width: auto;
    width: 200px;
  }
`

export const PersonIcon = styled(BsPersonSquare)`
  width: 25px;
  height: 25px;
  font-size: 8rem;
  margin-left: 4px;
`

export const Username = styled.h3`
  margin-left: 8px;
  margin-right: auto;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 70%;
`

export const ArrowDownIcon = styled(MdKeyboardArrowDown)`
  font-size: 24px;
`

export const ArrowUpIcon = styled(MdKeyboardArrowUp)`
  font-size: 24px;
`

export const Lower = styled.div`
  position: absolute;
  top: 95%;
  left: 0;
  width: calc(100% - 16px);
  background-color: ${({ theme }) => theme.colors.orange};
  padding: 0.5rem;
  margin-left: 16px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-top: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;

  & > *:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`