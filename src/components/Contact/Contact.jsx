import { IoPerson } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';


const Contact = ({ contact: {name, number, id} }) => {
    
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(id));
    };
    return (
        <div className={css.contact}>
            <div className={css.info}>
                <div className={css.name}>
                <IoPerson />
            <p>{name}</p>
            </div>
            <div className={css.number}>
            <FaPhoneAlt />
            <p>{number}</p>
            </div>
            </div>
            <button className={css.delete} onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Contact;