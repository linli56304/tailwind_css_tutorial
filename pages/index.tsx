import Head from 'next/head'
import Image from 'next/image'
import Format from '../layout/format'
import SectionOne from '../components/sectionOne'
import SectionTwo from '../components/sectionTwo'
import SectionThree from '../components/sectionThree'
import SectionFour from '../components/sectionFour'


export default function Home() {
  return (
      <Format>
        <SectionOne></SectionOne>
        <SectionTwo></SectionTwo>
        <SectionThree></SectionThree>
        <SectionFour></SectionFour>
      </Format>
  )
}
