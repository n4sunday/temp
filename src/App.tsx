import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ParthyList from 'views/Lawsuit/ParthyList'

import Finance from './views/Finance'
import Home from './views/Home'
import Lawsuit from './views/Lawsuit'
import Management from './views/Management'
import CaseReportAndService from './views/Lawsuit/CaseReportAndService'
import Login from 'views/Login'
import UploadFile from 'views/Lawsuit/UploadFile'
import PrivateRoute from 'components/Router/PrivateRoute'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute exact path="/lawsuit" component={Lawsuit} />
          <PrivateRoute exact path="/lawsuit/parthy" component={ParthyList} />
          <PrivateRoute exact path="/lawsuit/report_service" component={CaseReportAndService} />
          <PrivateRoute exact path="/lawsuit/upload_file" component={UploadFile} />
          <PrivateRoute exact path="/management" component={Management} />
          <PrivateRoute exact path="/finance" component={Finance} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
