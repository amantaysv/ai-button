import './App.scss'
import { Star } from './Star'
import { StarBig } from './StarBig'

function App() {
  return (
    <div className='container'>
      <div className='buttonWrapper'>
        <div className='ring'></div>
        <div className='button'>
          <div className='borderBottom'>
            <div className='borderBottomGradient'></div>
          </div>
          <div className='borderTop'>
            <div className='borderTopGradient'></div>
          </div>
          <div className='innerFill'>
            <div className='innerGlow'></div>
          </div>
          <div className='text'>
            <div className='stars'>
              <div className='star small'>
                <Star />
              </div>
              <div className='star medium'>
                <Star />
              </div>
              <div className='star big'>
                <StarBig />
              </div>
            </div>
            <span>AI Translation</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
