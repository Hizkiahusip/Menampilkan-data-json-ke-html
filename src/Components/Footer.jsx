import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export default function Footer() {
  return (
    <div class="footer">
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <div class="kiri">
              <Row>
                <Col md={6}>
                  <img src="/images/footer-logo.png" alt="footer-logo" />
                  <label>PT. Dana Rintis Indonesia</label>
                </Col>
                <Col md={6}>
                  <p>
                    Gedung City Lofts Sudirman, 2016 Jl. K.H Mas Mansyur 121,
                    Jakarta Pusat DKI Jakarta, 10220
                    <br />
                    E: <b>support@udana.id</b>
                    <br />
                    W: <b>085960000740</b>
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <div class="tengah">
              <Row>
                <Col md={6}>
                  <b>Perusahaan</b>
                  <div class="nav">
                    <ul className="list-unstyled">
                      <li>
                        <a href="/">Tentang</a>
                      </li>
                      <li>
                        <a href="/">Hubungi Kami</a>
                      </li>
                      <li>
                        <a href="/">Syarat & Ketentuan</a>
                      </li>
                      <li>
                        <a href="/">Kebijakan Privasi</a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md={6}>
                  <b>Investor</b>
                  <div class="nav">
                    <ul className="list-unstyled">
                      <li>
                        <a href="/">FAQ</a>
                      </li>
                      <li>
                        <a href="/">Resiko Investasi</a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <div class="kanan">
              <Row>
                <Col md={6}>
                  <b>Social Media</b>
                  <br />
                  <a href="/">
                    <img
                      src="/images/instagram.png"
                      style={{ width: "25px", height: "25px" }}
                      alt="ig-footer"
                    />
                  </a>
                  <a href="/">
                    <img
                      src="/images/linkedin.png"
                      style={{ width: "25px", height: "25px" }}
                      alt="ig-footer"
                    />
                  </a>
                </Col>
                <Col md={6}>
                  <b>Didukung oleh</b>
                  <br />
                  <div class="logo">
                    <a href="/">
                      <img src="/images/kominfo.png" alt="footer-kominfo" />
                    </a>
                    <a href="/">
                      <img src="/images/pse.png" alt="footer-pse" />
                    </a>
                  </div>
                  <a href="/">
                    <img src="/images/iso.jpg" alt="footer-iso" />
                  </a>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <footer class="bottom-footer">
        <div class="body-footer">
          <Container>
            <Row>
              <Col lg={12}>
                <p>
                  PT DANA RINTIS INDONESIA merupakan perusahaan berbadan hukum
                  yang didirikan berdasarkan Hukum Republik Indonesia. Berdiri
                  sebagai perusahaan yang masih dalam proses pendaftaran oleh
                  Otoritas Jasa Keuangan (OJK) di Indonesia. Perusahaan
                  menyediakan layanan antar muka (interface) sebagai penghubung
                  pihak yang memberikan pendanaan dan pihak yang membutuhkan
                  pendanaan meliputi pendanaan dari individu, organisasi, maupun
                  badan hukum kepada individu atau badan hukum tertentu.
                  Perusahaan tidak menyediakan segala bentuk saran atau
                  rekomendasi pendanaan terkait pilihan-pilihan dalam situs ini.
                  Isi dan materi yang tersedia pada situs Udana.id dimaksudkan
                  untuk memberikan informasi dan tidak dianggap sebagai sebuah
                  penawaran, permohonan, undangan, saran, maupun rekomendasi
                  untuk pendanaan sekuritas, produk pasar modal, atau jasa
                  keuangan lainya. Perusahaan dalam memberikan jasanya hanya
                  terbatas pada fungsi administratif. Perusahaan tidak
                  memberikan saran, memberi kewajiban atau kewajiban lainya
                  untuk jasanya.
                </p>
                <p>
                  Udana adalah platform urun dana bisnis yang hadir untuk
                  membuka akses pendanaan dan investasi bagi semua kalangan
                  berbasis teknologi informasi (equity crowdfunding) dimana
                  pebisnis menawarkan saham bisnis kepada calon investor baik
                  itu individu maupun organisasi:
                </p>
                <p>
                  Penggunaan Udana diatur sesuai dengan Peraturan Otoritas Jasa
                  Keuangan No. 37 Tahun 2018 Pasal 23 tentang Layanan Urun Dana
                  melalui Penawaran Saham Berbasis Teknologi Informasi atau
                  Equity Crowdfunding (“POJK 37/2018”).
                </p>
                <p>Dengan digunakannya layanan ini, kami menyatakan bahwa :</p>
                <ol type="a">
                  <li>
                    “OTORITAS JASA KEUANGAN TIDAK MEMBERIKANPERNYATAAN
                    MENYETUJUI ATAU TIDAK MENYETUJUI EFEK INI, TIDAK JUGA
                    MENYATAKAN KEBENARAN ATAU KECUKUPAN INFORMASI DALAM LAYANAN
                    URUN DANA INI. SETIAP PERNYATAAN YANG BERTENTANGAN DENGAN
                    HAL TERSEBUT ADALAH PERBUATAN MELANGGAR HUKUM.”
                  </li>
                  <li>
                    “INFORMASI DALAM LAYANAN URUN DANA INI PENTING DAN PERLU
                    MENDAPAT PERHATIAN SEGERA. APABILA TERDAPAT KERAGUAN PADA
                    TINDAKAN YANG AKAN DIAMBIL, SEBAIKNYA BERKONSULTASI DENGAN
                    PENYELENGGARA.”; dan
                  </li>
                  <li>
                    “PENERBIT DAN PENYELENGGARA, BAIK SENDIRI-SENDIRI MAUPUN
                    BERSAMA-SAMA, BERTANGGUNG JAWAB SEPENUHNYA ATAS KEBENARAN
                    SEMUA INFORMASI YANG TERCANTUM DALAM LAYANAN URUN DANA
                    INI.”.
                  </li>
                </ol>
              </Col>
            </Row>
          </Container>
        </div>
        <div class="copyright">
          Copyright Udana.id © 2020 by All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
