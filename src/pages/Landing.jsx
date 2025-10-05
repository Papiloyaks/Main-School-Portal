import React from 'react'
import 'animate.css';
import indians from '../Images/indians.jpg'
import Div from '../components/Div'
import fully from '../Images/fully.jpg'
import teens from '../Images/teens.jpg'
import kid from '../Images/kid.jpg'
import Black from '../Images/Black.jpg'
import Raising from '../Images/Raising.jpg'
import news2 from '../Images/news2.jpg'

const Landing = () => {
    let myFont = {
        fontFamily: 'Quicksand'  
      }

    let myBg = {
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.2)),
        url(${fully})`,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backgroundRepeat: 'no-repeat',
        height: '80vh',
        backgroundSize: 'cover',
        // padding: '100px'
    }
    let newStyle = {
        backgroundColor: "#f9eee4"
    }

  return (
    <>
        <div className='border border-2 bg-cyan-800'>
            <section style={myBg}>
                <div className='pt-20 ps-10'>
                    <h1 style={myFont} className='text-cyan-800 font-bold ms-6 mt-4 text-6xl lg:w-1/2 sm:w-px'>The New Way To Learn Properly Is With Us</h1>
                    <button className='bg-cyan-800 py-2 text-white my-4 ms-6 mt-4 px-4 rounded'>Get Started</button>
                </div>
            </section>
            <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 lg:my-16'>
                <div className='m-3'>
                    <img className='rounded-lg' src={indians} alt="" />
                </div>
                <div className='m-7'>
                   <h1 style={myFont}  className='text-6xl text-white lg:mt-9 font-bold text-center'>Education is the passport to the future, for tomorrow belongs to those who prepare for it today.</h1>
                </div>
            </section>
            <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
                <Div name='Wonders of Education' title='Education is a journey of enlightenment, a path paved with countless benefits that enrich our lives in remarkable ways. Beyond the confines of classrooms and lecture halls, it is a force that shapes individuals and society, fostering growth, progress, and understanding.' title2='At its core, education is empowerment. It equips individuals with the knowledge and skills needed to navigate lifes complexities. It empowers us to make informed decisions, enabling us to take charge of our destinies. Education is the key that unlocks doors to opportunities we might never have imagined.' title3='One of educations most awe-inspiring features is its capacity to foster innovation. From scientific breakthroughs to technological marvels, education fuels progress. It encourages the curious to ask Why? and the bold to ponder What if? The results are inventions, discoveries, and solutions that transform the world.' style='bg-white rounded-md text-dark text-justify'/>
                <Div name='Wonders of Education cont.' title='Technological advancements continually enhance the educational experience. Digital tools and online resources have made education more accessible and engaging than ever before, opening up new avenues for learning.' title2='Education is not confined to institutions; it also plays a role in community building. Schools and universities often serve as hubs, fostering social connections and a sense of belonging. They create communities that support and inspire one another.' title3='Perhaps one of the most remarkable aspects of education is that it is a lifelong pursuit. It encourages us to embrace the joy of learning and continually seek new knowledge and experiences. Education reminds us that our journey of discovery never truly ends.' style='text-white border-2 rounded-md text-justify' mystyle={newStyle}/>
            </section>
            <section className='mx-4'>
                <div className='grid sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-1 xl:grid-cols-2 lg:my-16'>
                    <div className='mt-4'>
                        <h1 style={myFont} className='text-6xl text-white lg:mt-9 font-bold text-center'>
                        The more that you read, the more things you will know, the more that you learn, the more places you’ll go.” —Dr. Seuss
                        </h1>
                    </div>
                    <div className='mt-4'>
                        <img className='rounded' src={news2} alt="" />
                    </div>
                </div>
            </section>
            <section className='my-20 mx-4'>
             <div className='grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-12 gap-4'>
                <div className='bg-white shadow-md my-2 shadow-xl'>
                    <img src={teens}  alt=""/>
                    <h2 className='text-xl font-semibold mb-2'>Lorem, ipsum dolor.</h2>
                    <p className='text-grey-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ut? Dolorum maxime est cupiditate repellat.</p>
                </div>
                <div className='bg-white shadow-md my-2 shadow-xl'>
                    <img src={kid} alt="" />
                    <h2 className='text-xl font-semibold mb-2'>Lorem, ipsum dolor.</h2>
                    <p className='text-grey-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ut? Dolorum maxime est cupiditate repellat.</p>
                </div>
                <div className='bg-white shadow-md my-2 shadow-xl'>
                    <img src={Black}  alt="" />
                    <h2 className='text-xl font-semibold mb-2'>Lorem, ipsum dolor.</h2>
                    <p className='text-grey-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ut? Dolorum maxime est cupiditate repellat.</p>
                </div>
                <div className='bg-white shadow-md my-2 shadow-xl'>
                    <img src={Raising} alt="" />
                    <h2 className='text-xl font-semibold mb-2'>Lorem, ipsum dolor.</h2>
                    <p className='text-grey-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ut? Dolorum maxime est cupiditate repellat.</p>
                </div>
             </div>
            </section>
            <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
                    <Div name='Other Wonders of Education' title='Education, as the foundation of human development, is a journey of lifelong transformation that we embark upon from our earliest days and continue throughout our lives. It is a journey filled with awe-inspiring aspects that shape us as individuals and society as a whole.' title2='Innovation and Progress: At its essence, education is the engine that propels innovation and progress. It inspires us to question the status quo, pushing boundaries and sparking creativity. The discoveries and inventions that emerge from educated minds have the power to reshape industries, improve lives, and solve global issues.' title3='Cultural Connectivity: Education serves as a bridge between cultures, enabling us to connect with people from diverse backgrounds. It exposes us to different traditions, languages, and perspectives, promoting cross-cultural understanding. This intercultural exchange enriches our worldview and fosters a sense of unity in an increasingly interconnected world.' style='bg-black text-white border-2 rounded-md text-justify'/>
                    <Div name='Conclusion on Wonders of Education' title='Environmental stewardship is another remarkable facet of education. It inspires the next generation to protect and preserve our planet. It educates us about the consequences of our actions and empowers us to make environmentally conscious choices.' title2='Beyond its practical applications, education serves as a guardian of cultural heritage. It preserves traditions, languages, and historical knowledge, passing them down from one generation to the next. In doing so, it ensures the continuity of our rich tapestry of human history.' title3='In conclusion, education is a wondrous journey filled with countless marvels. It empowers, enlightens, and enriches our lives in ways that are both profound and enduring. It is a beacon of hope, a force for progress, and a testament to the limitless potential of the human mind.' style='text-white border-2 rounded-md text-justify'/>
        </section>
        </div>
    </>
  )
}


export default Landing