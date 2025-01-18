import React from 'react'
import Image from 'next/image'

interface Image {
  src: string
  alt: string
  width: number
  height: number
}

interface Content {
  isCode: boolean
  text: string
  image: Image
}

interface Props {
  type: string
  heading: string
  content: Content[]
}

const NoticeBox = ({ type, heading, content }: Props) => {
  return (
    <div className={`mb5 overflow-hidden rounded border-2 container-${type}`}>
      <div className={`px-2 font-bold ${type}`}>{heading}</div>
      <div className="px-2">
        {content.map(({ isCode, text, image }, index) => {
          if (image) {
            return (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
              />
            )
          }
          if (isCode) {
            return <pre key={index} dangerouslySetInnerHTML={{ __html: text }}></pre>
          }
          return <p key={index} dangerouslySetInnerHTML={{ __html: text }}></p>
        })}
      </div>
    </div>
  )
}

export default NoticeBox
