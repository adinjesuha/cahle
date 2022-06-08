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
        title="Tegucigalpa, Francisco Morazán"
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
                <div className="col-lg-12 col-md-12">
                  <h3 style={{'textAlign': 'center', 'marginBottom': '2rem'}}>Presentaciones conjuntas (productores y procesadores de  leche)</h3>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assets.ctfassets.net/zg4fwo9e8dmk/1ttiu6N5rHHcDlslG9pdpU/f510fe6aa38f005e9db0662f971e61b3/Cadena_de_fri__o_en_leche_y_derivados-Su_importancia__la_seleccio__n_correcta_y_sus_beneficios.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">Cadena de frío en leche y derivados-Su importancia, la selección correcta y sus beneficios</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assets.ctfassets.net/zg4fwo9e8dmk/0LsS5LZnY7DGTcQt3viY1/8cffa4d79791c0a0c09ae5b9bfcfe061/Evaluacio__n_de_la_competitividad_del_sector_lechero__avances__limitaciones_y_oportunidades_para_enfrentar_las_exigencias_so.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">Evaluación de la competitividad del sector lechero, avances, limitaciones y oportunidades para enfrentar las exigencias sociales.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assets.ctfassets.net/zg4fwo9e8dmk/1KfEysKr7lgNdD46LzN1if/9c361ee9ed88a8762999f1db0e7f27e2/Nutricio__n_del_ganado_lechero-Consecuencias_sobre_la_calidad_de_la_leche_y_el_rendimiento_de_los_productos_la__cteos.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">Nutrición del ganado lechero-Consecuencias sobre la calidad de la leche y el rendimiento de los productos lácteos</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assets.ctfassets.net/zg4fwo9e8dmk/2xwFjjea9ChOsBUutKwCwr/e808bd6de1fcad3379f89c67dbb57e86/Reglamento_Te__cnico_Centroamericano_-_Uso_de_te__rminos_lecheros.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">Reglamento Técnico Centroamericano - Uso de términos lecheros</p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <h3 style={{'textAlign': 'center', 'marginBottom': '2rem'}}>Presentaciones sector productor de leche</h3>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assets.ctfassets.net/zg4fwo9e8dmk/66xvwS3f8BIy3uhvWEDJg7/9accf18b7760d67d8c0316c6d9776669/Bienestar_animal-Principales_aspectos_para_lograr_maximizar_salud__produccio__n_y_longevidad_de_nuestros_animales.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">Bienestar animal-Principales aspectos para lograr maximizar salud, producción y longevidad de nuestros animales</p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assets.ctfassets.net/zg4fwo9e8dmk/FS1mxP69j939zwkxjaKll/a498c3ff1eb4c60989d68d00519c230a/El_mayor_desafi__o_de_los_ganaderos-Ensilaje_eficiente_de_forrajes_como_base_de_la_produccio__n_rentable_de_leche.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">El mayor desafío de los ganaderos-Ensilaje eficiente de forrajes como base de la producción rentable de leche</p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assets.ctfassets.net/zg4fwo9e8dmk/31bfM0yEHw9cp6Goj3KZsX/908b25ce4dc82f1ad33fb52b0257140c/Sanidad-una_pieza_clave_en_la_productividad_y_competitividad_en_lecheri__as.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">Sanidad-una pieza clave en la productividad y competitividad en lecherías</p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assets.ctfassets.net/zg4fwo9e8dmk/28r05SLXOogb6RNDeTggmX/0faf6bbd4b87cbbf6e7347b63fe202c4/Para__metros_reproductivos-Co__mo_lograr_la_eficiencia_reproductiva_de_nuestro_ganado_lechero.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">Parámetros reproductivos-Cómo lograr la eficiencia reproductiva de nuestro ganado lechero</p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assets.ctfassets.net/zg4fwo9e8dmk/1HAza4WltpoFJfCxjCRsxH/b2d1d0c19af46012a67c005b62bc685e/Uso_de_aditivos_en_la_alimentacio__n_de_bovinos-Estabilizacio__n_ruminal_y_control_de_micotoxinas.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">Uso de aditivos en la alimentación de bovinos-Estabilización ruminal y control de micotoxinas</p>
                  </div>
                </div>

              </div>

              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <h3 style={{'textAlign': 'center', 'marginBottom': '2rem'}}>Presentaciones sector procesador de leche y derivados</h3>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assets.ctfassets.net/zg4fwo9e8dmk/3VRmw7W5xsawDM7Glfnvii/973a48700d3d9cb3906d6e9113ae9fb2/Co__mo_aprovechar_al_ma__ximo_los_componentes_de_la_leche_optimizando_los_costos_de_produccio__n.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">Cómo aprovechar al máximo los componentes de la leche optimizando los costos de producción</p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assets.ctfassets.net/zg4fwo9e8dmk/6dOqO3b36m3MebDgZwlaAC/acb44007a8fe9e50066375d24dc0b636/Desafi__os_tecnolo__gicos_a_los_que_se_enfrentan_los_procesadores_y_las_nuevas_tendencias_tencnolo__gicas.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">Desafíos tecnológicos a los que se enfrentan los procesadores y las nuevas tendencias tencnológicas</p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assets.ctfassets.net/zg4fwo9e8dmk/718iRP3ezSUslJzzRX751X/160c37f9e88e53c39bc768fbc5598a32/Innovacio__n_como_una_herramienta_para_que_las_empresas_la__cteas_puedan_competir.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">Innovación como una herramienta para que las empresas lácteas puedan competir</p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assets.ctfassets.net/zg4fwo9e8dmk/2gRzP0Sq6BOwiwvyQIpyUL/0b89ca422d3141860dff8b5b3996a4c0/Inocuidad_alimentaria-BP_aplicadas_a_la_industria_procesadora_de_leche.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">Inocuidad alimentaria-BP aplicadas a la industria procesadora de leche</p>
                  </div>
                </div>
              </div>

              <h2 className="main-title variant-title">Patrocinadores</h2>
              {/* <Sponsors sponsors={sponsorCeiba} /> */}
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
