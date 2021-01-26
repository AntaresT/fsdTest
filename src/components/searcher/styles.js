import styled from 'styled-components'

 const Container = styled.div`

   display: flex;
   justify-content: center;
   align-items: center;
   height: 800px;
   flex-direction: column;
   font-family: Arial, Helvetica;

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
   border-radius: 8px;
   border: 2px solid black;
   margin-right: 10px;

`

 const ConfirmBtn = styled.button`

   width: 150px;
   height: 50px;
   transition-duration: 0.4s;
   border: 2px solid #3498db;
   border-radius: 8px;
   background-color: white;
   &:hover {
      background-color: #2980b9; 
      color: white;
   }

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
   margin-top: 10px;

`

 const Link = styled.button`

   font-size: 20px;
   max-height: 50px;
   border: none;
   cursor: pointer;
   background-color: white;
   transition: all 1s ease;
   /* &:hover {
      box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
   } */

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
   color: ${props => props.status? '#e74c3c' : '#2ecc71' };
   font-weight: bold;

`

const UrlItem = styled.span`

   margin-top: 5px;
   display: block;

`

export   { Container, Search, ConfirmBtn,
        ResContainer, Title, Searcher,
        UrlsBox, KeyAndResult, WordsList, 
        ListItem, Link, Status,
        StatusTitle, StatusType, UrlItem }