import Btnreturn from "../../../components/admin/other_components/Btnreturn";
import BottomNav from '../../../components/common_components/BottomNav';
import FormEvent from "../../../components/admin/forms/FormEvent";

const CreateEvent = () => {
  return (
    <>
    <BottomNav name="CREATION D'UN EVENEMENT"
    urlNav="/admin/selection_menu" />

    <Btnreturn urlCard="/admin/manage_events" />
    
    <FormEvent 
    subject="NOUVEL EVENEMENT"
    button="CREER"
    />
    </>
  )
}

export default CreateEvent