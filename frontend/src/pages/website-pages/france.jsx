import React from 'react'
import Footer from '../../component/website/footer/footer'
import Navbar from '../../component/website/navbar/navbar'
import Image from '../../component/website/layout/image'
import Div from '../../component/website/layout/div'
import H2 from '../../component/website/layout/h2'
import P from '../../component/website/layout/p'
import Section from '../../component/website/layout/section'
import Divp from '../../component/website/layout/divp'
import H3 from '../../component/website/layout/h3'

function France() {
  return (
    <div>
      <Navbar />
      <Image />
      <Section>
        <Div>
          <H2 text="Casa Evaliza" />
          <Divp>
            <p>Casa Evaliza est une spacieuse villa située à 250 mètres de la plage faisant face aux hôtels et restaurants de luxe du quartier de Seminyak/Oberoi. L'accès se fait par une allée privée menant également aux suites de l'hôtel Legian. Evaliza a été totalement redécorée en 2009 et elle est une des villas pris ée de la région avec son style colonial mélangeant harmonieusement le traditionnel local et le contemporain.</p>
            <br />
            <p>La taille du jardin permet d'offrir une belle pelouse entourant une piscine de 14 mètres. Un pavillon de détente permet de se relaxer en profitant de cet environnement dépaysant et peut également servir de lieu de cérémonie pour un mariage.</p>
          </Divp>
          <div className='md:flex md:gap-14'>
            <div className='md:w-1/2'>
              <H3 text="Salon et salle à manger" />
              <P>
                <p>Le grand pavillon abritant le salon et la salle à manger offre un toit en Alang Alang et le sol est recouvert de terrazzo blanc cassé. Tout un côte du bâtiment donne sur le jardin et de grandes baies vitrées permettent d'ouvrir complètement la salle sur l'extérieur. Cet espace est parfaitement aéré grâce aux six ventilateurs fixés sur la charpente du toit. A l'une des extrémités de la pièce, une grande table peut accueillir confortablement douze invités</p>
                <br />
                <p>Au centre, deux sofas richement recouverts de coussins encadrent une table basse ancienne ; à proximité est installé un lit de jour suspendu par des chaines et permettant de se reposer en se balançant.</p>
                <br />
                <p>Enfin, la décoration est complétée par un ancien lit javanais, de nombreux tissus, des bougies ornementales et une belle tête de bouddha. Un équipement audio permet de compléter l'ambiance de l'espace. Une sélection de livres est à la disposition des invités.</p>
              </P>
            </div>
            <div className='md:w-1/2 text-justify md:text-right'>
              <H3 text="La Master Suite" />
              <P>
                <p className='text-right'>La master Bedroom occupe le niveau inférieur du bâtiment de deux étages. Un King-size bed orne la pièce. Au dessus du lit, un des murs est décoré d'un panneau sculpté provenant d'une maison traditionnelle de Toraja Sulawesi.</p>
                <br />
                <p className='text-right'>A l'avant du lit sont disposées deux statues en bois représentant un couple javanais en habits de cérémonie. La chambre est équipée d'un écran 45' avec lecteur DVD et accès aux chaines satellite.</p>
                <br />
                <p className='text-right'>La grande salle de bain attenante est accessible par une porte vitrée. Le sol est recouvert de terrazzo et une grande baignoire orne le centre la pièce. Deux belles vasques et une douche complète l'équipement de la pièce ; le cabinet de toilette se trouve dans une alcôve.</p>
                <br />
                <p className='text-right'>En poussant une nouvelle porte vitrée, vous trouverez également un dressing offrant de nombreux rangements. La chambre dispose également d'une terrasse meublée donnant sur le jardin.</p>
              </P>
            </div>
          </div>

          <div className='md:flex md:gap-14'>
            <div className='md:w-1/2'>
              <H3 text="Media Room" />
              <P>
                <p>La pièce media située à proximité du salon offre la climatisation et permet de regarder les programmes du satellite ou un DVD confortablement installé dans un sofa d'angle. Le Wifi est également disponible dans la villa.</p>
              </P>
            </div>
            <div className='md:w-1/2 text-justify md:text-right'>
              <H3 text="La cuisine" />
              <P>
                <p className='text-right'>La cuisine équipée se trouve à proximité de la salle à manger. Le quartier du personnel est également proche du lieu afin d'optimiser le service.</p>
              </P>
            </div>
          </div>

          <div className='md:flex md:gap-14'>
            <div className='md:w-1/2'>
              <H3 text="Les autres Chambres" />
              <P>
                <p>Les autres chambres sont situées à l'étage supérieur et sont accessibles par un escalier en bois. Deux d'entre elles sont bordées d'un balcon spacieux offrant une belle vue sur le jardin. Ce dernier est équipé de meubles en rotin. L'une de ces trois chambres est dédiée aux enfants et offre cinq lits dont deux superposés. Toutes les chambres ont un téléviseur écran plat 30' avec lecteur DVD. Deux des salles de bain disposent d'une baignoire et toutes sont équipées de douches.</p>
              </P>
            </div>
            <div className='md:w-1/2 text-justify md:text-right'>
              <H3 text="Le jardin et la piscine" />
              <P>
                <p className='text-right'>Le grand jardin est richement pourvu en plantes et arbres matures et la pelouse s'étend sur deux niveaux, rappelant ainsi les rizières en terrasse de l'île. Le pavillon de détente permet de se relaxer devant la piscine. Cette dernière est bordée de pierres blanches mettant en exergue le contraste des couleurs et une cascade artificielle déverse de l'eau dans le bassin.</p>
              </P>
            </div>
          </div>
          <H3 text="La localisation" />
          <P>
            <p>La villa Casa Evaliza est située au cœur du quartier tendance de Seminyak / Petitenget. Ce dernier abrite de nombreux établissements prisés de l'île où se côtoient des touristes de toutes nationalités et en particulier européenne. Ces établissements souvent situés en front de mer et à proximité de la plage offrent des prestations d'hébergement et de restauration de luxe, des soins du corps et des magasins de prêt-à-porter et de décoration.</p>
            <br />
            <p>L'hôtel Oberoi, le Kudeta, le Legian, la Lucciola le Hu'u, le Sentosa, le Breeze et le Samaya en sont les principales références. La plage aménagée de ce quartier est une des plus appréciées de l'île tant ppur la beauté de ses couchers de soleil que pour ses vagues propices au surf. Enfin, un des plus importants temples de Bali par sa taille contribue à conserver l'authenticité du lieu, notamment de par les nombreuses cérémonies qui s'y déroulent.</p>
            <p>Pour rejoindre l'aéroport de la villa, il faut compter une trentaine de minute</p>
          </P>
        </Div>
      </Section>
      <Footer />
    </div>
  )
}

export default France
