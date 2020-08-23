import React from 'react';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import ModalVideo from 'react-modal-video'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


class Videoplayer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
          }
        this.openModal = this.openModal.bind(this)
    }

    openModal () {
        this.setState({isOpen: true})
      }
      
    render(){
        return(
            <div>
                <section id="hero">
    <div className="hero-container" data-aos="fade-up" data-aos-delay="150">
      <h1>DentNav</h1>
      <h2>A Guiding Platform for the International Dentists to Abroad</h2>
      <div className="d-flex">
        <a className="venobox btn-watch-video" onClick={this.openModal} data-vbtype="video" data-autoplay="true"><PlayCircleFilledWhiteOutlinedIcon className="videobutton"/> Watch Video </a>
        <ModalVideo channel='youtube' autoplay="1" isOpen={this.state.isOpen} videoId='X69WfIXa5g0' onClose={() => this.setState({isOpen: false})} />
      </div>
    </div>
  </section>
            </div>
        )
    }
}

export default Videoplayer;