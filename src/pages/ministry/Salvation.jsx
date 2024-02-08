import Banner from '../../common/Banner'
import UseScrollTop from '../../common/components/UseScrollTop';

const Salvation = () => {
  const scrollToTop = UseScrollTop();

  return (
    <>
          {/* <!-- hero section --> */}
    <Banner text='"Receive Christ Today and Experience His Love!"' title="Receive Salvation" classname="salvation"/>

    {/* <!-- salvation --> */}
    <section id="salvation">
      <div className="container container-salvation">
        <h2>Receive Salvation</h2>
        <p className="salvation-content mw-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eius
          debitis recusandae a iusto nesciunt dolorem accusantium facere
          voluptatum dolorum quasi deleniti dicta corrupti similique nobis neque
          consectetur veniam tenetur animi, ex explicabo et blanditiis. Sit
          voluptate autem dolor velit ipsa eligendi amet saepe, ab at quae ut
          facere voluptatum tempora natus officia beatae ducimus iusto tempore
          vitae dolorem soluta quis. Nam vitae facere, nemo facilis officiis
          soluta ut excepturi fugiat veniam nulla quos optio magni a sed illum.
          Sequi fuga distinctio obcaecati, deserunt molestias laboriosam
          cupiditate blanditiis quas inventore velit veniam ex iure illum at
          beatae dolor esse atque. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Molestias autem consequatur consequuntur nesciunt
          suscipit illum laborum. Odit sunt, sint voluptatibus fuga vel esse ut
          quaerat doloremque tenetur laudantium nesciunt? Temporibus in debitis
          quis voluptate unde beatae. At dolore molestias asperiores. Sint nobis
          praesentium doloremque impedit beatae, cumque illo! Laborum, ipsa.
          <br /><br />
        </p>
        <p>
          Now that you have received Christ contact us so we can help
          strengthen. Contact us so we can help you grow in your new life.
          <br /><br />
        </p>
        <a href="../contact/salvation" className="btn">Receive Salvation</a>
      </div>
    </section>
    </>
  )
}

export default Salvation
