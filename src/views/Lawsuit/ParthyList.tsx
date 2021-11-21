import React, { useEffect } from 'react'

import MainContainer from 'components/Containers/MainContainer'
import Layout from 'components/Layout'
import LawsuitContainer from './components/Containers/LawsuitContainer'
import Search from './components/ParthyList/Search/SearchParthy'
import List from './components/ParthyList/List'
import Detail from './components/ParthyList/Detail'
import ModalParthy from './components/ParthyList/Modal/ModalParthy'
import ModalGaruntee from './components/ParthyList/Modal/ModalGaruntee'
import { useParthy } from './hooks'

const ParthyList = () => {
  const { initialData } = useParthy()

  useEffect(() => {
    initialData()
  }, [])

  return (
    <Layout>
      <MainContainer>
        <LawsuitContainer search={<Search />} list={<List />}>
          <Detail />
        </LawsuitContainer>
      </MainContainer>
      <ModalParthy />
      <ModalGaruntee />
    </Layout>
  )
}

export default ParthyList
