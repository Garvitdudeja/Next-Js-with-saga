const data = [{
    id: 1,
    content: "<p className='masterContent text-start pe-0 pe-lg-3'>Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button detail cotton blend cute functional. Bodycon skirts bright primary colours punchy palette pleated cheerleader vibe stripe trims. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Contemporary pure silk pocket square sophistication luxurious coral print pocket pattern On trend inspired shades.<br /><br />Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge single-breasted jacket. Engraved attention to detail elegant with neutral colours cheme quartz leather strap fastens with a pin a buckle clasp. Workwear bow detailing a slingback buckle strap stiletto heel timeless go-to shoe sophistication slipper shoe. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.</p> <br /><br /><ul className='listStyle'><li>Crisp fresh iconic elegant timeless clean perfume</li><li>Neck straight sharp silhouette and dart detail</li><li>Machine wash cold slim fit premium stretch selvedge denim comfortable low waist</li></ul>",
    title: "Out of My Lane Series",
    created_at: "Fri Nov 08 2024 16:52:48 GMT+0530 (India Standard Time)"

},
{
    id: 2,
    content: "<p className='masterContent text-start pe-0 pe-lg-3'>Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button detail cotton blend cute functional. Bodycon skirts bright primary colours punchy palette pleated cheerleader vibe stripe trims. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Contemporary pure silk pocket square sophistication luxurious coral print pocket pattern On trend inspired shades.<br /><br />Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge single-breasted jacket. Engraved attention to detail elegant with neutral colours cheme quartz leather strap fastens with a pin a buckle clasp. Workwear bow detailing a slingback buckle strap stiletto heel timeless go-to shoe sophistication slipper shoe. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.</p> <br /><br /><ul className='listStyle'><li>Crisp fresh iconic elegant timeless clean perfume</li><li>Neck straight sharp silhouette and dart detail</li><li>Machine wash cold slim fit premium stretch selvedge denim comfortable low waist</li></ul>",
    title: "2",
    created_at: "Fri Nov 08 2024 16:52:48 GMT+0530 (India Standard Time)"
},
{
    id: 3,
    content: "<p className='masterContent text-start pe-0 pe-lg-3'>Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button detail cotton blend cute functional. Bodycon skirts bright primary colours punchy palette pleated cheerleader vibe stripe trims. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Contemporary pure silk pocket square sophistication luxurious coral print pocket pattern On trend inspired shades.<br /><br />Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge single-breasted jacket. Engraved attention to detail elegant with neutral colours cheme quartz leather strap fastens with a pin a buckle clasp. Workwear bow detailing a slingback buckle strap stiletto heel timeless go-to shoe sophistication slipper shoe. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.</p> <br /><br /><ul className='listStyle'><li>Crisp fresh iconic elegant timeless clean perfume</li><li>Neck straight sharp silhouette and dart detail</li><li>Machine wash cold slim fit premium stretch selvedge denim comfortable low waist</li></ul>",
    title: "3",
    created_at: "Fri Nov 08 2024 16:52:48 GMT+0530 (India Standard Time)"
}, {
    id: 4,
    content: "<p className='masterContent text-start pe-0 pe-lg-3'>Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button detail cotton blend cute functional. Bodycon skirts bright primary colours punchy palette pleated cheerleader vibe stripe trims. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Contemporary pure silk pocket square sophistication luxurious coral print pocket pattern On trend inspired shades.<br /><br />Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge single-breasted jacket. Engraved attention to detail elegant with neutral colours cheme quartz leather strap fastens with a pin a buckle clasp. Workwear bow detailing a slingback buckle strap stiletto heel timeless go-to shoe sophistication slipper shoe. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.</p> <br /><br /><ul className='listStyle'><li>Crisp fresh iconic elegant timeless clean perfume</li><li>Neck straight sharp silhouette and dart detail</li><li>Machine wash cold slim fit premium stretch selvedge denim comfortable low waist</li></ul>",
    title: "4",
    created_at: "Fri Nov 08 2024 16:52:48 GMT+0530 (India Standard Time)"
}, {
    id: 5,
    content: "<p className='masterContent text-start pe-0 pe-lg-3'>Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button detail cotton blend cute functional. Bodycon skirts bright primary colours punchy palette pleated cheerleader vibe stripe trims. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Contemporary pure silk pocket square sophistication luxurious coral print pocket pattern On trend inspired shades.<br /><br />Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge single-breasted jacket. Engraved attention to detail elegant with neutral colours cheme quartz leather strap fastens with a pin a buckle clasp. Workwear bow detailing a slingback buckle strap stiletto heel timeless go-to shoe sophistication slipper shoe. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.</p> <br /><br /><ul className='listStyle'><li>Crisp fresh iconic elegant timeless clean perfume</li><li>Neck straight sharp silhouette and dart detail</li><li>Machine wash cold slim fit premium stretch selvedge denim comfortable low waist</li></ul>",
    title: "5",
    created_at: "Fri Nov 08 2024 16:52:48 GMT+0530 (India Standard Time)"
},
]


const BlogInfo = (id) => {
    const blog = data.find((blog) => blog.id == id);
    console.log(blog)
    return blog
}

export { BlogInfo } 