import BottomNav from '../../../components/common_components/BottomNav';
import CardTime from "../../../components/admin/card/CardTime";
import CardTimeEdit from "../../../components/admin/card/CardTimeEdit";

const ManagePartners = () => {
  return (
    <>
      <BottomNav name="GESTION DES PARTENAIRES"
      urlNav="/admin/selection_menu" />

      <section className="manage_CRUD">
        <div className="new_card">
          <CardTime
            url="/admin/create_partner"
            date="_ _ /_ _ / _ _"
            firstName="_ _ _ _ _ _"
            lastName="_ _ _ _ _ _"
          />
        </div>

        {/* div to use to feed nex cards */}
        <div className="manage_mode_feed">
          <CardTimeEdit
            url="/admin/edit_partner"
            date="_ _ /_ _ / _ _"
            firstName="_ _ _ _ _ _"
            lastName="_ _ _ _ _ _"
          />
          <CardTimeEdit
            url="/admin/edit_partner"
            date="_ _ /_ _ / _ _"
            firstName="_ _ _ _ _ _"
            lastName="_ _ _ _ _ _"
          />
        </div>
      </section>
    </>
  );
};

export default ManagePartners;
