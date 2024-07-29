import Header from '../Components/Header'
import FloralDesign from '../Components/FloralDesign'
import ScrollIndicator from '../Components/ScrollIndicator'
import InvitationText from '../Components/InvitationText'
import Calendar from '../Components/Calendar'
import '../App.css'
import Address from '../Components/Address'
import Timeline from '../Components/Timeline'
import Countdown from '../Components/Countdown'
import RSVPForm from '../Components/RSVPForm'
import TelegramSection from '../Components/TelegramSection'
import WeddingInvitation from '../Components/WeddingInvitation'
function HomePage() {
  return (
    <div>
      <Header />
      <div id='clint'>
        <FloralDesign />
      </div>
      <div id='Taklif'>
        <InvitationText />
      </div>
      <div className='App'>
        <div id='Qachon'>
          <Calendar />
        </div>
        <div id='Qayer'>
          <Address />
        </div>
        <div id='NimalarBoladi'>
          <Timeline />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div id='Kelasizmi'>
          <Countdown date='2023-10-29T00:00:00' />
        </div>
        <RSVPForm />
        <div id='cl'>
          <TelegramSection />
        </div>
        <WeddingInvitation />
      </div>
      <ScrollIndicator />
    </div>
  )
}

export default HomePage
