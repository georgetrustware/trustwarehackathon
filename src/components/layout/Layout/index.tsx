// import { useNavigate } from 'react-router-dom'
// import { backButton } from '@telegram-apps/sdk-react'
import { useEffect,useState } from 'react'
import NavBar from './NavBar'

const Layout = ({ children, back = true }) => {
  // const navigate = useNavigate()

  // useEffect(() => {
  //   if (back) {
  //     backButton.show()
  //     return backButton.onClick(() => {
  //       navigate(-1)
  //     })
  //   }
  //   backButton.hide()
  // }, [back, navigate])


  const [isLayoutReady, setIsLayoutReady] = useState(false)

  useEffect(() => {
    setIsLayoutReady(true)
  }, [setIsLayoutReady])

  return isLayoutReady? (
    <div
      style={{
        maxWidth: 1200,
        height: '100vh',
        margin: '20px auto',
        textAlign: 'center',
        wordWrap: 'break-word',
      }}
    >
      <div className='h-[85%]'>
        {children}
      </div>

      <div className='h-[15%]'>
        <NavBar/>
      </div>
    </div>
  ): (
    <div/>
  )
}

export default Layout
