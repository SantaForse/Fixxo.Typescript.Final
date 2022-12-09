import NotFoundImage from '../assets/images/not-found.jpg'


const NotFound: React.FC = () => {
  window.parent.document.title = 'Not Found | Fixxo.'
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <img src={NotFoundImage} alt="404 Page Not Found" style={{ height: "768px" }} />
        <h1 className="ms-4" style={{ fontSize: "3rem"}}>The page you were looking for could not be found.</h1>
      </div>
    </>
  )
}

export default NotFound