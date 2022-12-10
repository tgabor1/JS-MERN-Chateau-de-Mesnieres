import Btnreturn from "../../../components/admin/other_components/Btnreturn";
import BottomNav from '../../../components/common_components/BottomNav';
import FormEvent from "../../../components/admin/forms/FormEvent";

const EditEvent = () => {
  return (
    <>
    <BottomNav name="EDITER UN EVENEMENT" 
    urlNav="/admin/selection_menu"/>

    <Btnreturn urlCard="/admin/manage_events" />

    <FormEvent 
    subject="CHANGER LES INFORMATIONS D'UN EVENEMENT"
    button="CHANGER"
    />
    </>
  )
}

export default EditEvent