const Star = (props) => {
  const { ratings } = props || 0;
  return (
    <div className="star">
      <span>
        <i
          className={
            ratings >= 1
              ? 'fa fa-star text-yellow-400'
              : ratings >= 0.5
              ? 'fa fa-star-half-o text-yellow-400'
              : 'fa fa-star-o text-yellow-400'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            ratings >= 2
              ? 'fa fa-star text-yellow-400'
              : ratings >= 1.5
              ? 'fa fa-star-half-o text-yellow-400'
              : 'fa fa-star-o text-yellow-400'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            ratings >= 3
              ? 'fa fa-star text-yellow-400'
              : ratings >= 2.5
              ? 'fa fa-star-half-o text-yellow-400'
              : 'fa fa-star-o text-yellow-400'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            ratings >= 4
              ? 'fa fa-star text-yellow-400'
              : ratings >= 3.5
              ? 'fa fa-star-half-o text-yellow-400'
              : 'fa fa-star-o text-yellow-400'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            ratings >= 5
              ? 'fa fa-star text-yellow-400'
              : ratings >= 4.5
              ? 'fa fa-star-half-o text-yellow-400'
              : 'fa fa-star-o text-yellow-400'
          }
        ></i>
      </span>
    </div>
  );
};

export default Star;
