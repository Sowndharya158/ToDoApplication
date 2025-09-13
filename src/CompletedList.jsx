export default function CompletedList({ completedList }) {
  return (
    <>
      <div class="box">
        <h2 style={{ textAlign: "center" }}>Completed List</h2>
        {completedList.length === 0 ? (
          <div className="empty">
            <img
              src="/list-empty.png"
              alt="empty"
              width="50%"
              height="50%"
            />
            <h3>
              <span style={{ fontWeight: "600" }}>
                There's Nothing to Show!
              </span>
              <br />
              Your Completed List is Empty
            </h3>
          </div>
        ) : (
          <div>
            <ul>
              {completedList.map((item, index) => {
                return (
                  <li
                    index={index}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      fontSize: "1.2rem",
                    }}
                  >
                    <h4 style={{ fontWeight: "600" }}>{item.todo}</h4>
                    <h4>Completed At : {item.timestamp}</h4>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
