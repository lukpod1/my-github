import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

class ListRepos extends Component {
  state = {
    repos: []
  };

  componentDidMount() {
    fetch("https://api.github.com/users/lukpod1/repos")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({
          repos: data
        });
      });
  }

  render() {
    return (
      <div className="background">
        {this.state.repos.map(repo => (
          <div className="container" key={repo.id}>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{repo.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Language: {repo.language}
                    </h6>
                    <p className="card-text">{repo.description}</p>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      className="card-link"
                    >
                      View Repository
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ListRepos />, rootElement);
