import Btnreturn from "../../../components/admin/other_components/Btnreturn";
import BottomNav from '../../../components/common_components/BottomNav';
import FormHire from "../../../components/admin/forms/FormHire";

const CreateHire = () => {
  return (
    <>
    <BottomNav name="CREATION D'UN EMPLOI" 
    urlNav="/admin/selection_menu"/>

    <Btnreturn urlCard="/admin/manage_hire" />
    
    <FormHire 
    subject="NOUVEL EMPLOI"
    button="CREER"
    />
    </>
  )
}

export default CreateHire