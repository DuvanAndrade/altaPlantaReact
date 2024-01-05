import { Link } from 'react-router-dom'
const MiCarousel = () =>{
  return(
    <div>
      <div id="carouselExampleCaptions" className="carousel slide container w-full ">
        <div className="carousel-indicators ">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner container  h-96">
          <div className="carousel-item active max-w-max">
            <img src="/img/2.png" className="d-block" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <Link className='hover:bg-white bg-colorBgMain transition-all hover:text-red text-black rounded ' to="/productos/interior"><button className=' w-20 '>ver más</button></Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/img/3.png" className="d-block" alt="..."/>
            
          </div>
          <div className="carousel-item">
            <img src="/img/1.png" className="d-block" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  )

}
export default MiCarousel