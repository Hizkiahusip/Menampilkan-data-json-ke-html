import React from "react";
import { Container, Row, Col, Button, Figure, Card } from "react-bootstrap";
import { menu } from "../../Components/menu.json";

export default function Home() {
  return (
    <div class="body">
      <div class="part-1">
        <Container>
          <Row class="row">
            <div class="content">
              <Col>
                <h1 class="title">Jadilah Investor UMKM & Waralaba</h1>
                <h5 class="text">
                  Temukan bisnis UMKM & Waralaba yang anda sukai dan mulai
                  menjadi investor untuk kemajuan perekonomian bangsa tanpa
                  perlu pusing dengan operasional sehari-hari
                </h5>
                <Button
                  variant="warning"
                  className="mt-5"
                  style={{
                    color: "white",
                    fontSize: "18px",
                    letterSpacing: "1px",
                  }}
                >
                  Investasi Sekarang &nbsp; ⟶
                </Button>
              </Col>
            </div>
          </Row>
        </Container>
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1440 221.1"
          style={{ enableBackground: "new 0 0 1440 221.1" }}
        >
          <path
            class="st0"
            d="M164.2,202c-43.7-11-81.7-36.3-108.7-70.7C22.6,96.9,1.9,50.9,0.1,0H0v202v6v13.1h1440V202H164.2z"
            fill="#FFFFFF"
          />
          <path
            class="st1"
            d="M55.5,131.3C92.1,178,149,208,213,208h1227v-15H200C143.2,193,91.9,169.3,55.5,131.3z"
            fill="#FBCD06"
          />
        </svg>
      </div>
      <div class="part-2">
        <Container>
          <Row class="row">
            <Col md={5} class="col">
              <h1 class="title">
                <strong>
                  Menjadi Investor <br /> UMKM itu gampang
                </strong>
              </h1>
            </Col>
            <Col nd={3} class="col">
              <h1 class="text">
                Berinvestasi pada UMKM bisa dilakukan oleh siapa saja dan dimana
                saja.
              </h1>
            </Col>
            <Col md={4} class="col"></Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <img src="/images/step01.png" class="img" alt="step01" />
            </Col>
            <Col xs={6} md={4}>
              <img src="/images/step02.png" class="img" alt="step02" />
            </Col>
            <Col xs={6} md={4}>
              <img src="/images/step03.png" class="img" alt="step03" />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <Figure class="figure-1">
                <h1 class="text-judul">
                  <strong>Pilih UMKM</strong>
                </h1>
                <h1 class="text-2">
                  Temukan usaha yang anda minati pada galeri.
                </h1>
              </Figure>
            </Col>
            <Col xs={6} md={4}>
              <Figure class="figure-2">
                <h1 class="text-judul">
                  <strong>Analisa Bisnis</strong>
                </h1>
                <h1 class="text-2">
                  Lakukan analisa profil bisnis dan pengusaha.
                </h1>
              </Figure>
            </Col>
            <Col xs={6} md={4}>
              <Figure class="figure-3">
                <h1 class="text-judul">
                  <strong>Mulai Berinvestasi</strong>
                </h1>
                <h1 class="text-2">
                  Menjadi investor startup dengan modal minimal 100.000 Rupiah.
                </h1>
              </Figure>
            </Col>
          </Row>
        </Container>
      </div>
      <div class="part-3">
        <Container>
          <Row>
            <h1 class="title">
              <strong>Siap Memulai Berbisnis?</strong>
            </h1>
          </Row>
          <Row>
            <h1 class="text">Tentukan bisnis waralaba pilihan Anda sekarang</h1>
          </Row>
          <hr />
          <Row className="mt-4">
            {menu.map((menu, key) => (
              <Col xs={6} md={4} key={key}>
                <Card class="card">
                  <Card.Title class="kategori">{menu.Kategori}</Card.Title>
                  <Card.Img variant="top" src={menu.Image} class="img" />
                  <Card.Body class="body">
                    <Card.Text class="nama">{menu.Nama}</Card.Text>
                  </Card.Body>
                  <Card.Footer class="footer">
                    <a href="/" className="text-center">
                      <h5 class="h5">LIHAT DETAIL</h5>
                    </a>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
          <Row className="mt-4">
            <Col class="bottom">
              <a href="/" class="detail">
                <strong>Lihat Semua</strong>
              </a>
            </Col>
          </Row>
        </Container>
      </div>

      <div class="part-4">
        <Container>
          <Row>
            <Col>
              <Card>
                <Row>
                  <Col md={5}>
                    <div class="text">
                      <h1 class="title">
                        Kami siap <br /> membantu Anda
                      </h1>{" "}
                      <p>
                        Apabila Anda ingin mengetahui lebih lanjut mengenai
                        Udana. Silahkan menghubungi kami
                      </p>
                    </div>
                  </Col>
                  <Col md={5}>
                    <div class="contact">
                      <label>
                        <img src="/images/location.png" alt="location" />
                        PT Dana Rintis Indonesia
                      </label>
                      <p>
                        Gedung City Lofts Sudirman, 2016
                        <br />
                        Jl. K.H Mas Mansyur 121, Jakarta Pusat
                        <br />
                        DKI Jakarta, 10220
                      </p>
                      <label>
                        <img src="/images/email.png" alt="email" />
                        ask@udana.id
                      </label>
                      <label className="mt-3">
                        <img src="/images/phone.png" alt="phone" />
                        081919191115
                      </label>
                    </div>
                  </Col>
                  <Col md={2}></Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
