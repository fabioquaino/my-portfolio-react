import { FaLinkedin, FaDownload, FaSearch } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import ResumePdf from "../assets/Fabio_Quaino_Resume.pdf";
import { Link } from "react-router-dom";
import aws_ccp from "../assets/badges/aws-ccp.png";
import aws_ia from "../assets/badges/aws-ia.png";

export default function Resume() {
  return (
    <div className="w-full p-5 md:p-10 lg:py-16 lg:px-40">
      <div className="p-5 md:p-10 bg-slate-900 rounded-2xl shadow-md shadow-slate-900">
        <h1 className="text-4xl font-bold text-slate-400 text-left">
          My Resume
        </h1>
        <hr className="h-0.1 bg-slate-600 w-full mt-6 mb-4 opacity-20" />

        <div className="flex gap-4 py-2 flex-col sm:flex-row font-semibold">
          <Link
            className="flex gap-2 items-center justify-center p-2 bg-orange-500 rounded-md hover:bg-slate-900 hover:text-orange-500 border-2 border-transparent hover:border-orange-500 transition-colors"
            to={ResumePdf}
            //download='Fabio_Quaino_Resume.pdf'
            target="_blank"
          >
            <FaFilePdf />
            Resume as PDF
          </Link>
          <Link
            className="flex gap-2 items-center justify-center p-2 bg-orange-500 rounded-md hover:bg-slate-900 hover:text-orange-500 border-2 border-transparent hover:border-orange-500 transition-colors"
            to="https://www.linkedin.com/in/fabioquaino"
            target="_blank"
          >
            <FaLinkedin />
            Linkedin Profile
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row mt-6 gap-8">
          <div className="2xl:text-justify">
            <h2 className="text-3xl font-bold text-slate-400 text-left">
              Experience
            </h2>
            <hr className="h-0.1 bg-slate-600 w-full my-3 opacity-20" />
            <div className="flex flex-col gap-1 text-lg text-slate-500  font-semibold mb-6">
              <h3 className="text-2xl text-orange-500 font-bold">
                ETL Developer
              </h3>
              <Link
                className="text-xl text-slate-400 font-bold hover:text-slate-500 transition-colors"
                to="https://www.charlestaylor.com/"
                target="_blank"
              >
                {" "}
                Charles Taylor InsureTech
              </Link>
              <h4 className="text-base font-bold text-slate-700">
                06/2024 - Present
              </h4>
              <p>Worked on managing ETLs for a banking institution.</p>
              <ul className="list-disc pl-6">
                <li>
                  Developed ETLs for processing data from files, databases, and
                  web services.
                </li>
                <li>
                  Orchestrated ETLs and processes to execute when needed..
                </li>
                <li>
                  Created Bash and KSH scripts for managing directories,
                  permissions and tasks.
                </li>
                <li>
                  Automated monitoring of ETL performance and sent reports by
                  email.
                </li>
                <li>Developed SOAP web services.</li>
                <li>Developed management dashboards.</li>
                <li>Managed change control in ETL workflows.</li>
                <li>
                  Developed AI-based solutions, including a chatbot and a data
                  quality analysis process.
                </li>
                <li>
                  Improved data pipelines’ efficiency and reliability through
                  optimization and validation.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-1 text-lg text-slate-500  font-semibold mb-6">
              <h3 className="text-2xl text-orange-500 font-bold">
                Data Engineer
              </h3>
              <Link
                className="text-xl text-slate-400 font-bold hover:text-slate-500 transition-colors"
                to="https://www.holon.com.ar/"
                target="_blank"
              >
                Holon Software
              </Link>
              <h4 className="text-base font-bold text-slate-700">
                09/2022 - 06/2024
              </h4>
              <p>
                Worked in the interoperability department on projects related to
                public administration.
              </p>
              <ul className="list-disc pl-6">
                <li>Developed microservices SOAP and REST.</li>
                <li>Created and orchestrated ETL processes.</li>
                <li>Managed databases (MySQL and Oracle).</li>
                <li>Integrated applications.</li>
                <li>Implemented IoT device integration.</li>
                <li>Developed management dashboards.</li>
                <li>Designed business processes (BPM).</li>
                <li>Developed basic machine learning models.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-1 text-lg text-slate-500 font-semibold">
              <h3 className="text-2xl text-orange-500 font-bold">
                University tutor
              </h3>
              <Link
                className="text-xl text-slate-400 font-bold hover:text-slate-500 transition-colors"
                to="https://www.frvm.utn.edu.ar/"
                target="_blank"
              >
                Universidad Tecnológica Nacional FRVM
              </Link>
              <h4 className="text-base font-bold text-slate-700">
                09/2021 - 03/2022
              </h4>
              <p>
                Provided virtual tutoring sessions for incoming students in
                Mathematics and Physics.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-400 text-left">
              Achievements
            </h2>
            <hr className="h-0.1 bg-slate-600 w-full my-3 opacity-20" />
            <div className="flex flex-col gap-4">
              <div className="flex flex-col text-lg text-slate-500 font-semibold">
                <h3 className="text-xl text-orange-500 font-bold flex gap-2 items-center">
                  Co-Author of the paper 'ETL in Geospatial Data Management' -
                  2024
                  <Link
                    to="https://opendata.fi.uncoma.edu.ar/jornadasIDERA/archivos/SalinasEtAl.pdf"
                    target="_blank"
                    className="text-base text-slate-400 hover:text-slate-500 transition-colors"
                  >
                    <FaSearch />
                  </Link>
                </h3>
                <p>
                  Co-author of the short paper presented at the XVIII IDERA
                  Conference.
                </p>
              </div>
              <div className="flex flex-col text-lg text-slate-500 font-semibold">
                <h3 className="text-xl text-orange-500 font-bold flex gap-2 items-center">
                  Ing. Isidoro Marín Award - 2023
                  <Link
                    to="https://acading.org.ar/premio-ing-isidoro-marin-a-los-mejores-egresados-de-carreras-de-ingenieria-de-universidades-argentinas/"
                    target="_blank"
                    className="text-base text-slate-400 hover:text-slate-500 transition-colors"
                  >
                    <FaSearch />
                  </Link>
                </h3>
                <p>
                  National recognition for academic dedication from the National
                  Academy of Engineering.
                </p>
              </div>
              <div className="flex flex-col  text-lg text-slate-500 font-semibold">
                <h3 className="text-xl text-orange-500 font-bold">
                  Highest GPA in Systems Engineering - 2023
                </h3>
                <p>
                  Award for top academic performance in Systems Engineering from
                  the College of Specialized Engineers of Córdoba.
                </p>
              </div>
              <div className="flex flex-col text-lg text-slate-500 font-semibold">
                <h3 className="text-xl text-orange-500 font-bold">
                  UTN Flag Bearer - 2021
                </h3>
                <p>
                  Honored as the flag bearer during university ceremonies at
                  UTN.
                </p>
              </div>
              <div className="flex flex-col text-lg text-slate-500 font-semibold">
                <h3 className="text-xl text-orange-500 font-bold">
                  Academic Excellence Recognition at UTN - 2021
                </h3>
                <p>
                  Recognized for academic excellence, ranking in the top 3
                  students in the career.
                </p>
              </div>
            </div>
            <br />
            <h2 className="text-3xl font-bold text-slate-400 text-left">
              Certification Badges
            </h2>
            <hr className="h-px bg-gray-700 w-full my-3 opacity-20" />
            <div className="inline-block bg-slate-800/40 p-4 rounded-2xl shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center">
                <div className="bg-slate-700/30 p-3 rounded-xl flex items-center justify-center">
                  <img
                    src={aws_ccp}
                    alt="AWS CCP"
                    className="object-contain opacity-90 select-none max-w-32"
                  />
                </div>
                <div className="bg-slate-700/30 p-3 rounded-xl flex items-center justify-center">
                  <img
                    src={aws_ia}
                    alt="AWS IA"
                    className="object-contain opacity-90 select-none max-w-32"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-400 text-left">
              Education
            </h2>
            <hr className="h-0.1 bg-slate-600 w-full my-3 opacity-20" />
            <div className="flex flex-col gap-1 text-lg text-slate-500  font-semibold mb-4">
              <h3 className="text-2xl text-orange-500 font-bold">
                {" "}
                Diplomacy in Data Science and Machine Learning
              </h3>
              <Link
                className="text-xl text-slate-400 font-bold hover:text-slate-500 transition-colors"
                to="https://www.unc.edu.ar/"
                target="_blank"
              >
                Universidad Nacional de Córdoba{" "}
              </Link>
              <h4 className="text-base font-bold text-slate-700">
                03/2024 - 11/2024
              </h4>
            </div>
            <div className="flex flex-col gap-1 text-lg text-slate-500  font-semibold mb-4">
              <h3 className="text-2xl text-orange-500 font-bold">
                Systems Information Engineering
              </h3>
              <Link
                className="text-xl text-slate-400 font-bold hover:text-slate-500 transition-colors"
                to="https://www.frvm.utn.edu.ar/"
                target="_blank"
              >
                Universidad Tecnológica Nacional FRVM
              </Link>
              <h4 className="text-base font-bold text-slate-700">
                03/2018 - 03/2023
              </h4>
            </div>
            <div className="flex flex-col gap-1 text-lg text-slate-500  font-semibold">
              <h3 className="text-2xl text-orange-500 font-bold">
                Bachelor's Degree in Computer Science
              </h3>
              <Link
                className="text-xl text-slate-400 font-bold hover:text-slate-500 transition-colors"
                to="https://santisimatrinidadvm.edu.ar/nivel-secundario"
                target="_blank"
              >
                Instituto La Santísima Trinidad
              </Link>
              <h4 className="text-base font-bold text-slate-700">
                02/2012 - 11/2017
              </h4>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-400 text-left">
              Languages
            </h2>
            <hr className="h-0.1 bg-slate-600 w-full my-3 opacity-20" />
            <div className="text-slate-500 font-semibold mb-4">
              <div className="block sm:flex items-center align-middle w-52 justify-between">
                <h3 className="text-2xl text-orange-500 font-bold">Spanish</h3>
                <div className="flex gap-1 mt-1">
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                </div>
              </div>
              <p className="text-xl text-slate-400 font-bold">Native</p>
            </div>
            <div className="text-slate-500  font-semibold mb-4">
              <div className="block sm:flex items-center align-middle w-52 justify-between">
                <h3 className="text-2xl text-orange-500 font-bold">English</h3>
                <div className="flex gap-1 mt-1">
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-slate-700 rounded-full"></div>
                  <div className="w-4 h-4 bg-slate-700 rounded-full"></div>
                </div>
              </div>
              <p className="text-xl text-slate-400 font-bold">
                Intermediate B2
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
