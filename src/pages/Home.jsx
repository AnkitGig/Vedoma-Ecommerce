import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

// Banner Section Component
function BannerSection() {
  return (
    <section className="banner-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-7 col-lg-8 col-md-10">
            <div className="banner-content text-center">
              <p className="banner-caption">.. VEDOMA ..</p>
              <h2 className="title">
                Herbal Pain Relief Oil for body treatment
              </h2>
              <Link className="btn btn-two" to="/shop">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="banner-images text-center">
              <img
                alt="img"
                className="main-img"
                src="/assets/img/products/topimg.png"
              />
              <img
                alt="img"
                className="bg-shape"
                src="/assets/img/banner/banner_round_bg.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="banner-shape one">
        <img
          alt="shape"
          className="wow bannerFadeInLeft"
          data-wow-delay=".2s"
          data-wow-duration="2s"
          src="/assets/img/banner/banner_shape01.png"
        />
      </div>
      <div className="banner-shape two">
        <img
          alt="shape"
          className="wow bannerFadeInRight"
          data-wow-delay=".2s"
          data-wow-duration="2s"
          src="/assets/img/banner/banner_shape02.png"
        />
      </div>
      <div className="banner-shape three">
        <img
          alt="shape"
          className="wow bannerFadeInDown"
          data-wow-delay=".2s"
          data-wow-duration="2s"
          src="/assets/img/banner/banner_shape03.png"
        />
      </div>
      <div className="banner-shape four">
        <img
          alt="shape"
          className="wow bannerFadeInDown"
          data-wow-delay=".2s"
          data-wow-duration="2s"
          src="/assets/img/banner/banner_shape04.png"
        />
      </div>
    </section>
  );
}

// Brand Section Component
function BrandSection() {
  const brands = [
    "/assets/img/brand/brand_01.png",
    "/assets/img/brand/brand_02.png",
    "/assets/img/brand/brand_03.png",
    "/assets/img/brand/brand_04.png",
    "/assets/img/brand/brand_05.png",
    "/assets/img/brand/brand_06.png",
    "/assets/img/brand/brand_03.png",
  ];

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
                <a href="#">
                  <img alt="brand" src={brand} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeaturesProducts() {
  return (
    <section className="features-products" id="paroller">
      <div className="container">
        {/* Product 1 */}
        <div className="features-products-wrap">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="features-products-thumb">
                <div className="main-img">
                  <img src="/assets/img/products/1.png" alt="img" />
                </div>
                <img
                  src="/assets/img/products/features_product_shape01.png"
                  alt="img"
                  className="shape-img"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-10">
              <div className="features-product-content">
                <h2 className="title">
                  <a href="shop-details.html">Herbal Pain Relief</a>
                </h2>
                <h6 className="features-product-quantity">
                  High-strength, 5000IU
                </h6>
                <p>
                  Vitamin D3 supplements are commonly recommended for people at
                  risk for vitamin D deficiency. Low vitamin D levels cause
                  depression, fatigue, and muscle weakness. Over time, vitamin D
                  deficiency can lead to weak bones, rickets in children, and
                  osteoporosis in adults.
                </p>
                <div className="features-product-bottom">
                  <a className="btn" href="shop-details.html">
                    Shop Now
                  </a>
                  <span className="price">
                    $89.99 <span className="old-price">$117.99</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="features-products-wrap">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="features-products-thumb">
                <div className="main-img">
                  <img src="/assets/img/products/1.png" alt="img" />
                </div>
                <img
                  src="/assets/img/products/features_product_shape02.png"
                  alt="img"
                  className="shape-img"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-10">
              <div className="features-product-content">
                <h2 className="title">
                  <a href="shop-details.html">Herbal Pain Relief</a>
                </h2>
                <h6 className="features-product-quantity">
                  High-strength, 4000IU
                </h6>
                <p>
                  Vitamin D3 supplements are commonly recommended for people at
                  risk for vitamin D deficiency. Low vitamin D levels cause
                  depression, fatigue, and muscle weakness. Over time, vitamin D
                  deficiency can lead to weak bones, rickets in children, and
                  osteoporosis in adults.
                </p>
                <div className="features-product-bottom">
                  <a className="btn" href="shop-details.html">
                    Shop Now
                  </a>
                  <span className="price">
                    $59.99 <span className="old-price">$79.99</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="features-products-wrap">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="features-products-thumb">
                <div className="main-img">
                  <img src="/assets/img/products/1.png" alt="img" />
                </div>
                <img
                  src="/assets/img/products/features_product_shape03.png"
                  alt="img"
                  className="shape-img"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-10">
              <div className="features-product-content">
                <h2 className="title">
                  <a href="shop-details.html">Herbal Pain Relief</a>
                </h2>
                <h6 className="features-product-quantity">
                  High-strength, 4000IU
                </h6>
                <p>
                  Vitamin D3 supplements are commonly recommended for people at
                  risk for vitamin D deficiency. Low vitamin D levels cause
                  depression, fatigue, and muscle weakness. Over time, vitamin D
                  deficiency can lead to weak bones, rickets in children, and
                  osteoporosis in adults.
                </p>
                <div className="features-product-bottom">
                  <a className="btn" href="shop-details.html">
                    Shop Now
                  </a>
                  <span className="price">
                    $69.99 <span className="old-price">$89.99</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Shapes */}
      <div className="fp-shapes-wrap">
        <div className="fp-shape-one">
          <img
            src="/assets/img/others/features_sec_shape01.png"
            alt="shape"
            className="paroller"
            data-paroller-direction="vertical"
            data-paroller-factor="0.25"
            data-paroller-type="foreground"
          />
        </div>

        <div className="fp-shape-two">
          <img
            src="/assets/img/others/features_sec_shape02.png"
            alt="shape"
            className="paroller"
            data-paroller-direction="vertical"
            data-paroller-factor="-0.25"
            data-paroller-type="foreground"
          />
        </div>

        <div className="fp-shape-three">
          <img
            src="/assets/img/others/features_sec_shape03.png"
            alt="shape"
            className="paroller"
            data-paroller-direction="vertical"
            data-paroller-factor="0.25"
            data-paroller-type="foreground"
          />
        </div>
      </div>

      {/* Circles */}
      <div className="fp-circle one"></div>
      <div className="fp-circle two"></div>
      <div className="fp-circle three"></div>
      <div className="fp-circle four"></div>
      <div className="fp-circle five"></div>
    </section>
  );
}

function FeaturesArea() {
  return (
    <section className="features-area" id="features">
      <a href="#">
        <img
          src="/assets/img/1.jpeg"
          alt="features"
          style={{ width: "100%" }}
        />
      </a>
    </section>
  );
}

function Ingredients() {
  return (
    <section className="ingredients-area" id="ingredient">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-5 col-lg-6 col-md-7">
            <div className="ingredients-img">
              <img src="/assets/img/down.png" alt="img" />
              <img
                src="/assets/img/others/ingredients_shape.png"
                alt="img"
                className="shape"
              />
            </div>
          </div>

          <div className="col-xl-7 col-lg-9">
            <div className="ingredients-items-wrap">
              <div className="section-title mb-60">
                <p className="sub-title">
                  .. Increased Energy With Ecommerce ..
                </p>
                <h2 className="title">Ecommerce Ingredients</h2>
              </div>

              <div className="row justify-content-center justify-content-lg-start">
                <div className="col-md-6 col-sm-8">
                  <div
                    className="ingredients-item wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="ingredients-content">
                      <h5 className="title">Helps You Stick To Your Diet</h5>
                      <p>
                        A thing added to something else in order to complete or
                        enhance it.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-sm-8">
                  <div
                    className="ingredients-item wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="ingredients-content">
                      <h5 className="title">Only 3g Net Carbs In Every Jar</h5>
                      <p>
                        A thing added to something else in order to complete or
                        enhance it.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-sm-8">
                  <div
                    className="ingredients-item wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div className="ingredients-content">
                      <h5 className="title">Ingredients To Fuel Your Body</h5>
                      <p>
                        A thing added to something else in order to complete or
                        enhance it.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-sm-8">
                  <div
                    className="ingredients-item wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="ingredients-content">
                      <h5 className="title">Clean Ingredients Only</h5>
                      <p>
                        A thing added to something else in order to complete or
                        enhance it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="testimonial-area testimonial-bg">
      <div className="testimonial-overlay"></div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-9 col-lg-11">
            <div className="testimonial-active">
              {/* Testimonial 1 */}
              <div className="testimonial-item text-center">
                <div className="testimonial-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                </div>

                <p>
                  “Becoming more involved in administration within the
                  (MidMichigan) health system over the years, I had been
                  researching options for further education that would assist in
                  this transition and fit my busy schedule”
                </p>

                <div className="testimonial-avatar-wrap">
                  <div className="testi-avatar-img">
                    <img
                      src="/assets/img/others/testi_avatar01.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="testi-avatar-info">
                    <h5 className="name">Janeta Cooper</h5>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="testimonial-item text-center">
                <div className="testimonial-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-alt"></i>
                </div>

                <p>
                  “Becoming more involved in administration within the
                  (MidMichigan) health system over the years, I had been
                  researching options for further education that would assist in
                  this transition and fit my busy schedule”
                </p>

                <div className="testimonial-avatar-wrap">
                  <div className="testi-avatar-img">
                    <img
                      src="/assets/img/others/testi_avatar02.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="testi-avatar-info">
                    <h5 className="name">Lempor Kooper</h5>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="testimonial-item text-center">
                <div className="testimonial-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-alt"></i>
                </div>

                <p>
                  “Becoming more involved in administration within the
                  (MidMichigan) health system over the years, I had been
                  researching options for further education that would assist in
                  this transition and fit my busy schedule”
                </p>

                <div className="testimonial-avatar-wrap">
                  <div className="testi-avatar-img">
                    <img
                      src="/assets/img/others/testi_avatar03.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="testi-avatar-info">
                    <h5 className="name">Zonalos Neko</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function Home() {
  return (
    <Layout>
      <BannerSection />
      <BrandSection />
      <FeaturesArea />
      <FeaturesProducts />
      <Ingredients />
      <Testimonial />
    </Layout>
  );
}
