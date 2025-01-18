import Image from './Image'
import Link from './Link'

interface Props {
  badgeId: string
  badgeImgSrc: string
  width?: number
  height?: number
}

const CredlyBadge = ({ badgeId, badgeImgSrc, width = 150, height = 150 }: Props) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Link href={`https://www.credly.com/badges/${badgeId}/public_url`}>
      <Image
        alt="Credly-Badge"
        src={badgeImgSrc}
        className="object-cover object-center md:h-36 lg:h-48"
        width={width}
        height={height}
      />
    </Link>
  </div>
)

export default CredlyBadge
