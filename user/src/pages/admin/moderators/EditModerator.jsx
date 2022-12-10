import Btnreturn from "../../../components/admin/other_components/Btnreturn";
import BottomNav from '../../../components/common_components/BottomNav';
import FormModerator from '../../../components/admin/forms/FormModerator';

const EditModerator = () => {
  return (
    <>
    <BottomNav
    name="EDITER UN MODERATEUR"
    urlNav="/admin/selection_menu"
    />

<Btnreturn urlCard="/admin/manage_moderator" />

    <FormModerator 
    subject="CHANGER LES INFORMATIONS D'UN MODERATEUR"
    button="MODIFIER"
    />
  </>
  )
}

export default EditModerator