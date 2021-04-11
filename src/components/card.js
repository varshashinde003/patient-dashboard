const Card = ({
  title,
  selectedOption,
  showOptions,
  optionsVisible,
  handleOptionSelection,
  children,
}) => (
  <div className="card">
    <div className="card-body">
      <p className="card-title mb-2">
        {title}
        {selectedOption ? (
          <span className="float-right default-option" onClick={showOptions}>
            {selectedOption} <i className="fa fa-chevron-down" />
            {optionsVisible ? (
              <ul className="chart-filter-options-list" onClick={handleOptionSelection}>
                <li data-action="Week">Week</li>
                <li data-action="Month">Month</li>
                <li data-action="Year">Year</li>
              </ul>
            ) : null}
          </span>
        ) : null}
      </p>
      {children}
    </div>
  </div>
);

export default Card;
