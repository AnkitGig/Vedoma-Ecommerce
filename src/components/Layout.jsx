import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout({ children, title }) {
  useEffect(() => {
    window.dispatchEvent(new Event('resize'))
    window.dispatchEvent(new Event('load'))
  }, [])

  return (
    <>
      <div id="preloader">
        <div className="tg-cube-grid">
          <div className="tg-cube tg-cube1"></div>
          <div className="tg-cube tg-cube2"></div>
          <div className="tg-cube tg-cube3"></div>
          <div className="tg-cube tg-cube4"></div>
          <div className="tg-cube tg-cube5"></div>
          <div className="tg-cube tg-cube6"></div>
          <div className="tg-cube tg-cube7"></div>
          <div className="tg-cube tg-cube8"></div>
          <div className="tg-cube tg-cube9"></div>
        </div>
      </div>

      <Header />

      <main className="main-area fix">
        {title && (
          <section className="breadcrumb-area breadcrumb-bg">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-10">
                  <div className="breadcrumb-content text-center">
                    <h2 className="title">{title}</h2>
                    <nav aria-label="Breadcrumbs" className="breadcrumb-trail">
                      <ul className="breadcrumb">
                        <li className="breadcrumb-item trail-item trail-begin">
                          <a href="/"><span>Home</span></a>
                        </li>
                        <li className="breadcrumb-item trail-item trail-end"><span>{title}</span></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="video-shape one"><img alt="VEDOMA Herbal Pain Relief Oil for Joint and Muscle Pain Vedoma Store" src="/assets/img/others/video_shape01.png" /></div>
            <div className="video-shape two"><img alt="VEDOMA Herbal Pain Relief Oil for Joint and Muscle Pain Vedoma Store" src="/assets/img/others/video_shape02.png" /></div>
          </section>
        )}
        {children}
      </main>

      <Footer />
    </>
  )
}
