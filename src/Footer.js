import React from 'react'
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

export default function Footer() {
    return (
        <div className="footer">
            <Button color="secondary" style={{ fontFamily: "'Quicksand','sans-serif'", fontWeight: 700 }}>
                <Link href="mailto:eric@eflathomes.com" color="secondary"><span role="img" aria-label="">📧</span> Eric@EFlatHomes.com</Link>
            </Button>
            <Button color="secondary" style={{ fontFamily: "'Quicksand','sans-serif'", fontWeight: 700 }}>
                <Link href="tel:636-542-0404" color="secondary"><span role="img" aria-label="phone">☎️</span> (636) 542-0404</Link>
            </Button>
            <Button color="secondary" style={{ fontFamily: "'Quicksand','sans-serif'", fontWeight: 700 }}>
                <Link href="https://goo.gl/maps/5E484FDA8rNSNMc47" target="_blank" color="secondary"><span role="img" aria-label="address">🏢</span> 3 Front Street, Troy MO 63379</Link>
            </Button>
        </div>
    )
}
