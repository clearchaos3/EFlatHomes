import React from 'react'
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

export default function Footer() {
    return (
        <div>
            <Button color="secondary" style={{fontFamily: "'Quicksand','sans-serif'", fontWeight: 700}}>
                <Link href="mailto:eric@eflathomes.com" color="secondary"><span role="img" aria-label="">📧</span>Eric@EFlatHomes.com</Link>
            </Button>
        </div>
    )
}
