interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Nesting-Box Live-Stream',
    description: `The live stream of my nesting box is public available. Feel free to have a look.`,
    imgSrc: '/static/blog/2021-12-07-nesting-box.PNG',
    href: 'http://nestingbox.divisionby0.de',
  },
  {
    title: 'How To build your own nesting box',
    description: `If you want to build your own nesting box with IR-camera a how-to can by found in my blog.`,
    imgSrc: '/static/brood2018/01-20180413114739-00.jpg',
    href: '../blog/2019-07-11--Nesting-box-camera',
  },
  {
    title: 'HelloFresh Recipe-Downloader',
    description: `A small script that allows you to download recipe cards of recently ordered recipes from HelloFresh.`,
    imgSrc: '/static/blog/2022-12-26-hello-download_small.png',
    href: '../blog/2022-12-26--HelloFresh-RecipeDownloader',
  },
]

export default projectsData
