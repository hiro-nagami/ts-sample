import { RecoilRoot } from 'recoil'
import { BasePage } from './views/BasePage'
import ErrorBoundary from 'antd/es/alert/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <RecoilRoot>
        <BasePage />
      </RecoilRoot>
    </ErrorBoundary>
  )
}

export default App
