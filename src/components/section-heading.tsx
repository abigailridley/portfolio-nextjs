
type SectionHeadingProps = {
    children: React.ReactNode;
}

export default function SectionHeading({
    children}: SectionHeadingProps) {
  return <h2 className='text-center font-plexmono text-xl sm:text-3xl mt-20 sm:mt-0 mb-5 sm:mb-0'>{children}</h2>
}
