import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

// Banner Section Component
function BannerSection() {
  return (
    <section className="banner-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-7 col-lg-8 col-md-10">
            <div className="banner-content text-center">
              <p className="banner-caption">.. VEDOMA ..</p>
              <h2 className="title">Herbal Pain Relief Oil for body treatment</h2>
              <Link className="btn btn-two" to="/shop">Shop Now</Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="banner-images text-center">
              <img alt="img" className="main-img" src="/assets/img/products/topimg.png" />
              <img alt="img" className="bg-shape" src="/assets/img/banner/banner_round_bg.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="banner-shape one">
        <img alt="shape" className="wow bannerFadeInLeft" data-wow-delay=".2s" data-wow-duration="2s" src="/assets/img/banner/banner_shape01.png" />
      </div>
      <div className="banner-shape two">
        <img alt="shape" className="wow bannerFadeInRight" data-wow-delay=".2s" data-wow-duration="2s" src="/assets/img/banner/banner_shape02.png" />
      </div>
      <div className="banner-shape three">
        <img alt="shape" className="wow bannerFadeInDown" data-wow-delay=".2s" data-wow-duration="2s" src="/assets/img/banner/banner_shape03.png" />
      </div>
      <div className="banner-shape four">
        <img alt="shape" className="wow bannerFadeInDown" data-wow-delay=".2s" data-wow-duration="2s" src="/assets/img/banner/banner_shape04.png" />
      </div>
    </section>
  )
}

// Brand Section Component
function BrandSection() {
  const brands = [
    '/assets/img/brand/brand_01.png',
    '/assets/img/brand/brand_02.png',
    '/assets/img/brand/brand_03.png',
    '/assets/img/brand/brand_04.png',
    '/assets/img/brand/brand_05.png',
    '/assets/img/brand/brand_06.png',
    '/assets/img/brand/brand_03.png',
  ]

  return (
    <div className="brand-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="brand-title text-center mb-50">
              <p className="title">Perfect Brand is Featured on</p>
            </div>
          </div>
        </div>
        <div className="row brand-active">
          {brands.map((brand, idx) => (
            <div key={idx} className="col-2">
              <div className="brand-item">
                <a href="#"><img alt="brand" src={brand} /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <Layout>
      <BannerSection />
      <BrandSection />
    </Layout>
  )
}
