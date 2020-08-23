import React from 'react';
import '../Gallery/Gallery.css';
import Slider from "react-slick";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import gallery_1 from '../../assets/img/gallery/1.jpg';
import gallery_2 from '../../assets/img/gallery/2.jpg';
import gallery_3 from '../../assets/img/gallery/3.jpg';
import gallery_4 from '../../assets/img/gallery/4.jpg';
import gallery_5 from '../../assets/img/gallery/5.jpg';
import gallery_6 from '../../assets/img/gallery/6.jpg';
import gallery_7 from '../../assets/img/gallery/7.jpg';
import gallery_8 from '../../assets/img/gallery/8.jpg';
import gallery_9 from '../../assets/img/gallery/9.jpg';
import gallery_10 from '../../assets/img/gallery/10.jpg';
import gallery_11 from '../../assets/img/gallery/11.jpg';
import gallery_12 from '../../assets/img/gallery/12.jpg';

const images = [
  gallery_1,
  gallery_2,
  gallery_3,
  gallery_4,
  gallery_5,
  gallery_6,
  gallery_7,
  gallery_8,
  gallery_9,
  gallery_10,
  gallery_11,
  gallery_11,
];

class Gallery extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  onImageSelect(id){
    setTimeout(() => {
      this.setState({
        photoIndex:id-1,
        isOpen: true
      })
    }, 300);
  }
    render() {
      const { photoIndex, isOpen } = this.state;
      const settings = {
      focusOnSelect: false,
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
      };
      const imageDiv = {
  outline:"0"
      }
      const imgStyle = {
       height: "150px",
       width: "220px",
        marginLeft: "15px"
      }

        return (
          
            <div id="gallery">
                <div className="container">
        <div className="section-header">
          <h2>Gallery</h2>
          <p>Check our gallery from the recent events</p>
        </div>
               <Slider {...settings}>
          <div>
          <img onClick={()=>this.onImageSelect("1")} style={imgStyle} src={gallery_1} />
          </div>
          <div>
          <img onClick={() => this.onImageSelect("2")} style={imgStyle} src={gallery_2} />
          </div>
          <div>
          <img onClick={() => this.onImageSelect("3")} style={imgStyle} src={gallery_3} />
          </div>
          <div>
          <img onClick={() => this.onImageSelect("4")} style={imgStyle} src={gallery_4} />
          </div>
          <div>
          <img onClick={() => this.onImageSelect("5")} style={imgStyle} src={gallery_5} />
          </div>
          <div>
          <img onClick={() => this.onImageSelect("6")} style={imgStyle} src={gallery_6} />
          </div>
          <div>
          <img onClick={() => this.onImageSelect("7")} style={imgStyle} src={gallery_7} />
          </div>
          <div>
          <img onClick={() => this.onImageSelect("8")} style={imgStyle} src={gallery_8} />
          </div>
          <div>
          <img onClick={() => this.onImageSelect("9")} style={imgStyle} src={gallery_9} />
          </div>
          <div>
          <img onClick={() => this.onImageSelect("10")} style={imgStyle} src={gallery_10} />
          </div>
          <div>
          <img onClick={() => this.onImageSelect("11")} style={imgStyle} src={gallery_11} />
          </div>
          <div>
          <img onClick={() => this.onImageSelect("12")} style={imgStyle} src={gallery_12} />
          </div>
        </Slider>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
        {/* <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider> */}
        </div>
         {/* <section id="gallery" className="wow fadeInUp">

<div class="container">
  <div class="section-header">
    <h2>Gallery</h2>
    <p>Check our gallery from the recent events</p>
  </div>
</div>

<div class="owl-carousel gallery-carousel">
  <a href={gallery_1} class="venobox" data-gall="gallery-carousel"><img src={gallery_1} alt=""/></a>
  <a href={gallery_2} class="venobox" data-gall="gallery-carousel"><img src={gallery_2} alt=""/></a>
  <a href={gallery_3} class="venobox" data-gall="gallery-carousel"><img src={gallery_3} alt=""/></a>
  <a href={gallery_4} class="venobox" data-gall="gallery-carousel"><img src={gallery_4} alt=""/></a>
  <a href={gallery_5} class="venobox" data-gall="gallery-carousel"><img src={gallery_5} alt=""/></a>
  <a href={gallery_6} class="venobox" data-gall="gallery-carousel"><img src={gallery_6} alt=""/></a>
  <a href={gallery_7} class="venobox" data-gall="gallery-carousel"><img src={gallery_7} alt=""/></a>
  <a href={gallery_8} class="venobox" data-gall="gallery-carousel"><img src={gallery_8} alt=""/></a>
</div>

</section> */}
            </div>
        )
    }
}

export default Gallery;
