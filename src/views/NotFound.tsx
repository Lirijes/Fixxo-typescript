import FooterSection from '../section/FooterSection'
import MainMenuSection from '../section/MainMenuSection'

const NotFound: React.FC = () => {
  return (
    <>
      <MainMenuSection />
      <div className="container d-flex justify-content-center align-items-center" style={{ height : "500px" }}>
        <h1> 404 - Page Not Found </h1>
      </div>
      <div>
        <FooterSection />
      </div>
    </>
  )
}

export default NotFound