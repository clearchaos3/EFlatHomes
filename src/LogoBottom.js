import React from 'react'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'

export default function LogoBottom() {
    return (
        <div>
        <div className="logo eb">E Flat Homes</div>
        <div className="slogan">Cash for your home, today.</div>
        <Button color="secondary" style={{fontFamily: "'Quicksand','sans-serif'", fontWeight: 700}}>
                <Link href="tel:636-542-0404" style={{fontSize: 30}} color="secondary"><span role="img" aria-label="phone">☎️</span> (636) 542-0404</Link>
            </Button>
        </div>
    )
}