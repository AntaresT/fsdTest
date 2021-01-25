import styled from 'styled-components'

 const Container = styled.div`

   display: flex;
   justify-content: center;
   align-items: center;
   height: 800px;
   flex-direction: column;

`

 const Title = styled.title`

   font-size: 30px;
   text-align: center;
   display: flex;

`

 const Searcher = styled.div`

   display: flex;
   flex-direction: row;
   margin-top: 20px;

`

 const Search = styled.input`

   width: 200px;

`

 const ConfirmBtn = styled.button`

   width: 150px;
   height: 50px;

`

 const ResContainer = styled.div`

   display: flex;
   flex-direction: column;

`

 const UrlsBox = styled.div`

   max-height:200px;
   width: 350px;
   overflow: scroll;
   margin-top: 10px;

`

 const KeyAndResult = styled.div`

   display:flex;
   flex-direction: row;
   width: 800px;
   justify-content: space-between;
   margin-top: 50px;

`

 const WordsList = styled.div`

   display: flex;
   flex-direction: column;

`

 const ListItem = styled.div`

   width: 200px;
   justify-content: space-between;
   display:flex;

`

 const Link = styled.button`

   font-size: 20px;
   max-height: 50px;
   border: none;
   cursor: pointer;
   background-color: white;

`

 const Status = styled.div`

   display: flex;
   flex-direction: row;

`

 const StatusTitle = styled.span`

   font-size: 20px;
   margin-right: 20px;

`

 const StatusType = styled.span`

   font-size: 20px;
   text-transform: uppercase;

`

const UrlItem = styled.span`

   margin-top: 5px;
   display: block;

`

export { Container, Search, ConfirmBtn,
   ResContainer, Title, Searcher,
   UrlsBox, KeyAndResult, WordsList, 
   ListItem, Link, Status,
   StatusTitle, StatusType, UrlItem }