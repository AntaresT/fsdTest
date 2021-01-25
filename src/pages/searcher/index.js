import React, { useEffect, useState } from "react"

import { Container, Search, ConfirmBtn,
        ResContainer, Title, Searcher,
        UrlsBox, KeyAndResult, WordsList, 
        ListItem, Link, Status,
        StatusTitle, StatusType, UrlItem } 
      from './styles'

import SEO from '../../components/seo'
import apis from '../../services/api'

const SearchIndex = () => {

  const [ key, setKey] = useState('');
  const [ showId, setShowId ] = useState(false);
  const [ showRequest, setShowRequest] = useState(false);
  const [ localReturn, setLocalReturn ] = useState([]);
  const [ requestResult, setRequestResult ] = useState({});

  useEffect (() => {
    if (!showId) {
      localCallback()
    }
    //TODO: Fazer função de atualização. Verifica se existe algum com status Active e da um Get
  })

  function doPost(keyword){

    if (keyword){
      let data = { 'keyword': keyword }
      let addInLocal = JSON.parse(localStorage.getItem('wordResult'))
      apis.postRequest(data)
      .then((res)=> {
        data['idKeyList'] = res.data.id;
        addInLocal.push({
        'idKey': data.idKeyList,
        'key': data.keyword 
        })
        localStorage.setItem('wordResult', JSON.stringify(addInLocal)) 
        setLocalReturn(addInLocal)
        setKey('')  
      },
      (err) => {
        console.log('failed')
        console.log(err);
      })
    }else{
      alert('O Campo de busca está vazio')
    }
  }
 
  function getRequest(id){
    setShowId(false)
    apis.getRequest(id)
    .then((res)=> {
      setRequestResult(res.data)
    },
    (err)=> {
      console.log(err);
    })
    setShowRequest(true)
  }
 
  function localCallback() {
    
    let getItem = JSON.parse(localStorage.getItem('wordResult'))
    if (getItem !== null){
      setLocalReturn(getItem)
      setShowId(true)
    }
    if (!showId && getItem === null){
      localStorage.setItem('wordResult',JSON.stringify([]));
      setShowId(true)
    }
  }

  function removeItem(idDelete){
    let delet = JSON.parse(localStorage.getItem('wordResult'))
    delet.forEach((item, index) =>{
      if(item['idKey'] === idDelete){
        delet.splice(index, 1)
        setShowRequest(false)
        setShowId(false)
      }

    })   
    localStorage.setItem("wordResult", JSON.stringify(delet)) 
    setLocalReturn(delet)
  }

  return(
    <Container>
      <SEO title='Searcher' />
      <Title>Searcher</Title>
      <Searcher>
        <Search type='text' value={key} onChange={(e) => {setKey(e.target.value) }} />
        <ConfirmBtn type='submit' onClick={() => doPost(key)}>Search</ConfirmBtn>
      </Searcher>
      <KeyAndResult>
        <WordsList>
          {localReturn.map((arrayData, index) => {
            return(
            <ListItem key={index}>
              <Link type='submit' key={arrayData.idKey} onClick={() => getRequest(arrayData.idKey) }>{arrayData.key}</Link>
              <Link type='submit'  onClick={ () => removeItem(arrayData.idKey)}> X </Link>
            </ListItem>
            )
          })}
        </WordsList>
        {showRequest && 
          <ResContainer>
            <Status>
              <StatusTitle>Request Status:</StatusTitle>  
              <StatusType>{requestResult.status}</StatusType>
            </Status>
            <UrlsBox>
              <StatusTitle>Urls:</StatusTitle>
              <br/>
            {requestResult.urls.map((value, index) => {
              return (
                <UrlItem key={index}>{value}</UrlItem>
                )
              })  
            }
            </UrlsBox>
          </ResContainer>
        }
      </KeyAndResult>
    </Container>
  )

}

export default SearchIndex