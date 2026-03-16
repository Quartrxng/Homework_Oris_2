import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../src/styles/index.css'
import HotToursContainer from "./containers/HotToursContainer";
import PartnersContainer from './containers/partnerContainer';
import BenefitsContainer from './containers/benefitsContainer';
import StepperContainer from './containers/stepperContainer';
import CalendarPriceContainer from './containers/calendarPriceContainer';
import BannerContainer from './containers/bannerContainer';
import TouristsFilterContainer from './containers/touristsFilterContainer';
import PaymentContainer from './containers/paymentContainer';
import SearchPlacementContainer from './containers/searchPlacementContainer';
import useGlobalRipple from './components/ripple';
import FooterSocialNetworks from './containers/footerSocialsContainer';
import FooterContacts from './containers/footerContactsContainer';
import FooterContactsContainer from './containers/footerContactsContainer';
import FooterContainer from './containers/footerContainer';
import CalendarContainer from './containers/CalendarContainer'
import FiltersContainer from './containers/filtersContainer';
import StarFilterContainer from './containers/starsFilterContainer';
import ServicesTooltipContainer from './containers/servicesTooltipContainer';
import SearchTypeContainer from './containers/searchTypeContainer';
import TourSearchContainer from './containers/tourSearchContainer';
import MailingSubscriptionContainer from './containers/mailSubscriptionContainer';
import HeaderContainer from './containers/headerContainer';
import ExpertsBannerContainer from './containers/expertsBannerContainer';

function Index() {
    useGlobalRipple(); 
  return (
    <>
      <div id="__next" className='main__site'>
        <HeaderContainer />
        <main>
            <div className="sitemain">
                <div className="mt-3 sitemain--top">
                    <h1 className="slogan SliderListOfCountries_title">
                        Путешествуйте! {" "}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 24">
                            <path fill="#FF0E19" d="M23.25.003S22.058-.365 20.51 7.2C24.387.523 23.25.003 23.25.003m-.537.567L22.71.567a.196.196 0 0 1 .253-.114l.2.076c.101.039.152.152.114.253l-.004.002z"></path>
                            <path fill="#FF0E19" d="M25.375 5.694a.21.21 0 0 0-.047-.21l-.783-.82.116-.288a.13.13 0 0 0-.072-.169l-.042-.017a.13.13 0 0 0-.169.072l-.064.16-.92-.966.11-.278a.13.13 0 0 0-.072-.168l-.042-.017a.13.13 0 0 0-.168.071l-.055.154-.325-.34q-.23.551-.567 1.247l.498.174 2.54 1.584z"></path>
                            <path fill="#FF0E19" d="M21.641 2.421l-.464.038.061-.151a.13.13 0 0 0-.077-.166l-.043-.015a.13.13 0 0 0-.166.078l-.103.28-1.33.108.06-.161a.13.13 0 0 0-.079-.166l-.043-.015a.13.13 0 0 0-.165.078l-.104.291-1.13.092a.21.21 0 0 0-.176.125l-.08.183 2.95.507.484.2q.21-.74.405-1.306M20.582 6.38l-.976.061-.209.186 1.09.192z"></path>
                            <path fill="#FF0E19" d="M20.777 6.93l.942.582-.032-.278-.688-.695z"></path>
                            <path fill="#FF0E19" d="M6.439 7.613c.208.109.552.178.781.116.112-.03.203-.112.166-.24-.055-.185-.3-.144-.422-.252a9 9 0 0 0-.569.35q.022.014.044.026M8.896 22.142c-.164-.2-.266-.48-.216-.741.023-.12.094-.185.086-.32a1 1 0 0 0-.064-.286.254.254 0 0 1-.328-.132.25.25 0 0 1 .072-.298.95.95 0 0 1 .001-.625s.292-.5-.604-.854c0 0-2.04-1.02-.708-2.102 0 0 .875-.625-.104-1a1.6 1.6 0 0 1-.497-.447c-.084-.113-.138-.245-.222-.357-.138-.183-.288-.254-.492-.347-.429-.197-.866-.076-1.313-.16a1.4 1.4 0 0 1-.446-.156.6.6 0 0 1-.296-.348.6.6 0 0 1-.006-.27c.026-.136.127-.234.16-.364a.37.37 0 0 0-.04-.272c-.126-.221-.53-.318-.737-.446a2.5 2.5 0 0 1-.318-.235 9 9 0 0 0-.398 2.652c0 2.5 1.024 4.761 2.675 6.387a.25.25 0 0 1 .189-.119q.412-.04.823-.13a.254.254 0 0 1 .108.496q-.36.077-.723.12a8.95 8.95 0 0 0 3.79 1.963 1.85 1.85 0 0 1-.176-.805c.03-.266-.048-.6-.216-.804m-.993-1.014a22 22 0 0 1-.822.302.254.254 0 0 1-.162-.481l.113-.039q.346-.121.686-.255a.254.254 0 1 1 .185.473"></path>
                            <path fill="#FF0E19" d="m19.26 10.723-.009.02q-.199.386-.416.768a.253.253 0 0 1-.346.096.254.254 0 0 1-.095-.346q.155-.275.3-.552a2.4 2.4 0 0 1-1.087-.41.9.9 0 0 1-.273-.36 1.2 1.2 0 0 1-.102-.48c0-.168.047-.346.023-.513a.7.7 0 0 0-.2-.406c-.125-.121-.221-.118-.393-.126a.445.445 0 0 1-.395-.348c-.038-.169.035-.327.146-.467a8.93 8.93 0 0 0-5.019-1.535 8.9 8.9 0 0 0-3.798.844c.109.032.256.023.435-.118.102-.08.29-.141.416-.16.21-.031.171.12.112.258-.06.14-.215.398-.108.543.06.082.152.012.217-.036a1.7 1.7 0 0 0 .228-.207c.066-.075.078-.189.157-.253.218-.177.259.193.38.298.175.15.448-.028.597-.13a1.7 1.7 0 0 1 .507-.243c.163-.045.336-.06.504-.027a.83.83 0 0 1 .49.3.63.63 0 0 0 .29.192c.138.05.296.022.376.17.048.09.053.213.035.31-.053.28-.287.304-.496.151-.15-.11-.256-.248-.436-.329a.9.9 0 0 0-.647-.023c-.196.073-.252.225-.374.372-.288.348-.809.252-1.178.115a.57.57 0 0 0-.323-.046c-.244.045-.58.37-.652.61-.04.133.008.298.143.358.14.061.305-.017.38.165.066.165-.064.325.104.465.16.133.355.013.486-.105.077-.07.096-.226.18-.307.147-.143.302-.073.451.028.155.105.327.133.472-.028.134-.15.262-.25.471-.287.242-.042.442.08.569.282 0 0 .771.791-.394.75 0 0-.917-.271-1.25.645 0 0-.229.766-1.166 1.007 0 0-.874.284-1.082 1.116 0 0 0 .957-.645.23 0 0-.645-.75-1.353.145a1.45 1.45 0 0 0-.252.527c-.089.37.19.467.513.419.238-.036.385-.245.614-.311.24-.07.15.201.11.329-.025.079-.068.162-.04.243.037.112.17.157.262.208a.5.5 0 0 1 .165.16q.06.092.065.203c.004.152-.082.238.005.382a.7.7 0 0 0 .183.2.52.52 0 0 0 .323.089c.215-.012.385-.074.502-.253.125-.193.28-.408.533-.421.456-.023.776.58.951.91.292.553.813.83 1.428.921q.172.024.346.033c.4.022.813.192 1.17.373.218.11.48.263.646.472q.267-.213.528-.434a.253.253 0 1 1 .329.386q-.335.286-.677.553-.016.01-.033.018a.7.7 0 0 1-.085.22c-.084.144-.211.22-.249.393-.068.311.213.58.104.892-.072.21-.286.305-.489.346-.178.036-.482-.03-.619.097-.204.19-.107.445-.111.684a.9.9 0 0 1-.073.342c-.073.171-.192.321-.325.45q-.137.133-.295.246c-.118.085-.23.176-.36.241-.12.06-.254.09-.356.18a.6.6 0 0 0-.193.366c-.018.167.096.312.162.454a.8.8 0 0 1 .078.306c.009.214-.162.372-.093.583q.558.072 1.135.074a8.95 8.95 0 0 0 7.146-3.55c-.05-.176-.027-.347-.027-.347.051-.25-.042-.427-.187-.619a.51.51 0 0 1-.015-.621c.067-.09.146-.133.193-.242a.9.9 0 0 0 .058-.39 1.3 1.3 0 0 0-.118-.469 2 2 0 0 0-.181-.324c-.085-.12-.214-.193-.3-.31a.76.76 0 0 1-.151-.334.54.54 0 0 1 .045-.293c.177-.468-.344-.507-.344-.507-.24-.018-.37-.051-.544-.211s-.51-.106-.705.01c-.854.51-1.405-.114-1.405-.114a1.25 1.25 0 0 1-.587-.909 1.5 1.5 0 0 1 .012-.411c.028-.172.034-.258.183-.364.047-.034.102-.073.094-.139-.005-.043-.072-.118-.118-.124-.399-.048.041-.46.165-.57.148-.133.307-.256.468-.374.059-.043.134-.082.186-.133.081-.08.13-.208.175-.315a.7.7 0 0 1 .14-.223.67.67 0 0 1 .363-.193c.17-.033.316.005.48.029.242.034.508.004.715-.134.173-.116.416-.306.612-.106.097.1.109.242.156.37l.055-.088a.253.253 0 1 1 .432.267l-.102.16q.075.026.156.036c.183.02.42.005.563-.114.114-.094.285-.196.444-.16.141.034.284.194.419.263q.059.03.128.058a9 9 0 0 0-.739-1.782m-4.464 5.289a.253.253 0 1 1 .36.358q-.309.309-.63.606a.253.253 0 0 1-.358-.014.254.254 0 0 1 .013-.358q.315-.29.615-.592M20.07 8.51a.254.254 0 0 1-.239-.34c.087-.245.127-.384.127-.386a.254.254 0 0 1 .488.142 8 8 0 0 1-.137.415.25.25 0 0 1-.24.169M4.454 21.842h-.005q-.451-.008-.892-.074a.254.254 0 0 1 .074-.502q.41.06.829.07a.254.254 0 0 1-.006.506M2.75 21.589a.3.3 0 0 1-.072-.01 4 4 0 0 1-.848-.35.253.253 0 1 1 .248-.443q.323.18.745.306a.253.253 0 0 1-.072.497M1.283 20.725a.25.25 0 0 1-.193-.09 2.2 2.2 0 0 1-.449-.857.254.254 0 0 1 .49-.13q.099.37.345.659a.254.254 0 0 1-.193.418"></path>
                            <path fill="#FF0E19" d="M10.157 20.055a.254.254 0 0 1-.122-.477q.373-.202.741-.422a.254.254 0 0 1 .26.436q-.377.226-.759.432a.25.25 0 0 1-.12.03M11.638 19.17a.253.253 0 0 1-.14-.467q.356-.233.703-.482a.254.254 0 0 1 .296.413q-.355.255-.72.494a.26.26 0 0 1-.14.041M.868 19.112a.254.254 0 0 1-.248-.31c.076-.34.236-.634.476-.872a.254.254 0 0 1 .358.36q-.256.255-.339.623a.25.25 0 0 1-.247.199M15.573 15.821a.254.254 0 0 1-.187-.425q.289-.315.566-.64a.253.253 0 1 1 .386.33q-.284.332-.579.653a.25.25 0 0 1-.186.082M16.693 14.507a.254.254 0 0 1-.2-.41q.264-.337.515-.683a.254.254 0 1 1 .411.299q-.257.353-.526.697a.26.26 0 0 1-.2.097M19.407 10.105a.254.254 0 0 1-.229-.362c.122-.26.238-.523.346-.78a.253.253 0 1 1 .468.195c-.11.263-.229.533-.354.8a.26.26 0 0 1-.23.147M2.017 17.927a.254.254 0 0 1-.08-.494q.207-.07.445-.113a.254.254 0 0 1 .09.499 3 3 0 0 0-.375.094.2.2 0 0 1-.08.014"></path>
                        </svg>
                        {" "}Мы сделали это доступным!
                    </h1>
                    <BannerContainer />
                </div>
                <TourSearchContainer />
                <ExpertsBannerContainer />

                <div className="scrollSpace mui-z56hly" style={{ minHeight: '578.719px' }}>

                  <h2 className="MuiTypography-root MuiTypography-h2 HotTours_title mui-3gcha9">
                      Календарь низких цен
                  </h2>

                  <div className="-calendar -moduleid-9971420 HotTours_content -loaded" id="ToursCalanar9971420">
                      <CalendarPriceContainer />
                  </div>
                </div>

                <div id="HotTours" className="scrollSpace mui-z56hly">
                    <h2 className="MuiTypography-root MuiTypography-h2 HotTours_title mui-3gcha9">
                        Горящие туры
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 15">
                            <path fill="#FF0E19" d="M8.524 5.993a3.28 3.28 0 0 1-.966 2.333.874.874 0 1 1-1.236-1.237 3.28 3.28 0 0 0 .966-2.333A6.57 6.57 0 0 0 5.354.089a4.93 4.93 0 0 1-1.45 3.5L1.57 5.922a4.92 4.92 0 0 0-1.45 3.5 4.668 4.668 0 0 0 9.333 0c0-1.339-.355-2.552-.93-3.429"></path>
                        </svg>
                        из Санкт-Петербурга
                    </h2>

                    <div className="-hot-tours -moduleid-9971278 HotTours_content -loaded" id="HotTours9971278">
                        <div className="HotTours Theme2" style={{ minWidth: '282px', width: 'auto' }}>
                            <HotToursContainer />
                        </div>
                    </div>
                </div>
                
                <div className="benefits">
                    <h2 className="slogan benefit__title block--title">Дополнительная  выгода для наших клиентов</h2>
                    <BenefitsContainer />
                </div>
                <MailingSubscriptionContainer />
                <div className="options--tours">
                    <h2 className="slogan block--title">Оформление тура ОНЛАЙН или в ОФИСЕ</h2>
                    <h4 className="slogan Stepper_title contained--item__title">
                        Вы можете выбрать тур и оформить его онлайн или воспользоваться помощью наших специалистов по туризму
                    </h4>
                    <StepperContainer />
                </div>
                <div className="partners">
                    <h2 className="slogan block--title">Мы сотрудничаем с самыми крупными туроператорами</h2>
                    <PartnersContainer />
                </div>
                <h2 className="slogan mt-3 tac block--title">Купить тур с вылетом  из Санкт-Петербурга</h2>
                <PaymentContainer />
            </div>
        </main>
        <FooterContainer />
    </div>
    </>
  )
}

export default Index
