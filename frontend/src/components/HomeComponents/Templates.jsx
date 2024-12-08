import resume from '../../assets/resume-logo.png';

const Templates = () => {
  const resumeTem = [
    { name: 'ATS friendly' },
    { name: 'Modern and stylish' },
    { name: 'Zoho resume' },
    { name: 'Google shortlisted resume' },
    { name: 'Simple resume' },
    { name: 'Aesthetic resume' },
  ];

  return (
    <div className="template py-24 bg-gray-50">
      <h1 className="text-center font-extrabold text-4xl text-blue-800 mb-10">
        Professional, Modern, & ATS-friendly Templates
      </h1>

      <div className="template-container flex flex-wrap justify-center gap-8 max-w-screen-xl mx-auto">
        {resumeTem.map((obj, idx) => (
          <div
            className="temp w-full sm:w-80 md:w-96 lg:w-72 bg-white shadow-lg rounded-lg cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl"
            key={idx}
          >
            <img
              src={resume}
              className="h-[250px] w-full object-cover rounded-t-lg"
              alt="resume"
            />
            <p className="text-center text-blue-600 text-lg font-semibold py-4 hover:text-blue-800 transition-colors">
              {obj.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
