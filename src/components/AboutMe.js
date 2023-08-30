
export default function AboutMe({ onOpenModal }) {
  return(
    <section id="about-me">
    <div className="my-12 pb-12 md:pt-16 md:pb-48">
      <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
        <div className="md:w-1/2 ">
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://i.imgur.com/MBT9Ka7.jpg" alt="biophoto" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
    <h1 className="text-center font-bold text-4xl font-lacquer">
        About Me
    </h1>
    <p className="text-info-700 mb-6 text-left">
        How's it going,   I'm Marvin, a dedicated full-stack web developer located in the greater San Francisco Bay Area of California. Having recently graduated from an Advanced Software Engineering Bootcamp, I possess a fervent drive for creating solutions that can have a positive impact on my local community and world at large.
        </p>
        <p className="text-info-700 mb-6 text-left">
        Before venturing into the world of coding, I enjoyed a successful career in telecommunications while also pursuing my creative passions as a writer and performing artist. These experiences have equipped me with the ability to foster meaningful connections, a skill I'm eager to leverage in my pursuit of collaborative projects that unite people. The prospect of designing solutions through code to address real-life challenges fills me with enthusiasm.  
        </p>
        <p className="text-info-700 mb-6 text-left">
        Currently, as a full-stack engineer, my determination to effect positive change in the world remains undiminished, and I am thrilled by the prospect of leveraging technology to bring about this transformation. 
        </p>
        
      <p><a
  href={require('./resume.pdf')} 
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary mt-5text-neutral-100 font-semibold px-6 py-3 bg-cyan-500 rounded shadow hover:bg-cyan-400"
>
Resume
</a>

      
<button onClick={onOpenModal} className="btn-primary mt-5 text-neutral-100 font-semibold px-6 py-3 bg-sky-500 rounded shadow hover:bg-sky-400 ml-5">Contact Me</button></p>
    </div>
  </div>
</div>






        </div>
      </div>
    </div>
  </section>
)
}