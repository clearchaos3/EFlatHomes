import React from 'react'
import Link from '@material-ui/core/Link';

export default function Copy() {
    return (
        <div className="copy">
            <div className="intro">
                <img src='/images/headshotSmallbanner.jpg' alt='headshot' />
                <div className="introCopy">
                    <div className="copyHeader">Who is E Flat Homes and why should I sell you my house?</div>
                    <div className="copyText">I'm Eric, I buy houses in the St. Louis, MO area for cash! I buy in As-Is condition, close quickly, and take care of all the work for you. E Flat makes it easy!</div><br></br>
                </div>
            </div>  
            <div className="copyHeader">How do I get started?</div>
            <div className="copyText">1. Fill out the <Link color="secondary" href="#">easy form above.</Link><br>
            </br>2. I will reach out to you with an offer. (Typically within 24 hrs!)</div><br></br>
            {/* <div className="copyHeader">What do other sellers think?</div>  */}
        </div>
    )
}