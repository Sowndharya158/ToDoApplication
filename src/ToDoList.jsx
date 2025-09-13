export default function ToDoList({ todo, handleCompletion }) {
  return (
    <>
      <div class="box">
        <h2 style={{ textAlign: "center" }}>ToDo List</h2>
        {todo.length === 0 ? (
          <div className="empty">
            <img
              src="./public/list-empty.png"
              alt="empty"
              width="50%"
              height="50%"
            />
            <h3>
              <span style={{ fontWeight: "600" }}>
                You dont have any items to show!
              </span>
              <br />
              Add an item to the list and it will show up here
            </h3>
          </div>
        ) : (
          <div>
            <ul>
              {todo.map((item, index) => {
                return (
                  <li
                    index={index}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      className="InputCheckbox"
                      onClick={() => handleCompletion(index)}
                    />
                    <h4>{item}</h4>
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
