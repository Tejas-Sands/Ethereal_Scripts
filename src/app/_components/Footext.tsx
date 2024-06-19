import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';

export default function FooterText(){
    return<>

    <div className=' mt-16 bg-gradient-to-r from-zinc-700 to-slate-800 -mx-5 -mb-20 pb-6 pt-3'>
    Copyright © 2024 ES Inc.
    <center >
        <b>Ethereal Scripts</b><pre/><br/>
        <div className='flex justify-center space-x-4'>
        <Link href="https://twitter.com/Serene_EcH0"><XIcon/></Link>
        <Link href="https://github.com/Tejas-Sands"><GitHubIcon/></Link>
        <Link href="https://www.instagram.com/tejassandwar/"><InstagramIcon/></Link>
        <br/><br/><br/>
        </div>
    </center>
    </div>
    </>
}