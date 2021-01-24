import React, { useEffect, useState } from "react"

import { Container, Search, ConfirmBtn, Link, 
        ResContainer, Title, Searcher, UrlsBox,
        KeyAndResult, Words, ListItem } from './styles'

import apis from '../../services/api'

export default () => {

  // const [ idKeyword, setIdKeyword ] = useState('');
  const [ requestResult, setRequestResult ] = useState('')
  const [ key, setKey] = useState('');
  const [ showId, setShowId ] = useState(false);
  const [ localReturn, setLocalReturn ] = useState([]);

  useEffect( () => {
    if (!showId) {
      localCallback()
    }
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

        localStorage.setItem("wordResult", JSON.stringify(addInLocal)) 
        setLocalReturn(addInLocal)
        
      },
      (err) => {
        console.log("failed")
        console.log(err);
      })
    }else{
      alert("O Campo de busca está vazio")
    }
    document.getElementById('searchValue').value = ''
  }

  function getRequest(id){
    
    apis.getRequest(id)
    .then((res)=> {
      setRequestResult(res.data)
    },
    (err)=> {
      console.log(err);
    })
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
      }
    })    
    
    localStorage.setItem("wordResult", JSON.stringify(delet)) 
    setLocalReturn(delet)


    
    // for (var i = 0; i< delet.length; i++){
    //   if(delet.idKey[i] === idDelete){
    //     delet = delet.splice(i,1);
    //   }
    // }
  }

  return(

    <Container>

      <Title>Searcher</Title>

      <Searcher>
        <Search type='text' id='searchValue' onBlur={(e) => {setKey(e.target.value) }} />
        <ConfirmBtn type='submit' onClick={() => doPost(key)} >Search</ConfirmBtn>
      </Searcher>
     

      <KeyAndResult>

      <Words>
        {localReturn.map((arrayData, index) => {
          return(
            <ListItem key={index}>
              <Link type='submit' key={arrayData.idKey} onClick={() => getRequest(arrayData.idKey)}>{arrayData.key}</Link>
              <Link type='submit'  onClick={ () => removeItem(arrayData.idKey)}> X </Link>
            </ListItem>
          )
        })}
      </Words>


      {requestResult &&
        <ResContainer>
          <label>Request Status:</label> <span>{requestResult.status}</span>
          <UrlsBox>
            <label>Urls:</label>
            <br/>
          {requestResult.urls.map((value, index) => {
            return (
              <span key={index}>{value}</span>
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

