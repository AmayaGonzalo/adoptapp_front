import DonationForm from "Components/Forms/DonationForm/DonationForm";
import InformationCard from "Components/Card/InformationCard/InformationCard";
import './complaintsPage.css';
import SectionStructure from "Components/home/HomeSections/SectionStructure/SectionStructure";

const ComplaintsPage = () => {

    const complaints = [
        { urlImg: 'https://www.elespectador.com/resizer/X0hDCeSGTTKyJlD-YOFtPczYaSI=/631x420/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/WFG2DWO6ZNGMJNXHVT4SCNII2Y.jpeg', title: 'No al maltrato', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id ornare arcu odio ut sem. Vitae tempus quam pellentesque nec. Elit ut aliquam purus sit amet luctus venenatis lectus. Enim ut tellus elementum sagittis vitae et leo duis. Massa eget egestas purus viverra accumsan in nisl nisi. A diam sollicitudin tempor id. Aliquam sem fringilla ut morbi tincidunt augue interdum. Nibh praesent tristique magna sit amet purus gravida quis. Eu sem integer vitae justo eget magna fermentum iaculis. Vel quam elementum pulvinar etiam non quam. Sed velit dignissim sodales ut eu. Vitae sapien pellentesque habitant morbi tristique senectus. Cursus metus aliquam eleifend mi in nulla. Cras tincidunt lobortis feugiat vivamus at augue eget. Orci sagittis eu volutpat odio facilisis. Nec sagittis aliquam malesuada bibendum.' },
        { urlImg: 'https://notasdemascotas.com/wp-content/uploads/2020/05/70-perros-rescatados-de-una-granja.jpg', title: 'No al maltrato', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id ornare arcu odio ut sem. Vitae tempus quam pellentesque nec. Elit ut aliquam purus sit amet luctus venenatis lectus. Enim ut tellus elementum sagittis vitae et leo duis. Massa eget egestas purus viverra accumsan in nisl nisi. A diam sollicitudin tempor id. Aliquam sem fringilla ut morbi tincidunt augue interdum. Nibh praesent tristique magna sit amet purus gravida quis. Eu sem integer vitae justo eget magna fermentum iaculis. Vel quam elementum pulvinar etiam non quam. Sed velit dignissim sodales ut eu. Vitae sapien pellentesque habitant morbi tristique senectus. Cursus metus aliquam eleifend mi in nulla. Cras tincidunt lobortis feugiat vivamus at augue eget. Orci sagittis eu volutpat odio facilisis. Nec sagittis aliquam malesuada bibendum.' },
        { urlImg: 'https://proyecto13.com/up-p13/uploads/2020/04/WhatsApp-Image-2020-04-21-at-12.43.54-2.jpeg', title: 'No al maltrato', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id ornare arcu odio ut sem. Vitae tempus quam pellentesque nec. Elit ut aliquam purus sit amet luctus venenatis lectus. Enim ut tellus elementum sagittis vitae et leo duis. Massa eget egestas purus viverra accumsan in nisl nisi. A diam sollicitudin tempor id. Aliquam sem fringilla ut morbi tincidunt augue interdum. Nibh praesent tristique magna sit amet purus gravida quis. Eu sem integer vitae justo eget magna fermentum iaculis. Vel quam elementum pulvinar etiam non quam. Sed velit dignissim sodales ut eu. Vitae sapien pellentesque habitant morbi tristique senectus. Cursus metus aliquam eleifend mi in nulla. Cras tincidunt lobortis feugiat vivamus at augue eget. Orci sagittis eu volutpat odio facilisis. Nec sagittis aliquam malesuada bibendum.' },
        { urlImg: 'https://images.hola.com/imagenes/estar-bien/20190115135374/california-ley-venta-mascotas-gt/0-634-831/perros-ley-california-t.jpg?tx=w_680', title: 'No al maltrato', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id ornare arcu odio ut sem. Vitae tempus quam pellentesque nec. Elit ut aliquam purus sit amet luctus venenatis lectus. Enim ut tellus elementum sagittis vitae et leo duis. Massa eget egestas purus viverra accumsan in nisl nisi. A diam sollicitudin tempor id. Aliquam sem fringilla ut morbi tincidunt augue interdum. Nibh praesent tristique magna sit amet purus gravida quis. Eu sem integer vitae justo eget magna fermentum iaculis. Vel quam elementum pulvinar etiam non quam. Sed velit dignissim sodales ut eu. Vitae sapien pellentesque habitant morbi tristique senectus. Cursus metus aliquam eleifend mi in nulla. Cras tincidunt lobortis feugiat vivamus at augue eget. Orci sagittis eu volutpat odio facilisis. Nec sagittis aliquam malesuada bibendum.' }
    ]
    return (
        <main className='complaints-main-page'>
            <SectionStructure className='complaints'
                sectionTitle="Ayudanos a proteger a los peluditos">
                    <aside className='complaints-aside'>
                        <p>En Adoptapp nos comprometemos con la seguridad y proteccion de las mascotas es por  ello que disponemos de una sección exclusiva donde podrás reportar
                            abandonos, maltratos,
                            extravíos, etc. Solo debes completar el formulario con el tipo de denuncia, un contacto para recibir información imagen y descripción del suceso y nuestro equipo informará la
                            situación a las autoridades.
                        </p>
                    </aside>
                    <section className='complaints-form-section'>
                        <div className='complaints-form-content'>
                            <DonationForm />
                        </div>
                    </section>
            </SectionStructure>
            <SectionStructure
                sectionTitle="Hechos recientes">
                <section className='complaints-content'>
                    {complaints.map((complaint, index) => (
                        <InformationCard
                            key={index}
                            imageUrl={complaint.urlImg}
                            title={complaint.title}
                            body={complaint.content} />
                    ))}
                </section>
            </SectionStructure>
        </main>
    )
}
export default ComplaintsPage;
