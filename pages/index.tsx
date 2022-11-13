import Head from 'next/head'
import Image from 'next/image'
import Format from '../layout/format'
import SectionOne from '../components/sectionOne'
import SectionTwo from '../components/sectionTwo'


export default function Home() {
  return (
      <Format>
        <SectionOne></SectionOne>
        <SectionTwo></SectionTwo>
      </Format>
  )
}
