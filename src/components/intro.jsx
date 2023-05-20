import Container from "react-bootstrap/Container";
import photo2 from './photo2.jpg'

function Introduction() {
  return (
    <Container className="introduction" id="bemutatkozas"> 
      <h2 className="h2">Miért hasznos egy selfie gép?</h2>
      <div className="introflex">
      <p>
        Azonnal nyomtatható képek, amiket akár pár percen belül megoszthatsz
        bármilyen közösségi média felületen a telefonod segítségével, így
        elkerülheted az esemény utáni hosszass várakozást, hogy végre
        viszontláthasd a fotókat.
        <h5>blabla</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima officiis reiciendis vel, doloremque exercitationem harum. Dolorum reprehenderit, beatae provident minima odit natus, commodi aut eos a expedita iusto ducimus voluptates?</p>
      </p>
     
      </div>
      
    </Container>
  );
}

export default Introduction;
