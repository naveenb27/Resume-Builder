import Star from '../Star';

const Testimonal = () => {
  const userFeedback = [
    {
      username: 'Naveen B',
      ratings: 4.5,
      date: '12/11/24',
      feedback:
        'Good resume with great ATS score. Needed improvement in editing area and dashboard',
    },
    {
      username: 'Chandru T',
      ratings: 4,
      date: '21/11/24',
      feedback:
        'This website is just awesome. you can create ATS friendly resumes for free',
    },
    {
      username: 'Himanchu S',
      ratings: 3,
      date: '2/12/24',
      feedback:
        'This website is just awesome. you can create ATS friendly resumes for free',
    },
    {
      username: 'Ajay Thakur',
      date: '5/11/24',
      ratings: 1,
      feedback: 'Poor quality. need a lot of improvement',
    },
    {
      username: 'Ajay Thakur',
      date: '5/11/24',
      ratings: 1,
      feedback: 'Poor quality. need a lot of improvement',
    },
  ];

  return (
    <div className="testimonals py-10 ">
      <h1 className="text-center text-blue-800 font-extrabold font-4xl text-[41px]">
        Validated insights from the community
      </h1>

      <div className="testimonal-container justify-center overflow-hidden py-16 flex max-w-[1140px] gap-4 m-auto  pb-20">
        {userFeedback.map((obj, idx) => (
          <div
            className="testimonal-container py-2 px-4 w-[250px] flex flex-col gap-4"
            key={idx}
          >
            <h1 className="font-bold text-[24px]  text-blue-600 ">{obj.username}</h1>
            {/* <p>{obj.date}</p> */}
            <p>{obj.feedback}</p>
            <Star ratings={obj.ratings}></Star>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonal;
