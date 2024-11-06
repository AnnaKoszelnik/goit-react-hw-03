import s from './Contact.module.css';
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";

const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <>
      <div className={s.contact_data}>
        <div className={s.contact_icon}>
          <HiOutlineUser className={s.icon} />
          <p className={s.contact_name}>{name}</p>
        </div>
        <div className={s.contact_icon}>
          <HiOutlinePhone className={s.icon} />
          <p className={s.contact_number}>{number}</p>
        </div>
      </div>
      <button
        onClick={() => deleteContact(id)}
        className={s.btn_delete}
        type="button"
      >
        Delete
      </button>
    </>
  );
};

export default Contact;