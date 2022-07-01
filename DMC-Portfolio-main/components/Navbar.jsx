import Image from "next/image"

const NavAvatar = () => {
  return (
    <div className="relative min-w-[24px] md:min-w-[32px] h-[24px] md:h-[32px]">
      <Image
        src="/NyanNyan.png"
        alt="person avatar"
        priority
        quality={100}
        layout="fill"
        objectFit="cover"
      />
    </div>
  )
}


const NavLogo = () => {
  return (
      <a>
        <div className="relative min-w-[25px] md:min-w-[32px] h-[20px] md:h-[25.6px]">
          <Image
            src="/Belle.png"
            alt="movie logo icon"
            priority
            quality={100}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </a>
  )
}

const Navbar = () => {
  return (
    <div className="bg-secondary_background md:rounded-[10px] xl:rounded-[20px] py-[18px] xl:py-[32px] px-4 xl:px-8 h-[56px] md:h-[72px] xl:h-[960px] xl:min-w-[96px]">
      <div className="flex justify-between items-center xl:flex-col xl:h-full">
          <NavLogo />
        <div className="flex xl:flex-col xl:flex-auto xl:mt-[76px] gap-6 md:gap-8">
        </div>
        <NavAvatar />
      </div>
    </div>
  )
}

export default Navbar