const Skill = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Skills</h3>
      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Programming /Scripting Languages</h3>
              <p className="description">
                Java, Python, C#, ASP.net, JavaScript, C++
              </p>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">
                Machine/Deep Learning/Data Science
              </h3>
              <p className="description">
                TensorFlow, NLP, SPacy, NLTK, Pytorch, Word embedding, RNN, LSTM
              </p>
            </div>
          </div>
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Cloud Platforms</h3>
              <p className="description">
                Google Cloud Platform, Microsoft Azure, Google Firebase, Amazon
                WebServices
              </p>
            </div>
          </div>
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Collaboration</h3>
              <p className="description">
                Git, GitHub, GitLab, VS Team Services
              </p>
            </div>
          </div>
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Databases</h3>
              <p className="description">SQL Server, MySQL,</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
