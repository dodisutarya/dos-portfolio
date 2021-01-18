import React from 'react';
import Image from 'react-bootstrap/Image';
import { Figure } from 'react-bootstrap';

function Infosaya() {


    return (
        <div className="my-info container">

            <div class="d-inline  bg-primary text-white">
                <Image src="images/dodisutarya.png" height="150px" roundedCircle />
            </div>
            <div class="d-inline  bg-dark text-white">
                <h2>Hi, I’m Dodi Sutarya a Freelance UI / UX Designer / Developer from Indonesia.</h2>
                <p>FolioPress is a minimal Multi-Purpose super flexible Portfolio WordPress Theme that makes it easy to showcase your work, blog and store. FolioPress is specially designed for designers, photographers, artists and creatives.</p>
            </div>

            <div className="align-my-info">
                <tr>
                    <td>
                        <Image src="images/dodisutarya.png" height="150px" roundedCircle />
                    </td>
                    <td>
                        <h2>Hi, I’m Dodi Sutarya a Freelance UI / UX Designer / Developer from Indonesia.</h2>
                        <p>FolioPress is a minimal Multi-Purpose super flexible Portfolio WordPress Theme that makes it easy to showcase your work, blog and store. FolioPress is specially designed for designers, photographers, artists and creatives.</p>
                    </td>
                </tr>
            </div>

            <div>
                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src="images/dodisutarya.png"
                        roundedCircle
                    />
                    <Figure.Caption style={{ display: 'inline', marginLeft: '30px', fontSize: '30px', color: 'black' }}>
                        Hi, I’m Dodi Sutarya a Freelance Developer from Indonesia.
                    </Figure.Caption>
                    <Figure.Caption style={{marginLeft: '30px' }}>
                        FolioPress is a minimal Multi-Purpose super flexible Portfolio WordPress Theme that makes it easy to showcase your work, blog and store. FolioPress is specially designed for designers, photographers, artists and creatives.
                    </Figure.Caption>
                </Figure>
            </div>


        </div>
    );
}

export default Infosaya;
