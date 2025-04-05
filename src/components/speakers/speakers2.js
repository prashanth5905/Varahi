import styles from "./speakers2.module.css";
import SpeakerModal from "./speakerModal";
import {useState} from "react";
import data from './speaker_data';

const Speakers2 = () => {
    const [modal,setModal] = useState(false)
    const [speaker,setSpeaker] = useState(null)    
    const togglemodal =() =>{
        setModal(!modal);
    }
    const openModal =({name, about, description, image}) =>{
       setSpeaker({name, about, description, image});
    }

    return (
        <div className={styles.speakers}>
            <h1 className={styles.heading1}>Speakers</h1>
            {/* <h2 className={styles.heading2}>Our upcoming event Speakers</h2> */}
            {modal && <SpeakerModal 
            func={togglemodal}
            name={speaker.name}
            about={speaker.about}
            image={speaker.image}
            description = {speaker.description}
            />}

           <div className={styles.gallery}>

               <div className={styles.gallerypanel}>
                    
               <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name: "Rhea Singha", about: "Miss Universe India 2024", image: "./images/speakers/rhea.png", description: data.Rhea})}}><img src="./images/speakers/rhea.png" />
                    
                    </button>
                    <div className={styles.galleryname}>Rhea Singha</div>
               </div>
               

               <div className={styles.gallerypanel}>
               <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Lima Das", about:"Actress, Classical Dancer, Vocalist, Former Dental Surgeon",image: "./images/speakers/limaF.png",description:data.Lima})}}><img src="./images/speakers/limaF.png"></img></button>
               <div className={styles.galleryname}>Lima Das</div>
               </div>

               <div className={styles.gallerypanel}>
               <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Riten Debnath", about:"Entrepreneur, CEO of Fueler, Tech Innovator",image: "./images/speakers/ritenF.png",description:data.Riten})}}><img src="./images/speakers/ritenF.png"  /></button>
               <div className={styles.galleryname}>Riten Debnath</div>
               </div>
               
               <div className={styles.gallerypanel}>
               <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Vijaya Aswani", about:"Illustrator, Creative Storyteller, Art Curator",image: "./images/speakers/vijayaF.png",description:data.Vijaya})}}><img src="./images/speakers/vijayaF.png" /></button>
               <div className={styles.galleryname}>Vijaya Aswani</div>
               </div>
            </div>


              <div className={styles.gallery2}>
              <div className={styles.gallerypanel2}>
                    <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Shankuraj Konwar", about:"Singer-Songwriter, Assamese music icon",image: "./images/speakers/shankurajF.png",description:data.Shankuraj})}}><img src="./images/speakers/shankurajF.png" /></button>
                    <div className={styles.galleryname}>Shankuraj Konwar</div>
               </div>

               <div className={styles.gallerypanel2}>
               <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Rajni Basumatary", about:"Filmmaker, Actor, Director, Cultural Change-Maker",image: "./images/speakers/rajniF.png",description:data.Rajni})}}><img src="./images/speakers/rajniF.png" /></button>
               <div className={styles.galleryname}>Rajni Basumatary</div>
               </div>

               <div className={styles.gallerypanel2}>
               <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Bipul Bhuyan", about:"Experimental Physicist, IIT Guwahati, Neutrino Researcher",image: "./images/speakers/bipulF.png",description:data.Bipul})}}><img src="./images/speakers/bipulF.png"/></button>
               <div className={styles.galleryname}>Bipul Bhuyan</div>
               </div>

               <div className={styles.gallerypanel2}>
               <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Sneha Roy", about:"Poet, Researcher, Speaker, Gender and Literature Scholar",image: "./images/speakers/snehaF.png",description:data.Sneha})}}><img src="./images/speakers/snehaF.png" /></button>
               <div className={styles.galleryname}>Sneha Roy</div>
               </div>
              </div>
          
          {/* <div>
               <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, consectetur ab quaerat molestias temporibus minus amet voluptate doloremque atque quo voluptates sequi numquam illo sint doloribus praesentium accusamus cumque rerum est, quam adipisci reprehenderit. Est sint facere impedit quo asperiores quae minima reprehenderit quibusdam facilis, officiis molestias velit cumque omnis tempore minus nobis similique eaque molestiae! Repellat, voluptas minima? Quasi vel nihil neque, nemo odit adipisci est dignissimos placeat laboriosam reiciendis accusamus veritatis quos, quis cum officia, soluta veniam unde. Quos tenetur voluptate quas, eligendi eaque non ab aliquid autem amet delectus sapiente quasi repellat alias eius. Voluptate, officiis quos.</h1>
          </div> */}
        </div>
    );
}
 
export default Speakers2;