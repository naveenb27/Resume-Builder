import { useState } from 'react';
import profile from '../assets/profile.webp';

const Dashboard = () => {
  const user = {
    name: 'Naveen',
    destination: 'Software Engineer',
    education: [
      {
        institute: 'Knowledge Institute of Technology',
        skill: 'Good at Coding',
        cgpa: '8/10',
      },
      {
        institute: 'St. Paul’s Higher Secondary School',
        skill: 'Good at Football',
        cgpa: '8/10',
      },
    ],
    skills: ['Java', 'Python', 'REACT', 'Express'],
  };

  const [userDetail, setUserDetail] = useState(true);
  const [experience, setExperience] = useState(true);
  const [education, setEducation] = useState(true);
  const [skills, setSkills] = useState(true);
  const [certification, setCertification] = useState(true);
  const [projects, setProjects] = useState(true);
  const [awards, setAwards] = useState(true);

  const userDetailHandler = () => {
    setfalse();
    console.log(userDetail);
    setUserDetail((u) => !u);
  };

  const experienceHandler = () => {
    setfalse();
    setExperience((u) => !u);
  };

  const educationHandler = () => {
    setfalse();
    setEducation((u) => !u);
  };

  const skillsHandler = () => {
    setfalse();
    setSkills((u) => !u);
  };

  const certificationHandler = () => {
    setfalse();
    setCertification((u) => !u);
  };

  const projectsHandler = () => {
    setfalse();
    setProjects((u) => !u);
  };

  const awardsHandler = () => {
    setfalse();
    setAwards((u) => !u);
  };

  const setTrue = () => {
    setUserDetail(true);
    setExperience(true);
    setEducation(true);
    setSkills(true);
    setCertification(true);
    setProjects(true);
    setAwards(true);
  };

  const handler = [
    userDetailHandler,
    experienceHandler,
    educationHandler,
    skillsHandler,
    certificationHandler,
    projectsHandler,
    awardsHandler,
    setTrue,
  ];

  const setfalse = () => {
    setUserDetail(false);
    setExperience(false);
    setEducation(false);
    setSkills(false);
    setCertification(false);
    setProjects(false);
    setAwards(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <div className="container-dashboard flex m-4 gap-6">
        <div className="navigation py-6 px-6 rounded-lg flex flex-col gap-6 items-center bg-blue-700 text-white shadow-lg">
          <div className="profile flex flex-col items-center">
            <img
              src={profile}
              alt="Profile"
              width={'150px'}
              className="rounded-full border-2 border-blue-800 shadow-md"
            />
            <h2 className="mt-2 text-lg font-bold">{user.name}</h2>
            <p className="text-sm">{user.destination}</p>
          </div>
          {[
            'User Details',
            'Experience',
            'Education',
            'Skills',
            'Certifications',
            'Projects',
            'Awards',
            'All details',
          ].map((item, idx) => (
            <div
              key={idx}
              className="dash-nav w-[180px] text-center bg-blue-600 text-[#fff] hover:bg-blue-500 border border-solid border-[#ccc] px-4 py-2 rounded-2xl shadow-lg cursor-pointer transition duration-300"
              onClick={handler[idx]}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="w-[90%] h-[100vh] overflow-y-scroll bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className={userDetail ? '' : 'hidden'}>
            <h1 className="text-[32px] pl-6 pt-4 text-blue-800 font-semibold">
              USER DETAILS
            </h1>
            <div className="pl-6 user-details border border-gray-200 bg-gray-50 px-4 py-4 rounded-lg flex items-center justify-between mx-6 my-4 shadow-sm">
              <div>
                <p className="text-[21px] font-bold">{user.name}</p>
                <p className="text-gray-600">{user.destination}</p>
              </div>
              <div className="edit-option text-blue-600 hover:text-blue-800 cursor-pointer">
                <span className="material-symbols-outlined">edit</span>
              </div>
            </div>
          </div>

          <div className={experience ? '' : 'hidden'}>
            <h1 className="text-[32px] pl-6 pt-4 text-blue-800 font-semibold">
              EXPERIENCE
            </h1>
            {user.education.map((obj, idx) => (
              <div
                key={idx}
                className="pl-6 user-details border border-gray-200 bg-gray-50 px-4 py-4 rounded-lg flex items-center justify-between mx-6 my-4 shadow-sm"
              >
                <div>
                  <p className="text-[21px] font-bold border-b border-gray-300 pb-2">
                    {obj.institute}
                  </p>
                  <p>
                    <span className="font-semibold">Skills:</span>{' '}
                    {obj.skill || 'Nothing'}
                  </p>
                  <p>
                    <span className="font-semibold">CGPA/Percentage:</span>{' '}
                    {obj.cgpa}
                  </p>
                </div>
                <div className="edit-option text-blue-600 hover:text-blue-800 cursor-pointer">
                  <span className="material-symbols-outlined">edit</span>
                </div>
              </div>
            ))}
          </div>

          <div className={education ? '' : 'hidden'}>
            <h1 className="text-[32px] pl-6 pt-4 text-blue-800 font-semibold">
              EDUCATION
            </h1>
            {user.education.map((obj, idx) => (
              <div
                key={idx}
                className="pl-6 user-details border border-gray-200 bg-gray-50 px-4 py-4 rounded-lg flex items-center justify-between mx-6 my-4 shadow-sm"
              >
                <div>
                  <p className="text-[21px] font-bold border-b border-gray-300 pb-2">
                    {obj.institute}
                  </p>
                  <p>
                    <span className="font-semibold">Skills:</span>{' '}
                    {obj.skill || 'Nothing'}
                  </p>
                  <p>
                    <span className="font-semibold">CGPA/Percentage:</span>{' '}
                    {obj.cgpa}
                  </p>
                </div>
                <div className="edit-option text-blue-600 hover:text-blue-800 cursor-pointer">
                  <span className="material-symbols-outlined">edit</span>
                </div>
              </div>
            ))}
          </div>

          <div className={skills ? '' : 'hidden'}>
            <h1 className="text-[32px] pl-6 pt-4 text-blue-800 font-semibold">
              SKILLS
            </h1>
            <div className="pl-6 user-details border border-gray-200 bg-gray-50 px-4 py-4 rounded-lg flex items-center justify-between mx-6 my-4 shadow-sm">
              <div className="skills-li flex flex-wrap gap-2">
                {user.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium shadow"
                  >
                    {skill}
                  </div>
                ))}
              </div>
              <div className="edit-option text-blue-600 hover:text-blue-800 cursor-pointer">
                <span className="material-symbols-outlined">edit</span>
              </div>
            </div>
          </div>

          <div className={certification ? '' : 'hidden'}>
            <h1 className="text-[32px] pl-6 pt-4 text-blue-800 font-semibold">
              CERTIFICATION
            </h1>
            {user.education.map((obj, idx) => (
              <div
                key={idx}
                className="pl-6 user-details border border-gray-200 bg-gray-50 px-4 py-4 rounded-lg flex items-center justify-between mx-6 my-4 shadow-sm"
              >
                <div>
                  <p className="text-[21px] font-bold border-b border-gray-300 pb-2">
                    {obj.institute}
                  </p>
                  <p>
                    <span className="font-semibold">Issuer:</span>{' '}
                    {obj.skill || 'Nothing'}
                  </p>
                </div>
                <div className="edit-option text-blue-600 hover:text-blue-800 cursor-pointer">
                  <span className="material-symbols-outlined">edit</span>
                </div>
              </div>
            ))}
          </div>

          <div className={projects ? '' : 'hidden'}>
            <h1 className="text-[32px] pl-6 pt-4 text-blue-800 font-semibold">
              EXPERIENCE
            </h1>
            {user.education.map((obj, idx) => (
              <div
                key={idx}
                className="pl-6 user-details border border-gray-200 bg-gray-50 px-4 py-4 rounded-lg flex items-center justify-between mx-6 my-4 shadow-sm"
              >
                <div>
                  <p className="text-[21px] font-bold border-b border-gray-300 pb-2">
                    {obj.institute}
                  </p>
                  <p>
                    <span className="font-semibold">Description:</span>{' '}
                    {
                      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime amet accusantium corporis veritatis tenetur incidunt beatae praesentium minus corrupti exercitationem cum voluptatum minima facilis, quae iure possimus. Molestiae autem animi omnis hic voluptatum culpa asperiores consequuntur dolore repellat, reiciendis magni odit? Eius accusamus error suscipit eveniet repudiandae accusantium ipsum molestiae.'
                    }
                  </p>
                  <p>
                    <span className="font-semibold">Skills:</span> {obj.skill}
                  </p>
                </div>
                <div className="edit-option text-blue-600 hover:text-blue-800 cursor-pointer">
                  <span className="material-symbols-outlined">edit</span>
                </div>
              </div>
            ))}
          </div>

          <div className={awards ? '' : 'hidden'}>
            <h1 className="text-[32px] pl-6 pt-4 text-blue-800 font-semibold">
              Awards
            </h1>
            {user.education.map((obj, idx) => (
              <div
                key={idx}
                className="pl-6 user-details border border-gray-200 bg-gray-50 px-4 py-4 rounded-lg flex items-center justify-between mx-6 my-4 shadow-sm"
              >
                <div>
                  <p className="text-[21px] font-bold border-b border-gray-300 pb-2">
                    {obj.institute}
                  </p>
                  <p>
                    <span className="font-semibold">Issuer:</span>{' '}
                    {obj.skill || 'Nothing'}
                  </p>
                </div>
                <div className="edit-option text-blue-600 hover:text-blue-800 cursor-pointer">
                  <span className="material-symbols-outlined">edit</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
