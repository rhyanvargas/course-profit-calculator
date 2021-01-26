import "./App.css";
// import ProfitTable from "./ProfitTable";
// import ProfitTableContainer from "./ProfitTableContainer";
// import CourseDetails from "./CourseDetails";

function ProfitTableContainer() {
  return (
    <header className="center">
      <h1> COURSE PROFIT CALCULATOR</h1>
    </header>
  );
}

const MOCK_DATA = [
  { numUsers: 1, grossProfit: -3600, revPerUser: -3600 },
  { numUsers: 10, grossProfit: 0, revPerUser: 0 },
  { numUsers: 15, grossProfit: 2000, revPerUser: 133 },
  { numUsers: 20, grossProfit: 4000, revPerUser: 200 },
];

function CourseDetails() {
  const courseDetails = (
    <section>
      <div className="container inputs-container flex center">
        <div className="input-wrapper">
          <label>Cost to create course:</label>
          <span>$</span>
          <input type="number" placeholder="0" />
        </div>
        <div className="input-wrapper">
          <label>Revenue per student:</label>
          <span>$</span>
          <input type="number" placeholder="0" />
        </div>
      </div>
    </section>
  );

  return <>{courseDetails}</>;
}

function ProfitTable() {
  const renderTable = () => {
    return MOCK_DATA.map((row, index) => {
      const { numUsers, grossProfit, revPerUser } = row;
      return (
        <div key={index} className="row flex between">
          <div className="cell">{numUsers}</div>
          <div className="cell">{grossProfit}</div>
          <div className="cell">{revPerUser}</div>
        </div>
      );
    });
  };

  return (
    <section>
      <div className="container">
        <div className="table-header-wrapper flex between ">
          <div className="cell"># of Users</div>
          <div className="cell">Gross Profit</div>
          <div className="cell">Revenue per User</div>
        </div>
        <div className="table-data-wrapper flex between ">{renderTable()}</div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <ProfitTableContainer />
      <CourseDetails />
      <ProfitTable />
    </>
  );
}

export default App;
