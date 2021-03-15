import React from 'react'
import Link from '@material-ui/core/Link';

export default function Copy() {
    return (
        <div className="copy">
            <div className="intro">
                <img src='/images/headshotSmallbanner.jpg' alt='headshot' />
                <div className="introCopy">
                    <div className="copyHeader">About Me</div>
                    <div className="copyText">I'm Eric, and I help people in the Saint Louis area who need cash for their home. I buy in As-Is condition, close quickly, and take care of all the work for you. No fees, commissions, or hassle.</div><br></br>
                </div>
            </div>  
            <div className="copyHeader">How do I get started?</div>
            <div className="copyText">Fill out the <Link color="secondary" href="#">easy form</Link> above, and I will reach out to you with an offer. (Typically within 24 hrs!)</div><br></br>
            {/* <div className="copyHeader">What do other sellers think?</div>  */}
        </div>
    )
}