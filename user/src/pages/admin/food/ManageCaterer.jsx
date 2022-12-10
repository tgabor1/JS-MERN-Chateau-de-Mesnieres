import Accordion from 'react-bootstrap/Accordion';
import Btnreturn from "../../../components/admin/other_components/Btnreturn";
import BottomNav from '../../../components/common_components/BottomNav';

const ManageCaterer = () => {
  return (
    <>
    <BottomNav name="EDITER LE TRAITEUR"
    urlNav="/admin/selection_menu" />
    <Btnreturn urlCard="/admin/path_food" />

    <Accordion defaultActiveKey="0" className='manageRoom' flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Formule: Petit-déjeuner</Accordion.Header>
        <Accordion.Body>

          {/* import form */}

        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="1">
        <Accordion.Header>Formule: Pique-nique</Accordion.Header>
        <Accordion.Body>

          {/* import form */}
   
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Formule: Self</Accordion.Header>
        <Accordion.Body>

          {/* import form */}
    
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Formule: Buffet</Accordion.Header>
        <Accordion.Body>

          {/* import form */}
    
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Formule: Restaurant</Accordion.Header>
        <Accordion.Body>

          {/* import form */}
   
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header>Formule: Café ou Thé gourmand</Accordion.Header>
        <Accordion.Body>

          {/* import form */}
    
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </>
  )
}

export default ManageCaterer