import React from 'react'

import MainContainer from 'components/Containers/MainContainer'
import Layout from 'components/Layout'
import LawsuitContainer from './components/Containers/LawsuitContainer'
import Search from './components/UploadFile/Search/SearchUploadDocument'
import List from './components/UploadFile/List'
import Detail from './components/UploadFile/Detail'

const UploadFile = () => {
  return (
    <Layout>
      <MainContainer>
        <LawsuitContainer search={<Search />} list={<List />}>
          <Detail />
        </LawsuitContainer>
      </MainContainer>
    </Layout>
  )
}

export default UploadFile
