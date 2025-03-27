import { Modal } from "antd";
import { FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // FontAwesome icons

const ContactUs = ({isModalOpen, setModalOpen}) => {
   console.log(isModalOpen);
  return (
    <Modal 
    destroyOnClose={true} // ✅ Completely removes modal from DOM when closed

    onCancel={setModalOpen}
    className="custom-modal"
    open={isModalOpen} 
    
     footer={null} // Removes footer
    closeIcon={null} // Removes the X (close) button
  
    width={700}
      >
     <div className="p-10 max-w-7xl ">
     <h1 className="text-gray-700 text-3xl text-center tracking-wide pb-5" style={{fontFamily:"Montserrat"}}>  Contact
     <span className="outline-text text-3xl"> US</span>
     </h1>

     <h3 className="text-center tracking-normal font-thin text-gray-500 text-base" style={{fontFamily:"Montserrat"}}> Feel free to contact us anytime.</h3>
     <h3 className="text-center tracking-normal font-thin text-gray-500 text-base" style={{fontFamily:"Montserrat"}}> We will get back to you as soon as we can!</h3>
   

    <h2 className="text-center tracking-normal pt-5 text-xl text-gray-700" style={{fontFamily:"Montserrat"}}> Contact Information</h2>

    <div className="flex flex-row gap-5 text-center items-center justify-center">
      <div>
      <FaPhoneAlt />

      </div>
    
        

          <div className="flex flex-col pt-4 font-bold">
            <p>+251 94 990 2370</p>
            <p>+251 94 433 6232</p>
            <p>+251 97 278 4009</p>
          </div>


    </div>
    <div className="flex flex-row justify-center items-center gap-3 pt-7"
    >
      <div>
      <FaEnvelope />

      </div>
      <p>pelicansproduction9@gmail.com</p>
    </div>
      </div> 
    </Modal>
  );
};
export default ContactUs;
