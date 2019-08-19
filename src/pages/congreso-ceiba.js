import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Container from '../components/container'
import HeroPage from '../components/heroPage'
import Sponsors from '../components/sponsors'
import { FaFileDownload } from 'react-icons/fa'

import { sponsorCeiba } from '../utils/imageConfig'

const Wrapper = styled.section`
  background-color: var(--background);
  width: 100%;
  padding: 70px 0;
  h2 {
    margin-bottom: 50px;
  }
  .download-card {
    background: white;
    display: flex;
    margin-bottom: 20px;
    border-radius: 4px;
    min-height: 100px;
    align-items: center;
    p {
      font-size: 14px;
      padding: 0 10px;
      width: 75%;
    }
    a {
      min-height: 100px;
      width: 25%;
      background: var(--active);
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        fill: white;
        width: 40px;
        height: 40px;
        transition: all 0.3s ease;
      }
      &:hover svg {
        fill: var(--oxford-blue);
      }
    }
  }
`

export default () => {
  return (
    <Layout>
      <HeroPage
        title="Congreso la Ceiba"
        tags="Memorias Congreso"
        bgImage={'congreso-ceiba'}
      />
      <Wrapper>
        <Container>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h2 className="main-title variant-title">
                Documentos para leer o descargar
              </h2>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assets.ctfassets.net/zg4fwo9e8dmk/10lBOtMbMEmy60vJJnW8Ut/d3119b4485d2b2cb7d558a47df745d74/Calidad_de_la_leche__un_para__metro_indispensable_para_competir_y_adentrarse_en_nuevos_mercados_Por_Ing__Carlos_Berra.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">
                      Calidad de la leche, un parámetro indispensable para
                      competir y adentrarse en nuevos mercados. Por Ing. Carlos
                      Berra
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assets.ctfassets.net/zg4fwo9e8dmk/78KWAhhtShrsGfY2jozphS/bb2311d21d53a0c190a04208f9c64d8f/Confort_animal_y_estre__s_calo__rico__Alteraciones_que_afectan_el_potencial_productivo_y_reproductivo_de_los_bovinos_Por_Ing.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">
                      Confort animal y estrés calórico. Alteraciones que afectan
                      el potencial productivo y reproductivo de los bovinos. Por
                      Ing. Julio Lemus
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://downloads.ctfassets.net/zg4fwo9e8dmk/56AeZvhekNcwLpwWsEXIbC/06d3cf6aa68e71e9598c94d854ce3a6b/Control_y_prevencio__n_de_las_principales_patologi__as_bovinas_y_su_repercusio__n_en_la_rentabilidad_de_la_finca_Por_Dr_Rube.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">
                      Control y prevención de las principales patologías bovinas
                      y su repercusión en la rentabilidad de la finca. Por Dr
                      Rubén Carrillo
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assets.ctfassets.net/zg4fwo9e8dmk/4V2LTAx45uzwmEgBEK70h9/9472508fb86f93fa7f56eb61d6c52da4/Impacto_de_las_enfermedades_causadas_por_Hemopara__sitos_en_la_ganaderi__a_del_Tro__pico_Por_Doctor_Carlos_Malago__n_Vera.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">
                      Impacto de las enfermedades causadas por Hemoparásitos en
                      la ganadería del Trópico. Por Doctor Carlos Malagón Vera
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assets.ctfassets.net/zg4fwo9e8dmk/7idWpAepU8LcrHpKiNJtNT/df92b50c1c61575e179ddedd1f2f7a23/Las_NAMAs_como_Instrumento_para_la_Intensificacio__n_de_la_ganaderi__a_y_la_reduccio__n_de_los_impactos_clima__ticos_Por_MSc.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">
                      Las NAMAs como Instrumento para la Intensificación de la
                      ganadería y la reducción de los impactos climáticos. Por
                      MSc Francisco Casasola
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assets.ctfassets.net/zg4fwo9e8dmk/2XDqxn9UWRJ8LeqJHC93xq/0f52a90c4e26eacc83d89e765056a8b4/Manejo_y_desarrollo_de_reemplazos_y_sus_efectos_en_la_productividad_total_de_las_explotaciones_lecheras_Por_Dr_Thomas_Voorsl.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">
                      Manejo y desarrollo de reemplazos y sus efectos en la
                      productividad total de las explotaciones lecheras. Por Dr
                      Thomas Voorsluys
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assets.ctfassets.net/zg4fwo9e8dmk/5KXk3YkxWhrLQOMm1g2x5W/89bb42717f8019063bf3c1efd9fef5b3/Sincronizacio__n_de_celos_y_ovulacio__n-una_alternativa_para_el_manejo_reproductivo_Por_Dr__John_Hincapie__.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">
                      Sincronización de celos y ovulación-una alternativa para
                      el manejo reproductivo. Por Dr. John Hincapié
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assets.ctfassets.net/zg4fwo9e8dmk/3WmIp3uNRGFI9334CL6N9K/fa9c641d58b92996cef72099e31c3f5a/Mecanismos_eficientes_para_la_exportacio__n_de_productos_la__cteos_a_los_pai__ses_con_los_cuales_Honduras_tiene_vigentes_con.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">
                      Mecanismos eficientes para la exportación de productos
                      lácteos a los países con los cuales Honduras tiene
                      vigentes convenios y tratados comerciales
                    </p>
                  </div>
                </div>
              </div>
              <h2 className="main-title variant-title">Patrocinadores</h2>
              <Sponsors sponsors={sponsorCeiba} />
              <Link to="/memorias-congresos" className="animate-link">
                Regresar
              </Link>
            </div>
          </div>
        </Container>
      </Wrapper>
    </Layout>
  )
}
