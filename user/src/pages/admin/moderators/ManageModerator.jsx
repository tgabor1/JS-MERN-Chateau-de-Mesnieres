import BottomNav from '../../../components/common_components/BottomNav';
import CardTime from "../../../components/admin/card/CardTime";
import CardTimeEdit from "../../../components/admin/card/CardTimeEdit";
import "../../../styles/pages.scss";

const ManageModerator = () => {
  return (
    <>
      <BottomNav name="GESTION DES MODERATEURS"
      urlNav="/admin/selection_menu" />

      <section className="manage_CRUD">
      <div className="new_card">
          <CardTime
            url="/admin/create_moderator"
            date="_ _ /_ _ / _ _"
            firstName="_ _ _ _ _ _"
            lastName="_ _ _ _ _ _"
          />
        </div>

          <div className="manage_mode_feed">
          <CardTimeEdit 
                      url="/admin/edit_moderator"
                      date="_ _ /_ _ / _ _"
                      firstName="_ _ _ _ _ _"
                      lastName="_ _ _ _ _ _"
          />
          </div>
      </section>
    </>
  );
};

export default ManageModerator;
