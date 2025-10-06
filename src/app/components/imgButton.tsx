import Image from 'next/image'

interface butProps{
    src: string;
    srcName: string;
    link: string;
}

export default function Button( { src, srcName, link}: butProps){
    return(
        <a
        href={link}
        className="m-2 inline-block hover:opacity-50"
      >
        <Image src={src} alt={`${srcName} image`} width={30} height={30} className="" />
      </a>
    )
}
