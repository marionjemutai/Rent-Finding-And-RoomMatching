import React, { useRef,useState } from 'react'
import image3 from '../assets/photos/image3.jpg';
import JoinNow, { Buttons } from '../components/Buttons';import Navigation from '../components/Navigation';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../components/Footer';

export default function Home() {
  const carouselRef = useRef(null); 
    const [selectPerson, setSelectPerson] = useState(null);

  const scroll = (direction) => {
    if (!carouselRef.current) return;
    const scrollAmount = 320;
    if (direction === "left") {
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

    const items =[
      { 
        img: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg",
        title: "Yueyi",
        desc: [23, "Female", "Student", "Nairobi"]
     },
     {
       img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
       title: "Derick",
       desc: [33, "Male", "Profession", "Juja"]
      },

        {
            img: "https://plus.unsplash.com/premium_photo-1673957923985-b814a9dbc03d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
            title: "Brevian",
            desc: [17, "Female", "Student", "Roysambu"]
        },
    
        {
            img: "https://plus.unsplash.com/premium_photo-1678523786837-7550c031fee0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8.jpg",
            title: "Herica",
            desc: [26, "Female", "Profession", "Milimani"]
        },
        
        {
            img: "https://plus.unsplash.com/premium_photo-1669703777437-27602d656c27?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
            title: "Elvis",
            desc: [46, "Male", "Profession", "kasarani"]
        },

        {
            img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
            title: "Rajab",
            desc: [21, "Male", "Student", "Caren"]
        },
        
        {
            img: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
            title: "Sharon",
            desc: [20, "Female", "Student", "Mutaiga"]
        },

        {
            img: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
            title: "Catherine",
            desc: [21, "Male", "Student", "Caren"]
        },
        
        {
            img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
              title: "Naira",
            desc: [30, "Female", "Profession", "Caren"]
        },

        {
            img: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
            title: "Denis",
            desc: [31, "Male", "Profession", "Runda"]
        },

        {
            img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
            title: "Sarah",
            desc: [25, "Female", "Profession", "Ruaka"]
        },

        {
            img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
            title: "Lynn",
            desc: [18, "Female", "Student", "Ruiru"]
        },


        {
            img: "https://images.unsplash.com/photo-1484863137850-59afcfe05386?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
            title: "Ledisha",
            desc: [32, "Female", "Profession", "Westlands"]
        },

        {
            img: "https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
            title: "Lynate",
            desc: [19, "Female", "Student", "Rongai"]
        },

        {
            img: "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
            title: "Talia",
            desc: [28, "Female", "profession", "Kangemi"]
        },

        {
            img: "https://images.unsplash.com/photo-1492446845049-9c50cc313f00?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
            title: "Samuel",
            desc: [40, "Male", "Profession", "Ruake"]
        },

        {
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
            title: "Caroline",
            desc: [21, "Female", "Student", "Juja"]
        },

        {
            img: "https://plus.unsplash.com/premium_photo-1682096358356-5ffbe52b7aa1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
             title: "Monica",
             desc: [40, "Female", "Profession", "Ruaka"]
        },

        {
            img: "https://images.unsplash.com/photo-1589156288859-f0cb0d82b065?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Beryl",
             desc: [20, "Female", "Student", "Kasarani"]
        },

        {
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Kevin",
             desc: [30, "Male", "Profession", "Ruiru"]
        },

        {
            img: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=723&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Brian",
             desc: [32, "Male", "Profession", "Roysambu"]
        },

        {
            img: "https://plus.unsplash.com/premium_photo-1681880949962-44fd8757cf53?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Peter",
             desc: [45, "Male", "Profession", "Garden City"]
        },

        {
            img: "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "John",
             desc: [50, "Male", "Profession", "Pipeline"]
        },

        {
            img: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Alice",
             desc: [22, "Female", "Student", "Ruiru"]
        },

        {
            img: "https://images.unsplash.com/photo-1485893086445-ed75865251e0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Grace",
             desc: [19, "Female", "Student", "Ngara"]
        },
    
        {
            img: "https://plus.unsplash.com/premium_photo-1690587673708-d6ba8a1579a5?q=80&w=679&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Linda",
             desc: [24, "Female", "Student", "Roysambu"]
        },

        {
            img: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "James",
             desc: [20, "Male", "Student", "Ruiru"]
        },

        {
            img: "https://images.unsplash.com/photo-1484972759836-b93f9ef2b293?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Martha",
             desc: [40, " Female", "Profession", "[Pangani"]
        },

        {
            img: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Olivia",
             desc: [22, "Female", "Student", "Rongai"]
        },

        {
            img: "https://images.unsplash.com/photo-1525186402429-b4ff38bedec6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Sophia",
            desc: [21, "Female", "Student", "Rongai"]
        },

        {
            img: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Michael",
            desc: [34, "Male", "Profession", "Caren"]
        },

        {
            img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Rachel",
            desc: [25, "Female", "Profession", "Roysambu"]
        },
        
        {
            img: "https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Diana",
            desc: [20, "Female", "Student", "Rongai"]
        },

        {
            img: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Tony",
            desc: [27, "Male", "Profession", "Kasarani"]
        },

        {
            img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Kalvin",
            desc: [28, "Male", "Profession", "Ruiru"]
        },

        {
            img: "https://images.unsplash.com/photo-1484588168347-9d835bb09939?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Amira",
            desc: [22, "Female", "Student", "Rongai"]
        },

        {
            img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Faith",
            desc: [19, "Female", "Student", "Roysambu"]
        },

        {
            img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Daniel",
            desc: [45, "Male", "Profession", "Miliani"]
        },

        {
            img: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Karen",
            desc: [22, "Female", "Student", "Karen"]
        },

        {
            img: "https://images.unsplash.com/photo-1519419691348-3b3433c4c20e?q=80&w=626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Winnie",
            desc: [24, "Female", "Student", "Ruiru"]
        },

        {
            img: "https://images.unsplash.com/photo-1541130292430-a832637ddc0d?q=80&w=795&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Esther",
            desc: [20, "Female", "Student", "Ruaka"]
        }
        
        
    ]


  return (
     <div className="overflow-x-hidden bg-gray-50 min-h-screen">
      <Navigation />

      <div className="relative w-full">
        <img
          src={image3}
          alt="LandingPage"
          className="w-full h-[60vh] sm:h-[70vh] lg:h-[85vh] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-Ubuntu leading-snug drop-shadow-lg">
            Find Roommates and Rooms That Match Your Lifestyle
          </h1>
          <div className="mt-6">
            <Buttons />
          </div>
        </div>
      </div>

      <div className="mt-10 px-4 sm:px-8 md:px-12">
        <h1 className="text-center text-gray-900 font-Ubuntu font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Find a Roommate
        </h1>
        <p className="mt-4 text-gray-600 font-Nunito text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto">
          Use our Roommate Finder App to filter and find roommates that match your lifestyle
        </p>
      </div>

      <div className="relative w-full max-w-7xl mx-auto mt-10 px-2 sm:px-4 md:px-8">
        <button onClick={() => scroll("left")} className="absolute -left-3 sm:-left-2 md:-left-3 top-1/2 -translate-y-1/2 z-10 p-1 mx-3 rounded-full bg-orange-500 shadow-lg hover:bg-orange-600 transition flex items-center justify-center">
         <FontAwesomeIcon
         icon={faChevronLeft} 
         className="text-white text-lg md:text-xl"
        />
       </button>
        <div ref={carouselRef} className="flex gap-4 sm:gap-6 overflow-x-scroll scroll-smooth snap-x snap-mandatory scrollbar-hide">
          {items.map((item, index) => (
            <div key={index} onClick={() => setSelectPerson(item)} className="flex-shrink-0 w-44 sm:w-52 md:w-60 lg:w-72 cursor-pointer rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 snap-center">
              <div className="h-44 sm:h-52 md:h-60 lg:h-72 w-full overflow-hidden rounded-t-2xl">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
              </div>
              <div className="p-4">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 text-center">
                  {item.title}
                </h3>
                {Array.isArray(item.desc) && (
                  <div className="flex flex-wrap justify-center gap-2 text-gray-600 text-xs sm:text-sm mt-2">
                    {item.desc.map((d, i) => (
                      <React.Fragment key={i}>
                        <span>{d}</span>
                        {i < item.desc.length - 1 && (
                          <span className="w-px h-4 bg-gray-400"></span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <button onClick={() => scroll("right")} className="absolute -right-3 sm:-right-2 md:-right-3 top-1/2 -translate-y-1/2 z-10 p-1 mx-3 rounded-full bg-orange-500 shadow-lg hover:bg-orange-600 transition flex items-center justify-center">
          <FontAwesomeIcon 
          icon={faChevronRight} 
           className="text-white text-lg md:text-xl" 
         />
        </button>

        {selectPerson && (
          <div className="mt-8 mx-4 sm:mx-8 md:mx-12 p-6 bg-gray-100 rounded-2xl shadow-lg text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
              {selectPerson.title}
            </h2>
            <p className="text-gray-600 mt-3 text-xs sm:text-sm md:text-base lg:text-lg">
              {Array.isArray(selectPerson.desc)
                ? selectPerson.desc.join(" • ")
                : selectPerson.desc}
            </p>
          </div>
        )}
      </div>
      <div className="w-full bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[26px] font-bold text-black font-Ubuntu">
            Find a Roommate
          </h2>
          <p className="mt-3 text-[16px] text-gray-700 font-Nunito max-w-md">
            RoomMatch's smart compatibility quiz guides you through lifestyle and
            personality insights to connect you with your ideal roommate.
          </p>
          <img
            src="https://media.istockphoto.com/id/1369508735/photo/two-women-friends-embracing-and-laughing-on-grey-background.jpg?s=612x612&w=0&k=20&c=a6QVbVgKgwdQRDng-4heQsyzLH7amV1ckywTGMrX_Q0="
            alt="roommates bonding"
            className="mt-5 w-64 h-48 object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <h2 className="text-[26px] font-bold text-black font-Ubuntu">
            100% Free
          </h2>
          <p className="mt-3 text-[16px] text-gray-700 font-Nunito max-w-md">
            No hidden costs. RoomMatch is completely free to use!
          </p>
          <img
            src="https://media.istockphoto.com/id/1915382108/photo/smiling-friendly-confident-millennial-caucasian-lady-manager-teacher-in-formal-wear-with.jpg?s=612x612&w=0&k=20&c=TkrRP273eXURjstyDZHFH4lkrE6OFmVJ9ZCrgLoPfIw="
            alt="about the rent and roommate matching"
            className="mt-5 w-64 h-48 object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <h2 className="text-[26px] font-bold text-black font-Ubuntu">
            Safe Communication
          </h2>
          <p className="mt-3 text-[16px] text-gray-700 font-Nunito max-w-md">
            Connect directly through RoomMatch's secure messaging — no personal
            contact info required.
          </p>
          <img
            src="https://roommatch.com/assets/home/images/african-male-relaxed.png"
            alt="safe communication"
            className="mt-5 w-64 h-48 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
   <div className="bg-white py-12 px-6">

  <div className="text-center mb-10">
    <h2 className="text-[26px] font-bold text-black font-ubuntu">
      Find Rooms For Rent
    </h2>
    <p className="text-[18px] text-gray-700 font-nunito mt-2">
      Find affordable rooms for rent in Nairobi and beyond
    </p>
  </div>

  <div
    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
    {[
      {
        title: "Ruiru",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIWKE-jawMwIvrruoTmJbKNxVXvPqq0MsIRyB7V32A-zaGY-jAMYw7de47Y0LAOsJPZMI&usqp=CAU",
      },
      {
        title: "Roysambu, Isavo",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzjNHkUNfx5F3zJhfJdezonuG-IcCIMxH0ZkaNyIq8B5K9A_dY-sgSU_Nuim1QouwDPOQ&usqp=CAU",
      },
      {
        title: "Kitusuri",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJC3Dcv5veiLCIUJ9fVG2ZtMLrT2FenC-BSfsqZQIc9gKdSe7xvHpmdefy537B4BEUw30&usqp=CAU",
      },
      {
        title: "Milimani",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5yx9RlgYrdU-NUCUhOy0acxvxsaDN-jre0xmdDAjhZf4HSdHqv57txhskO1hqq3-rd2s&usqp=CAU",
      },
      {
        title: "Westlands",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6KE7DKm-23jZbkxukYchz6xro24JbRtyKWgcRhXnBwgxC1Lzosjs2kL1-Ve6YqC7H_Pg&usqp=CAU",
      },
      {
        title: "Karen",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYJh7gEIRDUqpu33BzKZGtgKn4rHZ0DolBVA3JrAPr3rWd64iOiiwvhSZGrQ0dQdss1E&usqp=CAU",
      },
      {
        title: "Garden City",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYJh7gEIRDUqpu33BzKZGtgKn4rHZ0DolBVA3JrAPr3rWd64iOiiwvhSZGrQ0dQdss1E&usqp=CAU",
      },
      {
        title: "Tatu City",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SOYh3T96f8OPoDO5yYzKdjNCwENiAkSlhehx1azwkRBBU3BiXwa0GfGrxC-xGAscHM8&usqp=CAU",
      },
      {
        title: "Kasarani",
        img: "https://images.kenyapropertycentre.com/properties/images/thumbs/28917/0659ac9ae1ad5a-a-studio-like-sq-available-in-kileleshwa-self-contained-for-rent-kileleshwa-nairobi.png",
      },
      {
        title: "Kahawa Wendani",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvLYSPOZI2_pGPXqZYaQpg-l6_QCv9Wx0Ae6EpUthWxjpXXudZDST7Kb-tj4MaLFe3ZU&usqp=CAU",
      },
    ].map((place, index) => (
      <div key={index} className="flex flex-col items-center bg-white shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
        <h3 className="text-[20px]  text-black font-ubuntu text-center order-2 sm:order-2 md:order-1 lg:order-1 mt-3 mb-2">
          {place.title}
        </h3>
        <img src={place.img} alt={place.title} className="w-full h-40 object-cover order-1 sm:order-1 md:order-2 lg:order-2"/>
      </div>
    ))}
  </div>
</div>
 <div className="bg-white w-full px-6 sm:px-8 md:px-16 py-12 space-y-16">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
         <div className="col-span-1">
         <h2 className="text-[26px] font-bold font-ubuntu text-black mb-4 text-left sm:text-center md:text-left">
          Introducing Match Ups
         </h2>
         <p className="text-[16px] text-gray-700 font-nunito leading-relaxed text-left sm:text-center md:text-left">
            RoomMatch's Match-Ups feature helps connect people searching for a
            room with others looking to share a full rental. Whether it's a
            furnished or unfurnished house, apartment, townhome, or student flat —
            Match-Ups makes it easy to find the right living partner.
         </p>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="col-span-1">
          <h2 className="text-[26px] font-bold font-ubuntu text-black mb-4 text-left sm:text-center md:text-left">
            Here's Why RoomMatch is the Best Site to Find a Roommate!
         </h2>
         <p className="text-[16px] text-gray-700 font-nunito leading-relaxed text-left sm:text-center md:text-left">
           Unlike other roommate finders, our compatibility quiz digs deeper into
            your lifestyle and habits — the questions you wish you'd asked before
           moving in. We use your answers to match you with your ideal roommate.
           </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="order-2 md:order-1">
            <h2 className="text-[26px] font-bold font-ubuntu text-black mb-4 text-left sm:text-center md:text-left">
             Here's Why RoomMatch is the Best Site to Find a Room for Rent!
           </h2>
           <p className="text-[16px] text-gray-700 font-nunito leading-relaxed text-left sm:text-center md:text-left">
            RoomMatch goes a step further by asking essential questions like
            whether or not vaping, marijuana, alcohol, or guns are allowed. At
            RoomMatch, we think the living expectations of the roommates who
            live there are just as important as the place itself. You should
            know your potential roommate's house rules, habits, and lifestyle
            before you rent your room and move in.
          </p>
          <img
            src="https://roommatch.com/assets/home/images/mix-girl-friends.png"
            alt="Connecting via RoomMatch"
            className="mt-6 w-full max-w-md mx-auto md:mx-0 md:w-[90%] object-contain"
          />
        </div>
        <div className="order-2 md:order-2 hidden md:flex justify-center">
          <img
            src="https://roommatch.com/assets/home/images/rm-connecting-phone.png"
            alt="Roommates bonding"
            className="w-[80%] max-w-md object-cover"
          />
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center px-6 py-12 text-center bg-white md:px-16 lg:px-24">
  <h2 className="font-[Ubuntu] text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
    Live and engage with like-minded roommates who share your lifestyle.
  </h2>

  <h3 className="text-xl md:text-2xl text-gray-700 font-medium mb-3">
    About RoomMatch
  </h3>

  <p className="text-gray-600 text-base md:text-lg leading-relaxed  mb-8">
    Whether you're searching for a room to rent or have one available, RoomMatch simplifies the roommate search experience. With our compatibility quiz and smart filtering system, you’ll quickly discover the most suitable matches. Enjoy a safer, faster, and easier way to find the right roommate and the perfect place to live.
  </p>

  <div className="flex justify-center">
    <JoinNow />
  </div>
</div>
      <Footer />
</div>
  );
}