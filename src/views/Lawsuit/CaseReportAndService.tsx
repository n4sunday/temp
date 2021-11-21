import MainContainer from 'components/Containers/MainContainer'
import Layout from 'components/Layout'
import LawsuitContainer from './components/Containers/LawsuitContainer'
import List from './components/CaseReportAndService/List'
import Search from './components/CaseReportAndService/Search/SearchCaseReportAndService'
import Detail from './components/CaseReportAndService/Detail'
import ModalGeneral from './components/CaseReportAndService/Modal/ModalCaseReportAndService'
import ModalStatus from './components/CaseReportAndService/Modal/ModalStatus'

const CaseReportAndService = () => {
  return (
    <Layout>
      <MainContainer>
        <LawsuitContainer search={<Search />} list={<List />}>
          <Detail />
        </LawsuitContainer>
      </MainContainer>
      <ModalGeneral />
      <ModalStatus />
    </Layout>
  )
}

export default CaseReportAndService
