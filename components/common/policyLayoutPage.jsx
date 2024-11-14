import React from 'react'
import { Container } from 'react-bootstrap'

const PolicyLayoutPage = ({image, title, content}) => {
  // const content = "<p className='masterContent text-start pe-0 pe-lg-3'>Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button detail cotton blend cute functional. Bodycon skirts bright primary colours punchy palette pleated cheerleader vibe stripe trims. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Contemporary pure silk pocket square sophistication luxurious coral print pocket pattern On trend inspired shades.<br /><br />Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge single-breasted jacket. Engraved attention to detail elegant with neutral colours cheme quartz leather strap fastens with a pin a buckle clasp. Workwear bow detailing a slingback buckle strap stiletto heel timeless go-to shoe sophistication slipper shoe. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.</p><ul className='listStyle'><li>Crisp fresh iconic elegant timeless clean perfume</li><li>Neck straight sharp silhouette and dart detail</li><li>Machine wash cold slim fit premium stretch selvedge denim comfortable low waist</li></ul><br/><p className='masterContent text-start pe-0 pe-lg-3'>Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button detail cotton blend cute functional. Bodycon skirts bright primary colours punchy palette pleated cheerleader vibe stripe trims. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Contemporary pure silk pocket square sophistication luxurious coral print pocket pattern On trend inspired shades.<br /><br />Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge single-breasted jacket. Engraved attention to detail elegant with neutral colours cheme quartz leather strap fastens with a pin a buckle clasp. Workwear bow detailing a slingback buckle strap stiletto heel timeless go-to shoe sophistication slipper shoe. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.</p><ul className='listStyle'><li>Crisp fresh iconic elegant timeless clean perfume</li><li>Neck straight sharp silhouette and dart detail</li><li>Machine wash cold slim fit premium stretch selvedge denim comfortable low waist</li></ul>"
  return (
    <div className='masterPadding masterTopPadding'>
      <Container>
        <div className='item_center flex-column blue_bar mb-4 mb-lg-5'>
          <img className='img-fluid mb-3 mb-lg-4' src={image} alt='privacy-policy' />
          <h2 className='policyHeading text-light text-center'>{title}</h2>
        </div>
        <div className='listStyle' dangerouslySetInnerHTML={{ __html: content }} />
      </Container>
    </div>
  )
}

export default PolicyLayoutPage