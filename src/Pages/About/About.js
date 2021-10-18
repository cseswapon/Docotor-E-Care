import React from 'react';
import hospital from '../../images/about.jpeg';
const About = () => {
    return (
        <div className="container my-5">
            <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3">
                    <div className="col">
                        <img className="img-fluid" src={hospital} alt="hospital" />
                    </div>
                    <div className="col">
                        <h1>About with me</h1>
                        <p style={{webkitTextEmphasis: "sesame"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quas iste doloribus ullam provident natus, impedit expedita minima magni fuga unde autem odio assumenda incidunt reiciendis officiis consequuntur, repellendus temporibus? Reiciendis rerum, hic suscipit cum laboriosam, officiis quam molestias ab ut necessitatibus officia recusandae soluta molestiae? Aliquid perferendis dolor asperiores! Velit necessitatibus numquam quisquam unde aliquid, doloremque accusantium animi quis corrupti assumenda, recusandae voluptate ex ut expedita sequi minus, veritatis a? Unde voluptas enim consequuntur quisquam sequi mollitia quas, atque accusantium aliquam nesciunt quod quos nisi saepe sed libero possimus ipsa accusamus laudantium! Atque nisi itaque dolore, saepe dolores totam.</p>
                    </div>
            </div>
        </div>
    );
};

export default About;