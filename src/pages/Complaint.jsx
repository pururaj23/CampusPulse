import { useState } from "react";
import Navbar from "../components/Navbar";

const categories = [
  "Electricity",
  "Water",
  "Internet",
  "AC",
  "Furniture",
  "Cleaning",
  "Safety",
  "Other"
];

const buildings = [
  "CSIT Building",
  "ME Block",
  "Administrative Block"
];

function Complaint() {
  const [form, setForm] = useState({
    category: "",
    building: "",
    room: "",
    description: ""
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  function resetForm() {
    setForm({
      category: "",
      building: "",
      room: "",
      description: ""
    });

    setSubmitted(false);
  }

  if (submitted) {
    return (
      <>
        <Navbar />

        <main className="success-page">
          <div className="success-card">
            <div className="success-icon">✓</div>

            <span className="eyebrow">SUCCESS</span>

            <h1>Complaint Submitted!</h1>

            <p>
              Your complaint has been successfully
              recorded for staff review.
            </p>

            <div className="ticket">
              <span>Ticket Number</span>
              <strong>CP-1048</strong>
              <small>AI analysis started</small>
            </div>

            <button
              className="primary-button"
              onClick={resetForm}
            >
              Report Another Issue
            </button>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="page">
        <div className="container">

          <section className="page-heading">
            <span className="eyebrow">
              FACULTY COMPLAINTS
            </span>

            <h1>Report an Issue</h1>

            <p>
              Tell us what needs attention.
            </p>
          </section>

          <form
            className="complaint-layout"
            onSubmit={handleSubmit}
          >

            <div className="card form-card">

              {/* Category */}
              <div className="form-section">
                <div className="step">01</div>

                <div>
                  <h2>What is the problem?</h2>
                  <p>Select a category.</p>

                  <div className="choice-grid">
                    {categories.map((category) => (
                      <button
                        type="button"
                        key={category}
                        className={
                          form.category === category
                            ? "choice selected"
                            : "choice"
                        }
                        onClick={() =>
                          setForm({
                            ...form,
                            category: category
                          })
                        }
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="form-section">
                <div className="step">02</div>

                <div className="form-fields">
                  <h2>Where is it?</h2>
                  <p>Enter the location of the issue.</p>

                  <label>
                    Building

                    <select
                      name="building"
                      value={form.building}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select building
                      </option>

                      {buildings.map((building) => (
                        <option
                          key={building}
                          value={building}
                        >
                          {building}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label>
                    Room / Floor

                    <input
                      name="room"
                      value={form.room}
                      onChange={handleChange}
                      placeholder="Example: Lab 3, 2nd Floor"
                      required
                    />
                  </label>
                </div>
              </div>

              {/* Description */}
              <div className="form-section">
                <div className="step">03</div>

                <div className="form-fields">
                  <h2>Describe the issue</h2>

                  <p>
                    Explain what happened.
                  </p>

                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Example: The AC has stopped cooling..."
                    required
                  />
                </div>
              </div>

              {/* Photo */}
              <div className="form-section">
                <div className="step">04</div>

                <div>
                  <h2>
                    Add a photo
                    <small> optional</small>
                  </h2>

                  <p>
                    Add a photo if it helps explain the issue.
                  </p>

                  <input
                    type="file"
                    accept="image/*"
                  />
                </div>
              </div>

              <button
                className="primary-button submit-button"
                type="submit"
              >
                Submit Complaint →
              </button>

            </div>

            {/* Tips */}
            <aside className="card tips-card">
              <span className="eyebrow">
                QUICK GUIDE
              </span>

              <h2>
                Better reports get faster resolutions.
              </h2>

              <ul>
                <li>Select the correct category.</li>
                <li>Mention the exact location.</li>
                <li>Explain the problem clearly.</li>
                <li>Add a photo if useful.</li>
              </ul>
            </aside>

          </form>
        </div>
      </main>
    </>
  );
}

export default Complaint;