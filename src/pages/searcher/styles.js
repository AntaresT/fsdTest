import styled from 'styled-components'

export const Container = styled.div`

   display: flex;
   justify-content: center;
   align-items: center;
   height: 800px;
   flex-direction: column;

`

export const Title = styled.div`

   font-size: 30px;
   text-align: center;

`

export const Searcher = styled.div`

   display: flex;
   flex-direction: row;

`

export const Search = styled.input`

   width: 200px;

`

export const ConfirmBtn = styled.button`

   width: 150px;
   height: 50px;

`

export const Link = styled.button`

   font-size: 20px;
   max-height: 50px;
   border: none;
   cursor: pointer;
   background-color: white;

`

export const ResContainer = styled.div`

   display: flex;
   flex-direction: column;

`

export const UrlsBox = styled.div`

   max-height:200px;
   width: 350px;
   overflow: scroll;

`

export const KeyAndResult = styled.div`

   display:flex;
   flex-direction: row;
   width: 800px;
   justify-content: space-between;
   margin-top: 50px;

`

export const Words = styled.div`

   display: flex;
   flex-direction: column;

`

export const ListItem = styled.div`

   width: 200px;
   justify-content: space-between;
   display:flex;

`